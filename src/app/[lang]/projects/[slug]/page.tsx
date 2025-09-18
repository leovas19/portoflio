import { PROJECT_DETAILS } from "@/lib/projects";
import type { ProjectDetail } from "@/lib/projects";
import { isLocale } from "@/lib/i18n";
import Markdown from "@/components/Markdown";
import Image from "next/image";

type Project = ProjectDetail;

type MarkdownSection = {
  heading: string;
  body: string;
};

const HEADING_PATTERNS = {
  context: ["contexte", "context"],
  objectives: ["objectifs", "objectives"],
  approach: ["approche", "approach"],
  impact: ["résultats", "impact", "results"],
  stack: ["stack", "compétences"],
};

function extractMarkdownSections(markdown: string): MarkdownSection[] {
  const sections: MarkdownSection[] = [];
  const pattern = /### (.+?)\n([\s\S]*?)(?=\n### |\n---|$)/g;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(markdown)) !== null) {
    sections.push({
      heading: match[1].trim(),
      body: match[2].trim(),
    });
  }

  return sections;
}

function findSection(
  sections: MarkdownSection[],
  patterns: string[]
): MarkdownSection | undefined {
  return sections.find((section) =>
    patterns.some((pattern) => section.heading.toLowerCase().includes(pattern))
  );
}

function extractHighlightMetrics(body: string) {
  const lines = body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "));

  const metrics: { value: string; description: string }[] = [];

  for (const line of lines) {
    const withoutMarker = line.replace(/^-\s*/, "").trim();
    const boldMatch = withoutMarker.match(/\*\*(.+?)\*\*/);
    if (!boldMatch) continue;

    const value = boldMatch[1].trim();
    const description = withoutMarker
      .replace(boldMatch[0], "")
      .replace(/^[:–-]\s*/, "")
      .trim();

    metrics.push({ value, description });
  }

  return metrics;
}

function extractImages(section?: MarkdownSection) {
  if (!section) return [];

  const images: { src: string; alt: string; title: string }[] = [];
  const regex = /!\[(.*?)\]\((.*?)\)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(section.body)) !== null) {
    images.push({
      alt: match[1],
      src: match[2],
      title: section.heading,
    });
  }

  return images;
}

export default function ProjectPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const { lang, slug } = params; // <-- pas de Promise ici
  const safeLang = isLocale(lang) ? lang : "fr";

  const project: Project | undefined = PROJECT_DETAILS[slug]?.[safeLang];

  if (!project) return <div className="p-6">Projet introuvable</div>;

  // Filets de sécurité
  const missions = project.missions ?? [];
  const skills = project.skills ?? [];
  const media = project.media ?? [];

  const sections = project.content
    ? extractMarkdownSections(project.content)
    : [];

  const contextSection = findSection(sections, HEADING_PATTERNS.context);
  const objectivesSection = findSection(sections, HEADING_PATTERNS.objectives);
  const approachSection = findSection(sections, HEADING_PATTERNS.approach);
  const impactSection = findSection(sections, HEADING_PATTERNS.impact);
  const stackSection = findSection(sections, HEADING_PATTERNS.stack);

  const gallerySections = sections.filter((section) =>
    /aperçu|application|diagramme|results|snapshot/i.test(section.heading)
  );

  const galleryItems = gallerySections.flatMap((section) =>
    extractImages(section)
  );

  const highlightMetrics = impactSection
    ? extractHighlightMetrics(impactSection.body).slice(0, 3)
    : [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-white">{project.title}</h1>

      {/* Nouveau rendu narratif structuré si 'content' est défini */}
      {project.content ? (
        <div className="mt-10 space-y-16">
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-xl shadow-black/20">
            <div className="absolute -top-24 right-[-6rem] h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute -bottom-32 left-[-8rem] h-52 w-52 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
                {safeLang === "fr" ? "Stage Flex-N-Gate" : "Flex-N-Gate Internship"}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                {project.tagline ?? project.title}
              </h2>
              {contextSection ? (
                <div className="mt-6 prose prose-invert max-w-none text-neutral-200">
                  <Markdown content={contextSection.body} />
                </div>
              ) : null}

              {project.meta && project.meta.length ? (
                <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                  {project.meta.map((item, idx) => (
                    <div
                      key={`${item.label}-${idx}`}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-200"
                    >
                      <dt className="text-xs uppercase tracking-wide text-neutral-400">
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-medium text-white">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {highlightMetrics.length ? (
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {highlightMetrics.map((metric, idx) => (
                    <div
                      key={`${metric.value}-${idx}`}
                      className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4"
                    >
                      <p className="text-lg font-semibold text-white">
                        {metric.value}
                      </p>
                      {metric.description ? (
                        <p className="mt-2 text-sm text-neutral-200">
                          {metric.description}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}

              {skills.length ? (
                <div className="mt-10 flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={`${skill}-${idx}`}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </section>

          {(objectivesSection || approachSection || impactSection) && (
            <section>
              <div className="grid gap-6 md:grid-cols-3">
                {[objectivesSection, approachSection, impactSection]
                  .filter((section): section is MarkdownSection => Boolean(section))
                  .map((section, idx) => {
                    const gradient = [
                      "from-emerald-400/15",
                      "from-sky-400/15",
                      "from-amber-400/20",
                    ][idx % 3];

                    return (
                      <div
                        key={section.heading}
                        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20"
                      >
                        <div
                          className={`absolute inset-0 -z-10 bg-gradient-to-br ${gradient} via-transparent to-transparent`}
                        />
                        <p className="text-xs uppercase tracking-wide text-neutral-400">
                          {section.heading}
                        </p>
                        <div className="mt-3 prose prose-invert max-w-none text-sm text-neutral-200">
                          <Markdown content={section.body} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          )}

          {galleryItems.length ? (
            <section>
              <h3 className="text-xl font-semibold text-white">
                {safeLang === "fr"
                  ? "Aperçus de l’application"
                  : "Product snapshots"}
              </h3>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {galleryItems.map((item, idx) => (
                  <figure
                    key={`${item.src}-${idx}`}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-lg shadow-black/30"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.src}
                        alt={item.alt || item.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 40vw, 100vw"
                        priority={idx === 0}
                      />
                    </div>
                    <figcaption className="px-5 py-4 text-sm text-neutral-300">
                      <span className="block text-xs uppercase tracking-wide text-neutral-500">
                        {item.title}
                      </span>
                      {item.alt ? (
                        <span className="mt-1 block text-neutral-200">
                          {item.alt}
                        </span>
                      ) : null}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          {stackSection && !skills.length ? (
            <section>
              <h3 className="text-xl font-semibold text-white">
                {stackSection.heading}
              </h3>
              <div className="mt-4 prose prose-invert max-w-none text-neutral-200">
                <Markdown content={stackSection.body} />
              </div>
            </section>
          ) : null}
        </div>
      ) : (
        <>
          {/* Fallback ancien schéma */}
          {project.context && (
            <p className="text-neutral-300 leading-relaxed">{project.context}</p>
          )}

          {missions.length ? (
            <>
              <h2 className="mt-8 text-xl font-semibold">Missions</h2>
              <ul className="list-disc pl-6 text-neutral-300 space-y-1 mt-2">
                {missions.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </>
          ) : null}

          {skills.length ? (
            <>
              <h2 className="mt-8 text-xl font-semibold">Compétences</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((s, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </>
          ) : null}

          {project.impact && (
            <>
              <h2 className="mt-8 text-xl font-semibold">Impact</h2>
              <p className="text-neutral-300 mt-2">{project.impact}</p>
            </>
          )}

          {media.length ? (
            <>
              <h2 className="mt-8 text-xl font-semibold">Galerie</h2>
              <div className="grid grid-cols-1 gap-4 mt-2">
                {media.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
                  >
                    <Image
                      src={src}
                      alt={`media-${i}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 60vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </>
      )}

      {/* Dans le nouveau schéma, on veut les tags en bas même si 'content' est utilisé */}
      {!project.content ? null : skills.length ? (
        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <span
              key={i}
              className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>
      ) : null}
    </main>
  );
}
