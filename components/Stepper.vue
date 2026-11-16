<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ items: { title: string; body: string }[]; height?: string }>()
const i = ref(0)
const next = () => { i.value = Math.min(props.items.length - 1, i.value + 1) }
const prev = () => { i.value = Math.max(0, i.value - 1) }
</script>
<template>
  <div class="stp">
    <ol>
      <li v-for="(it, n) in items" :key="n" :class="{ on: i === n, done: n < i }" @click.stop="i = n">
        <span class="n">{{ n + 1 }}</span><span class="t">{{ it.title }}</span>
      </li>
    </ol>
    <div class="panel" :style="{ minHeight: height ?? '280px' }">
      <Transition name="swap" mode="out-in">
        <div :key="i" class="inner">
          <div class="k">{{ i + 1 }} of {{ items.length }}</div>
          <div class="b">{{ items[i].body }}</div>
        </div>
      </Transition>
      <div class="nav">
        <button :disabled="i === 0" @click.stop="prev">Back</button>
        <button :disabled="i === items.length - 1" class="p" @click.stop="next">Next step</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.stp { display: grid; grid-template-columns: 17rem 1fr; gap: 1.2rem; }
ol { list-style: none; margin: 0; padding: 0; border-left: 2px solid #e4e4e7; }
li { display: flex; gap: .65rem; align-items: center; padding: .45rem .6rem; margin: 0; cursor: pointer; font-size: 1.05rem; color: #6a6c74; border-left: 4px solid transparent; margin-left: -2px; transition: all .25s; }
li .n { width: 1.7rem; height: 1.7rem; flex: none; border-radius: 50%; border: 1px solid #b4b5bb; font-size: .9rem; display: grid; place-items: center; transition: all .25s; }
li.done .n { background: #16161a; border-color: #16161a; color: #fff; }
li.on { color: #000; font-weight: 700; border-left-color: #d6001c; background: #f5f5f6; }
li.on .n { background: #d6001c; border-color: #d6001c; color: #fff; }
li::marker { content: ''; }
.panel { background: #f5f5f6; border-top: 5px solid #000; padding: 1rem 1.2rem; display: flex; flex-direction: column; }
.inner { flex: 1; }
.k { font-size: .9rem; color: #d6001c; font-weight: 700; margin-bottom: .4rem; }
.b { white-space: pre-line; font-size: 1.3rem; line-height: 1.45; }
.nav { display: flex; gap: .6rem; justify-content: flex-end; margin-top: .6rem; }
button { font: inherit; font-size: .95rem; padding: .35rem 1rem; border: 1px solid #16161a; background: #fff; border-radius: 3px; cursor: pointer; }
button.p { background: #d6001c; border-color: #d6001c; color: #fff; }
button:disabled { opacity: .35; cursor: default; }
.swap-enter-active, .swap-leave-active { transition: opacity .22s, transform .22s; }
.swap-enter-from { opacity: 0; transform: translateX(14px); }
.swap-leave-to { opacity: 0; transform: translateX(-14px); }
</style>