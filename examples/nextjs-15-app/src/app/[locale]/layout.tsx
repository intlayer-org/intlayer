import type { Metadata } from 'next';
import localFont from 'next/font/local';
import {
  getHTMLTextDir,
  type IConfigLocales,
  getTranslationContent,
  Locales,
} from 'intlayer';
import type { LocalParams, NextLayoutIntlayer } from 'next-intlayer';
import { ReactNode } from 'react';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const generateMetadata = async ({
  params,
}: LocalParams): Promise<Metadata> => {
  const { locale } = await params;

  const t = <T extends string>(content: IConfigLocales<T>) =>
    getTranslationContent(content, locale);

  const title = t<string>({
    en: 'Create Next App',
    fr: 'Créer une application Next.js',
    es: 'Crear una aplicación Next.js',
  });

  const description = t({
    en: 'Generated by create next app',
    fr: 'Généré par create next app',
    es: 'Generado por create next app',
  });

  return {
    title,
    description,
  };
};

const LocaleLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<LocalParams['params']>;
}) => {
  const { locale } = await params;

  return (
    <html lang={locale} dir={getHTMLTextDir(locale)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default LocaleLayout;
