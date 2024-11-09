<script setup lang="ts">
import {useListStore} from '../../store/list.ts';
import BasketBadge from './BasketBadge.vue';
import DefaultButton from './DefaultButton.vue';

const listStore = useListStore();
</script>

<template>
  <div class="flex relative justify-center items-center">
    <default-button @click="listStore.toggleBasket()">basket</default-button>
    <basket-badge/>
  </div>
</template>

<style scoped>

</style>
