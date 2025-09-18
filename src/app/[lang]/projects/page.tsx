import { PROJECT_SUMMARIES } from "@/lib/projectSummaries";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export default async function ProjectsPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = params;
  const safeLang = isLocale(lang) ? lang : "fr";
  const t = await getDictionary(safeLang);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
          {t.sections.projects}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white">
          {safeLang === "fr"
            ? "Études de cas et projets marquants"
            : "Case studies & key projects"}
        </h1>
        <p className="mt-2 max-w-2xl text-neutral-300">
          {safeLang === "fr"
            ? "Sélection de projets data, IA et développement logiciel. Chaque carte renvoie vers une étude détaillée avec objectifs, approche et résultats."
            : "Selection of data, AI and software projects. Each card links to a detailed study covering objectives, approach and measurable results."}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECT_SUMMARIES.map((project) => (
          <article
            key={project.slug}
            className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition-colors hover:border-emerald-400/40"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-white">
                {project.title[safeLang]}
              </h2>
              <span className="text-xs text-neutral-400">
                {project.org} • {project.year}
              </span>
            </div>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              {project.desc[safeLang]}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={`${project.slug}-${tag}`}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={`/${safeLang}/projects/${project.slug}`}
              className="mt-5 inline-flex items-center text-sm font-medium text-emerald-300 hover:underline"
            >
              {t.common.viewProject}
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
