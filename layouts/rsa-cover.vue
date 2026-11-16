<template>
  <div class="cover">
    <div class="left"><slot /></div>
    <svg class="art" viewBox="0 0 400 480" aria-hidden="true">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <!-- radar rings -->
      <circle cx="200" cy="240" r="70" class="r0" />
      <circle cx="200" cy="240" r="110" class="r0" />
      <circle cx="200" cy="240" r="150" class="r0" />
      <circle cx="200" cy="240" r="190" class="r0" />
      <circle cx="200" cy="240" r="60" class="pulse" />
      <circle cx="200" cy="240" r="60" class="pulse p2" />

      <!-- orbiting identities -->
      <g class="orb o1"><circle cx="310" cy="240" r="7" fill="#fff" /></g>
      <g class="orb o2"><circle cx="350" cy="240" r="9" fill="#8a8c93" /></g>
      <g class="orb o3"><circle cx="390" cy="240" r="7" fill="#d6001c" /></g>
      <g class="orb o4"><circle cx="90" cy="240" r="6" fill="#fff" /></g>

      <!-- shield with keyhole -->
      <g class="shield" filter="url(#glow)">
        <path d="M200 160 C226 174 252 180 274 180 C274 250 266 296 200 336 C134 296 126 250 126 180 C148 180 174 174 200 160 Z" fill="#d6001c" />
        <circle cx="200" cy="232" r="15" fill="#fff" />
        <path d="M192 242 Q200 238 208 242 L213 282 Q200 287 187 282 Z" fill="#fff" />
      </g>

      <!-- key -->
      <g class="key">
        <circle cx="0" cy="0" r="10" fill="none" stroke="#fff" stroke-width="3" />
        <line x1="10" y1="0" x2="58" y2="0" stroke="#fff" stroke-width="3" stroke-linecap="round" />
        <line x1="46" y1="0" x2="46" y2="10" stroke="#fff" stroke-width="3" stroke-linecap="round" />
        <line x1="56" y1="0" x2="56" y2="10" stroke="#fff" stroke-width="3" stroke-linecap="round" />
      </g>

      <!-- access granted badge -->
      <g class="badge">
        <circle cx="330" cy="92" r="20" fill="#fff" />
        <path d="M320 92 L328 100 L342 84" fill="none" stroke="#d6001c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- biometric scan arcs -->
      <g class="scan">
        <path d="M310 420 A10 10 0 0 1 330 420" class="arc a1" />
        <path d="M302 420 A18 18 0 0 1 338 420" class="arc a2" />
        <path d="M294 420 A26 26 0 0 1 346 420" class="arc a3" />
        <path d="M286 420 A34 34 0 0 1 354 420" class="arc a4" />
        <circle cx="320" cy="420" r="4" fill="#fff" />
      </g>
    </svg>
  </div>
</template>
<style scoped>
.cover { display: grid; grid-template-columns: 1.35fr 1fr; height: 100%; background: #000; color: #fff; overflow: hidden; }
.left { padding: 3rem 1.6rem 2rem 3.4rem; display: flex; flex-direction: column; justify-content: center; }
.left :deep(.pip) { width: 18px; height: 18px; border-radius: 50%; background: #d6001c; margin-bottom: 1.1rem; box-shadow: 0 0 0 0 rgba(214, 0, 28, .6); animation: pip 2.4s ease-out infinite; }
@keyframes pip { 100% { box-shadow: 0 0 0 16px rgba(214, 0, 28, 0); } }
.left :deep(h1) { font-family: 'Archivo', sans-serif; font-size: 3rem; line-height: 1.02; font-weight: 800; letter-spacing: -.03em; padding: 0; margin: 0 0 1.6rem; color: #fff; }
.left :deep(h1)::after { display: none; }
.left :deep(.credit) { font-size: 1.1rem; line-height: 1.45; color: #d8d9dd; margin: 0 0 .9rem; max-width: 31rem; }
.left :deep(.credit b) { color: #d6001c; }
.art { width: 100%; height: 100%; align-self: center; }

.r0 { fill: none; stroke: #2c2d33; stroke-width: 1.5; }
.pulse { fill: none; stroke: #d6001c; stroke-width: 2; transform-box: fill-box; transform-origin: center; animation: ping 4.5s ease-out infinite; opacity: 0; }
.pulse.p2 { animation-delay: 2.25s; }
@keyframes ping { 0% { transform: scale(1); opacity: .8; } 100% { transform: scale(3.15); opacity: 0; } }

.orb { transform-origin: 200px 240px; animation: orbit linear infinite; }
.o1 { animation-duration: 14s; } .o2 { animation-duration: 22s; animation-direction: reverse; } .o3 { animation-duration: 30s; } .o4 { animation-duration: 18s; animation-direction: reverse; }
@keyframes orbit { to { transform: rotate(360deg); } }

.shield { animation: float 4s ease-in-out infinite; }
@keyframes float { 50% { transform: translateY(-7px); } }

.key { transform: translate(64px, 408px) rotate(-28deg); }
.key { animation: keyfloat 5s ease-in-out infinite; }
@keyframes keyfloat { 0%, 100% { transform: translate(64px, 408px) rotate(-28deg); } 50% { transform: translate(64px, 398px) rotate(-22deg); } }

.badge { transform-box: fill-box; transform-origin: center; animation: grant 6s ease infinite; opacity: 0; }
@keyframes grant { 0%, 20% { opacity: 0; transform: scale(.3); } 28%, 70% { opacity: 1; transform: scale(1); } 80%, 100% { opacity: 0; transform: scale(.3); } }

.arc { fill: none; stroke: #8a8c93; stroke-width: 3; stroke-linecap: round; animation: scan 2.4s ease-in-out infinite; opacity: .2; }
.a2 { animation-delay: .2s; } .a3 { animation-delay: .4s; } .a4 { animation-delay: .6s; }
@keyframes scan { 0%, 100% { opacity: .2; } 30% { opacity: 1; stroke: #d6001c; } }

@media (prefers-reduced-motion: reduce) { .orb, .shield, .key, .pulse, .badge, .arc, .left :deep(.pip) { animation: none; } }
</style>