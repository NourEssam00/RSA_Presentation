<template>
  <div class="cover">
    <div class="left"><slot /></div>
    <div class="right" aria-hidden="true">
      <span class="grid" />
      <span class="sq" />
      <span class="sq2" />
      <span class="ring" />
    </div>
  </div>
</template>
<style scoped>
.cover { display: grid; grid-template-columns: 1.25fr 1fr; height: 100%; background: #fff; }
.left { padding: 3.4rem 2.6rem 2rem 3.4rem; display: flex; flex-direction: column; justify-content: center; }
.left :deep(h1) { font-family: 'Archivo', sans-serif; font-size: 2.9rem; line-height: 1.02; font-weight: 800; letter-spacing: -.03em; padding: 0; margin: 0 0 1rem; }
.left :deep(h1)::after { display: none; }
.left :deep(.rule) { width: 70px; height: 6px; background: #d6001c; margin: 0 0 1.1rem; }
.left :deep(.sub) { font-size: 1.05rem; color: #3a3b41; max-width: 30rem; line-height: 1.4; }
.left :deep(.meta) { margin-top: 2.2rem; font-size: .8rem; color: #6a6c74; }
.left :deep(.hint) { margin-top: .5rem; font-size: .72rem; color: #9a9ca3; }
.right { position: relative; background: #000; overflow: hidden; }
.grid { position: absolute; inset: 0; background-image: linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px); background-size: 36px 36px; }
.sq { position: absolute; width: 210px; height: 210px; background: #d6001c; left: 20%; top: 22%; animation: spin 26s linear infinite; }
.sq2 { position: absolute; width: 120px; height: 120px; border: 2px solid #fff; left: 46%; top: 50%; animation: spin 18s linear infinite reverse; }
.ring { position: absolute; width: 90px; height: 90px; border-radius: 50%; border: 10px solid #6a6c74; right: 14%; bottom: 12%; animation: pulse 4s ease-in-out infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes pulse { 50% { transform: scale(1.25); opacity: .5; } }
</style>