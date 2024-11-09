<script setup lang="ts">
import ListItem from './ListItem.vue';
import AddToBasket from './AddToBasket.vue';
import {GroceryItem} from '../../types.ts';

interface Props {
  item: GroceryItem;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex rounded-md shadow-lg">
    <list-item :item="props.item"/>
    <add-to-basket
      :item="props.item"
    />
  </div>
</template>

<style scoped>

</style>
