<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const props = withDefaults(defineProps<{ value: number; suffix?: string; label: string; dur?: number }>(), { suffix: '', dur: 1400 })
const v = ref(0)
let raf = 0
let iv: ReturnType<typeof setInterval>
function run() {
  const s = performance.now()
  const step = (t: number) => {
    const p = Math.min(1, (t - s) / props.dur)
    v.value = Math.round(props.value * (1 - Math.pow(1 - p, 3)))
    if (p < 1) raf = requestAnimationFrame(step)
  }
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(step)
}
onMounted(() => { run(); iv = setInterval(run, 7000) })
onBeforeUnmount(() => { cancelAnimationFrame(raf); clearInterval(iv) })
</script>
<template>
  <div class="st">
    <b>{{ v }}<small>{{ suffix }}</small></b>
    <span>{{ label }}</span>
  </div>
</template>
<style scoped>
.st { border-left: 6px solid #d6001c; padding: .1rem 1rem; }
b { display: block; font-family: 'Archivo', sans-serif; font-size: 3.2rem; line-height: 1; color: #16161a; }
small { font-size: 1.6rem; color: #d6001c; margin-left: .15rem; }
span { font-size: 1.05rem; color: #6a6c74; }
</style>