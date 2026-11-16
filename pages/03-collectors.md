---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 2 of 8</div>

# Collectors

<p>How data gets in, and how it is protected.</p>

<Trail :at="2" />

---
transition: slide-left
---

# Run order matters

<div class="cols wl">
<CollectorStack />
<div class="stack">
<div class="card r"><h3>Scheduled or on demand</h3>From a native source or a flat file</div>
<div>
<span class="tag">Role</span><span class="tag">Data access</span><span class="tag">Metadata</span>
</div>
<div class="note" style="margin:0">Accounts need identities. Entitlements need accounts.</div>
</div>
</div>

---
transition: rsa-slash
---

# The circuit breaker

<div class="cols">
<div class="stack">
<CountUp :value="5" suffix="%" label="default change threshold" />
<div class="card g">Unification joins sources on <b>User ID</b>. Run it right after identity collection.</div>
<div class="note" style="margin:0">An abort is information. Read Raw Data first.</div>
</div>
<CircuitBreaker />
</div>

---
transition: rsa-zoom
---

# Directories and applications

<div class="cols">
<div class="stack">
<div class="card r"><h3>Directories</h3>Hold identities, accounts, entitlements</div>
<div class="card r"><h3>Applications</h3>Never hold identities</div>
<div class="card g"><h3>Multi-app collectors</h3>One collector per data type</div>
</div>
<MultiApp />
</div>