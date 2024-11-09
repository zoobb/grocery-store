<script setup lang="ts">
import {useListStore} from '../../store/list.ts';
import {GroceryItem} from '../../types.ts';
import DefaultButton from '../ui/DefaultButton.vue';

interface Props {
  item: GroceryItem
}

const listStore = useListStore();
const props = defineProps<Props>();
</script>

<template>
  <div class="flex justify-center items-center">
    <default-button @click="listStore.removeFromBasket(props.item)">Remove</default-button>
  </div>
</template>

<style scoped>

</style>
