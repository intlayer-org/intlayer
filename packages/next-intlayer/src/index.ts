export {
  getTranslation,
  IntlayerClientContext,
  useIntlayer,
  useTraduction,
  useDictionary,
  useLocaleCookie,
  type IntlayerNode,
  t,
} from 'react-intlayer';
export { generateStaticParams } from './generateStaticParams';
export type {
  LocalParams,
  NextPageIntlayer,
  NextLayoutIntlayer,
} from './types/index';
export {
  useLocale,
  IntlayerClientProvider,
  type IntlayerClientProviderProps,
} from './client/index';
