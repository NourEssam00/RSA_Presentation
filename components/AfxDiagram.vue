<script setup lang="ts">
const dots = [0, 1, 2].map((i) => ({ i, b: i * 0.9 }))
const main = 'M130,135 H310 C355,135 355,85 400,85'
const manual = 'M130,135 H310 C355,135 355,195 400,195'
</script>
<template>
  <svg viewBox="0 0 560 270" class="afx" role="img" aria-label="ARM sends changes through AFX to connectors">
    <path :d="main" class="wire" />
    <path :d="manual" class="wire dash" />
    <circle v-for="d in dots" :key="'m' + d.i" r="6" class="pkt">
      <animateMotion dur="2.7s" :begin="d.b + 's'" repeatCount="indefinite" :path="main" />
    </circle>
    <circle r="6" class="pkt gray">
      <animateMotion dur="2.7s" begin="1.3s" repeatCount="indefinite" :path="manual" />
    </circle>
    <rect x="10" y="60" width="120" height="150" rx="6" class="box k" />
    <text x="70" y="128" text-anchor="middle" class="bt w">G&amp;L</text>
    <text x="70" y="152" text-anchor="middle" class="bs w">ARM decides</text>
    <rect x="200" y="95" width="110" height="80" rx="6" class="box" />
    <text x="255" y="130" text-anchor="middle" class="bt">AFX</text>
    <text x="255" y="152" text-anchor="middle" class="bs">fulfills</text>
    <rect x="400" y="55" width="150" height="60" rx="6" class="box k" />
    <text x="475" y="82" text-anchor="middle" class="bt w">Connector</text>
    <text x="475" y="102" text-anchor="middle" class="bs w">Active Directory</text>
    <rect x="400" y="165" width="150" height="60" rx="6" class="box ghost" />
    <text x="475" y="192" text-anchor="middle" class="bt">No connector</text>
    <text x="475" y="212" text-anchor="middle" class="bs">Manual task</text>
  </svg>
</template>
<style scoped>
.afx { width: 100%; height: auto; display: block; }
.wire { fill: none; stroke: #b4b5bb; stroke-width: 2; } .wire.dash { stroke-dasharray: 6 6; }
.pkt { fill: #d6001c; } .pkt.gray { fill: #6a6c74; }
.box { fill: #fff; stroke: #16161a; stroke-width: 2; } .box.k { fill: #16161a; } .box.ghost { stroke-dasharray: 6 5; stroke: #6a6c74; fill: #f5f5f6; }
.bt { font-size: 20px; font-weight: 800; fill: #16161a; } .bs { font-size: 14px; fill: #6a6c74; }
.w { fill: #fff; } .bs.w { fill: #d8d9dd; }
</style>