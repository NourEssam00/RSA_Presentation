---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 5 of 10</div>

# Access reviews

<p>Managers certify who keeps what.</p>

<Trail :at="5" />

---
transition: slide-left
---

# The review lifecycle

<p class="muted" style="margin:0">A manager answers one narrow question per person: <b>maintain this access, or revoke it?</b></p>

<div class="mt-6">
<Timeline :items="[
  { t: 'Plan', s: 'Data collected first' },
  { t: 'Create', s: 'Type, reviewers' },
  { t: 'Run', s: 'Manual or scheduled' },
  { t: 'Work with results', s: 'Track and chase' },
  { t: 'Perform', s: 'Maintain or revoke' },
  { t: 'Complete', s: 'Snapshot closed' }
]" />
</div>

<div class="grid grid-cols-3 gap-4 mt-8">
<div class="card r"><h3>Owner</h3>Defines and activates it</div>
<div class="card r"><h3>Monitor</h3>Tracks progress, chases it</div>
<div class="card r"><h3>Reviewer</h3>Decides. Usually the supervisor, can be any user</div>
</div>

---
transition: rsa-slash
---

# From decision to change

<div class="cols wl">
<ReviewAnim />
<div class="stack">
<div>
<span class="tag r">Maintain</span><span class="tag r">Revoke</span><span class="tag r">Replace</span>
</div>
<div class="card k"><h3>Look first</h3>
<span class="tag">Violations</span><span class="tag">Exceptional access</span><span class="tag">Never reviewed</span>
</div>
</div>
</div>

---
transition: slide-left
---

# Six review types

<div class="cols wl">
<div class="grid grid-cols-2 gap-3 rt">
<div class="card"><b>User access</b><span>Entitlements held by people</span></div>
<div class="card"><b>Group definition</b><span>Who is in a group</span></div>
<div class="card"><b>Role definition</b><span>Coarse or fine grained</span></div>
<div class="card"><b>Account access & ownership</b><span>Including orphans</span></div>
<div class="card"><b>Data resource access</b><span>File shares, sites</span></div>
<div class="card"><b>Data resource ownership</b><span>Who owns it at all</span></div>
</div>
<div class="stack">
<div class="card k"><h3>Multi-step reviews</h3>High-risk entitlements go to a second reviewer, who sees what the first decided and why. Ordinary ones finish in one pass.</div>
<div v-click class="note" style="margin:0"><b>Violation remediation</b> is a review of its own: only the access that breaks a segregation-of-duties rule.</div>
</div>
</div>

<style>
.rt .card { padding: .6rem .8rem; border-left: 4px solid var(--red); }
.rt b { display: block; font-size: 1.05rem; }
.rt span { font-size: .95rem; color: var(--g4); }
</style>
