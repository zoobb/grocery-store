<script setup lang="ts">
import ListHeaderTitle from '../ui/ListHeaderTitle.vue';
</script>

<template>
  <div class="flex">
    <div class="grid grid-cols-6 w-full">
      <div/>
      <list-header-title>Name</list-header-title>
      <list-header-title>Price</list-header-title>
      <list-header-title>Rating</list-header-title>
      <list-header-title>Producer</list-header-title>
      <list-header-title>Available in stock</list-header-title>
      <div/>
    </div>
    <div class="w-40"/>
  </div>
</template>

<style scoped>

</style>
