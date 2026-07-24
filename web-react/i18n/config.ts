export const SUPPORTED_LOCALES = ['es', 'fr'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';
export const LOCALE_STORAGE_KEY = 'belenjuarez.locale';

export const isLocale = (value: string | null | undefined): value is Locale =>
    SUPPORTED_LOCALES.includes(value as Locale);

export const getLocaleFromPath = (pathname: string): Locale | null => {
    const segment = pathname.split('/').filter(Boolean)[0];
    return isLocale(segment) ? segment : null;
};

export const stripLocalePrefix = (pathname: string): string => {
    const locale = getLocaleFromPath(pathname);
    if (!locale) return pathname || '/';

    const stripped = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), '');
    return stripped || '/';
};

export const localizePath = (locale: Locale, pathname: string): string => {
    if (!pathname.startsWith('/') || pathname.startsWith('//')) return pathname;

    const unlocalizedPath = stripLocalePrefix(pathname);
    return unlocalizedPath === '/' ? `/${locale}/` : `/${locale}${unlocalizedPath}`;
};

