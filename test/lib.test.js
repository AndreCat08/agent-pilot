'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, hitungPPN } = require('../src/lib.js');

test('isValidEmail menerima email normal', () => {
  assert.equal(isValidEmail('andre@example.com'), true);
});

test('isValidEmail menolak email tanpa @', () => {
  assert.equal(isValidEmail('andre.example.com'), false);
});

test('isValidEmail menolak non-string', () => {
  assert.equal(isValidEmail(123), false);
  assert.equal(isValidEmail(null), false);
});

test('hitungPPN 11% dari 100000 = 11000', () => {
  assert.equal(hitungPPN(100000), 11000);
});

test('hitungPPN menolak input negatif', () => {
  assert.throws(() => hitungPPN(-1), TypeError);
});
