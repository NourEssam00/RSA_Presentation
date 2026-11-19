---
transition: rsa-slash
---

# End to end

<div class="cols wl">
<LoopDiagram :labels="['Collect', 'Certify', 'Enforce', 'Request', 'Fulfill', 'Analyze']" center="Verify" sub="then the loop repeats" />
<div class="stack">
<div class="card g"><h3>Roles</h3>Compress many entitlements into few</div>
<div class="card g"><h3>Analytics</h3>Shows the state of it all</div>
<div class="card g"><h3>Diagnostics</h3>Tells you when a step fails</div>
</div>
</div>

---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 10 of 10</div>

# What we take from it

<p>The product is the easy part to learn. The judgements underneath it are what our project has to get right.</p>

<Trail :at="10" />

---
transition: slide-left
---

# Three tensions the design does not resolve

<div class="grid grid-cols-3 gap-4 tn">
<div v-click class="card r">
<small>Roles</small>
<h3>Broad roles vs least privilege</h3>
<p>RSA says a role should cover the most users and entitlements <b>and</b> give the least privilege needed. They pull opposite ways, which is why role quality is measured.</p>
</div>
<div v-click class="card r">
<small>Rules</small>
<h3>Detect vs prevent</h3>
<p>Detect only, and you get a backlog nobody clears. Prevent only, and you cannot see the mess already there. You need both, and one rule serves both.</p>
</div>
<div v-click class="card k">
<small>SoD</small>
<h3>Remove risk vs accept it</h3>
<p>Some conflicting access is legitimate. Keeping it needs a written justification, a named owner and an expiry, at most <b>180 days</b>. The difference from ignoring it is the record.</p>
</div>
</div>

<style>
.tn .card { display: flex; flex-direction: column; }
.tn small { font-size: .8rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--red); }
.tn h3 { font-size: 1.2rem; margin: .2rem 0 .4rem; }
.tn p { font-size: 1rem; line-height: 1.38; margin: 0; }
</style>

---
transition: rsa-flip
---

# A control nobody understands is not a control

<div class="cols" style="align-items:stretch">
<div class="card bd">
<small>What the manager is asked to certify</small>
<code class="ent">CN=FIN-GL-APPR-02</code>
<p>Refusing costs them something. Approving costs nothing visible. <b>So they approve.</b></p>
</div>
<div v-click class="card r bd">
<small>With a business description</small>
<div class="ent plain">Can approve general-ledger journal entries</div>
<p>Now they stop and think about whether this person needs it.</p>
</div>
</div>

<div v-click class="note">Business Descriptions give every entitlement, role and group a plain-language name, to “lessen the likelihood of <b>rubber stamping</b> during reviews”. The quality of a decision is bounded by how well it was explained.</div>

<style>
.bd small { display: block; font-size: .85rem; font-weight: 700; color: var(--g4); text-transform: uppercase; letter-spacing: .05em; margin-bottom: .6rem; }
.bd .ent { display: block; font-size: 1.35rem; padding: .7rem .9rem; margin-bottom: .7rem; background: var(--g1); color: var(--ink); border-radius: 4px; }
.bd .plain { background: #fdeaed; color: var(--red-dark); font-weight: 700; font-size: 1.25rem; }
.bd p { margin: 0; font-size: 1.05rem; }
</style>

---
transition: slide-left
---

# The governance tool is governed

<div class="cols" style="align-items:start">
<div class="card r">
<h3>Least privilege, applied inward</h3>
<p style="font-size:1rem;margin:.1rem 0 .5rem">G&L governs its own admins. For the <code>AveksaAdmin</code> superuser:</p>
<ul class="tight">
<li>Restrict it to a few trusted users</li>
<li>Change its password on first login, and regularly</li>
<li>Use a System Administrator role day to day</li>
<li>Never use it to perform reviews</li>
</ul>
</div>
<div class="card k">
<h3>Permanence cuts both ways</h3>
<p style="font-size:1rem;margin:.1rem 0 .5rem">A collected user is never fully deleted. Good for audit, a liability for privacy.</p>
<ul class="tight">
<li>Keep personal data out of user attributes</li>
<li>Never use national ID or passport numbers as identifiers</li>
<li>Anonymise kept records into irreversible hashes</li>
</ul>
</div>
</div>

<div v-click class="note">A system that remembers everyone forever has to answer to <b>privacy law</b> as well as to audit.</div>

<style>
.tight { margin: 0; font-size: 1rem; }
.tight li { margin: .15rem 0; }
.card.k li::marker { color: var(--red); }
</style>

---
transition: rsa-zoom
---

# What we will build

<Timeline :speed="1500" :items="[
  { t: 'Define the scenario', s: 'Organisation, identity source, 2 to 3 apps' },
  { t: 'Get the picture right', s: 'Collector order, source ranking, descriptions' },
  { t: 'Encode the policy', s: 'One SoD rule, a full JML set, roles' },
  { t: 'Close the loop', s: 'Request, AFX, verified by collection' }
]" />

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="card r"><small class="muted">Semester one</small><h3>POC design document</h3></div>
<div class="card k"><small style="color:var(--g3)">Semester two</small><h3>Working proof of concept in the CloudShare tenant</h3></div>
</div>

<div class="note">The goal is to show the loop working end to end, not just describe it.</div>

---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Done</div>

# Thank you

<p>Open questions for discussion:</p>

<div class="qs">
<span>Scope of the scenario</span>
<span>Which applications to connect</span>
<span>How we evidence governance outcomes, not only configuration</span>
</div>

<style>
.qs { display: flex; flex-direction: column; gap: .5rem; margin-top: .4rem; }
.qs span { color: #fff; font-size: 1.25rem; border-left: 4px solid #d6001c; padding-left: .8rem; }
</style>
