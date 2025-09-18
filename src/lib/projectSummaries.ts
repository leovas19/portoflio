export type ProjectSummary = {
  slug: string;
  title: { fr: string; en: string };
  org: string;
  year: string;
  desc: { fr: string; en: string };
  tags: string[];
};

export const PROJECT_SUMMARIES: ProjectSummary[] = [
  {
    slug: "flexngate",
    title: {
      fr: "Automatisation PRF & prédictions métier",
      en: "PRF automation & business predictions",
    },
    org: "Flex-N-Gate",
    year: "2025",
    desc: {
      fr: "Application interne Django pour automatiser le chiffrage, intégrant des modèles ML (overspray, cycle time, pièces/jigs).",
      en: "Django-based internal app to automate costing, with ML models (overspray, cycle time, parts/jigs).",
    },
    tags: ["Django", "Machine Learning", "OpenPyXL", "Pandas", "SQL"],
  },
  {
    slug: "respectit",
    title: {
      fr: "LLM pour diagrammes KAOS → spécifications",
      en: "LLM for KAOS diagrams → specs",
    },
    org: "Respect-IT",
    year: "2025",
    desc: {
      fr: "Pipeline XML + LLM pour transformer des diagrammes Objectiver en spécifications textuelles.",
      en: "XML + LLM pipeline to transform Objectiver diagrams into textual specs.",
    },
    tags: ["Python", "LLM", "NLP", "Prompt Engineering"],
  },
  {
    slug: "maje",
    title: {
      fr: "Scraping & base de données – MAJE",
      en: "Scraping & database – MAJE",
    },
    org: "Projet MAJE (IMT Mines Alès)",
    year: "2024",
    desc: {
      fr: "Développement d’un outil de scraping pour collecter les producteurs de vin français, nettoyer et comparer les données avec une base existante.",
      en: "Developed a scraping tool to collect French wine producers, clean and compare the data against an existing database.",
    },
    tags: ["Python", "Scraping", "BeautifulSoup", "Pandas", "SQL"],
  },
  {
    slug: "marketingweb",
    title: {
      fr: "Sites web & marketing digital",
      en: "Websites & digital marketing",
    },
    org: "Projet entrepreneurial",
    year: "2024-2025",
    desc: {
      fr: "Création de sites vitrines et supports marketing (affiches, flyers) pour commerçants locaux.",
      en: "Showcase websites and marketing materials (posters, flyers) for local businesses.",
    },
    tags: ["Django", "React", "SEO", "Figma", "Design"],
  },
  {
    slug: "poker",
    title: {
      fr: "Projet Machine Learning – Poker",
      en: "Machine Learning Project – Poker",
    },
    org: "Projet personnel",
    year: "2024-2025",
    desc: {
      fr: "Construction d’un dataset de parties simulées et entraînement de modèles ML pour prédire les chances de victoire.",
      en: "Dataset of simulated poker games, ML models to predict winning probabilities.",
    },
    tags: ["Python", "Pandas", "Scikit-learn", "Gradient Boosting"],
  },
  {
    slug: "epas65",
    title: {
      fr: "DUERP & sécurité au travail",
      en: "DUERP & workplace safety",
    },
    org: "EPAS 65",
    year: "2024",
    desc: {
      fr: "Réalisation des Documents Uniques d'Évaluation des Risques Professionnels pour plusieurs sites (ESAT).",
      en: "Creation of occupational risk assessment documents (DUERP) for several sites (ESAT).",
    },
    tags: ["Gestion de projet", "Analyse de risques", "Communication", "Réglementation"],
  },
  {
    slug: "altemed",
    title: {
      fr: "Gestion d’infrastructures VE",
      en: "EV infrastructure management",
    },
    org: "Altemed",
    year: "2023",
    desc: {
      fr: "Business model et outils de prédiction pour le déploiement de bornes de recharge véhicules électriques.",
      en: "Business model and prediction tools for EV charging stations deployment.",
    },
    tags: ["Business Analysis", "Python", "Cartographie", "Prévision"],
  },
];
