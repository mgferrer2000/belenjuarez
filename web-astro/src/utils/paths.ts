import type { Locale } from '../data/site';

export const localizedPath = (locale: Locale, path = '') => {
  const normalized = path.replace(/^\/+|\/+$/g, '');
  return normalized ? `/${locale}/${normalized}/` : `/${locale}/`;
};

export const alternateLocalePath = (path: string, locale: Locale) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const replaced = normalized.replace(/^\/(es|fr)(?=\/|$)/, `/${locale}`);
  return replaced.endsWith('/') ? replaced : `${replaced}/`;
};
