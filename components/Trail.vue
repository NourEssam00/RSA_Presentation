<script setup lang="ts">
defineProps<{ at: number }>()
const topics = ['Foundations', 'Collectors', 'Analytics', 'Reviews', 'Rules', 'Roles', 'Requests', 'Diagnostics']
</script>
<template>
  <div class="trail">
    <span v-for="(t, i) in topics" :key="t" :class="{ now: i + 1 === at, done: i + 1 < at }">
      <em>{{ i + 1 }}</em>{{ t }}
    </span>
  </div>
</template>
<style scoped>
.trail { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 1.6rem; }
span { display: inline-flex; align-items: center; gap: .45rem; font-size: 1rem; padding: .3rem .8rem .3rem .4rem; border: 1px solid #4a4b52; border-radius: 99px; color: #8a8c93; }
em { font-style: normal; display: grid; place-items: center; width: 1.5rem; height: 1.5rem; border-radius: 50%; border: 1px solid #4a4b52; font-size: .85rem; }
span.done { color: #d8d9dd; border-color: #8a8c93; }
span.done em { background: #4a4b52; color: #fff; border-color: #4a4b52; }
span.now { background: #d6001c; border-color: #d6001c; color: #fff; font-weight: 700; }
span.now em { background: #fff; color: #d6001c; border-color: #fff; }
</style>