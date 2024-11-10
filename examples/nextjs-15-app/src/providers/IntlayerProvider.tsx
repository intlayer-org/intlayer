import {
  IntlayerClientProvider,
  type IntlayerClientProviderProps,
} from 'next-intlayer';
import { IntlayerServerProvider } from 'next-intlayer/server';
import type { FC } from 'react';

export const IntlayerProvider: FC<IntlayerClientProviderProps> = ({
  children,
  locale,
  editorEnabled,
}) => (
  <>
    {/**
     *   IntlayerServerProvider is used to provide the locale to the server children
     *   IntlayerServerProvider don't work if set in the layout
     */}
    <IntlayerServerProvider locale={locale}>
      {/**
       *   IntlayerClientProvider is used to provide the locale to the client children
       *   IntlayerClientProvider can be set in any parent component, including the layout
       */}
      <IntlayerClientProvider locale={locale} editorEnabled={editorEnabled}>
        {children}
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  </>
);
