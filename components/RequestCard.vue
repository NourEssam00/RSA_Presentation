<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const steps = ['Submitted', 'Approved', 'Fulfilled by AFX', 'Pending Verification', 'Completed']
const msgs = ['A user, review or rule asks', 'The approval workflow decides', 'AFX applies the change', 'Waiting for the next collection', 'Collection saw the change']
const i = ref(0)
let h: ReturnType<typeof setInterval>
onMounted(() => { h = setInterval(() => { i.value = (i.value + 1) % 6 }, 1400) })
onBeforeUnmount(() => clearInterval(h))
const active = computed(() => Math.min(i.value, 4))
</script>
<template>
  <div class="rc">
    <div class="top">
      <b>Change request</b>
      <span class="chip" :class="{ wait: active === 3, ok: active === 4 }">{{ steps[active] }}</span>
    </div>
    <ol>
      <li v-for="(s, n) in steps" :key="s" :class="{ done: n < active, now: n === active }"><i />{{ s }}</li>
    </ol>
    <div class="bar"><b :style="{ width: (active / 4) * 100 + '%' }" /></div>
    <div class="msg" :class="{ wait: active === 3 }">{{ msgs[active] }}</div>
  </div>
</template>
<style scoped>
.rc { border: 1px solid #e4e4e7; border-top: 5px solid #d6001c; border-radius: 4px; padding: 1rem 1.2rem; font-size: 1.1rem; }
.top { display: flex; justify-content: space-between; align-items: center; margin-bottom: .7rem; }
.chip { font-size: .9rem; font-weight: 700; background: #16161a; color: #fff; padding: 3px 12px; border-radius: 99px; transition: background .3s; }
.chip.wait { background: #d6001c; animation: blink 1s ease-in-out infinite; }
.chip.ok { background: #6a6c74; }
@keyframes blink { 50% { opacity: .55; } }
ol { list-style: none; margin: 0; padding: 0; }
li { display: flex; align-items: center; gap: .7rem; padding: .3rem 0; color: #8a8c93; transition: color .3s; }
li::marker { content: ''; }
li i { width: 1rem; height: 1rem; border-radius: 50%; border: 3px solid #b4b5bb; flex: none; transition: all .3s; }
li.done { color: #16161a; } li.done i { background: #16161a; border-color: #16161a; }
li.now { color: #d6001c; font-weight: 700; } li.now i { background: #d6001c; border-color: #d6001c; animation: pulse 1.2s ease-out infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(214, 0, 28, .5); } 100% { box-shadow: 0 0 0 10px rgba(214, 0, 28, 0); } }
.bar { height: 6px; background: #e4e4e7; margin: .6rem 0; }
.bar b { display: block; height: 100%; background: #d6001c; transition: width .6s; }
.msg { color: #4a4b52; font-size: 1.05rem; min-height: 1.4em; }
.msg.wait { color: #d6001c; font-weight: 700; }
</style>