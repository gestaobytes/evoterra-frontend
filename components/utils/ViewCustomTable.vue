<template>
  <table>
    <thead>
      <tr>
        <th scope="col" v-for="(head, index) in headTH" :key="index">
          {{ head }}
        </th>
        <th width="90px" class="text-center">
          {{defineHeadEdition}}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot name="registers-table"></slot>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ["headTH","headEdition"],
  name: "ViewCustomTable", 
  computed: {
    defineHeadEdition: function () {
      return this.headEdition || "";
    },
  },

};
</script>