<script setup lang="ts">
const rows = [
  { t: 'User account', y: 50, ppl: [{ x: 420, y: 50 }], cap: '1 person' },
  { t: 'Shared account', y: 140, ppl: [{ x: 420, y: 104 }, { x: 420, y: 140 }, { x: 420, y: 176 }], cap: 'many people' },
]
</script>
<template>
  <svg viewBox="0 0 560 280" class="at" role="img" aria-label="Account types and who owns them">
    <g v-for="r in rows" :key="r.t">
      <line v-for="(p, i) in r.ppl" :key="i" x1="140" :y1="r.y" :x2="p.x - 16" :y2="p.y" class="wire" />
      <circle v-for="(p, i) in r.ppl" :key="'c' + i" :cx="p.x" :cy="p.y" r="14" class="person" :style="{ animationDelay: i * 0.25 + 's' }" />
      <text x="452" :y="r.y + 6" class="cap">{{ r.cap }}</text>
    </g>
    <line x1="140" y1="230" x2="404" y2="230" class="wire bad" />
    <circle cx="420" cy="230" r="15" class="orphan" />
    <text x="420" y="237" text-anchor="middle" class="q">?</text>
    <text x="452" y="236" class="cap red">nobody</text>
    <g v-for="r in [{ t: 'User account', y: 50 }, { t: 'Shared account', y: 140 }, { t: 'Orphan account', y: 230 }]" :key="'p' + r.t">
      <rect x="10" :y="r.y - 22" width="130" height="44" rx="4" :class="['pill', { k: r.t.startsWith('Orphan') }]" />
      <text x="75" :y="r.y + 6" text-anchor="middle" class="pt">{{ r.t }}</text>
    </g>
  </svg>
</template>
<style scoped>
.at { width: 100%; height: auto; display: block; }
.wire { stroke: #6a6c74; stroke-width: 2; stroke-dasharray: 6 6; animation: flow 1.2s linear infinite; }
.wire.bad { stroke: #d6001c; }
@keyframes flow { to { stroke-dashoffset: -12; } }
.person { fill: #16161a; transform-box: fill-box; transform-origin: center; animation: pop 3s ease-in-out infinite; }
@keyframes pop { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.18); } }
.orphan { fill: #fdeaed; stroke: #d6001c; stroke-width: 2.5; transform-box: fill-box; transform-origin: center; animation: warn 1.4s ease-in-out infinite; }
@keyframes warn { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.22); } }
.q { font-size: 20px; font-weight: 800; fill: #d6001c; }
.pill { fill: #f5f5f6; stroke: #16161a; stroke-width: 2; }
.pill.k { fill: #d6001c; stroke: #d6001c; }
.pill.k + .pt { fill: #fff; }
.pt { font-size: 16px; font-weight: 700; fill: #16161a; }
.cap { font-size: 17px; fill: #4a4b52; }
.cap.red { fill: #d6001c; font-weight: 700; }
</style>