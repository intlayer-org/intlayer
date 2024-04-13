import {
  type Locales,
  intlayerIntlConfiguration,
} from '@intlayer/config/client';
import type { LanguageContent } from '@intlayer/core';

const defaultLocale = intlayerIntlConfiguration.defaultLocale;

export const getContent = <Content>(
  languageContent: LanguageContent<Content>,
  locale: Locales
) => languageContent[locale ?? defaultLocale] ?? languageContent[defaultLocale];
