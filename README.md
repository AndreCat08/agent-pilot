# Agent Pilot

Repo wah untuk uji coba pipeline multi-agent: **BA → Dev → QA**.

Bukan repo produk. Isinya sengaja kecil dan tanpa dependency, jadi QA agent bisa
nge-verify tanpa `npm install` sama sekali.

## Stack

Node.js built-in saja — zero dependency.

| Perlu | Command |
|---|---|
| Syntax check | `npm run check` |
| Test | `npm test` |

`check` = `node --check` per file. `test` = `node --test` dengan glob (Node 22 tidak
menerima directory sebagai argumen). Tidak ada linter eksternal, tidak ada build step.

## Struktur

```
src/lib.js       ← business rules murni (tanpa I/O) supaya gampang diuji
test/lib.test.js ← node:test
src/index.js     ← entry point (opsional)
```

## Cara agent kerja di repo ini

1. Baca `AGENTS.md` — aturan main.
2. Baca `.claude/agents/<role>.md` sesuai peran.
3. Untuk task ID `T-123`, tulis/baca artifact di `.ai/tasks/T-123/`.
   Jangan taruh artifact di luar folder itu.

## Untuk manusia

Review lewat Pull Request. Tidak ada auto-merge.
