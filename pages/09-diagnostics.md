---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 8 of 8</div>

# Diagnostics

<p>Know when a step fails, why, and how to restart safely.</p>

<Trail :at="8" />

---
transition: slide-left
---

# The diagnostics toolbox

<div class="grid grid-cols-3 gap-4 mt-3">
<div class="card r"><h3>Monitoring</h3>Every collector, rule and review run, with its result</div>
<div class="card r"><h3>Diagnostics</h3>Export 30 days of ASR logs for support</div>
<div class="card r"><h3>Admin Errors</h3>Failures surfaced in one place</div>
</div>

<h2 class="mt-5">AFX connector states</h2>
<div class="flow mt-2" style="gap:1.3rem">
<div>Deployed</div><div>Running</div><div>Paused</div><div>Stopping</div><div>Stopped</div>
</div>

---
transition: rsa-flip
---

# Restarting the whole system safely

<div class="steps mt-3">
<div><b>1</b>Maintenance mode on</div>
<div><b>2</b><code>afx stop</code> on both hosts</div>
<div><b>3</b>Stop remote agent, wait 5 min</div>
<div><b>4</b><code>acm stop</code></div>
<div><b>5</b><code>acm stoporacle</code>, then <code>startoracle</code></div>
<div><b>6</b><code>acm start</code>, <code>acm status</code></div>
<div><b>7</b>Run <code>agent_start.bat</code></div>
<div><b>8</b><code>afx start</code> on both hosts</div>
<div><b>9</b>Maintenance mode off</div>
</div>

<div class="note">While maintenance mode is on, only AveksaAdmin can log in.</div>

---
transition: rsa-zoom
---

# Troubleshooting playbook

| Symptom | Root cause | Fix |
|---|---|---|
| Aborted (Circuit Breaker) | Bad mapping or bulk change | Read Raw Data, fix, re-run |
| AD collector fails | Certificate selection lost | Re-select it, test connection |
| Stuck at Send to AFX | Services hung | Restart in the safe order |
| Pending Verification forever | Requested value differs from collected | Fix mapping, revert, recollect |
| Rules never process | Global triggers off | Enable, Process Rules once |
| SoD finds the wrong thing | Wrong entitlement set | Edit the set |