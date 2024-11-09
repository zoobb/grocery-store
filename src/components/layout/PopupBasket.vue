<script setup lang="ts">
import BasketList from '../blocks/BasketList.vue';
import BasketHeader from '../ui/BasketHeader.vue';
import {useListStore} from '../../store/list.ts';

const listStore = useListStore();
</script>

<template>
  <div class="fixed flex flex-col left-4 top-20 w-[50rem] h-[40rem] z-10 p-4 gap-4 bg-white drop-shadow-2xl overflow-auto" v-if="listStore.isBasketOpen">
    <basket-header/>
    <basket-list/>
  </div>
</template>

<style scoped>

</style>
