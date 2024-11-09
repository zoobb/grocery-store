<script setup lang="ts">
import ListItem from './ListItem.vue';
import RemoveFromBasket from './RemoveFromBasket.vue';
import {BasketItem} from '../../types.ts';
import GroceryListQuantity from '../ui/GroceryListItemQuantity.vue';

interface Props {
  item: BasketItem
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex rounded-md shadow-lg">
    <list-item :item="props.item" />
    <grocery-list-quantity :quantity="props.item.quantity"/>
    <remove-from-basket :item="props.item" />
  </div>
</template>

<style scoped>

</style>
