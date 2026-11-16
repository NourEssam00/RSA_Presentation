---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 5 of 8</div>

# Rules: JML and SoD

<p>Policy that detects and responds by itself.</p>

<Trail :at="5" />

---
transition: slide-left
---

# A rule detects, then acts

<div class="flow mt-6">
<div><span class="n">1</span><b>Metadata</b>Name, type, owner</div>
<div><span class="n">2</span><b>Condition</b>Who and what</div>
<div><span class="n">3</span><b>Action</b>Request, email, review, disable</div>
<div class="hot"><span class="n">4</span><b>Trigger</b>Schedule or after collection</div>
</div>

<div class="mt-6">
<span class="tag">Attribute Change</span><span class="tag">Entitlement Change</span><span class="tag">Group Membership</span><span class="tag">Joiner/Mover</span><span class="tag">Termination</span><span class="tag r">Segregation of Duties</span>
</div>

<div class="note">Rules live in <b>Rule Sets</b>. They only run if global triggers are enabled.</div>

---

# Joiner, mover, leaver

<div class="grid grid-cols-3 gap-4 mt-3">
<div class="card r"><h3>Joiner</h3>New person in HR.<br><b>Lab rule:</b> new HR users get the HR AD group.</div>
<div class="card r"><h3>Mover</h3>Department, job code or location changes.<br><b>Lab rule:</b> revoke all, set Transfer Date.</div>
<div class="card r"><h3>Leaver</h3>Terminated or inactive.<br><b>Lab rule:</b> disable accounts, revoke access.</div>
</div>

<div class="note mt-5">JML needs clean HR data: dates, status, role, department, manager.</div>

---
transition: rsa-flip
---

# Segregation of duties: try it

<div class="grid grid-cols-2 gap-6">
<div>

- Violation = **both** sets held
- Define sets from metadata, not pairs
- A correlation spec cuts false positives
- Requests can warn before a violation exists
</div>
<SoDDemo />
</div>

---
transition: rsa-slash
---

# Lab: two rules were broken

<div class="grid grid-cols-2 gap-5 mt-4">
<div class="card r"><h3>Wrong entitlement set</h3>Set 2 held <code>users:delete</code>. Replaced with <code>expense report \ approve</code>.</div>
<div class="card r"><h3>Nothing processed</h3>All global processing triggers were unchecked. Enabled them, plus per-rule scheduling.</div>
</div>

<div class="flow mt-8">
<div><b>Rule fixed</b></div>
<div><b>Triggers on</b></div>
<div class="hot"><b>Rules process</b>after every collection</div>
</div>

---

# Lab: running JML and SoD

<div class="kpis mt-2">
<div class="kpi"><b>2</b><span>leavers</span></div>
<div class="kpi"><b>1</b><span>mover</span></div>
<div class="kpi"><b>1</b><span>joiner</span></div>
<div class="kpi"><b>50</b><span>violations</span></div>
<div class="kpi"><b>4</b><span>change requests</span></div>
</div>

<div class="grid grid-cols-2 gap-5 mt-6">
<div class="card r"><h3>Revoke</h3>Jeff Barron keeps Submit and loses Approve. The violation closes.</div>
<div class="card k"><h3>Maintain</h3>Dan Peterson keeps both. It becomes exceptional access with a justification and an expiry, 180 days at most.</div>
</div>