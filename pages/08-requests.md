---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 7 of 8</div>

# Requests and fulfillment

<p>ARM decides. AFX applies.</p>

<Trail :at="7" />

---
transition: slide-left
---

# A request, live

<div class="cols">
<RequestCard />
<div class="stack">
<CountUp :value="4" label="workflow types" />
<div>
<span class="tag">Request</span><span class="tag">Approval</span><span class="tag">Fulfillment</span><span class="tag">Escalation</span>
</div>
<div class="note" style="margin:0">Pending Verification ends only when collection sees the change.</div>
</div>
</div>

---
transition: rsa-slash
---

# AFX: automatic or manual

<div class="cols wl">
<AfxDiagram />
<div class="stack">
<div class="card r"><h3>Connector found</h3>Change applied automatically</div>
<div class="card g"><h3>No connector</h3>Becomes a manual task</div>
<div>
<span class="tag">Deployed</span><span class="tag r">Running</span><span class="tag">Paused</span><span class="tag">Stopped</span>
</div>
</div>
</div>