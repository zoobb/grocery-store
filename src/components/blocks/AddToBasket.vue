<script setup lang="ts">
import {useListStore} from '../../store/list.ts';
import {ref} from 'vue';
import {GroceryItem} from '../../types.ts';
import DefaultButton from '../ui/DefaultButton.vue';

interface Props {
  item: GroceryItem
}

const props = defineProps<Props>();
const listStore = useListStore();
const quantity = ref<number>(1);
</script>

<template>
  <div class="flex items-center justify-around gap-2 p-4 w-40">
    <default-button @click="listStore.addToBasket(props.item, quantity)">Add</default-button>
    <input class="w-10" type="number" name="quantity" min="1" v-model="quantity">
  </div>
</template>

<style scoped>

</style>
