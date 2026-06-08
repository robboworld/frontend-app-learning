/**
 * Copyright (C) 2026 Robbo <https://robbo.ru>
 * SPDX-License-Identifier: AGPL-3.0-only
 *
 * Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.
 */

/**
 * @param {{ price?: number, currency?: string, currencySymbol?: string }|null|undefined} verifiedMode
 */
export function formatDisplayPrice(verifiedMode) {
  if (!verifiedMode || verifiedMode.price == null) {
    return '';
  }

  const { price, currency, currencySymbol } = verifiedMode;
  const code = String(currency || currencySymbol || '').toUpperCase();

  if (code === 'RUB' || currencySymbol === 'RUB') {
    const amount = Number(price);
    const formatted = Number.isFinite(amount) && Number.isInteger(amount)
      ? String(amount)
      : amount.toFixed(2).replace(/\.?0+$/, '');
    return `${formatted} ₽`;
  }

  if (currencySymbol) {
    return `${currencySymbol}${price}`;
  }

  return String(price);
}
