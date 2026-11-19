---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 8 of 10</div>

# Requests and fulfillment

<p>ARM decides. AFX applies.</p>

<Trail :at="8" />

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
transition: rsa-zoom
---

# What a user can ask for

<div class="grid grid-cols-2 gap-5">
<div class="card r">
<h3>For myself</h3>
<span class="tag">Add access</span><span class="tag">Change access</span><span class="tag">Remove access</span><span class="tag">Reset my password</span>
</div>
<div class="card r">
<h3>For others</h3>
<span class="tag">Add, change, remove access</span><span class="tag">Reset password</span><span class="tag">Terminate user</span><span class="tag">Leave of absence</span><span class="tag">Manage accounts</span><span class="tag">Out of office</span>
</div>
</div>

<div v-click class="card k mt-5"><h3>Not only people ask</h3>Reviews and rules raise requests automatically. A revoke decision or a SoD violation becomes a change request on the same path.</div>

<div class="note">ARM lets business people ask for access while guaranteeing the right approval and fulfilment is applied.</div>

---
transition: rsa-slash
---

# AFX: automatic or manual

<div class="cols wl">
<AfxDiagram />
<div class="stack">
<div class="card r"><h3>Connector found</h3>Binds to one endpoint. Each capability is one action: create account, add entitlement, disable account.</div>
<div class="card g"><h3>No connector</h3>Becomes a manual task. In our lab, finance revocations went manual.</div>
<div>
<span class="tag">Deployed</span><span class="tag r">Running</span><span class="tag">Paused</span><span class="tag">Stopped</span>
</div>
<div class="note" style="margin:0">Failures are retried, then surfaced, never silently dropped.</div>
</div>
</div>