<script setup lang="ts">
import { ref, computed } from 'vue'
const submit = ref(true)
const approve = ref(false)
const exempt = ref(false)
const log = ref('')
const violation = computed(() => submit.value && approve.value && !exempt.value)
function revoke() { approve.value = false; log.value = 'Revoke: a change request removes Approve. Violation closed.' }
function maintain() { log.value = 'Maintain: exceptional access. Needs a justification and expires (max 180 days).'; exempt.value = true }
function reset() { submit.value = true; approve.value = false; exempt.value = false; log.value = '' }
</script>
<template>
  <div class="sod">
    <div class="who">Great Plains user</div>
    <div class="grid">
      <label :class="{ on: submit }"><input v-model="submit" type="checkbox" @click.stop> Submit Expense Report</label>
      <label :class="{ on: approve }"><input v-model="approve" type="checkbox" @click.stop> Approve Expense Report</label>
    </div>
    <div class="state" :class="{ bad: violation, ok: exempt && submit && approve }">
      <b v-if="violation">Violation detected</b>
      <b v-else-if="exempt && submit && approve">Exceptional access</b>
      <b v-else>Compliant</b>
      <span>{{ violation ? 'The user holds both toxic entitlements.' : 'A violation needs BOTH at the same time.' }}</span>
    </div>
    <div v-if="violation" class="acts">
      <button class="p" @click.stop="revoke">Revoke access</button>
      <button @click.stop="maintain">Maintain as exception</button>
    </div>
    <div v-else class="acts"><button @click.stop="reset">Reset demo</button></div>
    <p v-if="log" class="log">{{ log }}</p>
  </div>
</template>
<style scoped>
.sod { border: 1px solid #e4e4e7; padding: 1rem; border-radius: 4px; font-size: 1.05rem; }
.who { margin-bottom: .6rem; font-weight: 700; font-size: 1.15rem; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: .6rem; }
label { border: 1px solid #b4b5bb; padding: .6rem; cursor: pointer; border-radius: 3px; transition: all .2s; }
label.on { background: #000; color: #fff; border-color: #000; }
.state { margin-top: .8rem; background: #f5f5f6; border-left: 6px solid #16161a; padding: .6rem .9rem; display: flex; flex-direction: column; transition: all .25s; }
.state.bad { border-left-color: #d6001c; background: #fdeaed; }
.state.ok { border-left-color: #6a6c74; }
.state span { font-size: 1rem; color: #4a4b52; }
.acts { margin-top: .8rem; display: flex; gap: .5rem; }
button { font: inherit; font-size: .95rem; padding: .35rem .9rem; border: 1px solid #16161a; background: #fff; border-radius: 3px; cursor: pointer; }
button.p { background: #d6001c; border-color: #d6001c; color: #fff; }
.log { font-size: 1rem; color: #4a4b52; margin: .6rem 0 0; }
</style>