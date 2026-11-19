---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 9 of 10</div>

# Diagnostics

<p>Know what failed, and restart safely.</p>

<Trail :at="9" />

---
transition: slide-left
---

# Tools and safe restart

<div class="grid grid-cols-3 gap-4">
<div class="card r"><h3>Monitoring</h3>Every run, with its result</div>
<div class="card r"><h3>Admin Errors</h3>Failures in one place</div>
<div class="card r"><CountUp :value="30" suffix=" d" label="of logs to export" /></div>
</div>

<h2 class="mt-6">Safe restart order</h2>
<div class="mt-3">
<Timeline :speed="1100" :items="[
  { t: 'Maintenance on' },
  { t: 'Stop AFX, agent' },
  { t: 'Stop ACM, Oracle' },
  { t: 'Start in reverse' },
  { t: 'Maintenance off' }
]" />
</div>

---
transition: rsa-zoom
---

# Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Aborted (circuit breaker) | Bad mapping or bulk change | Read Raw Data, re-run |
| Collector fails | Certificate lost | Re-select, test |
| Stuck sending to AFX | Services hung | Safe restart |
| Pending Verification | Value differs at source | Fix mapping, recollect |
| Rules never run | Global triggers off | Enable, process |
| SoD flags wrong items | Wrong entitlement set | Edit the set |