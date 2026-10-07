## Task: T-003
## Status: PASS

## Acceptance Criteria
- [x] 1. `src/lib.js` mengekspor `formatRupiah` yang lolos semua unit test — dibuktikan di test/format.test.js baris 5 dan test/lib.test.js baris 5
- [x] 2. `npm run check` lulus — sintaks valid di src/index.js dan src/lib.js (exit code 0)
- [x] 3. `npm test` lulus, termasuk test baru di `test/format.test.js` — 21 test pass (test/format.test.js 4 subtest, test/lib.test.js 17 subtest)
- [x] 4. Tidak menambahkan dependensi eksternal — package.json bersih, dependensi baru nol

## Quality Gate
- Check: PASS
- Test: PASS

## Catatan
- Integer tanpa desimal: lolos di test/format.test.js:7-12
- Pecahan maks 2 desimal koma: lolos di test/format.test.js:14-19
- Negatif -(Rp ...): lolos di test/format.test.js:21-25
- Penolakan tipe invalid / NaN / Infinity: lolos di test/format.test.js:27-38
- Nol negatif (`-0`) diformat menjadi `Rp 0` karena `Math.abs(-0) === 0` dan `-0 < 0` bernilai false di JS. Sesuai perilaku umum finansial.
