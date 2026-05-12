import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";

import { Navbar } from "../../../components/layout/navbar";
import { Footer } from "../../../components/layout/footer";
import { CustomCursor } from "../../../components/ui/custom-cursor";
import { SmoothScrollProvider } from "../../../components/providers/smooth-scroll-provider";

const allowedLocales = ["en", "fr", "de"];

/* FONTS */
const clash = localFont({
  src: "../../../fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
});

const satoshi = localFont({
  src: "../../../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Invalid locale protection
  if (!allowedLocales.includes(locale)) {
    notFound();
  }

  let messages;

  try {
    messages = (
      await import(`../../../messages/${locale}.json`)
    ).default;
  } catch (error) {
    messages = (
      await import(`../../../messages/en.json`)
    ).default;
  }

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
      >
          <div
            className={`${clash.variable} ${satoshi.variable} relative min-h-screen font-sans`}
          >
            <CustomCursor />

            <Navbar />

            <main>{children}</main>

            <Footer />
          </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}