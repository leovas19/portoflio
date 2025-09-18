import type { Locale } from "./i18n";

const dict = {
  fr: {
    site: { owner: "Léo Vasseur", rights: "Tous droits réservés." },
    nav: { projects: "Projets", skills: "Compétences", about: "À propos", contact: "Contact" },
    hero: {
      available: "Disponible dès mars 2026",
      tagline: "Élève-ingénieur – Data • IA • Automatisation",
      location: "IMT Mines Alès • Spécialité Informatique & IA",
    },
    cta: {
      viewProjects: "Explorer mes projets",
      downloadCV: "Télécharger mon CV",
      downloadRecommendation: "Lettre de recommandation",
    },
    sections: { projects: "Projets sélectionnés", skills: "Compétences", about: "Présentation", contact: "Contact" },
    skills: {
      techHeading: "Compétences techniques",
      techGroups: [
        {
          title: "Data Science & Machine Learning",
          items: [
            "Préparation et nettoyage de données (Pandas, NumPy)",
            "Feature engineering multi-sources (texte, actions de jeu, Excel)",
            "Entraînement: régressions, Random Forest, Gradient Boosting, MLP",
            "Évaluation: MAE, RMSE, R², matrices de confusion, cross-validation",
            "Visualisation et analyse (matplotlib, seaborn)",
            "Modèles métiers: overspray, temps de cycle, pièces/jig, probabilité de victoire",
          ],
        },
        {
          title: "Développement Python",
          items: [
            "Scripts d'automatisation (Excel, fichiers texte, logs)",
            "Simulations Monte Carlo",
            "Manipulation de JSON et XML",
            ".xlsm avec conservation des macros",
            "Structuration, logging et optimisation de projets",
          ],
        },
        {
          title: "Web scraping & collecte de données",
          items: [
            "Scraping de sites dynamiques (JavaScript, cookies, pagination)",
            "Selenium, Playwright, BeautifulSoup, requests",
            "Nettoyage et fusion de bases multi-sources",
            "Détection de doublons (fuzzy matching, rapidfuzz)",
          ],
        },
        {
          title: "Développement web",
          items: [
            "Applications Django modulaires",
            "Interfaces responsives avec TailwindCSS",
            "Déploiements Render & Vercel",
            "Formulaires dynamiques, dashboards, interfaces de prédiction",
            "Upload et traitement Excel côté back-end",
          ],
        },
        {
          title: "Excel avancé",
          items: [
            "Lecture/écriture via OpenPyXL et pandas",
            "Génération de feuilles, formules et logs",
            "Intégration d'outils métiers (PRF, DUERP, modèles financiers)",
          ],
        },
      ],
      learningHeading: "Compétences en cours d'acquisition",
      learningItems: [
        "Statistiques et probabilités avancées",
        "Mathématiques pour le machine learning et l'optimisation",
        "Apprentissage automatique avancé",
        "Deep learning & reinforcement learning",
        "Analyse de décision",
        "IA cognitive, interaction homme-machine",
        "Traitement d'image, traitement de texte, gestion des connaissances",
      ],
      professionalHeading: "Compétences professionnelles",
      professionalGroups: [
        {
          title: "Gestion de projet & analyse métier",
          items: [
            "Rédaction de rapports professionnels (Altemed, EPAS 65)",
            "Élaboration de business models IRVE",
            "Conception d'outils d'aide à la décision",
            "Prise en compte des contraintes terrain (commerçants, ESAT, HSE)",
          ],
        },
        {
          title: "Esprit analytique & rigueur",
          items: [
            "Structuration de problèmes métiers en solutions algorithmiques",
            "Comparaison de modèles pour sélectionner le plus pertinent",
            "Pédagogie auprès d'interlocuteurs non techniques",
          ],
        },
        {
          title: "Autonomie & initiative",
          items: [
            "Pilotage de projets de A à Z (StudioVisioCom, poker, MAJE)",
            "Livrables sans cahier des charges figé",
            "Prospection, démonstrations et contenu commercial",
          ],
        },
      ],
      toolsHeading: "Technologies & outils maîtrisés",
      toolsItems: [
        {
          title: "Langages & bibliothèques",
          items: [
            "Python",
            "Pandas",
            "scikit-learn",
            "OpenPyXL",
            "BeautifulSoup",
            "Selenium",
            "Treys",
            "Django",
            "TailwindCSS",
            "Matplotlib",
            "Seaborn",
            "PyTorch",
            "Keras",
            "GPT-4 / OpenAI",
          ],
        },
        {
          title: "Web",
          items: ["HTML", "CSS", "JavaScript (bases)"],
        },
        {
          title: "Design & graphisme",
          items: ["Photoshop", "Illustrator"],
        },
        {
          title: "Cartographie & API",
          items: ["Google Maps API", "Folium", "GeoPandas"],
        },
        {
          title: "Outils de développement",
          items: ["Git", "VS Code", "Jupyter Notebook"],
        },
      ],
    },
    about: {
      text:
        "Étudiant à IMT Mines Alès (Informatique & IA). J'aime transformer des fichiers Excel en outils fiables : automatisations robustes, APIs propres, modèles ML évalués (MAE/RMSE/R²) et une attention maniaque aux détails. Projets concrets orientés impact (sites vitrines, e‑commerce, scraping).",
    },
    contact: {
      pitch: "Tu veux en voir plus, ou discuter d'un stage/mission ?",
      emailMe: "Me contacter",
      includeOnCV: "À inclure sur le CV",
      cvUrl: "URL courte personnalisée (ex: leovasseur.dev)",
      qr: "Code QR menant aux cas d’étude",
      enVersion: "Version anglaise disponible (switch)",
      cvPdf: "Lien direct vers le CV PDF",
    },
    common: { viewProject: "Voir le projet" },
  },
  en: {
    site: { owner: "Léo Vasseur", rights: "All rights reserved." },
    nav: { projects: "Projects", skills: "Skills", about: "About", contact: "Contact" },
    hero: {
      available: "Available from March 2026",
      tagline: "Engineering student – Data • AI • Automation",
      location: "IMT Mines Alès • Computer Science & AI",
    },
    cta: {
      viewProjects: "Explore my projects",
      downloadCV: "Download my resume",
      downloadRecommendation: "Recommendation letter",
    },
    sections: { projects: "Selected projects", skills: "Skills", about: "Overview", contact: "Contact" },
    skills: {
      techHeading: "Technical skills",
      techGroups: [
        {
          title: "Data Science & Machine Learning",
          items: [
            "Data preparation and cleaning (Pandas, NumPy)",
            "Feature engineering across text, gameplay logs and Excel",
            "Model training: linear/logistic regression, Random Forest, Gradient Boosting, MLP",
            "Evaluation: MAE, RMSE, R², confusion matrices, cross-validation",
            "Visual analytics with matplotlib and seaborn",
            "Business predictors: overspray, cycle time, parts/jig, poker win odds",
          ],
        },
        {
          title: "Python engineering",
          items: [
            "Automation scripts for Excel, text files and logs",
            "Monte Carlo simulations",
            "Processing JSON and XML structures",
            "Handling .xlsm while preserving macros",
            "Project structuring, logging and optimisation",
          ],
        },
        {
          title: "Web scraping & data collection",
          items: [
            "Scraping dynamic websites (JavaScript, cookies, pagination)",
            "Selenium, Playwright, BeautifulSoup, requests",
            "Cleaning and merging multi-source datasets",
            "Duplicate detection with fuzzy matching / rapidfuzz",
          ],
        },
        {
          title: "Web development",
          items: [
            "Modular Django applications",
            "Responsive UIs with TailwindCSS",
            "Deployments on Render and Vercel",
            "Dynamic forms, dashboards and prediction flows",
            "Excel upload and processing in Python back ends",
          ],
        },
        {
          title: "Advanced Excel",
          items: [
            "Automated read/write with OpenPyXL and pandas",
            "Programmatic worksheet, formula and log generation",
            "Embedding business tooling (PRF, DUERP, financial models)",
          ],
        },
      ],
      learningHeading: "Currently learning",
      learningItems: [
        "Advanced statistics and probability",
        "Mathematics for machine learning and optimisation",
        "Advanced machine learning",
        "Deep learning and reinforcement learning",
        "Decision analysis",
        "Cognitive AI and human-computer interaction",
        "Image, text and knowledge processing",
      ],
      professionalHeading: "Professional capabilities",
      professionalGroups: [
        {
          title: "Project leadership & business analysis",
          items: [
            "Professional reporting (Altemed, EPAS 65)",
            "EV charging business model design",
            "Custom decision-support tooling",
            "Understanding field constraints (retailers, ESAT teams, HSE leads)",
          ],
        },
        {
          title: "Analytical mindset & rigour",
          items: [
            "Structure business challenges into algorithmic solutions",
            "Benchmark models to pick the right fit",
            "Explain technical work clearly to non-technical stakeholders",
          ],
        },
        {
          title: "Autonomy & initiative",
          items: [
            "End-to-end project ownership (StudioVisioCom, poker, MAJE)",
            "Deliverables without rigid specifications",
            "Client outreach, demos and marketing assets",
          ],
        },
      ],
      toolsHeading: "Technologies & tools",
      toolsItems: [
        {
          title: "Languages & libraries",
          items: [
            "Python",
            "Pandas",
            "scikit-learn",
            "OpenPyXL",
            "BeautifulSoup",
            "Selenium",
            "Treys",
            "Django",
            "TailwindCSS",
            "Matplotlib",
            "Seaborn",
            "PyTorch",
            "Keras",
            "GPT-4 / OpenAI",
          ],
        },
        {
          title: "Web",
          items: ["HTML", "CSS", "JavaScript (basics)"],
        },
        {
          title: "Design",
          items: ["Photoshop", "Illustrator"],
        },
        {
          title: "Mapping & APIs",
          items: ["Google Maps API", "Folium", "GeoPandas"],
        },
        {
          title: "Development tooling",
          items: ["Git", "VS Code", "Jupyter Notebook"],
        },
      ],
    },
    about: {
      text:
        "Engineering student at IMT Mines Alès (Computer Science & AI). I love turning messy Excel into reliable tools: robust automations, clean APIs, properly evaluated ML models (MAE/RMSE/R²), and obsessive attention to detail. Impact‑oriented real projects (showcase sites, e‑commerce, scraping).",
    },
    contact: {
      pitch: "Want to see more or discuss an internship/mission?",
      emailMe: "Email me",
      includeOnCV: "Include on your CV",
      cvUrl: "Short custom URL (e.g., leovasseur.dev)",
      qr: "QR code to case studies",
      enVersion: "English version available (switch)",
      cvPdf: "Direct link to CV PDF",
    },
    common: { viewProject: "View project" },
  },
} as const;

export async function getDictionary(locale: Locale) {
  return dict[locale];
}
