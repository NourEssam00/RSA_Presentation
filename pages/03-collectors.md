---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 3 of 10</div>

# Collectors

<p>How data gets in, and how it is protected.</p>

<Trail :at="3" />

---
transition: slide-left
---

# Run order matters

<div class="cols wl">
<CollectorStack />
<div class="stack">
<div class="card r"><h3>Collection comes first</h3>Every other governance task depends on it. Scheduled or on demand, from a native source or a flat file.</div>
<div>
<b style="font-size:1rem">Six collector types</b><br>
<span class="tag r">Identity</span><span class="tag r">Account</span><span class="tag r">Entitlement</span><span class="tag">Data access</span><span class="tag">Role</span><span class="tag">App metadata</span>
</div>
<div class="note" style="margin:0">Accounts need identities. Entitlements need accounts. Wrong order means everything arrives orphaned.</div>
</div>
</div>

---
transition: rsa-slash
---

# The circuit breaker

<div class="cols">
<div class="stack">
<CountUp :value="5" suffix="%" label="default change threshold" />
<div class="card g">If a collection changes too much too fast, processing stops, so a broken feed <b>cannot quietly rewrite</b> the access picture.</div>
<div class="note" style="margin:0">An abort is information. Read Raw Data first.</div>
</div>
<CircuitBreaker />
</div>

---
transition: slide-left
---

# Unification: one person, one record

<div class="cols wl">
<div class="stack">
<UnifyDiagram />
<div class="note" style="margin:0">Joins sources on <b>User ID</b>. Run it right after identity collection. Before it, G&L knows accounts. After it, G&L knows <b>people</b>.</div>
</div>
<div class="stack">
<div v-click class="card r"><h3>Authority is ranked</h3>Each source has a processing order. HR usually comes first, so HR wins a conflict.</div>
<div v-click class="card r"><h3>Duplicates are flagged</h3>Isolated with a logical flag, never silently deleted.</div>
<div v-click class="card r"><h3>Records are permanent</h3>Removed at source? An <code>Is Deleted</code> flag is set. The audit trail outlives the job.</div>
</div>
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