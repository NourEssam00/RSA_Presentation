<script setup lang="ts">
import { useNav } from '@slidev/client'
const { currentPage, total } = useNav()
</script>

<template>
  <div class="gb">
    <div class="bar"><i :style="{ width: (currentPage / total) * 100 + '%' }" /></div>
    <div v-if="currentPage > 1" class="lbl">
      RSA Governance &amp; Lifecycle &nbsp;|&nbsp; <b>{{ currentPage }}</b> / {{ total }}
    </div>
  </div>
</template>

<style scoped>
.gb { position: absolute; left: 0; right: 0; bottom: 0; z-index: 50; pointer-events: none; }
.bar { height: 4px; background: rgba(128,128,128,.25); }
.bar i { display: block; height: 100%; background: #d6001c; transition: width .6s cubic-bezier(.2,.8,.2,1); }
.lbl { position: absolute; right: 1.4rem; bottom: .55rem; font-size: .85rem; color: #8a8c93; }
.lbl b { color: #d6001c; }
</style>