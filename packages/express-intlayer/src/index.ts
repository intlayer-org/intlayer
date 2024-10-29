import type { NextFunction, RequestHandler, Request, Response } from 'express';
import {
  getTranslationContent,
  localeDetector,
  type TranslationContent,
} from '@intlayer/core';
import { type Locales, getConfiguration } from '@intlayer/config';

const { middleware } = getConfiguration();
const { headerName, cookieName } = middleware;

export const t =
  (_req: Request, res: Response, _next?: NextFunction) =>
  <T extends string>(content: TranslationContent<T>) => {
    const locale: Locales = res.locals.locale;

    return getTranslationContent(content, locale);
  };

/**
 * Detect locale used by the user and load it into res locale storage
 *
 * @returns
 */
export const intlayer = (): RequestHandler => (req, res, next) => {
  // Detect if locale is set by intlayer frontend lib in the cookies
  const localeCookie = req.cookies[cookieName];
  // Detect if locale is set by intlayer frontend lib in the headers
  const localeHeader = req.headers[headerName];
  // Interpret browser locale

  const negotiatorHeaders: Record<string, string> = {};

  // Check if req.headers exists and is an object
  if (req && typeof req.headers === 'object') {
    // Copy all headers from the request to negotiatorHeaders
    for (const key in req.headers) {
      if (typeof req.headers[key] === 'string') {
        negotiatorHeaders[key] = req.headers[key];
      }
    }
  }

  const localeDetected = localeDetector(negotiatorHeaders);

  res.locals.locale_header = localeHeader;
  res.locals.locale_cookie = localeCookie;
  res.locals.locale_detected = localeDetected;
  res.locals.locale = localeCookie ?? localeHeader ?? localeDetected;
  res.locals.t = t(req, res, next);

  (global as typeof globalThis & { t: typeof t }).t = res.locals.t;

  next();
};
