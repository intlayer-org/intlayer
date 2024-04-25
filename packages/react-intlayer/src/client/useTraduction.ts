import type { LanguageContent } from '@intlayer/core';
import { useContext } from 'react';
import { getTranslation } from '../getTranslation';
import { IntlayerClientContext } from './IntlayerClientProvider';

/**
 * On the client side, Hook that picking one dictionary by its id and return the content.
 *
 * If not locale found, it will return the content related to the default locale.
 *
 * Return either the content editor, or the content itself depending on the configuration.
 *
 * Usage:
 *
 * ```tsx
 * const content = useTraduction<string>({
 *  en: 'Hello',
 *  fr: 'Bonjour',
 * }, 'fr');
 * // 'Bonjour'
 * ```
 *
 * Using TypeScript:
 * - this function will require each locale to be defined if defined in the project configuration.
 * - If a locale is missing, it will make each existing locale optional and raise an error if the locale is not found.
 */
export const useTraduction = <Content = string>(
  languageContent: LanguageContent<Content>
): Content => {
  const { locale } = useContext(IntlayerClientContext);

  return getTranslation(languageContent, locale);
};
