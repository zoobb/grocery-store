<script setup lang="ts">
interface Props {
  price: number
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex h-full justify-center items-center">{{props.price}}</div>
</template>

<style scoped>

</style>
