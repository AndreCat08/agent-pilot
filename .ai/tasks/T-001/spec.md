## Task: T-001

## Ringkasan

`isValidEmail` harus menolak email yang punya karakter whitespace di awal atau
akhir string (mis. `" andre@example.com"`, `"andre@example.com "`). Saat ini
belum ada test yang membuktikan perilaku itu, jadi bisa regresi tanpa ketahuan.
Task ini menetapkan perilaku yang diinginkan + bukti test-nya.

## Acceptance Criteria

Semua di bawah ini lewat `isValidEmail` di `src/lib.js` (CommonJS, zero dependency).

- [ ] `isValidEmail('andre@example.com')` mengembalikan `true` (baseline, tidak boleh regresi).
- [ ] `isValidEmail(' andre@example.com')` mengembalikan `false` (spasi U+0020 di awal).
- [ ] `isValidEmail('andre@example.com ')` mengembalikan `false` (spasi U+0020 di akhir).
- [ ] `isValidEmail('  andre@example.com  ')` mengembalikan `false` (spasi di kedua sisi).
- [ ] `isValidEmail('andre@example.com\t')` dan `isValidEmail('\tandre@example.com')` mengembalikan `false` (tab di awal/akhir).
- [ ] `isValidEmail('\nandre@example.com')` dan `isValidEmail('andre@example.com\n')` mengembalikan `false` (newline di awal/akhir).
- [ ] `isValidEmail('andre@ example.com')` mengembalikan `false` (whitespace di dalam string).
- [ ] Setiap kriteria di atas punya minimal satu `test(...)` baru di `test/lib.test.js` yang dijalankan `npm test`.
- [ ] `npm run check` dan `npm test` pass.

## Out of Scope

- Tidak melakukan `trim()` lalu menerima email yang di-trim — string dengan
  whitespace di ujung tetap **ditolak**, bukan dinormalisasi.
- Tidak mengubah aturan validasi lain (format `@`, domain, TLD) di luar whitespace.
- Tidak menambah dependency, linter, atau ubah signature `isValidEmail`.
- Tidak menyentuh `src/index.js`, README, atau role/gate agent.

## Catatan Teknis

- File target: `src/lib.js` (fungsi `isValidEmail`), test di `test/lib.test.js`.
- Regex existing `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` sudah memakai `\s` dan secara
  perilaku sudah menolak semua kasus di atas. Jika Dev memverifikasi ini, cukup
  tambahkan test pembuktinya (tanpa mengubah regex) — jangan ubah kode kalau tak perlu.
- Definisi "spasi" di task ini = whitespace JavaScript (`\s`): spasi, tab, newline.
  Ini ditulis eksplisit supaya QA tidak menebak cakupannya.
- "Ditolak" berarti `isValidEmail` mengembalikan `false`, bukan throw.
