<template>
  <div>
    <ViewTitlePageSearch
      :titlePage="titlePage"
      @clickSubmit="submitFS()"
      nameFS="q"
    />

    <ButtonAdd @add="reset(), openModal(), $v.dataOfTable.$reset()" />

    <div class="col-span-12 md:col-span-8 lg:col-span-10">
      <!-- <div class="flex-auto"> -->
      <FormInput
        label="Categoria"
        nameField="name"
        v-model="dataOfTable.name"
        :messagesValidations="$v.dataOfTable.name"
        :errordata="msgErrors != [] ? msgErrors.name : null"
        @blur="$v.dataOfTable.name.$touch()"
      />
      <h6>{{ msgErrors }}</h6>
    </div>
    <div class="col-span-12 md:col-span-4 lg:col-span-1">
      <FormInput
        label="Ordem"
        min="0"
        max="1000"
        type="number"
        nameField="order"
        v-model="dataOfTable.order"
        :messagesValidations="$v.dataOfTable.order"
        :errordata="msgErrors != [] ? msgErrors.order : null"
        @blur="$v.dataOfTable.order.$touch()"
      />
      <h6>{{ msgErrors }}</h6>
    </div>

    <ViewCustomTable :headTH="tableHead" :registers="registersOfTable">
      <tr
        v-for="data in registersOfTable"
        :key="data.id"
        slot="registers-table"
      >
        <td>{{ data.name }}</td>
        <td width="50px" class="text-center">{{ data.order }}</td>
        <td class="text-right">
          <OpenButtons>
            <div class="flex -mr-4" slot="buttons-edit">
              <ButtonDelete @delete="remove(data)" />
              <ButtonEdit
                @save="loadRegisterSelect(data), (dialog = !dialog)"
              />
            </div>
          </OpenButtons>
        </td>
      </tr>
    </ViewCustomTable>

    <CustomPagination
      :page="page"
      :paginate="paginate"
      :count="count"
      v-if="paginate > 1"
    >
      <div slot="pagination">
        <v-pagination
          color="#00688B"
          v-model="page"
          :length="paginate"
          :total-visible="7"
        />
      </div>
    </CustomPagination>

    <ModalForm
      v-if="dialog"
      :title="titleModal"
      @close="dialog = false"
      @save="save"
      :errorValidation="functionError()"
    >
      <!-- <div slot="contentForm" class="grid grid-cols-12 gap-4 bg-green-50"> -->
      <div slot="contentForm" class="grid grid-cols-12 gap-4">
        <!-- <AlertError
            v-if="showError"
            :titleError="titleError"
            :textError="textError"
          /> -->

        <div class="col-span-12 md:col-span-8 lg:col-span-10">
          <!-- <div class="flex-auto"> -->
          <FormInput
            label="Categoria"
            nameField="name"
            v-model="dataOfTable.name"
            :messagesValidations="$v.dataOfTable.name"
            :errordata="msgErrors != [] ? msgErrors.name : null"
            @blur="$v.dataOfTable.name.$touch()"
          />
          <h6>{{ msgErrors }}</h6>
        </div>
        <div class="col-span-12 md:col-span-4 lg:col-span-1">
          <FormInput
            label="Ordem"
            min="0"
            max="1000"
            type="number"
            nameField="order"
            v-model="dataOfTable.order"
            :messagesValidations="$v.dataOfTable.order"
            :errordata="msgErrors != [] ? msgErrors.order : null"
            @blur="$v.dataOfTable.order.$touch()"
          />
          <h6>{{ msgErrors }}</h6>
        </div>
        <!-- <div class="col-span-12 md:col-span-12 lg:col-span-1">
          <FormInput
            label="Ordem"
            type="number"
            nameField="order"
            v-model="dataOfTable.order"
            :messagesValidations="$v.dataOfTable.order"
            :errordata="msgErrors != [] ? msgErrors.order : null"
            @blur="$v.dataOfTable.order.$touch()"
          />
        </div> -->
      </div>
    </ModalForm>
  </div>
</template>

<script>
// import axios from "axios";
// import { urlAdmin, urlStorage } from "@/global";
import crud from "@/components/api/crud";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

import ViewTitlePageSearch from "@/components/layout/admin/ViewTitlePageSearch.vue";
import ModalForm from "@/components/layout/admin/ModalForm.vue";
import ButtonAdd from "@/components/buttons/ButtonAdd.vue";
import ButtonEdit from "@/components/buttons/ButtonEdit.vue";
import ButtonDelete from "@/components/buttons/ButtonDelete.vue";
import ViewCustomTable from "@/components/utils/ViewCustomTable.vue";
import OpenButtons from "@/components/utils/OpenButtons.vue";
import CustomPagination from "@/components/utils/CustomPagination.vue";

import FormInput from "@/components/forms/FormTextField.vue";
import AlertError from "@/components/alerts/AlertError.vue";

export default {
  name: "AdminCategories",
  layout: "restrict",
  mixins: [crud],
  components: {
    ViewTitlePageSearch,
    ButtonAdd,
    ButtonDelete,
    ButtonEdit,
    ViewCustomTable,
    OpenButtons,
    CustomPagination,
    ModalForm,
    FormInput,
    AlertError,
  },
  data() {
    return {
      titlePage: "Categorias",
      pageApi: "editorials",
      tableHead: ["CATEGORIA", "ORDEM"],
    };
  },
  validations() {
    return {
      dataOfTable: {
        name: { required, minLength: minLength(3), maxLength: maxLength(1000) },
        order: {},
      },
    };
  },
  methods: {
    functionError() {
      return this.$v.dataOfTable.$invalid;
    },
  },
};
</script>

<style>
</style>
