import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import "../globals.css";
import { Inter } from "next/font/google";
import { layouts } from "../components";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });



export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params:Promise<{locale: string}>;
}>
) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} >
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider>
          <layouts.LayoutComponent>{children}</layouts.LayoutComponent>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
