# Agent Pilot

Repo template buat uji pipeline coding multi-agent: **BA → Dev → QA → Docs → Reviewer**.

Bukan repo produk. Isinya kecil, tanpa dependency; QA bisa verifikasi dengan Node.js saja.

## Workflow

1. **BA** tulis `spec.md` dengan acceptance criteria terukur.
2. **Dev** implementasi + test; tulis `impl-notes.md`.
3. **QA** jalankan test sendiri, verifikasi acceptance criteria; tulis `qa-report.md`.
4. **Docs** update dokumentasi sesuai perubahan; tulis `docs-report.md`. Non-blocking.
5. **Reviewer** review diff akhir secara independen (kode + docs); tulis `review-report.md`.
6. Orchestrator hanya tawarkan Draft PR bila QA dan Reviewer lolos. Manusia tetap review; tidak auto-merge.

QA memeriksa kebenaran perilaku dan quality gates. Docs berjalan sesudah QA, mendokumentasikan perilaku yang sudah diverifikasi; jika tak perlu update, report `SKIPPED` dengan alasan. Reviewer berjalan terakhir agar meninjau diff final termasuk docs. Reviewer mencari bug desain, risiko security, dan maintainability—bukan mengulang QA. Findings harus punya severity dan bukti; Critical/High memblokir, Medium/Low dicatat untuk manusia.

## Stack dan quality gates

Node.js built-in saja — zero dependency.

| Perlu | Command |
|---|---|
| Syntax check | `npm run check` |
| Test | `npm test` |

`npm test` memakai `node --test` + glob; Node 22 tidak menerima directory sebagai argumen.
Tidak ada linter eksternal atau build step.

## Struktur

```text
src/lib.js
src/index.js
test/lib.test.js
AGENTS.md
.claude/agents/{ba,dev,qa,reviewer,docs}.md
.ai/tasks/<TASK-ID>/{spec,impl-notes,qa-report,review-report,docs-report}.md
```

## Prinsip

- Baca `AGENTS.md` dan role file untuk kontrak akses/output setiap stage.
- Agent bertukar hasil melalui artifact file, bukan asumsi tentang chat/memori agent lain.
- Role prompts mengikuti custom-agent format: YAML frontmatter (`name`, `description`) diikuti Markdown instructions.
- Buat branch dan Draft PR; tidak push ke `main`, tidak auto-merge.