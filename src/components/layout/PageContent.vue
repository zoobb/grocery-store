<script setup lang="ts">
import GroceryList from '../blocks/GroceryList.vue';
import ContentHeader from '../ui/ContentHeader.vue';
import ListHeaders from '../blocks/ListHeaders.vue';
</script>

<template>
  <div class="flex flex-col py-8 px-60 gap-4">
    <content-header/>
    <list-headers/>
    <grocery-list/>
  </div>
</template>

<style scoped>

</style>
