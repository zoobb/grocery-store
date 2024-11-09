<script setup lang="ts">
import GroceryListItem from './GroceryListItem.vue';
import { useListStore } from '../../store/list.ts';

const listStore = useListStore();
</script>

<template>
  <grocery-list-item
      v-for="item in listStore.mainList"
      :key="item"
      :item="item"
  />
</template>

<style scoped>

</style>
