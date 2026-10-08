'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, hitungPPN, formatRupiah } = require('../src/lib.js');

test('isValidEmail menerima email normal', () => {
  assert.equal(isValidEmail('andre@example.com'), true);
});

test('isValidEmail menerima email baseline valid', () => {
  assert.equal(isValidEmail('andre@example.com'), true);
});

test('isValidEmail menolak email tanpa @', () => {
  assert.equal(isValidEmail('andre.example.com'), false);
});

test('isValidEmail menolak non-string', () => {
  assert.equal(isValidEmail(123), false);
  assert.equal(isValidEmail(null), false);
});

test('isValidEmail menolak spasi di awal', () => {
  assert.equal(isValidEmail(' andre@example.com'), false);
});

test('isValidEmail menolak spasi di akhir', () => {
  assert.equal(isValidEmail('andre@example.com '), false);
});

test('isValidEmail menolak spasi di kedua sisi', () => {
  assert.equal(isValidEmail('  andre@example.com  '), false);
});

test('isValidEmail menolak tab di awal/akhir', () => {
  assert.equal(isValidEmail('andre@example.com\t'), false);
  assert.equal(isValidEmail('\tandre@example.com'), false);
});

test('isValidEmail menolak newline di awal/akhir', () => {
  assert.equal(isValidEmail('\nandre@example.com'), false);
  assert.equal(isValidEmail('andre@example.com\n'), false);
});

test('isValidEmail menolak whitespace di dalam string', () => {
  assert.equal(isValidEmail('andre@ example.com'), false);
});

test('hitungPPN 11% dari 100000 = 11000', () => {
  assert.equal(hitungPPN(100000), 11000);
});

test('hitungPPN menolak input negatif', () => {
  assert.throws(() => hitungPPN(-1), TypeError);
});

test('formatRupiah memformat nilai nol', () => {
  assert.equal(formatRupiah(0), 'Rp 0');
});

test('formatRupiah memisahkan ribuan untuk angka biasa', () => {
  assert.equal(formatRupiah(100000), 'Rp 100.000');
});

test('formatRupiah memisahkan ribuan untuk angka besar', () => {
  assert.equal(formatRupiah(1234567890), 'Rp 1.234.567.890');
});

test('formatRupiah memformat pecahan dengan desimal', () => {
  assert.equal(formatRupiah(1234.5), 'Rp 1.234,50');
  assert.equal(formatRupiah(1234.4), 'Rp 1.234,40');
  assert.equal(formatRupiah(500), 'Rp 500');
  assert.equal(formatRupiah(1000), 'Rp 1.000');
});

test('formatRupiah menolak input yang tidak valid', () => {
  assert.throws(() => formatRupiah('1000'), TypeError);
  assert.throws(() => formatRupiah(''), TypeError);
  assert.throws(() => formatRupiah(Infinity), TypeError);
  assert.throws(() => formatRupiah(-Infinity), TypeError);
  assert.throws(() => formatRupiah(NaN), TypeError);
  assert.throws(() => formatRupiah(null), TypeError);
  assert.throws(() => formatRupiah(undefined), TypeError);
  assert.throws(() => formatRupiah(true), TypeError);
  assert.throws(() => formatRupiah({}), TypeError);
  assert.throws(() => formatRupiah([]), TypeError);
});
