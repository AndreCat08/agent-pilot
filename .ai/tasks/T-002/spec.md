## Task: T-002
## Status: READY

## Latar Belakang
Diperlukan helper bisnis untuk menampilkan nilai numerik dalam format Rupiah Indonesia, mengikuti pola helper murni yang sudah ada di `src/lib.js` dan dapat dipanggil melalui ekspor CommonJS.

## Kebutuhan
Tambahkan fungsi `formatRupiah(amount)` di `src/lib.js`. Fungsi mengubah nilai Rupiah menjadi string dengan prefix `Rp ` dan pemisah ribuan berupa titik. Fungsi diekspor sehingga dapat digunakan oleh modul lain.

## Acceptance Criteria
- [ ] `formatRupiah(0)` menghasilkan `Rp 0`.
- [ ] Nilai angka biasa dikelompokkan setiap tiga digit dengan titik; misalnya `formatRupiah(100000)` menghasilkan `Rp 100.000`.
- [ ] Nilai angka besar dikelompokkan dengan benar; misalnya `formatRupiah(1234567890)` menghasilkan `Rp 1.234.567.890`.
- [ ] Nilai non-number, non-finite, atau negatif ditolak dengan `TypeError`, selaras dengan validasi `hitungPPN`.
- [ ] Format tidak menampilkan digit desimal; task meminta pemisah ribuan dan prefix Rupiah, bukan presisi pecahan.
- [ ] Fungsi mengikuti CommonJS dan `'use strict';`, serta test ditambahkan dengan `node:test` untuk nol, angka biasa, dan angka besar.
- [ ] Quality gate `npm run check` dan `npm test` lulus.

## Asumsi
- Hanya bilangan finite >= 0 diterima, konsisten dengan helper `hitungPPN`.
- Rupiah ditampilkan sebagai bilangan bulat tanpa pecahan; input desimal dibulatkan ke bilangan terdekat menggunakan pembulatan JavaScript standar (`Math.round`) sebelum pemformatan.
- Prefix menggunakan satu spasi setelah `Rp` (contoh `Rp 1.000`).

## Bukti Acuan
- `src/lib.js`: pola validasi angka dan ekspor bernama CommonJS (`hitungPPN`).
- `test/lib.test.js`: pola pengujian dengan `node:test` dan `node:assert/strict`.

## Unresolved Items
- Tidak ada; perilaku pecahan ditetapkan secara eksplisit sebagai pembulatan ke integer.
