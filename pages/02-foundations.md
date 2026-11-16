---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 1 of 8</div>

# Foundations

<p>The data model, and the Prestige lab where everything is practiced.</p>

<Trail :at="1" />

---
transition: slide-left
---

# Data objects: the vocabulary

Click a card to flip it.

<div class="grid grid-cols-5 gap-3 mt-3">
<FlipCard title="Users">The people who hold access. Kept for audit, never fully deleted.</FlipCard>
<FlipCard title="Accounts">The way into an application. They do not say what you can do.</FlipCard>
<FlipCard title="Entitlements">Privileges inside a resource, like Submit on Expense Report.</FlipCard>
<FlipCard title="Business sources">The directories and applications you want to control.</FlipCard>
<FlipCard title="Roles">Bundles of entitlements or members, to simplify review.</FlipCard>
</div>

<div v-click class="note">Attributes are <b>collected</b> from the source or <b>managed</b> inside G&L.</div>

---

# Accounts and entitlements: three kinds each

<div class="grid grid-cols-2 gap-6 mt-2">
<div>

## Account types
<div class="flow v" style="gap:.9rem">
<div><b>User</b>Mapped to one person</div>
<div><b>Shared</b>Mapped to many people</div>
<div class="bad"><b>Orphan</b>Mapped to nobody. Never shown in user reviews.</div>
</div>
</div>
<div>

## Entitlement types
<div class="flow v" style="gap:.9rem">
<div><b>Resource-action</b>Submit on Expense Report</div>
<div><b>Application role</b>A named group, may nest</div>
<div><b>Role</b>Defined in G&L, spans applications</div>
</div>
</div>
</div>

<div class="note mt-6">Collect entitlements <b>at the level they are granted</b>.</div>

---
transition: rsa-flip
---

# Lab: the Prestige environment

<div class="grid grid-cols-3 gap-4 mt-5">
<div class="card r"><h3>DC / Jumphost</h3>Active Directory, CA, mail, your desktop</div>
<div class="card k" style="text-align:center"><h3>G&L 8.0 server</h3>The application, on SUSE Linux</div>
<div class="card r"><h3>AFX host</h3>Remote fulfillment server</div>
</div>
<div class="grid grid-cols-3 gap-4 mt-3">
<div></div>
<div class="card r" style="text-align:center"><h3>Organization database</h3>HR and app data, remote agent</div>
<div></div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="card g"><b>cmorris</b> (System Administrator) does the daily work</div>
<div class="card g"><b>AveksaAdmin</b> only for setup and break-glass</div>
</div>

---

# Lab 1.1: first settings

<div class="grid grid-cols-3 gap-4 mt-3">
<div class="card r">

## System
- Environment name `DEVELOPMENT-1`
- `custom.HourlySchedule` = `1,2,4,6,10`
- Allow sanitized HTML
</div>
<div class="card r">

## Interface
- Login message in HTML
- Session timeout 90 minutes
- Uploaded three logos and background
</div>
<div class="card r">

## Admin menu
- Monitoring: every run result
- Diagnostics, Admin Errors
- Attributes, Descriptions, Dashboards
</div>
</div>

<div class="note">The Help Center is context-sensitive on every page.</div>