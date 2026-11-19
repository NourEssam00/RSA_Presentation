<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const layers = [
  { t: 'Identities', s: 'Identity collector, binds to a directory' },
  { t: 'Accounts', s: 'Account collector, maps each account to an identity' },
  { t: 'Entitlements', s: 'Entitlement collector, attaches rights to accounts' },
]
const wrong = ref(false)
const t = ref(0)
let h: ReturnType<typeof setInterval>
onMounted(() => { h = setInterval(() => { t.value = (t.value + 1) % 7 }, 900) })
onBeforeUnmount(() => clearInterval(h))
// right order: identities, accounts, entitlements. Wrong order: accounts first, so they arrive with no owner.
const order = computed(() => (wrong.value ? [1, 2, 0] : [0, 1, 2]))
const shown = (i: number) => order.value.indexOf(i) < t.value
const orphan = (i: number) => wrong.value && i > 0 && order.value.indexOf(i) < order.value.indexOf(0)
function toggle() { wrong.value = !wrong.value; t.value = 0 }
</script>
<template>
  <div class="cs">
    <div class="stack">
      <div v-for="i in [2, 1, 0]" :key="i" class="layer" :class="{ on: shown(i), bad: orphan(i) && shown(i) }">
        <span class="n">{{ order.indexOf(i) + 1 }}</span>
        <div><b>{{ layers[i].t }}</b><small>{{ orphan(i) && shown(i) ? 'Arrives with no owner: orphaned' : layers[i].s }}</small></div>
      </div>
    </div>
    <button @click.stop="toggle">{{ wrong ? 'Run in the correct order' : 'Run in the wrong order' }}</button>
  </div>
</template>
<style scoped>
.cs { display: flex; flex-direction: column; gap: .7rem; }
.stack { display: flex; flex-direction: column; gap: .5rem; }
.layer { display: flex; align-items: center; gap: .9rem; border: 2px dashed #b4b5bb; border-radius: 5px; padding: .6rem .9rem; opacity: .35; transform: translateY(-10px); transition: all .45s cubic-bezier(.2,.8,.2,1); }
.layer.on { opacity: 1; transform: none; border: 2px solid #16161a; background: #fff; }
.layer.on:last-child { background: #16161a; color: #fff; }
.layer.on:last-child small { color: #d8d9dd; }
.layer.bad { border-color: #d6001c; background: #fdeaed; }
.layer.bad small { color: #d6001c; font-weight: 700; }
.n { flex: none; width: 2.1rem; height: 2.1rem; border-radius: 50%; display: grid; place-items: center; background: #d6001c; color: #fff; font-weight: 800; }
b { display: block; font-family: 'Archivo', sans-serif; font-size: 1.25rem; line-height: 1.1; }
small { display: block; font-size: .95rem; color: #6a6c74; }
button { align-self: flex-start; font: inherit; font-size: .9rem; border: 1px solid #16161a; background: #fff; padding: .3rem .8rem; border-radius: 3px; cursor: pointer; }
button:hover { background: #000; color: #fff; }
</style>
