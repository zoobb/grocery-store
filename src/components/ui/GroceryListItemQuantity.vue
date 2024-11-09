<script setup lang="ts">
interface Props {
  quantity: number
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex justify-center items-center p-1">{{props.quantity}}</div>
</template>

<style scoped>

</style>
