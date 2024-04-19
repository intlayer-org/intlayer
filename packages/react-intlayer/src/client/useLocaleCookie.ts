import {
  type Locales,
  intlayerMiddlewareConfiguration,
} from '@intlayer/config/client';
import Cookies from 'js-cookie';

const { cookieName } = intlayerMiddlewareConfiguration;

const cookieAttributes: Cookies.CookieAttributes = {
  path: '/',
  expires: undefined,
  domain: undefined,
  secure: false,
  sameSite: 'strict',
};

/**
 * Get the locale cookie
 */
export const localeCookie = Cookies.get(cookieName) as Locales | undefined;

/**
 * Set the locale cookie
 */
export const setLocaleCookie = (locale: Locales) => {
  Cookies.set(cookieName, locale, cookieAttributes);
};

/**
 * Hook that provides the locale cookie and a function to set it
 */
export const useLocaleCookie = () => ({
  localeCookie,
  setLocaleCookie,
});
