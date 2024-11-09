<script setup lang="ts">
interface Props {
  name: string
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex h-full justify-center items-center">{{props.name}}</div>
</template>

<style scoped>

</style>
