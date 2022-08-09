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
      });
    },

    async save() {
      const method = this.dataOfTable.uuid ? "put" : "post";
      const uuid = this.dataOfTable.uuid ? `/${this.dataOfTable.uuid}` : "";

      if (method == "put") {
        this.$axios.$put(`${urlApi}/${this.pageApi}${uuid}`, this.dataOfTable).then(() => {
          this.$swal({
            icon: 'success',
            title: 'Registro Alterado!',
            showConfirmButton: false,
            timer: 2000
          }),
            this.reset(),
            this.hideModal()
        }).catch(error => {
          this.msgErrors = e.response.data.errors;
          console.log(error)
        })
      } else {
        this.$axios.$post(`${urlApi}/${this.pageApi}${uuid}`, this.dataOfTable).then(() => {
          this.$swal({
            icon: 'success',
            title: 'Registro Inserido!',
            showConfirmButton: false,
            timer: 2000
          }),
            this.reset(),
            this.hideModal()
        }).catch(error => {
          this.msgErrors = e.response.data.errors;
          console.log(error)
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
          axios.delete(`${urlApi}/${this.pageApi}/${uuid}`).then(() => {
            this.searching = false;
            this.loadRegistersOfTable();
            this.$swal({
              icon: 'success',
              title: 'Registro removido.',
              showConfirmButton: false,
              timer: 2000
            });
          }).catch(error => {
            let title;
            let text;

            if (error.response.status == 401) {
              title = "Não logado";
              text = "Você não tem permissão para excluir ou sua sessão expirou.";
            } else if (error.response.status == 500) {
              title = "Erro Interno";
              text =
                "Houve um error interno no servidor. Por favor, acione a administração.";
            } else if (error.response.status == 404) {
              title = "Paginão não encontrada";
              text =
                "A página de verificação foi alterada ou nã existe mais. Por favor, acione a administração.";
            } else if (error.response.status == 400) {
              title = "Conexão interrompida";
              text =
                "A conexão do seu aparelho não está respondendo. Tente novamente.";
            } else {
              title = "Erro desconhecido";
              text =
                "Ocorreu um erro desconhecido no sistema. Tente novamente mais tarde.";
            }
            this.$swal({
              icon: 'warning',
              title: title,
              text: text,
              showCloseButton: false,
              showConfirmButton: false,
            });




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
      });
    },

    reset() {
      this.searching = false;
      this.titleModal = "CADASTRAR " + this.titlePage;
      this.dataOfTable = {};
      this.$store.dispatch("validation/clearErrors");
      this.loadRegistersOfTable();
    },

    openModal(){
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
