<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const props = withDefaults(defineProps<{ items: { t: string; s?: string }[]; speed?: number }>(), { speed: 1300 })
const tick = ref(0)
let h: ReturnType<typeof setInterval>
onMounted(() => { h = setInterval(() => { tick.value = (tick.value + 1) % (props.items.length + 2) }, props.speed) })
onBeforeUnmount(() => clearInterval(h))
const active = computed(() => Math.min(tick.value, props.items.length - 1))
const pct = computed(() => (props.items.length > 1 ? (active.value / (props.items.length - 1)) * 100 : 100))
</script>
<template>
  <div class="tl" :style="{ '--n': items.length }">
    <div class="track"><i :style="{ width: pct + '%' }" /></div>
    <div class="pts">
      <div v-for="(it, n) in items" :key="n" class="pt" :class="{ done: n < active, now: n === active }">
        <span class="dot">{{ n + 1 }}</span>
        <b>{{ it.t }}</b>
        <small v-if="it.s">{{ it.s }}</small>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tl { position: relative; padding-top: .2rem; }
.track { position: absolute; top: 1.4rem; left: calc(50% / var(--n)); right: calc(50% / var(--n)); height: 4px; background: #e4e4e7; }
.track i { display: block; height: 100%; background: #d6001c; transition: width .6s cubic-bezier(.4, 0, .2, 1); }
.pts { display: grid; grid-template-columns: repeat(var(--n), 1fr); position: relative; }
.pt { text-align: center; padding: 0 .25rem; }
.dot { display: inline-grid; place-items: center; width: 2.4rem; height: 2.4rem; border-radius: 50%; background: #fff; border: 3px solid #b4b5bb; font-weight: 800; font-size: 1.05rem; color: #6a6c74; transition: all .4s; position: relative; }
.pt b { display: block; margin-top: .55rem; font-size: 1.15rem; color: #6a6c74; transition: color .4s; }
.pt small { display: block; font-size: .95rem; color: #8a8c93; line-height: 1.25; }
.pt.done .dot { background: #16161a; border-color: #16161a; color: #fff; }
.pt.done b { color: #16161a; }
.pt.now .dot { background: #d6001c; border-color: #d6001c; color: #fff; animation: pulse 1.3s ease-out infinite; }
.pt.now b { color: #d6001c; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(214, 0, 28, .5); } 100% { box-shadow: 0 0 0 14px rgba(214, 0, 28, 0); } }
</style>