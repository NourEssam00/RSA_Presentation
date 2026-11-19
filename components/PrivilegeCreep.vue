<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
// Each job grants three entitlements. A mover gains the new job's access but keeps the old.
const jobs = [
  { stage: 'Joiner', job: 'Analyst', grants: ['Read reports', 'Submit expenses', 'CRM view'] },
  { stage: 'Mover', job: 'Team lead', grants: ['Approve leave', 'Edit budgets', 'Team drive'] },
  { stage: 'Mover', job: 'Finance manager', grants: ['Approve expenses', 'GL journals', 'Payroll view'] },
  { stage: 'Leaver', job: 'Leaves company', grants: [] },
]
const t = ref(0)
let h: ReturnType<typeof setInterval>
onMounted(() => { h = setInterval(() => { t.value = (t.value + 1) % 6 }, 1700) })
onBeforeUnmount(() => clearInterval(h))
const step = computed(() => Math.min(t.value, 3))
const held = computed(() => jobs.slice(0, Math.min(step.value, 2) + 1).flatMap((j, i) => j.grants.map((g) => ({ g, from: i }))))
// the entitlements the current job actually needs
const needed = computed(() => (step.value >= 3 ? -1 : step.value))
</script>
<template>
  <div class="pc">
    <div class="steps">
      <div v-for="(j, i) in jobs" :key="i" class="st" :class="{ on: i === step, done: i < step, leaver: i === 3 }">
        <small>{{ j.stage }}</small><b>{{ j.job }}</b>
      </div>
    </div>
    <div class="bag">
      <span v-for="h in held" :key="h.g" class="ent" :class="{ need: h.from === needed, extra: h.from !== needed, gone: step === 3 && h.from === 2 }">{{ h.g }}</span>
    </div>
    <div class="ft">
      <span>Held <b>{{ step === 3 ? 6 : held.length }}</b></span>
      <span>Needed <b>{{ step === 3 ? 0 : 3 }}</b></span>
      <span class="r" v-if="step > 0 && step < 3">Excess <b>{{ held.length - 3 }}</b></span>
      <span class="r" v-if="step === 3">Only the access someone remembered was removed</span>
    </div>
  </div>
</template>
<style scoped>
.pc { border: 1px solid #e4e4e7; border-radius: 4px; padding: .9rem 1rem; font-size: 1rem; }
.steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: .4rem; margin-bottom: .8rem; }
.st { border: 2px solid #e4e4e7; border-radius: 4px; padding: .35rem .5rem; color: #8a8c93; transition: all .35s; }
.st small { display: block; font-size: .75rem; text-transform: uppercase; letter-spacing: .06em; }
.st b { font-size: .95rem; line-height: 1.15; display: block; }
.st.done { border-color: #16161a; color: #16161a; }
.st.on { border-color: #d6001c; background: #d6001c; color: #fff; }
.bag { display: flex; flex-wrap: wrap; gap: .35rem; min-height: 7.2rem; align-content: flex-start; }
.ent { font-size: .9rem; padding: 3px 10px; border-radius: 99px; animation: pop .4s cubic-bezier(.2,1.5,.4,1) both; transition: all .4s; }
.ent.need { background: #16161a; color: #fff; }
.ent.extra { background: #fdeaed; color: #a30015; border: 1px dashed #d6001c; }
.ent.gone { opacity: .25; text-decoration: line-through; }
@keyframes pop { from { transform: scale(0); } }
.ft { display: flex; gap: 1.2rem; flex-wrap: wrap; margin-top: .6rem; padding-top: .5rem; border-top: 1px solid #e4e4e7; color: #4a4b52; }
.ft b { font-family: 'Archivo', sans-serif; font-size: 1.15rem; color: #16161a; }
.ft .r, .ft .r b { color: #d6001c; font-weight: 700; }
</style>
