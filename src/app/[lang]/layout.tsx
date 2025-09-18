import "../globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { locales, isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Léo Vasseur – Portfolio",
  description: "Portfolio pro FR/EN – Data, IA, Logiciels",
  metadataBase: new URL("https://example.com"), // ← remplace par ton domaine
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = isLocale(params.lang) ? params.lang : "fr";
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-neutral-950/70">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href={`/${lang}`} className="font-semibold tracking-tight">{dict.site.owner}</Link>
            <nav className="hidden sm:flex gap-6 text-sm text-neutral-300">
              <Link href={`/${lang}/projects`} className="hover:text-white">{dict.nav.projects}</Link>
              <Link href={`/${lang}/skills`} className="hover:text-white">{dict.nav.skills}</Link>
              <Link href={`/${lang}#about`} className="hover:text-white">{dict.nav.about}</Link>
              <Link href={`/${lang}#contact`} className="hover:text-white">{dict.nav.contact}</Link>
            </nav>
            <LanguageSwitcher current={lang} locales={locales} />
          </div>
        </header>
        {children}
        <footer className="mt-10 text-center text-xs text-neutral-500 py-8 border-t border-white/10">
          © {new Date().getFullYear()} {dict.site.owner}. {dict.site.rights}
        </footer>
      </body>
    </html>
  );
}
