<script setup lang="ts">
interface Props {
  isAvailable: boolean
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex justify-center items-center">{{props.isAvailable ? "Yes" : "No"}}</div>
</template>

<style scoped>

</style>
