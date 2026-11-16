<script setup lang="ts">
import { ref, computed } from "vue";
const qs = [
  {
    q: "Which collector must run first?",
    o: ["Account (ADC)", "Entitlement (EDC)", "Identity (IDC)"],
    a: 2,
    e: "Accounts map to identities, and entitlements attach to accounts.",
  },
  {
    q: "A run ends as Aborted (Circuit Breaker). What happened?",
    o: [
      "The server crashed",
      "Changes passed the threshold (default 5%), nothing was written",
      "The license expired",
    ],
    a: 1,
    e: "It protects existing data. Read Raw Data, fix the cause, then re-run.",
  },
  {
    q: "Why did the first Register New User request stay in Pending Verification?",
    o: [
      "AFX was down",
      "The approver rejected it",
      "An extra space in the DN meant re-collection could not match it",
    ],
    a: 2,
    e: "AD dropped the space, so the collected name differed from the requested one.",
  },
  {
    q: "Which SoD condition produces a violation?",
    o: [
      "User has either entitlement",
      "User has both entitlement sets",
      "User has neither",
    ],
    a: 1,
    e: "A toxic combination must exist at the same time.",
  },
  {
    q: "Which role type groups users by job, location or department?",
    o: ["Technical role", "Application role", "Business role"],
    a: 2,
    e: "Business roles group people. Technical roles group entitlements.",
  },
];
const n = ref(0);
const pick = ref<number | null>(null);
const score = ref(0);
const done = ref(false);
const cur = computed(() => qs[n.value]);
function choose(i: number) {
  if (pick.value !== null) return;
  pick.value = i;
  if (i === cur.value.a) score.value++;
}
function next() {
  if (n.value === qs.length - 1) {
    done.value = true;
  } else {
    n.value++;
    pick.value = null;
  }
}
function restart() {
  n.value = 0;
  pick.value = null;
  score.value = 0;
  done.value = false;
}
</script>
<template>
  <div class="quiz">
    <div v-if="!done">
      <div class="k">Question {{ n + 1 }} of {{ qs.length }}</div>
      <h2>{{ cur.q }}</h2>
      <button
        v-for="(o, i) in cur.o"
        :key="i"
        class="opt"
        :class="{
          right: pick !== null && i === cur.a,
          wrong: pick === i && i !== cur.a,
        }"
        @click.stop="choose(i)"
      >
        {{ o }}
      </button>
      <p v-if="pick !== null" class="exp">{{ cur.e }}</p>
      <button v-if="pick !== null" class="next" @click.stop="next">
        {{ n === qs.length - 1 ? "See score" : "Next question" }}
      </button>
    </div>
    <div v-else class="end">
      <div class="big">{{ score }}/{{ qs.length }}</div>
      <p>
        {{
          score === qs.length
            ? "Perfect. You can explain the whole flow."
            : "Good. Revisit the troubleshooting slide."
        }}
      </p>
      <button class="next" @click.stop="restart">Try again</button>
    </div>
  </div>
</template>
<style scoped>
.quiz {
  border: 1px solid #e4e4e7;
  border-top: 5px solid #d6001c;
  padding: 1rem 1.4rem;
  max-width: 44rem;
}
.k {
  font-size: 0.95rem;
  color: #d6001c;
  font-weight: 700;
}
h2 {
  margin: 0.3rem 0 0.8rem;
  font-size: 1.35rem;
}
.opt {
  display: block;
  width: 100%;
  text-align: left;
  font: inherit;
  font-size: 1.1rem;
  padding: 0.55rem 0.8rem;
  margin: 0.35rem 0;
  background: #fff;
  border: 1px solid #b4b5bb;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
}
.opt:hover {
  border-color: #000;
}
.opt.right {
  background: #16161a;
  color: #fff;
  border-color: #16161a;
}
.opt.wrong {
  background: #fdeaed;
  border-color: #d6001c;
}
.exp {
  font-size: 1.05rem;
  color: #4a4b52;
  background: #f5f5f6;
  padding: 0.5rem 0.8rem;
  border-left: 4px solid #d6001c;
}
.next {
  font: inherit;
  font-size: 1rem;
  padding: 0.4rem 1.1rem;
  background: #d6001c;
  color: #fff;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0.4rem;
}
.big {
  font-family: "Archivo", sans-serif;
  font-size: 4rem;
  font-weight: 800;
}
</style>
