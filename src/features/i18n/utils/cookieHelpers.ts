import { parseCookies, setCookie } from 'nookies';
import { DocumentContext } from 'next/document';

const LOCALE_COOKIE_KEY = 'NEXT_LOCALE';

export const getSavedLocale = () => {
  const cookies = parseCookies();

  return cookies[LOCALE_COOKIE_KEY] ?? 'ru';
};

export const setSavedLocale = (locale: string, ctx?: DocumentContext) => {
  setCookie(ctx, LOCALE_COOKIE_KEY, locale, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
};
