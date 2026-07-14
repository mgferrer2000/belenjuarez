import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    DEFAULT_LOCALE,
    getLocaleFromPath,
    isLocale,
    LOCALE_STORAGE_KEY,
    localizePath,
    type Locale,
} from './config';
import { COMMON_MESSAGES, type CommonMessages } from './messages';

type I18nContextValue = {
    locale: Locale;
    messages: CommonMessages;
    path: (pathname: string) => string;
    switchLanguagePath: (targetLocale: Locale) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const getStoredLocale = (): Locale | null => {
    if (typeof window === 'undefined') return null;
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(storedLocale) ? storedLocale : null;
};

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const location = useLocation();
    const pathLocale = getLocaleFromPath(location.pathname);
    const locale = pathLocale ?? getStoredLocale() ?? DEFAULT_LOCALE;
    const messages = COMMON_MESSAGES[locale];

    useEffect(() => {
        if (!pathLocale) return;
        window.localStorage.setItem(LOCALE_STORAGE_KEY, pathLocale);
        document.documentElement.lang = pathLocale;
        document.title = COMMON_MESSAGES[pathLocale].metaTitle;
    }, [pathLocale]);

    const value: I18nContextValue = {
        locale,
        messages,
        path: (pathname) => localizePath(locale, pathname),
        switchLanguagePath: (targetLocale) =>
            `${localizePath(targetLocale, location.pathname)}${location.search}${location.hash}`,
    };

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used inside I18nProvider');
    }
    return context;
};

