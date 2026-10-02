# AGENTS.md

Aturan main buat semua AI agent yang kerja di repo ini. Baca ini dulu, sebelum role file.

## Dasar

- Repo ini **pilot pipeline**, bukan produk. Fokus: loop BA → Dev → QA berjalan rapi.
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

- `spec.md` — dari BA
- `impl-notes.md` — dari Dev
- `qa-report.md` — dari QA

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

## Git

- Branch: `agent/<TASK-ID>`
- Commit message: `<TASK-ID>: <apa yang berubah>`
- Buka **Draft PR**. Jangan pernah merge sendiri. Jangan push langsung ke `main`.

## Bahasa

Balasan dan komentar pakai **Bahasa Indonesia**. Kode, nama file, dan command tetap Inggris.
