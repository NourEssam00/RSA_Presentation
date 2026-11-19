---
transition: rsa-zoom
---

# What we will cover

<Agenda />

---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 1 of 10</div>

# Why governance

<p>Every organisation grants access. Very few can say who has what, and whether they should.</p>

<Trail :at="1" />

---
transition: slide-left
---

# Who has access to what, and should they still?

<div class="cols wr">
<div class="stack">
<p class="lead" style="margin:0">Access is granted constantly: on joining, on promotion, for a project, in an emergency.</p>
<p class="lead red" style="margin:0"><b>It is almost never taken away with the same urgency.</b></p>
</div>
<div class="stack">
<h3 style="margin:0">Three things an organisation must prove</h3>
<div v-click class="proof"><span>1</span>Every account belongs to someone who still works here.</div>
<div v-click class="proof"><span>2</span>Every privilege matches what that person actually does.</div>
<div v-click class="proof"><span>3</span>Someone accountable looked at it recently and said so.</div>
</div>
</div>

<div v-click class="note">Auditors do not ask whether access is secure. They ask for <b>evidence that somebody checked</b>, and when.</div>

<style>
.proof { display: flex; gap: .8rem; align-items: center; border: 1px solid var(--g2); border-left: 5px solid var(--red); padding: .55rem .9rem; border-radius: 4px; }
.proof span { flex: none; width: 2rem; height: 2rem; border-radius: 50%; background: var(--black); color: #fff; display: grid; place-items: center; font-weight: 800; }
</style>

---
transition: rsa-slash
---

# The cost of doing it by hand

<div class="cols wr">
<div class="stack">
<CountUp :value="36" suffix="+ weeks" label="for a single access certification cycle" />
<div class="note" style="margin:0">The failure is not that nobody reviews access. It is that the answer is <b>stale before anyone reads it</b>.</div>
</div>
<div class="card k quote">
<p>“A typical review process may last 36 weeks or more. The reason is because there are many manual processes, and by the time reviews are sent for auditing they become old records and do not reflect the actual current data.”</p>
<small>RSA G&L, Reviews, Module 1</small>
</div>
</div>

<style>
.quote p { font-size: 1.3rem; line-height: 1.4; margin: 0 0 .7rem; }
.quote small { color: var(--g3); }
</style>

---
transition: slide-left
---

# Where the 36 weeks go

| Stage | By hand | Governed |
|---|---|---|
| **Collection** | Admins run reports and extracts, someone reconciles them in a desktop database | Scheduled, automated collection into one central system |
| **Review** | Spreadsheets emailed to managers, then a loop the course calls “Reminders & Harassment” | Reviews start automatically, managers decide in a web interface, reminders and escalations are automatic |
| **Remediation** | Results logged, tickets raised, changes made and checked by hand | Results stored centrally, AFX makes the change, collection verifies it |

<div v-click class="note">Nothing in the middle column is incompetent. It is manual, and manual work does not scale to tens of thousands of entitlements.</div>

<style>
.slidev-layout table { font-size: 1rem; }
.slidev-layout td:first-child { white-space: nowrap; }
.slidev-layout td:last-child { color: var(--red-dark); }
</style>

---
transition: rsa-flip
---

# Privilege creep

<div class="cols wl">
<PrivilegeCreep />
<div class="stack">
<div class="card g" style="font-size:1rem">“One of the major causes of inappropriate access is people carrying entitlements from job to job as they move within a company.”<br><small class="muted">RSA G&L, Business Role Manager, Module 1</small></div>
<div class="card r"><h3>The mover is the hard case</h3>Nothing fails, nobody complains, and access quietly piles up.</div>
</div>
</div>

---
transition: slide-left
---

# Access management is not access governance

<div class="grid grid-cols-2 gap-5">
<div class="card k big">
<small>IAM · Identity & Access Management</small>
<h2>Controls the door</h2>
<p>May you come in right now? Authentication, single sign-on, multi-factor, sessions.</p>
<span class="tag">Runtime</span><span class="tag">Answers in milliseconds</span>
</div>
<div class="card r big">
<small class="red">IGA · Identity Governance & Administration</small>
<h2>Decides who holds a key</h2>
<p>Should you have been given access at all, and should you still have it?</p>
<span class="tag">Administrative</span><span class="tag">Answers over weeks, with evidence</span>
</div>
</div>

<div v-click class="note">An organisation can have flawless authentication and still fail an audit. Strong doors say nothing about whether the right people hold the keys. <b>RSA G&L is an IGA platform.</b></div>

<style>
.big { padding: 1.1rem 1.3rem; }
.big small { display: block; font-size: .85rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--g3); }
.big h2 { font-size: 1.7rem; margin: .3rem 0 .4rem; }
.big p { margin: 0 0 .7rem; }
</style>
