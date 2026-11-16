<script setup lang="ts">
import { ref, computed } from 'vue'
const threshold = ref(5)
const changed = ref(1)
const ignore = ref(false)
const first = ref(false)
const aborted = computed(() => changed.value > threshold.value && !ignore.value && !first.value)
const presets = [
  { label: 'Routine run', c: 1, ig: false, fr: false },
  { label: 'Bulk change', c: 100, ig: false, fr: false },
  { label: 'Bulk change, override on', c: 100, ig: true, fr: false },
  { label: 'First run of a collector', c: 100, ig: false, fr: true },
]
const apply = (p: (typeof presets)[number]) => { changed.value = p.c; ignore.value = p.ig; first.value = p.fr }
</script>
<template>
  <div class="cb">
    <div class="row">
      <button v-for="p in presets" :key="p.label" @click.stop="apply(p)">{{ p.label }}</button>
    </div>
    <label class="sl">Records changed: <b>{{ changed }}%</b>
      <input v-model.number="changed" type="range" min="0" max="100" @click.stop>
    </label>
    <div class="meter">
      <i class="fill" :class="{ bad: aborted }" :style="{ width: changed + '%' }" />
      <i class="thr" :style="{ left: threshold + '%' }"><em>threshold {{ threshold }}%</em></i>
    </div>
    <div class="opts">
      <label><input v-model="ignore" type="checkbox"> Ignore circuit breaker</label>
      <label><input v-model="first" type="checkbox"> First run ever</label>
    </div>
    <div class="out" :class="{ bad: aborted }">
      <b>{{ aborted ? 'Aborted (Circuit Breaker)' : 'Completed' }}</b>
      <span v-if="aborted">Nothing written. Read Raw Data first.</span>
      <span v-else>Changes committed to the database.</span>
    </div>
  </div>
</template>
<style scoped>
.cb { border: 1px solid #e4e4e7; padding: 1rem; border-radius: 4px; font-size: 1.05rem; }
.row { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: .8rem; }
button { font: inherit; font-size: .9rem; border: 1px solid #16161a; background: #fff; padding: .3rem .7rem; border-radius: 3px; cursor: pointer; }
button:hover { background: #000; color: #fff; }
.sl { display: block; } .sl input { width: 100%; accent-color: #d6001c; }
.meter { position: relative; height: 18px; background: #e4e4e7; margin: 1rem 0 1.8rem; }
.fill { position: absolute; left: 0; top: 0; bottom: 0; background: #16161a; transition: width .25s, background .25s; }
.fill.bad { background: #d6001c; }
.thr { position: absolute; top: -6px; bottom: -6px; width: 3px; background: #d6001c; }
.thr em { position: absolute; top: 30px; left: -6px; font-style: normal; font-size: .85rem; color: #d6001c; white-space: nowrap; }
.opts { display: flex; flex-direction: column; gap: .25rem; margin-bottom: .7rem; }
.out { background: #f5f5f6; border-left: 6px solid #16161a; padding: .6rem .9rem; display: flex; flex-direction: column; transition: all .25s; }
.out.bad { border-left-color: #d6001c; background: #fdeaed; }
.out span { color: #4a4b52; font-size: 1rem; }
</style>