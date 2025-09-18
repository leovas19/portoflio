import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safeLang = isLocale(lang) ? lang : "fr";
  const t = await getDictionary(safeLang);
  const skillData = t.skills;

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
          {t.sections.skills}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white">
          {safeLang === "fr"
            ? "Stack technique & posture professionnelle"
            : "Technical stack & professional strengths"}
        </h1>
        <p className="mt-2 max-w-3xl text-neutral-300">
          {safeLang === "fr"
            ? "Panorama des compétences que je mobilise sur mes projets data, IA et logiciels, ainsi que celles en cours d'acquisition à IMT Mines Alès."
            : "Overview of the skills I apply across data, AI and software projects, plus the topics I'm currently mastering at IMT Mines Alès."}
        </p>
      </header>

      <div className="space-y-12">
        {skillData.techGroups?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-white">
              {skillData.techHeading}
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {skillData.techGroups.map((group: { title: string; items: string[] }) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                    {group.items.map((item, idx) => (
                      <li key={`${group.title}-${idx}`} className="flex gap-2 leading-snug">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {skillData.learningItems?.length ? (
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              {skillData.learningHeading}
            </h2>
            <ul className="mt-4 grid gap-2 text-sm text-neutral-300 md:grid-cols-2">
              {skillData.learningItems.map((item: string, idx: number) => (
                <li key={`learning-${idx}`} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {skillData.professionalGroups?.length ? (
          <section>
            <h2 className="text-xl font-semibold text-white">
              {skillData.professionalHeading}
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-3">
              {skillData.professionalGroups.map(
                (group: { title: string; items: string[] }) => (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
                      {group.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                      {group.items.map((item, idx) => (
                        <li key={`${group.title}-${idx}`} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </section>
        ) : null}

        {skillData.toolsItems?.length ? (
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              {skillData.toolsHeading}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {skillData.toolsItems.map(
                (group: { title: string; items: string[] }) => (
                  <div key={group.title} className="space-y-2 text-sm text-neutral-300">
                    <p className="font-semibold text-neutral-200">{group.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, idx) => (
                        <span
                          key={`${group.title}-${idx}`}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
