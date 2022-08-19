<template>
  <v-speed-dial right direction="left" transition="slide-x-reverse-transition" class="text-right">
    <template v-slot:activator>
      <v-btn icon text class="-mr-6 -my-2">
        <i class="fa fa-ellipsis-v"></i>
      </v-btn>
    </template>
    <slot name="buttons-edit"></slot>
  </v-speed-dial>
</template>
<script>
export default {
  name: "OpenButtons",
};
</script>