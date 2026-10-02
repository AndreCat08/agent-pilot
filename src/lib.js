'use strict';

/**
 * Business rules only. Keep this file free of I/O so QA can test it with
 * zero setup (node --test reads it directly).
 */

/**
 * @param {string} email
 * @returns {boolean} true if syntactically valid
 */
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * PPN (VAT) 11%. Rounds to 2 decimals — banker's rounding is NOT used,
 * plain half-up so the number matches what accountants expect.
 * @param {number} amount rupiah
 * @returns {number} PPN owed
 */
function hitungPPN(amount) {
  if (typeof amount !== 'number' || !Number.isFinite(amount) || amount < 0) {
    throw new TypeError('amount harus angka >= 0');
  }
  return Math.round(amount * 0.11 * 100) / 100;
}

module.exports = { isValidEmail, hitungPPN };
