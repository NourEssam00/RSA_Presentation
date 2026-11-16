<script setup lang="ts">
const ys = [50, 115, 180, 245]
</script>
<template>
  <svg viewBox="0 0 560 300" class="rd" role="img" aria-label="Roles reduce the number of access links">
    <text x="70" y="22" text-anchor="middle" class="hd">Users</text>
    <text x="486" y="22" text-anchor="middle" class="hd">Entitlements</text>
    <g class="mesh">
      <template v-for="u in ys" :key="u">
        <line v-for="e in ys" :key="u + '-' + e" x1="88" :y1="u" x2="470" :y2="e" class="ln" />
      </template>
    </g>
    <g class="hub">
      <line v-for="u in ys" :key="'a' + u" x1="88" :y1="u" x2="246" y2="150" class="ln red" />
      <line v-for="e in ys" :key="'b' + e" x1="314" y1="150" x2="470" :y2="e" class="ln red" />
      <circle cx="280" cy="150" r="36" class="role" />
      <text x="280" y="157" text-anchor="middle" class="rt">Role</text>
    </g>
    <circle v-for="u in ys" :key="'u' + u" cx="70" :cy="u" r="17" class="usr" />
    <rect v-for="e in ys" :key="'e' + e" x="470" :y="e - 15" width="32" height="30" rx="4" class="ent" />
    <text x="280" y="292" text-anchor="middle" class="cnt c1">16 direct links to maintain</text>
    <text x="280" y="292" text-anchor="middle" class="cnt c2">8 links through one role</text>
  </svg>
</template>
<style scoped>
.rd { width: 100%; height: auto; display: block; }
.hd { font-size: 16px; font-weight: 700; fill: #6a6c74; }
.ln { stroke: #b4b5bb; stroke-width: 1.6; } .ln.red { stroke: #d6001c; stroke-width: 2.4; }
.usr { fill: #16161a; } .ent { fill: #6a6c74; }
.role { fill: #d6001c; } .rt { font-size: 20px; font-weight: 800; fill: #fff; }
.mesh { animation: meshc 9s ease infinite; }
.hub { opacity: 0; animation: hubc 9s ease infinite; }
@keyframes meshc { 0% { opacity: 0; } 5%, 42% { opacity: 1; } 50%, 96% { opacity: 0; } 100% { opacity: 0; } }
@keyframes hubc { 0%, 48% { opacity: 0; } 58%, 92% { opacity: 1; } 100% { opacity: 0; } }
.cnt { font-size: 19px; font-weight: 800; opacity: 0; }
.c1 { fill: #16161a; animation: meshc 9s ease infinite; }
.c2 { fill: #d6001c; animation: hubc 9s ease infinite; }
</style>