<script setup lang="ts">

const props = defineProps<{
  name: string
}>();
</script>

<template>
  <div class="flex h-full justify-center items-center">
    <img class="h-20" :src="`/src/assets/${props.name}.png`" :alt="props.name">
  </div>
</template>

<style scoped>

</style>
