import axios from "axios";
import {
  urlApi,
  urlStorage
} from "@/global";

export default {

  data: function () {
    return {
      dialog: false,
      pageApi: '',
      msgErrors: [],
      mode: "save",
      dataOfTable: {},
      registersOfTable: [],
      url: '',
      titleModal: 'ADICIONAR',
      titlePage: '',
      dateStart: "2010-01-01",
      dateFinish: "",
      /** register for pagination */
      page: 1,
      currentPage: 1,
      nextPage: 1,
      count: 0,
      limit: 0,
      paginate: 0,
      qtdRegisters: 0,
      /** pesquisa */
      searching: false,
      fieldSearch: "",
      fieldDtsSearch: "",
      fieldDtfSearch: "",
      storage: `${urlStorage}`,
      folderStorage: "",
    };
  },

  methods: {
    submitFS() {
      this.searching = true;
      this.fieldSearch = document.getElementById('fieldSF').value;
      this.page = 1;
      this.loadRegistersOfTable();
    },

    loadRegistersOfTable() {
      if (this.searching == true) {
        let q = this.fieldSearch;
        let dts = this.fieldDtsSearch;
        let dtf = this.fieldDtfSearch;
        var search = typeof q === "undefined" || q == "" ? "" : "q=" + q;
        this.url = `${urlApi}/${this.pageApi}?${search}&page=${this.page}`;
      } else {
        this.url = `${urlApi}/${this.pageApi}?page=${this.page}`;
      }

      axios.get(this.url).then(res => {
        this.registersOfTable = res.data.data
        this.count = res.data.total
        this.limit = res.data.per_page
        this.paginate = Math.ceil((res.data.total) / (res.data.per_page))
        this.qtdRegisters = 0
      }).catch(e => {
        this.exibeMessage(e.response.status, e.response.data.errors);
        this.msgErrors = e.response.data.errors;
      });
    },

    async save() {
      const method = this.dataOfTable.uuid ? "put" : "post";
      const uuid = this.dataOfTable.uuid ? `/${this.dataOfTable.uuid}` : "";

      if (method == "put") {
        axios.put(`${urlApi}/${this.pageApi}${uuid}`, this.dataOfTable).then((r) => {
          this.exibeMessage(r.status, 'Registro Alterado!');
          this.reset();
          this.hideModal();
        }).catch(e => {
          this.exibeMessage(e.response.status, e.response.data.errors);
          this.msgErrors = e.response.data.errors;
        })
      } else {
        axios.post(`${urlApi}/${this.pageApi}${uuid}`, this.dataOfTable).then((r) => {
          this.exibeMessage(r.status, 'Registro Inserido!');
          this.reset();
          this.hideModal();
        }).catch(e => {
          this.exibeMessage(e.response.status, e.response.data.errors);
          this.msgErrors = e.response.data.errors;
        })
      }
    },

    remove(item) {
      this.$swal({
        title: "Deseja remover?",
        text: "Esta ação irá remover o registro da lista.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#ff6a00",
        cancelButtonColor: "#ffceab",
        confirmButtonText: "Remover",
        cancelButtonText: "Manter registro",
        showCloseButton: true
      }).then(result => {
        const uuid = item.uuid;
        if (result.value) {
          axios.delete(`${urlApi}/${this.pageApi}/${uuid}`).then((r) => {
            this.searching = false;
            this.loadRegistersOfTable();
            this.exibeMessage(r.status, 'Registro Excluído!');
          }).catch(error => {
            this.exibeMessage(e.response.status, e.response.data.errors);
            this.msgErrors = e.response.data.errors;
          });

        } else {
          this.$swal({
            icon: 'warning',
            title: 'Registro mantido.',
            showConfirmButton: false,
            timer: 2000
          });
        }
      });
    },

    loadRegisterSelect(item) {
      const uuid = item.uuid;
      var titleEditModal;
      this.url = `${urlApi}/${this.pageApi}/${uuid}/details`;
      axios.get(this.url).then(res => {
        this.dataOfTable = res.data;
        if ((typeof res.data.name != "undefined") && (res.data.name != "")) {
          titleEditModal = res.data.name;
        } else if ((typeof res.data.title != "undefined") && (res.data.title != "")) {
          titleEditModal = res.data.title;
        } else if ((typeof res.data.slug != "undefined") && (res.data.slug != "")) {
          titleEditModal = res.data.slug;
        } else {
          titleEditModal = this.titlePage;
        }
        this.titleModal = titleEditModal;
      }).catch(e => {
        this.exibeMessage(e.response.status, e.response.data.errors);
        this.msgErrors = e.response.data.errors;
      });
    },

    reset() {
      this.searching = false;
      this.titleModal = "CADASTRAR " + this.titlePage;
      this.dataOfTable = {};
      this.$store.dispatch("validation/clearErrors");
      this.loadRegistersOfTable();
    },

    openModal() {
      this.dialog = true;
      this.$store.dispatch("modal/SET_MODAL", true);
    },

    closeModal() {
      this.dialog = false;
      this.$store.dispatch("modal/SET_MODAL", false);
    },

    hideModal() {
      this.reset();
      this.dialog = false;
      this.closeModal();
    },

    setDrawer() {
      this.drawer = !this.drawer;
    },

    exibeMessage(statusCode, titleMsg, textMsg) {

      let errorOrSuccess;
      let title;
      let text;

      if (statusCode == 200) {
        title = titleMsg || "Tudo certo!";
        text = textMsg || "";
        errorOrSuccess = "success";
      }

      else if (statusCode == 201) {
        title = titleMsg || "Registro Inserido!";
        text = textMsg || "";
        errorOrSuccess = "success";
      }

      else if (statusCode == 400) {
        title = titleMsg || "Conexão interrompida";
        text = textMsg ||
          "A conexão do seu aparelho não está respondendo. Tente novamente.";
        errorOrSuccess = "error";
      }

      else if (statusCode == 401 || statusCode == 403) {
        title = titleMsg || "Sessão Inativa ou sem Permissão";
        text = textMsg || "Você não está em uma sessão ativa (pode ter expirado) ou não tem permissão para executar essa ação. Clique em sair, e faça um novo login.";
        errorOrSuccess = "error";
      }

      else if (statusCode == 404) {
        title = titleMsg || "Paginão não encontrada";
        text = textMsg ||
          "A página de verificação foi alterada ou nã existe mais. Por favor, acione a administração.";
        errorOrSuccess = "error";
      }

      else if (statusCode == 500) {
        title = titleMsg || "Erro Interno";
        text = textMsg ||
          "Houve um error interno no servidor. Por favor, acione a administração.";
        errorOrSuccess = "error";
      }

      else {
        title = titleMsg || "Erro desconhecido";
        text = textMsg ||
          "Ocorreu um erro desconhecido no sistema. Tente novamente mais tarde.";
        errorOrSuccess = "error";
      }

      if (errorOrSuccess == "success") {
        this.$swal({
          icon: 'success',
          title: title,
          text: text,
          showConfirmButton: false,
          timer: 2000
        });
      } else {
        this.$swal({
          icon: 'warning',
          title: title,
          text: text,
          showCloseButton: false,
          showConfirmButton: false,
        });
      }
    },




    allowedDates: val => parseInt(val.split("-")[2], 10) % 2 === 0
  },

  watch: {
    page() {
      console.log("page: " + this.page);
      this.loadRegistersOfTable()
    },
  },
  // computed: {
  //   modal: {
  //     get() {
  //       return this.$store.state.modal.show;
  //     },
  //     set(val) {
  //       this.$store.dispatch("modal/SET_MODAL", val);
  //     },
  //   },
  // },




  mounted() {
    if (this.pageApi != '') {
      this.loadRegistersOfTable();
      var dateNow = new Date();
      var year = dateNow.getFullYear();
      var month = dateNow.getMonth() + 1;
      var day = dateNow.getDate();
      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;
      this.dateFinish = year + "-" + month + "-" + day;
    }
  },

}
