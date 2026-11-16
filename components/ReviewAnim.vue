<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const items = [
  { n: 'Submit Check Request', keep: true },
  { n: 'Approve Expense Report', keep: false },
  { n: 'Read Reports', keep: true },
  { n: 'Database Admin', keep: false },
  { n: 'Payroll View', keep: true },
]
const t = ref(0)
let h: ReturnType<typeof setInterval>
onMounted(() => { h = setInterval(() => { t.value = (t.value + 1) % 18 }, 600) })
onBeforeUnmount(() => clearInterval(h))
const decided = (i: number) => t.value >= i + 2
const moved = () => t.value >= 9
const verified = () => t.value >= 13
</script>
<template>
  <div class="rv">
    <div class="col">
      <div class="h">Reviewer decides</div>
      <div v-for="(it, i) in items" :key="it.n" class="row" :class="{ gone: moved() && !it.keep }">
        <span>{{ it.n }}</span>
        <em :class="[it.keep ? 'keep' : 'rev', { on: decided(i) }]">{{ it.keep ? 'Maintain' : 'Revoke' }}</em>
      </div>
    </div>
    <div class="arrow" :class="{ on: moved() }" />
    <div class="col tray">
      <div class="h">Change requests</div>
      <div v-for="it in items.filter((x) => !x.keep)" :key="it.n" class="req" :class="{ on: moved(), ok: verified() }">
        <span>{{ it.n }}</span>
        <small>{{ verified() ? 'Completed' : 'Pending Verification' }}</small>
      </div>
      <div class="ver" :class="{ on: verified() }">Next collection confirms it</div>
    </div>
  </div>
</template>
<style scoped>
.rv { display: grid; grid-template-columns: 1.25fr 32px 1fr; gap: .6rem; align-items: start; font-size: 1rem; }
.h { font-size: .9rem; font-weight: 700; color: #d6001c; margin-bottom: .45rem; text-transform: uppercase; letter-spacing: .05em; }
.row { display: flex; justify-content: space-between; align-items: center; gap: .5rem; border: 1px solid #e4e4e7; border-radius: 4px; padding: .5rem .7rem; margin-bottom: .4rem; background: #fff; transition: opacity .5s, background .5s; }
.row.gone { opacity: .3; background: #f5f5f6; }
em { font-style: normal; font-size: .85rem; font-weight: 700; padding: 2px 10px; border-radius: 99px; opacity: 0; transform: scale(.7); transition: all .35s; }
em.on { opacity: 1; transform: none; }
em.keep { background: #16161a; color: #fff; }
em.rev { background: #d6001c; color: #fff; }
.arrow { align-self: center; margin-top: 3rem; width: 0; height: 0; border-left: 16px solid #e4e4e7; border-top: 12px solid transparent; border-bottom: 12px solid transparent; transition: border-left-color .4s; }
.arrow.on { border-left-color: #d6001c; }
.req { border: 1px solid #d6001c; border-left-width: 6px; border-radius: 4px; padding: .5rem .7rem; margin-bottom: .4rem; background: #fdeaed; opacity: 0; transform: translateX(-30px); transition: all .5s; }
.req.on { opacity: 1; transform: none; }
.req.ok { background: #f5f5f6; border-color: #16161a; }
.req small { display: block; color: #6a6c74; font-size: .85rem; }
.ver { margin-top: .6rem; font-weight: 700; color: #16161a; opacity: 0; transition: opacity .4s; }
.ver.on { opacity: 1; }
.ver::before { content: '\2713 '; color: #d6001c; }
</style>