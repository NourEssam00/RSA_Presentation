---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 2 of 8</div>

# Collectors

<p>How data gets in, and what happens when it goes wrong.</p>

<Trail :at="2" />

---
transition: slide-left
---

# Collectors: the order matters

<div class="flow mt-6">
<div class="hot"><span class="n">1</span><b>Identities</b>IDC, from directories</div>
<div><span class="n">2</span><b>Accounts</b>ADC, mapped to users</div>
<div><span class="n">3</span><b>Entitlements</b>EDC, attached to accounts</div>
</div>

<div class="mt-6">
<span class="tag">Role (RDC)</span><span class="tag">Data access</span><span class="tag">Application metadata</span>
</div>

<div class="note">Run on a schedule or on demand, from a native source or a flat file.</div>

---

# Directories and applications

<div class="grid grid-cols-2 gap-4">
<div class="card r"><h3>Directories</h3>Hold identities. Can supply identities, accounts and entitlements.</div>
<div class="card r"><h3>Applications</h3>Never hold identities. Accounts and entitlements only.</div>
</div>

<h2 class="mt-5">Lab 1.2: what Prestige started with</h2>
<div class="kpis mt-2">
<div class="kpi"><b>191</b><span>users</span></div>
<div class="kpi"><b>2</b><span>directories</span></div>
<div class="kpi"><b>3</b><span>business units</span></div>
<div class="kpi"><b>9</b><span>applications</span></div>
</div>

<div class="note">Business units <b>APJ, America, EMEA</b> are spelled exactly as in the HR file.</div>

---
transition: rsa-flip
---

# Unification: many sources, one person

<div class="flow mt-6">
<div><b>AD identities</b>Email</div>
<div><b>HR identities</b>Business Unit</div>
<div class="hot"><b>Unification</b>Joined on User ID</div>
<div><b>One master record</b>Per person</div>
</div>

<ul class="mt-8">
<li>Attribute sources choose which source wins per attribute</li>
<li>Always run it right after identity collection</li>
</ul>

---
transition: rsa-slash
---

# The circuit breaker

```mermaid {scale: 0.85}
flowchart LR
  A[Collector runs] --> B{First run ever?}
  B -- yes --> OK[Commit changes]
  B -- no --> C{More than 5% changed?}
  C -- no --> OK
  C -- yes --> D{Override ticked?}
  D -- yes --> OK
  D -- no --> X[Aborted: nothing written]
  X --> R[Read Raw Data, fix, re-run]
  classDef bad fill:#d6001c,stroke:#d6001c,color:#fff
  classDef good fill:#16161a,stroke:#16161a,color:#fff
  class X bad
  class OK good
```

<div class="note">Default threshold: <b>5%</b>. An abort is information, not an error.</div>

---

# Try the lab's four situations

<div class="grid grid-cols-2 gap-6">
<div class="lead mt-4">

Pick a preset, then move the slider.

Watch **when** the breaker fires, and **what** lets a run through.
</div>
<CircuitBreaker />
</div>

---
transition: rsa-flip
---

# Lab 1.3: the run that aborted on purpose

<div class="flow mt-5">
<div><b>Collect identities</b>AD and HR together</div>
<div class="bad"><b>Aborted</b>100% changed</div>
<div><b>Raw Data</b>Emails show place names</div>
<div><b>Fix</b>Map Email to <code>mail</code></div>
<div class="hot"><b>Re-run</b>Override ticked</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="card r"><h3>Root cause</h3>AD mapped attribute <code>l</code> (location) to Email Address. HR is authoritative for location.</div>
<div class="card r"><h3>Result</h3>AD run: 0 changes. HR run: 190 changes, the new business units. Override was justified.</div>
</div>

---

# Lab: accounts and entitlements

<div class="grid grid-cols-2 gap-5">
<div>

| Application | Accounts | Entitlements | Orphans |
|---|---|---|---|
| Aveksa | 5 | 366 | 0 |
| Great Plains | 200 | 10 | 4 |
| Payroll | 189 | 25 | 0 |
| RACF | 196 | 65 | 7 |
| SAP | 184 | 17,949 | 0 |
</div>
<div class="flex flex-col gap-3">
<div class="card r"><h3>Do first</h3>AD certificate selected, connection tested</div>
<div class="card r"><h3>Then</h3>Collect accounts and entitlements together</div>
<div class="card g"><h3>Also</h3>Descriptions imported before any review</div>
</div>
</div>

---
transition: rsa-slash
---

# Multi-app collectors

<div class="grid grid-cols-3 gap-4 items-center mt-4">
<div class="flex flex-col gap-2">
<div class="card">Concur, 22</div>
<div class="card">GitHub, 38</div>
<div class="card">Projects, 38</div>
<div class="card">Workday, 24</div>
</div>
<div class="lead" style="text-align:center;color:#d6001c">&rarr;</div>
<div class="flex flex-col gap-3">
<div class="card k"><h3>MAADC</h3>122 accounts and mappings</div>
<div class="card k"><h3>MAEDC</h3>19 entitlements, 9 resources, 322 relationships</div>
</div>
</div>

<div class="note">Eight collectors became two. The only extra setting is the <code>Application</code> column.</div>