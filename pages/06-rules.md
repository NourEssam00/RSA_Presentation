---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 5 of 8</div>

# Rules: JML and SoD

<p>Policy that detects and acts by itself.</p>

<Trail :at="5" />

---
transition: slide-left
---

# Joiner, mover, leaver

<div style="max-width:640px;margin:0 auto"><JMLDiagram /></div>

<div class="mt-3" style="text-align:center">
<span class="tag">Attribute change</span><span class="tag">Entitlement change</span><span class="tag">Group membership</span><span class="tag">Termination</span>
</div>

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