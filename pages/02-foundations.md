---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 1 of 8</div>

# Foundations

<p>The data model behind everything.</p>

<Trail :at="1" />

---
transition: slide-left
---

# Five data objects

<p class="muted" style="margin:0 0 .8rem">Click a card to flip it.</p>

<div class="grid grid-cols-5 gap-3">
<FlipCard title="Users">The people who hold access. Never fully deleted.</FlipCard>
<FlipCard title="Accounts">The way into an application. No rights on their own.</FlipCard>
<FlipCard title="Entitlements">What you can do inside a resource.</FlipCard>
<FlipCard title="Business sources">Directories and applications under control.</FlipCard>
<FlipCard title="Roles">Bundles of access that simplify review.</FlipCard>
</div>

<div v-click class="note">Attributes are <b>collected</b> from the source or <b>managed</b> in G&L.</div>

---
transition: rsa-flip
---

# Accounts and entitlements

<div class="cols">
<AccountTypes />
<div class="stack">
<div class="card r"><h3>Resource-action</h3>Submit on Expense Report</div>
<div class="card r"><h3>Application role</h3>A named group, may nest</div>
<div class="card r"><h3>Role</h3>Defined in G&L, spans apps</div>
</div>
</div>