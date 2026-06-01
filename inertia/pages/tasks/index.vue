<script setup lang="ts">
import { Data } from '@generated/data'

defineProps<{
  tasks: Data.Task[]
}>()
</script>
<template>
  <div v-for="task in tasks" :key="task.id">
    <h1>{{ task.title }}</h1>
  </div>
</template>
