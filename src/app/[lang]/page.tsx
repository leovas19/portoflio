import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = params;
  const safeLang = isLocale(lang) ? lang : "fr";
  const t = await getDictionary(safeLang);

  const sections = safeLang === "fr" ? (
    [
      {
        heading: "👋 Bienvenue !",
        body: (
          <p className="text-neutral-200 leading-relaxed">
            Je m’appelle Léo Vasseur, élève-ingénieur en dernière année à IMT Mines Alès (spécialité Informatique & Intelligence Artificielle).
            Passionné par la donnée, l’automatisation et l’IA appliquée, je mène des projets industriels, académiques ou personnels avec rigueur et autonomie.
          </p>
        ),
      },
      {
        heading: "🌍 Ce que je recherche",
        body: (
          <div className="text-neutral-200 leading-relaxed">
            <p>Je prépare un stage de fin d’études à l’étranger (16–24 semaines à partir de mars 2026) dans les domaines :</p>
            <ul className="mt-3 space-y-1 text-neutral-300">
              <li>• Data Science</li>
              <li>• Machine Learning & Deep Learning</li>
              <li>• Analyse de données & automatisation</li>
            </ul>
          </div>
        ),
      },
      {
        heading: "💡 Mon approche",
        body: (
          <p className="text-neutral-200 leading-relaxed">
            Je conçois des solutions qui allient performance technique et utilité métier : prédictions, visualisations, dashboards,
            automatisations, extraction de données. Travailler avec méthode, comprendre en profondeur, améliorer en continu : c’est ce qui guide mon travail.
          </p>
        ),
      },
      {
        heading: "🚀 Explorons ensemble",
        body: (
          <p className="text-neutral-200 leading-relaxed">
            Parcourez mes projets, découvrez mes outils, et si mon profil vous intéresse…
            <strong className="text-white"> Contactons-nous pour collaborer ou échanger.</strong>
          </p>
        ),
      },
    ]
  ) : (
    [
      {
        heading: "👋 Welcome!",
        body: (
          <p className="text-neutral-200 leading-relaxed">
            I’m Léo Vasseur, a final-year Computer Science & AI engineering student at IMT Mines Alès.
            I thrive on data, automation and applied AI, delivering industrial, academic and personal projects with rigor and autonomy.
          </p>
        ),
      },
      {
        heading: "🌍 What I’m Looking For",
        body: (
          <div className="text-neutral-200 leading-relaxed">
            <p>I’m seeking a 16–24 week graduation internship abroad starting March 2026 in:</p>
            <ul className="mt-3 space-y-1 text-neutral-300">
              <li>• Data Science</li>
              <li>• Machine Learning & Deep Learning</li>
              <li>• Data analytics & automation</li>
            </ul>
          </div>
        ),
      },
      {
        heading: "💡 My Approach",
        body: (
          <p className="text-neutral-200 leading-relaxed">
            I build solutions blending technical performance and business impact: predictive models, dashboards, automation, data extraction.
            Methodical, solution-driven and curious, I always aim to understand and iterate on what I develop.
          </p>
        ),
      },
      {
        heading: "🚀 Let’s Work Together",
        body: (
          <p className="text-neutral-200 leading-relaxed">
            Explore my projects, dive into my toolset, and if my profile resonates…
            <strong className="text-white"> reach out so we can collaborate or chat.</strong>
          </p>
        ),
      },
    ]
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-20">
      <header className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
          {t.hero.available}
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-white">
          {t.site.owner}
        </h1>
        <p className="mt-3 text-neutral-300 text-lg">{t.hero.tagline}</p>
        <p className="mt-1 text-neutral-500 text-sm">{t.hero.location}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`/${safeLang}/projects`}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black text-sm font-semibold shadow-sm"
          >
            {t.cta.viewProjects}
          </a>
          <a
            href="/docs/leo-vasseur-cv.pdf"
            download
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 text-sm text-neutral-200"
          >
            {t.cta.downloadCV}
          </a>
          <a
            href="/docs/lettre-recommandation-leo-vasseur.pdf"
            download
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 text-sm text-neutral-200"
          >
            {t.cta.downloadRecommendation}
          </a>
          <a
            href={`/${safeLang}/skills`}
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 text-sm text-neutral-200"
          >
            {t.sections.skills}
          </a>
          <a
            href="mailto:leo.vasseur@example.com"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 text-sm text-neutral-200"
          >
            {t.contact.emailMe}
          </a>
        </div>
      </header>

      <section className="mt-12 space-y-10">
        {sections.map((section) => (
          <article
            key={section.heading}
            className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-7 shadow-lg shadow-black/20"
          >
            <div className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-200/80">
              {section.heading}
            </div>
            <div className="text-sm sm:text-base text-neutral-200">
              {section.body}
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-12 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} {t.site.owner}. {t.site.rights}
      </footer>
    </main>
  );
}
