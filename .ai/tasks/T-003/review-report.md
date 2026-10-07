## Task: T-003
## Status: PASS

## Findings
- [Low] `.ai/tasks/T-003/impl-notes.md` — file impl-notes.md tidak dibuat oleh Dev; diff kode dan test lengkap serta terverifikasi; saran: pastikan role Dev selalu menulis impl-notes.md sebelum handover ke QA.

## Checks
- Scope sesuai spec: PASS
- Error handling/input validation: PASS
- Security/privacy: PASS
- Regression risk: PASS

## Catatan
- File direview: `src/lib.js`, `test/lib.test.js`, `test/format.test.js`, `.ai/tasks/T-003/spec.md`, `.ai/tasks/T-003/qa-report.md`, `.ai/tasks/T-003/docs-report.md`.
- Implementasi `formatRupiah` menangani integer (`Rp 1.500`), pecahan 2 desimal (`Rp 1.500,56`), nilai negatif `-(Rp 1.500)`, serta validasi non-number/non-finite (`TypeError`).
- Zero dependency dipertahankan, CommonJS dan `'use strict';` konsisten.
- Docs status SKIPPED pada `README.md` valid karena README fokus pada arsitektur pipeline, bukan API doc utilitas.
