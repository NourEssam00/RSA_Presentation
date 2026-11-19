<script setup lang="ts">
const srcs = [
  { t: 'HR record', s: 'Finance Manager', rank: 1, y: 40 },
  { t: 'Directory account', s: 'Analyst', rank: 2, y: 112 },
  { t: 'Finance login', s: 'gp_madel', rank: 3, y: 184 },
  { t: 'Database user', s: 'MADEL01', rank: 4, y: 256 },
]
const path = (y: number) => `M180,${y} C260,${y} 260,148 340,148`
</script>
<template>
  <svg viewBox="0 0 560 300" class="un" role="img" aria-label="Four source records unified into one identity, HR ranked first">
    <path v-for="s in srcs" :key="'p' + s.t" :d="path(s.y)" class="wire" :class="{ win: s.rank === 1 }" />
    <circle v-for="(s, i) in srcs" :key="'d' + s.t" r="5" :class="['pkt', { win: s.rank === 1 }]">
      <animateMotion dur="2.6s" :begin="i * 0.35 + 's'" repeatCount="indefinite" :path="path(s.y)" />
    </circle>
    <g v-for="s in srcs" :key="s.t">
      <rect x="10" :y="s.y - 26" width="170" height="52" rx="4" :class="['src', { win: s.rank === 1 }]" />
      <circle cx="10" :cy="s.y - 26" r="12" :class="['rk', { win: s.rank === 1 }]" />
      <text x="10" :y="s.y - 21" text-anchor="middle" class="rkt">{{ s.rank }}</text>
      <text x="28" :y="s.y - 4" class="st">{{ s.t }}</text>
      <text x="28" :y="s.y + 15" class="ss">{{ s.s }}</text>
    </g>
    <rect x="340" y="78" width="210" height="140" rx="6" class="id" />
    <circle cx="380" cy="118" r="20" class="av" />
    <text x="410" y="114" class="it">Mona Adel</text>
    <text x="410" y="134" class="is">one identity</text>
    <text x="356" y="170" class="ik">Title</text>
    <text x="400" y="170" class="iv">Finance Manager</text>
    <text x="356" y="196" class="ik">From</text>
    <text x="400" y="196" class="iv red">HR, ranked first</text>
  </svg>
</template>
<style scoped>
.un { width: 100%; height: auto; display: block; }
.wire { fill: none; stroke: #b4b5bb; stroke-width: 2; } .wire.win { stroke: #d6001c; stroke-width: 3; }
.pkt { fill: #6a6c74; } .pkt.win { fill: #d6001c; }
.src { fill: #f5f5f6; stroke: #16161a; stroke-width: 1.5; } .src.win { stroke: #d6001c; stroke-width: 2.5; fill: #fff; }
.rk { fill: #16161a; } .rk.win { fill: #d6001c; }
.rkt { font-size: 13px; font-weight: 800; fill: #fff; }
.st { font-size: 15px; font-weight: 700; fill: #16161a; }
.ss { font-size: 13px; fill: #6a6c74; font-family: 'IBM Plex Mono', monospace; }
.id { fill: #16161a; }
.av { fill: #d6001c; }
.it { font-size: 18px; font-weight: 800; fill: #fff; }
.is { font-size: 13px; fill: #b4b5bb; }
.ik { font-size: 13px; fill: #8a8c93; }
.iv { font-size: 15px; font-weight: 700; fill: #fff; }
.iv.red { fill: #ff5a6e; }
</style>
