---
layout: rsa-section
transition: rsa-wipe
---

<div class="part">Topic 3 of 8</div>

# Analytics

<p>Turn collected data into reports, charts and dashboards.</p>

<Trail :at="3" />

---
transition: slide-left
---

# Three ways to see the data

<div class="grid grid-cols-3 gap-4 mt-4">
<div class="card r"><h3>Reports</h3>Tables from templates or custom SQL on public views. Export to CSV, PDF, XLS and more.</div>
<div class="card r"><h3>Charts</h3>Column, pie, line, bar, area, doughnut. Single or multiple series.</div>
<div class="card r"><h3>Dashboards</h3>Home, Topic, or Object. Visibility follows user constraints.</div>
</div>

<div v-click class="note">A <b>parameterized</b> report or chart asks for values first, so one definition replaces many.</div>

---
transition: rsa-slash
---

# Lab 2.1: a report that mails itself

<div class="flow mt-6">
<div><span class="n">1</span><b>Template</b>User, Unified Users, style Slate</div>
<div><span class="n">2</span><b>Filter</b>Full Time and not terminated</div>
<div><span class="n">3</span><b>Group</b>By Department, sort by Supervisor</div>
<div class="hot"><span class="n">4</span><b>Schedule</b>Monthly PDF, skip if empty</div>
</div>

<div class="note mt-8">Report: <b>Full-Time Users by Department</b>, sent to Jeff Barron. A second template covers User Entitlement by Department.</div>

---

# Labs 2.2 and 2.3: charts and dashboards

<div class="grid grid-cols-2 gap-5">
<div>

```sql
SELECT name,
  ROUND(orphaned_account_count/account_count,2)*100
    AS Orphan_Percentage
FROM acmdb.application
WHERE id = :TargetObjectID
```

Great Plains previewed at **2 percent**.
</div>
<div class="flex flex-col gap-3">
<div class="card r"><h3>Home</h3>Data Summary, System Administrators only</div>
<div class="card r"><h3>Topic</h3>Entitlements per Business Source</div>
<div class="card r"><h3>Object</h3>Orphan chart on each application</div>
</div>
</div>