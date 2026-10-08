## Task: T-003
## Status: SUCCESS

## Ringkasan
Tambahkan fungsi utilitas `formatRupiah(amount)` di repo yang memakai `node:test`
bawaan Node.js (bukan Jest — repo zero-dependency per AGENTS.md). Fungsi sudah ada
parsial di `src/lib.js` (format integer). Pilihan implementasi:
- Buat `src/format.js` baru dengan `formatRupiah`.
- Update `src/lib.js` yang sudah ada dengan `formatRupiah` plus integer format lama.

Kami memilih **update `src/lib.js`**. `formatRupiah` harus:
- Input: angka (integer/float positif/negatif).
- Output: string `Rp 1.500,50` — pemisah ribuan titik, desimal koma.
- Integer tanpa pecahan → tanpa desimal (`Rp 1.500`).
- 2 digit desimal maks untuk pecahan (`1500.555` → `Rp 1.500,56`).
- Negatif → `-(Rp 1.500)`.

Test: `test/format.test.js` pake `node:test` + `assert`. Jalankan lewat
`npm test` (script sudah didukung node:test runner).

## Acceptance Criteria
1. `src/lib.js` mengekspor `formatRupiah` yang lolos semua unit test.
2. `npm run check` lulus (eslint/lint yang dikonfig).
3. `npm test` lulus, termasuk test baru di `test/format.test.js`.
4. Tidak menambahkan depedensi eksternal.
