<script setup lang="ts">
import GroceryListItemRating from '../ui/GroceryListItemRating.vue';
import GroceryListItemProducer from '../ui/GroceryListItemProducer.vue';
import GroceryListItemPrice from '../ui/GroceryListItemPrice.vue';
import GroceryListItemPicture from '../ui/GroceryListItemPicture.vue';
import GroceryListItemStock from '../ui/GroceryListItemStock.vue';
import GroceryListItemName from '../ui/GroceryListItemName.vue';
import {GroceryItem} from '../../types.ts';

interface Props {
  item: GroceryItem;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-6 h-40 w-full">
    <grocery-list-item-picture :name="props.item.name"/>
    <grocery-list-item-name :name="props.item.name"/>
    <grocery-list-item-price :price="props.item.price"/>
    <grocery-list-item-rating :rating="props.item.rating"/>
    <grocery-list-item-producer :prod="props.item.producer"/>
    <grocery-list-item-stock :is-available="props.item.isAvailable"/>
  </div>
</template>

<style scoped>

</style>
