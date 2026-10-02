# AGENTS.md

Aturan main buat semua AI agent yang kerja di repo ini. Baca ini dulu, sebelum role file.

## Dasar

- Repo ini **pilot pipeline**, bukan produk. Fokus: loop BA → Dev → QA → Reviewer → Docs berjalan rapi.
- **Zero dependency.** Jangan pernah `npm install <pkg>`. Kalau butuh sesuatu, pakai
  Node built-in. Kalau emang wajib dependency baru, STOP dan catat sebagai NEEDS_HUMAN.
- CommonJS (`require`), bukan ESM. `'use strict';` di setiap file.

## Sifat tugas

- Buat perubahan kecil dan terukur. Satu task = satu masalah.
- Jangan refactor yang tidak diminta.
- Jangan ubah file di luar `src/`, `test/`, `README.md`, dan artifact task.

## Quality gate — wajib pass sebelum lapor selesai

```bash
npm run check   # node --check src/*.js — syntax
npm test        # node --test dengan glob — unit test
```

Kalau gagal: perbaiki, coba lagi (max 2x). Masih gagal → STOP, tulis `Status: NEEDS_HUMAN`
di report. **Jangan ngaku selesai kalau gate belum pass.**

## Cara lapor

Tulis artifact di `.ai/tasks/<TASK-ID>/`:

- `spec.md` — BA
- `impl-notes.md` — Dev
- `qa-report.md` — QA (perilaku + quality gates)
- `docs-report.md` — Docs (file dokumentasi yang diperbarui; non-blocking)
- `review-report.md` — Reviewer (review akhir atas diff kode + docs)

Setiap report wajib menyebut task ID, status, bukti, dan unresolved items. Status per role:
- QA: `PASS`, `FAIL`, `NEEDS_HUMAN`
- Reviewer: `PASS`, `CHANGES_REQUESTED`, `NEEDS_HUMAN`
- Docs: `UPDATED`, `SKIPPED`, `NEEDS_HUMAN`

QA dan Reviewer adalah **dua gate independen**; masing-masing wajib membaca diff dan menulis
report sendiri. Reviewer tidak boleh menggantikan QA test execution, dan QA tidak memberi
persetujuan atas design/security review.

Format `qa-report.md`:

```markdown
## Task: <TASK-ID>
## Status: PASS / FAIL / NEEDS_HUMAN

## Acceptance Criteria
- [x] kriteria 1 — dibuktikan di test/lib.test.js baris N

## Quality Gate
- Check: PASS
- Test: PASS
```

**Jangan** tulis status `PASS` kalau ada gate yang gagal. Status palsu lebih parah
daripada lapor gagal.


## Reviewer gate

QA dan Reviewer adalah gate terpisah; PASS QA tidak menggantikan review independen.
Setelah QA pass, Docs berjalan non-blocking; Reviewer berjalan terakhir pada diff final
termasuk update docs. Reviewer membaca spec + diff sendiri, menulis
`.ai/tasks/<TASK-ID>/review-report.md`. Reviewer **tidak mengedit kode**.

Format minimum:

```markdown
## Task: <TASK-ID>
## Status: PASS / CHANGES_REQUESTED / NEEDS_HUMAN
## Findings
- [Critical/High/Medium/Low] `file:line` — dampak + bukti + saran
## Checks
- Scope / Security / Regression: PASS / FAIL / N/A
```

`Critical` atau `High` → `CHANGES_REQUESTED`, blokir Draft PR sampai diatasi/review manusia
mengizinkan. `Medium`/`Low` dicatat di report; tidak otomatis memblokir. Reviewer tidak
mengedit kode, tidak mengulang tugas QA. Report wajib berbukti dan actionable.

## Docs role

Docs berjalan **setelah QA PASS, sebelum Reviewer**, menulis `.ai/tasks/<TASK-ID>/docs-report.md`.
Boleh update `README.md` saja pada pilot ini. Jika tidak ada perubahan dokumentasi perlu,
status `SKIPPED` + alasan. Docs non-blocking: kegagalan update docs tidak membatalkan gate
kode, tapi harus dilaporkan transparan.

## Gate akhir pipeline

- QA `PASS` **dan** Reviewer `PASS` → orchestrator boleh buka Draft PR.
- QA `FAIL` atau Reviewer `CHANGES_REQUESTED` → jangan buka/refresh Draft PR; implementasi
  masuk retry terkontrol atau eskalasi manusia.
- Salah satu `NEEDS_HUMAN` → stop, notif manusia, tidak ada auto-merge.
- Docs jalan setelah gate kode, non-blocking; report wajib ada (`UPDATED`/`SKIPPED`/`NEEDS_HUMAN`).

## Git

- Branch: `agent/<TASK-ID>`
- Commit message: `<TASK-ID>: <apa yang berubah>`
- Buka **Draft PR**. Jangan pernah merge sendiri. Jangan push langsung ke `main`.

## Bahasa

Balasan dan komentar pakai **Bahasa Indonesia**. Kode, nama file, dan command tetap Inggris.
