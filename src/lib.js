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

/**
 * Formats a Rupiah amount with Indonesian thousands separators and decimals.
 * Negative amounts are wrapped in -(...).
 * @param {number} amount
 * @returns {string} formatted Rupiah amount
 */
function formatRupiah(amount) {
  if (typeof amount !== 'number' || !Number.isFinite(amount)) {
    throw new TypeError('amount harus angka');
  }
  const isNegative = amount < 0;
  const abs = Math.abs(amount);

  let formatted;
  if (Number.isInteger(abs)) {
    // ponytail: regex thousands separator; upgrade to Intl.NumberFormat if locale-sensitive formatting needed
    const intStr = abs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    formatted = `Rp ${intStr}`;
  } else {
    const rounded = Math.round(abs * 100) / 100;
    if (Number.isInteger(rounded)) {
      const intStr = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      formatted = `Rp ${intStr}`;
    } else {
      const [intVal, decVal] = rounded.toFixed(2).split('.');
      const intStr = intVal.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      formatted = `Rp ${intStr},${decVal}`;
    }
  }

  return isNegative ? `-(${formatted})` : formatted;
}

module.exports = { isValidEmail, hitungPPN, formatRupiah };
