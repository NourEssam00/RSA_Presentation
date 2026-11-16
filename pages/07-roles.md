---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 6 of 8</div>

# Roles: the Business Role Manager

<p>Compress many entitlements into few, simple roles.</p>

<Trail :at="6" />

---
transition: slide-left
---

# Application role or role?

<div class="grid grid-cols-2 gap-6">
<div>

| | Application role | Role |
|---|---|---|
| Lives in | External app | G&L |
| Scope | One application | Many |
| Collected by | EDC | RDC or created |
| Quality metrics | No | Yes |
</div>
<div class="flex flex-col gap-3">
<div class="card r"><h3>Business</h3>Groups people by job, department, location</div>
<div class="card r"><h3>Technical</h3>Groups entitlements by function</div>
<div class="card r"><h3>Global</h3>Contains users and other roles</div>
</div>
</div>

---
transition: rsa-zoom
---

# Role lifecycle

<div class="flow mt-6">
<div><b>New</b>Change pending</div>
<div><b>Applied New</b>After Apply Changes</div>
<div class="hot"><b>Committed</b>Live</div>
</div>

<ul class="mt-8">
<li><b>Membership rules</b> compare who should be a member with who is</li>
<li><b>Role analysis</b> suggests members to add, remove, or merge</li>
<li>Adding a member creates <b>indirect change items</b></li>
</ul>

---
transition: rsa-slash
---

# Lab: the San Francisco Role

<div class="flow mt-4">
<div><span class="n">1</span><b>Inspect</b>Location = San Francisco</div>
<div><span class="n">2</span><b>Add members</b>6 matches, plus Samuel (warning)</div>
<div><span class="n">3</span><b>Quality</b>6 percent</div>
<div><span class="n">4</span><b>Tune targets</b>Users 50 to 10, entitlements 40 to 5</div>
<div class="hot"><span class="n">5</span><b>Quality</b>38 percent</div>
</div>

<div class="note mt-8">Removing Samuel makes the membership correct, but quality drops. <b>Correct membership and high quality are different measures.</b></div>