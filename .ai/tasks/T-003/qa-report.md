## Task: T-003
## Status: PASS

## Acceptance Criteria
- [x] 1. `src/lib.js` mengekspor `formatRupiah` yang lolos semua unit test — dibuktikan di `test/format.test.js:5-39` dan `test/lib.test.js:5`
- [x] 2. `npm run check` lulus (eslint/lint yang dikonfig) — syntax check `src/index.js` dan `src/lib.js` exit 0
- [x] 3. `npm test` lulus, termasuk test baru di `test/format.test.js` — 21 test pass (4 test di `test/format.test.js`, 17 test di `test/lib.test.js`)
- [x] 4. Tidak menambahkan dependensi eksternal — `package.json` zero dependencies

## Quality Gate
- Check: PASS
- Test: PASS

## Catatan
- Dev implementasi valid sesuai spec: format integer tanpa desimal (`Rp 1.500`), pecahan maks 2 digit (`Rp 1.500,56`), negatif `-(Rp 1.500)`, validasi input non-finite/non-number throw `TypeError`.
- Edge case tertutup di test: `0`, float pembulatan (`1500.555`), `NaN`, `Infinity`, non-number types.
- File `impl-notes.md` tidak dibuat Dev saat sesi dev sebelumnya berhenti; implementasi kode dan test suite lengkap dan valid.
