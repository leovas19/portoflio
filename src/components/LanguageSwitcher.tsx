"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

type Props = {
  locales?: string[];        // ex: ["fr", "en"]
  current?: string;          // ex: "fr"
  className?: string;
};

function swapLangInPath(pathname: string, nextLang: string) {
  // suppose une route /[lang]/... (ex: /fr/projet-x)
  const parts = pathname.split("/");
  if (parts.length > 1) {
    parts[1] = nextLang; // remplace le segment de langue
  }
  return parts.join("/") || `/${nextLang}`;
}

function LanguageSwitcherBase({ locales = ["fr", "en"], current = "fr", className }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <select
      className={className ?? "bg-neutral-900 border border-neutral-700 rounded px-2 py-1"}
      value={current}
      onChange={(e) => {
        const nextLang = e.target.value;
        const nextPath = swapLangInPath(pathname ?? "/", nextLang);
        startTransition(() => router.push(nextPath));
      }}
      disabled={isPending}
      aria-label="Change language"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcherBase;      // import default
export { LanguageSwitcherBase as LanguageSwitcher }; // import nommé