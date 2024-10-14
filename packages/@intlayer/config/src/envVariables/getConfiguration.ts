import type {
  ContentConfig,
  DictionaryOutput,
  InternationalizationConfig,
  IntlayerConfig,
  MiddlewareConfig,
  ServerSetCookieRule,
  StrictMode,
} from '../types/config';
import type { Locales } from '../types/locales';
import { extractEnvVariable } from './extractEnvVariable/index';
import { getEnvValue } from './utils';
import dotenv from 'dotenv';

const env = process.env.NODE_ENV ?? 'development';

dotenv.config({ path: ['.env', `.env.${env}`, `.env.${env}.local`] });

/**
 * Get all configuration values using environment variables
 * Can be used in the client side as the server side
 * To use it, be sure to have the environment variables set
 */
export const getConfiguration = (): IntlayerConfig => {
  const env = extractEnvVariable();

  const intlayerIntlConfiguration: InternationalizationConfig = {
    locales: getEnvValue<Locales>(env.internationalization.locales, 'array')!,
    strictMode: getEnvValue<StrictMode>(
      env.internationalization.strictMode,
      'string'
    )!,
    defaultLocale: getEnvValue<Locales>(
      env?.internationalization.defaultLocale,
      'string'
    )!,
  };

  const intlayerMiddlewareConfiguration: MiddlewareConfig = {
    headerName: getEnvValue(env.middleware.headerName, 'string')!,
    cookieName: getEnvValue(env.middleware.cookieName, 'string')!,
    prefixDefault: getEnvValue(env.middleware.prefixDefault, 'boolean')!,
    basePath: getEnvValue(env.middleware.basePath, 'string')!,
    serverSetCookie: getEnvValue<ServerSetCookieRule>(
      env.middleware.serverSetCookie,
      'string'
    )!,
    noPrefix: getEnvValue(env.middleware.noPrefix, 'boolean')!,
  };

  const intlayerContentConfiguration: ContentConfig = {
    fileExtensions: getEnvValue<string>(env.content.fileExtensions, 'array')!,
    baseDir: getEnvValue(env.content.baseDir, 'string')!,
    contentDirName: getEnvValue(env.content.contentDirName, 'string')!,
    contentDir: getEnvValue(env.content.contentDir, 'string')!,
    excludedPath: getEnvValue<string>(env.content.excludedPath, 'array')!,
    resultDirName: getEnvValue(env.content.resultDirName, 'string')!,
    resultDir: getEnvValue(env.content.resultDir, 'string')!,
    moduleAugmentationDirName: getEnvValue(
      env.content.moduleAugmentationDirName,
      'string'
    )!,
    moduleAugmentationDir: getEnvValue(
      env.content.moduleAugmentationDir,
      'string'
    )!,
    dictionaryOutput: getEnvValue<DictionaryOutput>(
      env.content.dictionaryOutput,
      'array'
    )!,
    dictionariesDirName: getEnvValue(
      env.content.dictionariesDirName,
      'string'
    )!,
    dictionariesDir: getEnvValue(env.content.dictionariesDir, 'string')!,
    i18nDictionariesDirName: getEnvValue(
      env.content.i18nDictionariesDirName,
      'string'
    )!,
    i18nDictionariesDir: getEnvValue(
      env.content.i18nDictionariesDir,
      'string'
    )!,
    typeDirName: getEnvValue(env.content.typeDirName, 'string')!,
    typesDir: getEnvValue(env.content.typesDir, 'string')!,
    mainDirName: getEnvValue(env.content.mainDirName, 'string')!,
    mainDir: getEnvValue(env.content.mainDir, 'string')!,
    watchedFilesPattern: getEnvValue<string>(
      env.content.watchedFilesPattern,
      'array'
    )!,
    watchedFilesPatternWithPath: getEnvValue<string>(
      env.content.watchedFilesPatternWithPath,
      'array'
    )!,
    outputFilesPatternWithPath: getEnvValue(
      env.content.outputFilesPatternWithPath,
      'string'
    )!,
  };

  const intlayerEditorConfiguration = {
    backendURL: getEnvValue(env.editor.backendURL, 'string')!,
    enabled: getEnvValue(env.editor.enabled, 'boolean')!,
    clientId: getEnvValue(env.editor.clientId, 'string')!,
    clientSecret: getEnvValue(env.editor.clientSecret, 'string')!,
  };

  const intlayerConfiguration: IntlayerConfig = {
    internationalization: intlayerIntlConfiguration,
    middleware: intlayerMiddlewareConfiguration,
    content: intlayerContentConfiguration,
    editor: intlayerEditorConfiguration,
  };

  return intlayerConfiguration;
};
