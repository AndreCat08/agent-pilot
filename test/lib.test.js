'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, hitungPPN } = require('../src/lib.js');

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
