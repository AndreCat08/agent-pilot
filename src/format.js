'use strict';

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

module.exports = { formatRupiah };
