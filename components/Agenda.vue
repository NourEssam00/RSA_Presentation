<script setup lang="ts">
const items = [
  { t: 'Foundations', s: 'The data model behind everything' },
  { t: 'Collectors', s: 'Getting data in, safely' },
  { t: 'Analytics', s: 'Reports, charts, dashboards' },
  { t: 'Access reviews', s: 'Managers certify who keeps what' },
  { t: 'Rules', s: 'Joiner, mover, leaver, SoD' },
  { t: 'Roles', s: 'Fewer, simpler ways to grant access' },
  { t: 'Requests', s: 'ARM decides, AFX applies' },
  { t: 'Diagnostics', s: 'Know what failed, restart safely' },
]
</script>
<template>
  <div class="toc">
    <div v-for="col in [0, 1]" :key="col" class="col">
      <div v-for="(it, k) in items.slice(col * 4, col * 4 + 4)" :key="it.t" class="it" :class="{ last: k === 3 }" :style="{ '--i': col * 4 + k }">
        <span class="dot">{{ col * 4 + k + 1 }}</span>
        <div class="tx"><b>{{ it.t }}</b><small>{{ it.s }}</small></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.toc { display: grid; grid-template-columns: 1fr 1fr; gap: 2.6rem; margin-top: .6rem; }
.it { position: relative; padding-left: 4.1rem; padding-bottom: 1.3rem; min-height: 2.8rem; }
.dot { position: absolute; left: 0; top: 0; z-index: 1; width: 2.8rem; height: 2.8rem; border-radius: 50%; border: 3px solid #16161a; background: #fff; display: grid; place-items: center; font-family: 'Archivo', sans-serif; font-weight: 800; font-size: 1.2rem; color: #16161a; animation: pop .5s cubic-bezier(.2, 1.5, .4, 1) both, glow 9.6s linear infinite; animation-delay: calc(var(--i) * .15s), calc(2.2s + var(--i) * 1.2s); }
.it:not(.last)::before { content: ''; position: absolute; left: calc(1.4rem - 1.5px); top: 2.8rem; bottom: 0; width: 3px; background: #d6001c; transform-origin: top; animation: draw .35s ease both; animation-delay: calc(var(--i) * .15s + .3s); }
.tx b { display: block; font-family: 'Archivo', sans-serif; font-size: 1.5rem; line-height: 1.1; animation: slide .5s ease both; animation-delay: calc(var(--i) * .15s + .1s); }
.tx small { display: block; font-size: 1.05rem; color: #6a6c74; margin-top: .15rem; animation: slide .5s ease both; animation-delay: calc(var(--i) * .15s + .25s); }
@keyframes pop { from { transform: scale(0); } to { transform: scale(1); } }
@keyframes draw { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@keyframes slide { from { opacity: 0; transform: translateX(-14px); } to { opacity: 1; transform: none; } }
@keyframes glow {
  0% { background: #d6001c; border-color: #d6001c; color: #fff; box-shadow: 0 0 0 0 rgba(214, 0, 28, .5); }
  8% { background: #d6001c; border-color: #d6001c; color: #fff; box-shadow: 0 0 0 14px rgba(214, 0, 28, 0); }
  12.5%, 100% { background: #fff; border-color: #16161a; color: #16161a; box-shadow: none; }
}
</style>