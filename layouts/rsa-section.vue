<template>
  <div class="sec">
    <span class="line" aria-hidden="true" />
    <div class="body"><slot /></div>
  </div>
</template>
<style scoped>
.sec { height: 100%; background: #000; color: #fff; position: relative; overflow: hidden; display: flex; align-items: center; padding: 0 4rem; }
.line { position: absolute; left: 0; top: 0; bottom: 0; width: 16px; background: #d6001c; animation: grow 1.1s cubic-bezier(.7,0,.2,1) both; transform-origin: top; }
@keyframes grow { from { transform: scaleY(0); } }
.body { max-width: 52rem; }
.body :deep(h1) { font-family: 'Archivo', sans-serif; font-size: 3.6rem; font-weight: 800; line-height: 1.05; letter-spacing: -.03em; color: #fff; padding: 0; margin: .2rem 0 .8rem; }
.body :deep(h1)::after { display: none; }
.body :deep(.part) { font-size: 1.3rem; color: #d6001c; font-weight: 700; }
.body :deep(p) { color: #b4b5bb; font-size: 1.4rem; line-height: 1.4; }
</style>