---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 6 of 10</div>

# Rules: JML and SoD

<p>Policy that detects and acts by itself.</p>

<Trail :at="6" />

---
transition: slide-left
---

# Joiner, mover, leaver

<div style="max-width:520px;margin:-.4rem auto 0"><JMLDiagram /></div>

<div class="grid grid-cols-3 gap-3 mt-2 jml">
<div class="card r"><b>Provisioning rules</b>Grant birthright access to new starters</div>
<div class="card r"><b>Attribute change rules</b>Spot movers by department, job code, location</div>
<div class="card r"><b>Termination rules</b>Disable accounts, revoke access immediately</div>
</div>

<style>
.jml .card { font-size: .95rem; padding: .5rem .8rem; }
.jml b { display: block; font-size: 1.05rem; }
</style>

---
transition: rsa-flip
---

# Segregation of duties

<div class="cols">
<div class="stack">
<CountUp :value="2" label="toxic sets held at once = violation" />
<div class="card g">Define sets from metadata. A correlation spec cuts false positives.</div>
<CountUp :value="180" suffix=" d" label="max exceptional access" />
</div>
<SoDDemo />
</div>

---
transition: slide-left
---

# What a rule can do

<div class="cols">
<div class="stack">
<CountUp :value="10" label="rule types, two carry most of the weight: SoD and JML" />
<div>
<b style="font-size:1rem">When a rule fires, it can</b><br>
<span class="tag r">Create change requests</span><span class="tag r">Generate a review</span><span class="tag">Disable or delete accounts</span><span class="tag">Start provisioning</span><span class="tag">Update a managed attribute</span><span class="tag">Send email</span>
</div>
</div>
<div class="stack">
<div v-click class="card"><h3>Detective</h3>Finds the conflicts that already exist across the whole population.</div>
<div v-click class="card k"><h3>Preventive</h3>Warns a requester <b>before submission</b> that the request would create a new violation.</div>
<div v-click class="note" style="margin:0">The same rule does both.</div>
</div>
</div>
