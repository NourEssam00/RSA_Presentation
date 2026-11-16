<script setup lang="ts">
const apps = [{ t: 'App A', y: 45 }, { t: 'App B', y: 105 }, { t: 'App C', y: 165 }, { t: 'App D', y: 225 }]
const targets = [95, 195]
const paths = apps.flatMap((a, i) => targets.map((cy, k) => ({ k: `${i}-${k}`, b: i * 0.45 + k * 0.22, p: `M130,${a.y} H250 V${cy} H390` })))
</script>
<template>
  <svg viewBox="0 0 560 290" class="ma" role="img" aria-label="Many applications feeding one collector per data type">
    <path v-for="p in paths" :key="'l' + p.k" :d="p.p" class="wire" />
    <circle v-for="p in paths" :key="'d' + p.k" r="5" class="pkt">
      <animateMotion dur="3s" :begin="p.b + 's'" repeatCount="indefinite" :path="p.p" />
    </circle>
    <g v-for="a in apps" :key="a.t">
      <rect x="10" :y="a.y - 20" width="120" height="40" rx="4" class="app" />
      <text x="70" :y="a.y + 6" text-anchor="middle" class="at">{{ a.t }}</text>
    </g>
    <rect x="390" y="60" width="160" height="70" rx="5" class="col" />
    <text x="470" y="90" text-anchor="middle" class="ct">MAADC</text>
    <text x="470" y="114" text-anchor="middle" class="cs2">all accounts</text>
    <rect x="390" y="160" width="160" height="70" rx="5" class="col" />
    <text x="470" y="190" text-anchor="middle" class="ct">MAEDC</text>
    <text x="470" y="214" text-anchor="middle" class="cs2">all entitlements</text>
    <text x="280" y="275" text-anchor="middle" class="big">Many apps, one collector per type</text>
  </svg>
</template>
<style scoped>
.ma { width: 100%; height: auto; display: block; }
.wire { fill: none; stroke: #b4b5bb; stroke-width: 2; }
.pkt { fill: #d6001c; }
.app { fill: #f5f5f6; stroke: #16161a; stroke-width: 2; }
.at { font-size: 16px; font-weight: 600; fill: #16161a; }
.col { fill: #16161a; }
.ct { font-size: 20px; font-weight: 800; fill: #fff; }
.cs2 { font-size: 14px; fill: #d8d9dd; }
.big { font-size: 18px; font-weight: 800; fill: #d6001c; }
</style>