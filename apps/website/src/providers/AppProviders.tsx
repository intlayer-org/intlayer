import { ServiceWorkerSubscriber } from '@components/ServiceWorker/ServiceWorkerSubscriber';
import { Toaster } from '@intlayer/design-system';
import type { IntlayerClientProviderProps } from 'next-intlayer/client';
import type { FC } from 'react';
import { AnimatePresenceProvider } from './AnimatePresenceProvider';
import { LocaleContextProvider } from './IntlayerProvider';
import { ThemeProvider } from './ThemeProvider';

export type AppProvidersProps = IntlayerClientProviderProps;

export const AppProviders: FC<AppProvidersProps> = ({
  children,
  locale,
  editorEnabled,
}) => (
  <LocaleContextProvider locale={locale} editorEnabled={editorEnabled}>
    <ThemeProvider>
      <AnimatePresenceProvider>
        <ServiceWorkerSubscriber />
        <Toaster />
        {children}
      </AnimatePresenceProvider>
    </ThemeProvider>
  </LocaleContextProvider>
);
