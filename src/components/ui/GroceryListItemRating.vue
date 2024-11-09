<script setup lang="ts">
interface Props {
  rating: number
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex justify-center items-center">{{props.rating}}</div>
</template>

<style scoped>

</style>
