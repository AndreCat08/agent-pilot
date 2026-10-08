## Task: T-003
## Status: PASS

## Acceptance Criteria
- [x] kriteria 1: `src/lib.js` mengekspor `formatRupiah` yang lolos semua unit test — dibuktikan di `src/lib.js` baris 36-63, `test/lib.test.js` baris 58-88, dan `test/format.test.js` baris 6, 10, 17, 22.
- [x] kriteria 2: `npm run check` lulus — syntax check `src/index.js`, `src/lib.js`, `src/format.js` exit 0 tanpa error.
- [x] kriteria 3: `npm test` lulus, termasuk test baru di `test/format.test.js` — 21 test pass (0 fail) di `test/format.test.js` (ok 1-4) dan `test/lib.test.js` (ok 5-21).
- [x] kriteria 4: Tidak menambahkan depedensi eksternal — `package.json` zero-dependency, hanya Node.js built-in (`node:test`, `node:assert/strict`).

## Quality Gate (dijalankan sendiri, jangan percaya laporan Dev)
- Check: PASS
- Test: PASS

## Catatan
- Dev sediakan dua titik ekspor: `src/lib.js` (sesuai spec) dan modul `src/format.js`. Keduanya berfungsi identik.
- Penanganan edge case lengkap: `null`, `undefined`, non-angka, non-finite (`NaN`, `Infinity`, `-Infinity`) melempar `TypeError`.
- Pecahan diuji hingga pembulatan 2 desimal (`1500.555` -> `Rp 1.500,56`).
- Angka negatif terformat `-(Rp ...)` sesuai kriteria.
- Nol terformat `Rp 0`.

## Status: PASS
