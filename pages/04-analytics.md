---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 4 of 10</div>

# Analytics

<p>Turn collected data into answers.</p>

<Trail :at="4" />

---
transition: slide-left
---

# Reports, charts, dashboards

<div class="cols wl">
<AnalyticsDemo />
<div class="stack">
<div class="card r"><h3>Jaspersoft reports</h3>Predefined templates or custom. Parameterized, so one definition replaces ten.</div>
<div class="card r"><h3>Exports</h3>CSV, PDF, XLS and more</div>
<div class="card r"><h3>Visibility</h3>Governed too: user constraints decide who sees what</div>
</div>
</div>

---
transition: rsa-flip
---

# Dashboards and the Risk Engine

<div class="cols">
<div class="stack">
<div class="card g quote2">“Generate detailed access reports showing exactly who has access to what across your enterprise.”<br><small class="muted">RSA G&L, Analytics Administration</small></div>
<div>
<b style="font-size:1rem">Three kinds of dashboard</b><br>
<span class="tag">Home</span><span class="tag">Topic</span><span class="tag">Object</span>
</div>
</div>
<div class="card k">
<small class="red" style="font-weight:700;letter-spacing:.06em">NEW IN RELEASE 8.0</small>
<h2>Risk Engine</h2>
<p>Dashboard components that read from a risk model:</p>
<span class="tag">Risk scoring and spread</span><span class="tag">Role risk ranking</span><span class="tag">Coverage %</span><span class="tag">Compliance status</span>
</div>
</div>

<div v-click class="note">The shift in 8.0: the platform stopped only <b>recording</b> access and started <b>reasoning about risk</b>. That is what our project builds on.</div>

<style>
.quote2 { font-size: 1.15rem; line-height: 1.4; }
</style>