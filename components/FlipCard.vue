<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ title: string; hint?: string }>()
const on = ref(false)
</script>
<template>
  <div class="flip" :class="{ on }" role="button" tabindex="0" @click.stop="on = !on" @keydown.enter.stop="on = !on">
    <div class="face front">
      <h3>{{ title }}</h3>
      <small>{{ hint ?? 'Click to flip' }}</small>
    </div>
    <div class="face back"><slot /></div>
  </div>
</template>
<style scoped>
.flip { position: relative; height: 215px; perspective: 900px; cursor: pointer; outline-offset: 3px; }
.face { position: absolute; inset: 0; padding: .9rem; border-radius: 4px; backface-visibility: hidden; transition: transform .6s cubic-bezier(.4,0,.2,1); font-size: 1rem; line-height: 1.3; overflow: hidden; }
.front { background: #000; color: #fff; display: flex; flex-direction: column; justify-content: flex-end; border-bottom: 6px solid #d6001c; }
.front h3 { font-family: 'Archivo', sans-serif; font-size: 1.35rem; color: #fff; margin: 0; }
.front small { color: #9a9ca3; font-size: .85rem; }
.back { background: #fff; border: 1px solid #b4b5bb; border-top: 6px solid #d6001c; transform: rotateY(180deg); }
.on .front { transform: rotateY(-180deg); }
.on .back { transform: rotateY(0); }
</style>