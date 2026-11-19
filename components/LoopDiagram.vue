<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const props = withDefaults(defineProps<{ labels?: string[]; center?: string; sub?: string; speed?: number }>(), {
  labels: () => ['Request', 'Approval', 'Fulfilment', 'Target system', 'Collection'],
  center: 'Verify',
  sub: 'closes the request',
  speed: 1300,
})
const cx = 260, cy = 200, R = 150
const nodes = computed(() => props.labels.map((t, i) => {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / props.labels.length
  return { t, x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), i }
}))
// clockwise circle path starting at the top node
const ring = `M${cx},${cy - R} A${R},${R} 0 1,1 ${cx - 0.01},${cy - R} Z`
const tick = ref(0)
let h: ReturnType<typeof setInterval>
onMounted(() => { h = setInterval(() => { tick.value = (tick.value + 1) % (props.labels.length + 1) }, props.speed) })
onBeforeUnmount(() => clearInterval(h))
const verifying = computed(() => tick.value === props.labels.length)
const dur = computed(() => (props.speed * (props.labels.length + 1)) / 1000 + 's')
</script>
<template>
  <svg viewBox="0 0 520 400" class="loop" role="img" :aria-label="'Governance loop: ' + labels.join(', ') + ', then ' + center">
    <circle :cx="cx" :cy="cy" :r="R" class="ring" />
    <circle :cx="cx" :cy="cy" :r="R" class="ring run" :style="{ animationDuration: dur }" />
    <circle r="7" class="pkt">
      <animateMotion :dur="dur" repeatCount="indefinite" :path="ring" />
    </circle>
    <g :class="['hub', { on: verifying }]">
      <circle :cx="cx" :cy="cy" r="78" class="hubc" />
      <text :x="cx" :y="cy + 4" text-anchor="middle" class="ht">{{ center }}</text>
      <text :x="cx" :y="cy + 24" text-anchor="middle" class="hs">{{ sub }}</text>
    </g>
    <g v-for="n in nodes" :key="n.t" :class="['node', { now: n.i === tick, done: n.i < tick }]">
      <rect :x="n.x - 68" :y="n.y - 22" width="136" height="44" rx="22" class="pill" />
      <text :x="n.x" :y="n.y + 6" text-anchor="middle" class="nt">{{ n.t }}</text>
    </g>
  </svg>
</template>
<style scoped>
.loop { width: 100%; height: auto; display: block; max-height: 400px; }
.ring { fill: none; stroke: #e4e4e7; stroke-width: 4; }
.ring.run { stroke: #d6001c; stroke-dasharray: 6 14; animation: spin linear infinite; transform-origin: 260px 200px; opacity: .55; }
@keyframes spin { to { transform: rotate(360deg); } }
.pkt { fill: #d6001c; }
.pill { fill: #fff; stroke: #16161a; stroke-width: 2.5; transition: all .35s; }
.nt { font-size: 17px; font-weight: 700; fill: #16161a; transition: fill .35s; }
.node.done .pill { fill: #16161a; }
.node.done .nt { fill: #fff; }
.node.now .pill { fill: #d6001c; stroke: #d6001c; }
.node.now .nt { fill: #fff; }
.hubc { fill: #f5f5f6; stroke: #16161a; stroke-width: 2.5; transition: all .4s; }
.ht { font-size: 24px; font-weight: 800; fill: #16161a; transition: fill .4s; }
.hs { font-size: 12.5px; fill: #6a6c74; transition: fill .4s; }
.hub.on .hubc { fill: #d6001c; stroke: #d6001c; }
.hub.on .ht, .hub.on .hs { fill: #fff; }
</style>
