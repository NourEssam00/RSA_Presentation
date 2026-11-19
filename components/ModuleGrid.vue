<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const mods = [
  { v: 'Collect', t: 'Data Collectors', s: 'Builds the picture: identities, accounts, entitlements, roles, and the links between them.' },
  { v: 'Certify', t: 'Reviews', s: 'Routes that picture to the managers who own it and records what they decided.' },
  { v: 'Enforce', t: 'Rules', s: 'Applies policy continuously: segregation of duties and joiner, mover, leaver.' },
  { v: 'Model', t: 'Business Role Manager', s: 'Groups entitlements into roles so people can reason about access in job terms.' },
  { v: 'Request', t: 'Access Request Manager', s: 'Self-service requests, approval workflows, and AFX fulfilment.' },
  { v: 'Measure', t: 'Analytics', s: 'Reports, charts and dashboards, plus a Risk Engine new in release 8.0.' },
]
const at = ref(0)
let h: ReturnType<typeof setInterval>
onMounted(() => { h = setInterval(() => { at.value = (at.value + 1) % mods.length }, 1600) })
onBeforeUnmount(() => clearInterval(h))
</script>
<template>
  <div class="mg">
    <div v-for="(m, i) in mods" :key="m.v" class="m" :class="{ on: i === at }" :style="{ '--i': i }">
      <small>{{ m.v }}</small>
      <b>{{ m.t }}</b>
      <p>{{ m.s }}</p>
    </div>
  </div>
</template>
<style scoped>
.mg { display: grid; grid-template-columns: repeat(3, 1fr); gap: .8rem; }
.m { border: 1px solid #e4e4e7; border-top: 4px solid #16161a; border-radius: 4px; padding: .7rem .9rem; transition: all .4s; animation: up .5s ease both; animation-delay: calc(var(--i) * .1s); }
.m small { display: block; font-size: .8rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #d6001c; }
.m b { display: block; font-family: 'Archivo', sans-serif; font-size: 1.2rem; line-height: 1.15; margin: .1rem 0 .3rem; }
.m p { margin: 0; font-size: .95rem; line-height: 1.3; color: #4a4b52; }
.m.on { border-top-color: #d6001c; background: #16161a; color: #fff; transform: translateY(-3px); }
.m.on p { color: #d8d9dd; }
.m.on small { color: #ff5a6e; }
@keyframes up { from { opacity: 0; transform: translateY(12px); } }
</style>
