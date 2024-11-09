<script setup lang="ts">
import {useListStore} from '../../store/list.ts';

const listStore = useListStore();
</script>

<template>
  <div class="absolute top-0 right-0 flex w-4 h-4 justify-center items-center rounded-full bg-red-600 text-white text-xs">
    {{listStore.itemsInBasketCount}}
  </div>
</template>

<style scoped>

</style>
