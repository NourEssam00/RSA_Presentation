---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 4 of 8</div>

# Access reviews

<p>Managers certify who keeps what, and revoked access becomes a change request.</p>

<Trail :at="4" />

---
transition: slide-left
---

# The review lifecycle

<div class="flow mt-6">
<div><span class="n">1</span><b>Prepare</b>Collect data, add descriptions</div>
<div><span class="n">2</span><b>Define</b>Type, reviewers, states</div>
<div><span class="n">3</span><b>Run</b>Manual, scheduled, or by rule</div>
<div><span class="n">4</span><b>Perform</b>Maintain, Revoke, Replace</div>
<div class="hot"><span class="n">5</span><b>Change requests</b>Revokes are fulfilled</div>
</div>
<div class="loopback">Collection confirms the change, then the watch closes</div>

<div class="note mt-8">A result is a <b>snapshot</b>. Owners refresh it until it is set to Complete.</div>

---

# Who does what

<div class="grid grid-cols-3 gap-4 mt-3">
<div class="card r"><h3>Owner</h3>Defines, runs, activates</div>
<div class="card r"><h3>Monitor</h3>Tracks progress, can reassign</div>
<div class="card r"><h3>Reviewer</h3>Usually the supervisor</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="card k">

## Look here first
<span class="tag">Violations</span><span class="tag">Exceptional access</span><span class="tag">Expiring soon</span><span class="tag">Never reviewed</span>
</div>
<div class="card g">

## Escalations
Reminders and reassignments, triggered by days after the start.
</div>
</div>

---
transition: rsa-flip
---

# Lab 3.1 and 3.2: two definitions

<div class="grid grid-cols-2 gap-5 mt-2">
<div class="card r">

## Great Plains Access Review
- Type **User Access**, 2 weeks
- Supervisors review subordinates
- States: Keep, Keep with Expiration, Remove
- Reminder at day 3 if nothing reviewed
</div>
<div class="card r">

## Orphaned Accounts Review
- Type **Account Access and Ownership**
- Orphans not reviewed in 90 days
- Business owners review
- Extra states: Lock, Unlock
</div>
</div>

<div class="note">Comments are required for Keep with Expiration, Remove, Lock and Unlock.</div>

---
transition: rsa-slash
---

# Lab 3.3: running and performing

<Stepper height="260px" :items="[
  { title: 'Owner runs it', body: 'Run Review on the active definition.\nResult: Great Plains Access Review-1.' },
  { title: 'Reviewer acts', body: 'Denise Benson keeps 8 Common Access items.\nShe removes 2 Never Reviewed contractors, with a comment.' },
  { title: 'Out of office', body: 'Deepak Taneja delegates to Denise.\nHis reviews appear under her My Tasks.' },
  { title: 'Account review', body: 'Chris Parsons keeps account br3488 and adds a user.\nSave and Exit to finish later.' }
]" />