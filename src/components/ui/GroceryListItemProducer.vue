<script setup lang="ts">
interface Props {
  prod: string
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex justify-center items-center">{{props.prod}}</div>
</template>

<style scoped>

</style>
