---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 4 of 8</div>

# Access reviews

<p>Managers certify who keeps what.</p>

<Trail :at="4" />

---
transition: slide-left
---

# The review lifecycle

<div class="mt-8">
<Timeline :items="[
  { t: 'Prepare', s: 'Collect data' },
  { t: 'Define', s: 'Type, reviewers' },
  { t: 'Run', s: 'Manual or scheduled' },
  { t: 'Perform', s: 'Maintain or revoke' },
  { t: 'Complete', s: 'Snapshot closed' }
]" />
</div>

<div class="grid grid-cols-3 gap-4 mt-10">
<div class="card r"><h3>Owner</h3>Defines and runs</div>
<div class="card r"><h3>Monitor</h3>Tracks progress</div>
<div class="card r"><h3>Reviewer</h3>Decides, often the supervisor</div>
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