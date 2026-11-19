---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 7 of 10</div>

# Roles: BRM

<p>Fewer, simpler ways to grant access.</p>

<Trail :at="7" />

---
transition: slide-left
---

# Roles shrink the web

<div class="cols wl">
<RolesDiagram />
<div class="stack">
<div class="rtypes">
<div><span class="tag r">Business</span>holds people</div>
<div><span class="tag r">Technical</span>holds entitlements</div>
<div><span class="tag r">Global</span>holds both, even other roles</div>
</div>
<Timeline :items="[{ t: 'New' }, { t: 'Applied' }, { t: 'Committed' }]" :speed="1500" />
<div class="note" style="margin:0">Reviewers judge a <b>job</b>, not a list of LDAP strings. Every role belongs to a role set.</div>
</div>
</div>

<style>
.rtypes { display: flex; flex-direction: column; gap: .2rem; font-size: 1rem; }
</style>

---
transition: rsa-flip
---

# Role quality is a number

<div class="grid grid-cols-3 gap-4">
<CountUp :value="50" label="users per role, default target" />
<CountUp :value="40" label="entitlements per role, default target" />
<CountUp :value="30" suffix=" d" label="measurement window" />
</div>

<p class="muted mt-4" style="margin-bottom:0">“Are our roles any good?” stops being an opinion.</p>

<div class="cols mt-4" style="align-items:stretch">
<div v-click class="card r"><h3>Membership rule</h3>Defines who <b>should</b> hold the role. G&L keeps comparing it against who <b>actually</b> does.</div>
<div v-click class="card k"><h3>Roles audit themselves</h3>Wrong people in? A change request removes them. Right people missing? A review admits them.</div>
</div>
