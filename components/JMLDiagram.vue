<script setup lang="ts">
const w = [150, 110, 130, 90]
const cols = [
  { x: 100, t: 'Joiner', s: 'Birthright access in' },
  { x: 280, t: 'Mover', s: 'Old access out, new in' },
  { x: 460, t: 'Leaver', s: 'All access removed' },
]
</script>
<template>
  <svg viewBox="0 0 560 270" class="jml" role="img" aria-label="Joiner, mover and leaver access changes">
    <g v-for="(c, ci) in cols" :key="c.t">
      <circle :cx="c.x" cy="34" r="22" :class="['av', { lv: ci === 2 }]" />
      <text :x="c.x" y="41" text-anchor="middle" class="avt">{{ c.t[0] }}</text>
      <template v-if="ci === 0">
        <rect v-for="(b, i) in w" :key="i" :x="c.x - 75" :y="80 + i * 32" :width="b" height="18" rx="3" class="bar grow" :style="{ animationDelay: i * 0.12 + 's' }" />
      </template>
      <template v-else-if="ci === 1">
        <rect v-for="(b, i) in w" :key="'o' + i" :x="c.x - 75" :y="80 + i * 32" :width="b" height="18" rx="3" class="bar old" :style="{ animationDelay: i * 0.12 + 's' }" />
        <rect v-for="(b, i) in w" :key="'n' + i" :x="c.x - 75" :y="80 + i * 32" :width="150 - b + 40" height="18" rx="3" class="bar nw" :style="{ animationDelay: i * 0.12 + 's' }" />
      </template>
      <template v-else>
        <rect v-for="(b, i) in w" :key="i" :x="c.x - 75" :y="80 + i * 32" :width="b" height="18" rx="3" class="bar leave" :style="{ animationDelay: i * 0.12 + 's' }" />
        <rect :x="c.x - 55" y="120" width="110" height="34" rx="4" class="tag" />
        <text :x="c.x" y="143" text-anchor="middle" class="tagt">DISABLED</text>
      </template>
      <text :x="c.x" y="232" text-anchor="middle" class="cap">{{ c.t }}</text>
      <text :x="c.x" y="254" text-anchor="middle" class="sub">{{ c.s }}</text>
    </g>
  </svg>
</template>
<style scoped>
.jml { width: 100%; height: auto; display: block; }
.av { fill: #16161a; } .av.lv { animation: avfade 9s ease infinite; }
@keyframes avfade { 0%, 45% { opacity: 1; } 60%, 90% { opacity: .3; } 100% { opacity: 1; } }
.avt { font-size: 20px; font-weight: 800; fill: #fff; }
.bar { fill: #16161a; transform-box: fill-box; transform-origin: 0 50%; animation-duration: 9s; animation-iteration-count: infinite; animation-fill-mode: both; animation-timing-function: ease; }
.bar.nw { fill: #d6001c; }
.grow { animation-name: grow; } .old { animation-name: old; } .nw { animation-name: nw; } .leave { animation-name: leave; }
@keyframes grow { 0% { transform: scaleX(0); } 14%, 88% { transform: scaleX(1); } 96%, 100% { transform: scaleX(0); } }
@keyframes old { 0% { transform: scaleX(0); } 10%, 38% { transform: scaleX(1); } 48%, 100% { transform: scaleX(0); } }
@keyframes nw { 0%, 50% { transform: scaleX(0); } 62%, 88% { transform: scaleX(1); } 96%, 100% { transform: scaleX(0); } }
@keyframes leave { 0% { transform: scaleX(0); } 10%, 45% { transform: scaleX(1); } 58%, 100% { transform: scaleX(0); } }
.tag { fill: #d6001c; opacity: 0; animation: tagin 9s ease infinite; }
.tagt { font-size: 16px; font-weight: 800; fill: #fff; opacity: 0; animation: tagin 9s ease infinite; }
@keyframes tagin { 0%, 55% { opacity: 0; } 65%, 90% { opacity: 1; } 98%, 100% { opacity: 0; } }
.cap { font-size: 21px; font-weight: 800; fill: #16161a; }
.sub { font-size: 14px; fill: #6a6c74; }
</style>