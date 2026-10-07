'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { formatRupiah } = require('../src/format.js');
const { formatRupiah: formatRupiahLib } = require('../src/lib.js');

test('formatRupiah memformat integer tanpa desimal', () => {
  assert.equal(formatRupiah(1500), 'Rp 1.500');
  assert.equal(formatRupiahLib(1500), 'Rp 1.500');
  assert.equal(formatRupiah(0), 'Rp 0');
});

test('formatRupiah memformat float dengan 2 desimal maks', () => {
  assert.equal(formatRupiah(1500.5), 'Rp 1.500,50');
  assert.equal(formatRupiah(1500.555), 'Rp 1.500,56');
  assert.equal(formatRupiahLib(1500.555), 'Rp 1.500,56');
});

test('formatRupiah memformat angka negatif dengan -(Rp ...)', () => {
  assert.equal(formatRupiah(-1500), '-(Rp 1.500)');
  assert.equal(formatRupiahLib(-1500), '-(Rp 1.500)');
  assert.equal(formatRupiah(-1500.5), '-(Rp 1.500,50)');
});

test('formatRupiah menolak non-angka / non-finite', () => {
  assert.throws(() => formatRupiah('1500'), TypeError);
  assert.throws(() => formatRupiah(NaN), TypeError);
  assert.throws(() => formatRupiah(Infinity), TypeError);
  assert.throws(() => formatRupiah(null), TypeError);
});
