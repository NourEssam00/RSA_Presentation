<script setup lang="ts">
import { ref, computed } from 'vue'
const data: Record<string, { app: string; n: number; risky: number }[]> = {
  Finance: [{ app: 'Great Plains', n: 42, risky: 6 }, { app: 'Active Directory', n: 58, risky: 2 }, { app: 'SharePoint', n: 31, risky: 1 }, { app: 'Oracle DB', n: 9, risky: 4 }],
  HR: [{ app: 'Great Plains', n: 8, risky: 1 }, { app: 'Active Directory', n: 37, risky: 0 }, { app: 'SharePoint', n: 26, risky: 2 }, { app: 'Oracle DB', n: 4, risky: 0 }],
  IT: [{ app: 'Great Plains', n: 5, risky: 3 }, { app: 'Active Directory', n: 64, risky: 5 }, { app: 'SharePoint', n: 40, risky: 1 }, { app: 'Oracle DB', n: 22, risky: 7 }],
}
const dept = ref('Finance')
const rows = computed(() => data[dept.value])
const max = 64
const total = computed(() => rows.value.reduce((a, r) => a + r.n, 0))
const risky = computed(() => rows.value.reduce((a, r) => a + r.risky, 0))
</script>
<template>
  <div class="ad">
    <div class="hd">
      <b>Who has access to what</b>
      <span class="tagx">Sample data</span>
    </div>
    <div class="param">
      <span>Department</span>
      <button v-for="d in Object.keys(data)" :key="d" :class="{ on: d === dept }" @click.stop="dept = d">{{ d }}</button>
    </div>
    <div v-for="r in rows" :key="r.app" class="row">
      <span class="lbl">{{ r.app }}</span>
      <div class="track">
        <i class="ok" :style="{ width: ((r.n - r.risky) / max) * 100 + '%' }" />
        <i class="bad" :style="{ width: (r.risky / max) * 100 + '%' }" />
      </div>
      <span class="v">{{ r.n }}</span>
    </div>
    <div class="ft">
      <span><b>{{ total }}</b> entitlements</span>
      <span class="r"><b>{{ risky }}</b> unreviewed or in violation</span>
      <span class="ex">Export: <em>CSV</em><em>PDF</em><em>XLS</em></span>
    </div>
  </div>
</template>
<style scoped>
.ad { border: 1px solid #e4e4e7; border-top: 5px solid #16161a; border-radius: 4px; padding: .9rem 1.1rem; font-size: 1rem; }
.hd { display: flex; justify-content: space-between; align-items: center; margin-bottom: .6rem; }
.hd b { font-family: 'Archivo', sans-serif; font-size: 1.2rem; }
.tagx { font-size: .8rem; background: #16161a; color: #fff; padding: 2px 10px; border-radius: 99px; }
.param { display: flex; align-items: center; gap: .4rem; margin-bottom: .8rem; font-size: .9rem; color: #6a6c74; }
.param span { margin-right: .3rem; }
button { font: inherit; font-size: .9rem; border: 1px solid #b4b5bb; background: #fff; padding: .2rem .7rem; border-radius: 3px; cursor: pointer; }
button.on { background: #d6001c; border-color: #d6001c; color: #fff; }
.row { display: grid; grid-template-columns: 8.5rem 1fr 2.2rem; align-items: center; gap: .6rem; margin: .35rem 0; }
.lbl { font-size: .95rem; }
.track { height: 18px; background: #f5f5f6; display: flex; }
.track i { display: block; height: 100%; transition: width .6s cubic-bezier(.2,.8,.2,1); }
.ok { background: #16161a; } .bad { background: #d6001c; }
.v { text-align: right; font-weight: 700; }
.ft { display: flex; flex-wrap: wrap; gap: .4rem 1.1rem; margin-top: .7rem; padding-top: .55rem; border-top: 1px solid #e4e4e7; font-size: .9rem; color: #4a4b52; }
.ft .r b { color: #d6001c; }
.ex em { font-style: normal; border: 1px solid #b4b5bb; border-radius: 3px; padding: 0 6px; margin-left: 4px; font-size: .8rem; }
</style>
