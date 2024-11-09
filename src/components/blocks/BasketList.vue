<script setup lang="ts">
import BasketListItem from './BasketListItem.vue';
import {useListStore} from '../../store/list.ts';
import {animateListEnter, animateListLeave} from '../animations.ts';

const listStore = useListStore();
</script>

<template>
  <transition-group
      tag="div"
      :css="false"
      @enter="animateListEnter"
      @leave="animateListLeave"
  >
    <basket-list-item
        v-for="item in listStore.basketList"
        :key="item"
        :item="item"
    />
  </transition-group>
</template>

<style scoped>

</style>
