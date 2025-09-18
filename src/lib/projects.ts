export type ProjectDetail = {
  title: string;
  tagline?: string;
  meta?: { label: string; value: string }[];
  content?: string;
  context?: string;
  missions?: string[];
  impact?: string;
  media?: string[];
  skills?: string[];
};

export type ProjectsByLocale = Record<string, ProjectDetail>;

export const PROJECT_DETAILS: Record<string, ProjectsByLocale> = {
flexngate: {
  fr: {
    title: "Automatisation PRF & prédictions métier",
    tagline: "Digitalisation du chiffrage RFQ pour l’équipe costing",
    meta: [
      { label: "Entreprise", value: "Flex-N-Gate (Audincourt)" },
      { label: "Durée", value: "14 semaines" },
      { label: "Rôle", value: "Data & Software Engineer" },
    ],
    skills: ["Python", "Django", "Machine Learning", "SQL", "OpenPyXL"],
    content: `
### Contexte
Stage de 14 semaines au centre de développement Flex-N-Gate d’Audincourt, intégré à l’équipe *costing* de l’équipementier automobile international. Mission : structurer la réponse aux RFQ grâce à une application interne fiable et maintenable.  

### Objectifs
- Automatiser la génération des dossiers **PRF1** et **PRF2** à partir des nomenclatures complexes (BOM).
- Sécuriser les calculs de coûts (matière, main-d’œuvre, achats, transport) et les ajustements métiers.
- Réduire drastiquement le temps de chiffrage tout en améliorant la traçabilité.

### Approche et réalisations
- Conception d’une architecture modulaire **Django** orchestrant la production PRF1/PRF2 et la consolidation des contrôles.
- Implémentation de modèles de **Machine Learning** (overspray, temps de cycle, pièces/jigs) et d’un arbre de décision optimisant les *family tools*.
- Industrialisation du traitement des fichiers Excel hétérogènes : pipeline de parsing, normalisation des données et validations métiers.
- Déploiement hors connexion via packages \`.whl\`, scripts d’initialisation et serveur Waitress pour une adoption rapide par les équipes.

### Résultats mesurables
- **7,8 % d’écart moyen** entre les PRF générés et les versions manuelles sur 29 projets (vs. seuil interne à 15 %).
- **Cycle réduit de plusieurs jours** : génération complète (PRF1 + PRF2 + contrôles) en **moins d’une heure**.
- Adoption par l’ensemble de l’équipe costing pour les RFQ stratégiques grâce à une standardisation et une auditabilité renforcées.

---

### Aperçu de l’application
![Page d’accueil](/flexngate/page_accueil_app.png)

### Diagramme des résultats
![Diagramme des résultats](/flexngate/diagramme_resultats.png)

---

### Stack et compétences clés
\`Python\`   \`Django\`   \`Machine Learning\`   \`SQL\`   \`OpenPyXL\`
    `,
  },
  en: {
    title: "PRF Automation & Business Predictions",
    tagline: "Digitizing RFQ costing for the costing team",
    meta: [
      { label: "Company", value: "Flex-N-Gate (Audincourt)" },
      { label: "Duration", value: "14 weeks" },
      { label: "Role", value: "Data & Software Engineer" },
    ],
    skills: ["Python", "Django", "Machine Learning", "SQL", "OpenPyXL"],
    content: `
### Context
14-week internship within the Flex-N-Gate Audincourt development center, embedded in the *costing* team of the global automotive supplier. Mission: deliver a reliable internal platform to structure RFQ responses.  

### Objectives
- Automate **PRF1** and **PRF2** generation from complex BOM inputs.
- Secure cost calculations across materials, labor, purchasing and logistics while keeping business overrides under control.
- Cut the quotation lead time and provide full traceability for decision-makers.

### Approach and deliverables
- Designed a modular **Django** architecture orchestrating the PRF1/PRF2 workflows and validation rules.
- Implemented **Machine Learning** models (overspray, cycle time, parts/jigs) and a decision tree to optimize family-tool recommendations.
- Industrialized Excel ingestion through parsing pipelines, data normalization and business-grade validation checks.
- Delivered an offline deployment strategy with custom \`.whl\` packages, setup scripts and a Waitress server for immediate adoption.

### Quantifiable impact
- **7.8% average variance** versus manual PRFs across 29 projects (below the 15% internal tolerance).
- **End-to-end cycle reduced from several days to under one hour** for PRF1 + PRF2 + quality gates.
- Rapid adoption by the costing team thanks to standardized outputs and an auditable workflow for strategic RFQs.

---

### Application snapshot
![Homepage](/flexngate/page_accueil_app.png)

### Results dashboard
![Results](/flexngate/diagramme_resultats.png)

---

### Stack & core skills
\`Python\`   \`Django\`   \`Machine Learning\`   \`SQL\`   \`OpenPyXL\`
    `,
  },
},

  respectit: {
    fr: {
      title: "LLM pour diagrammes KAOS → spécifications",
      tagline: "Automatiser la conversion des modèles Objectiver en textes exploitables",
      meta: [
        { label: "Client", value: "Respect-IT" },
        { label: "Période", value: "2025" },
        { label: "Rôle", value: "Ingénieur Data & IA" },
      ],
      skills: [
        "Python",
        "LLM",
        "XML",
        "Prompt Engineering",
        "Ingénierie des exigences",
      ],
      content: `
### Contexte
Respect-IT développe Objectiver, un outil de modélisation basé sur les diagrammes KAOS. Le projet visait à industrialiser la conversion de ces modèles en spécifications textuelles grâce à l’IA, afin de réduire l’effort manuel des consultants.  

### Objectifs
- Générer automatiquement des spécifications cohérentes à partir des diagrammes KAOS.  
- Réduire le temps de rédaction pour les équipes Respect-IT.  
- Intégrer un LLM dans l’écosystème Objectiver en respectant les exigences de traçabilité et de précision.  

### Approche et réalisations
- Extraction structurée des modèles (agents, goals, softgoals, refinements, opérations) depuis les exports XML Objectiver.  
- Pipeline KAOS → texte : représentation intermédiaire JSON, contextualisation des objectifs et préparation des prompts.  
- Intégration et comparaison de modèles de langage (OpenAI, Mistral, modèles locaux) pour produire des descriptions techniques fiables.  
- Évaluation qualitative des générations (clarté, fidélité, fluidité) et itérations de prompt engineering (modes explication, résumé, checklist).  
- Documentation interne et collaboration avec les experts Respect-IT pour valider la couverture fonctionnelle.  

### Résultats mesurables
- **~70 % de gain de temps** sur la rédaction des spécifications grâce à l’automatisation.  
- **Homogénéisation des livrables** facilitant les relectures et mises à jour.  
- **Prototype prêt** pour une intégration en plugin Objectiver ou API interne.  

---

### Stack et compétences clés
\`Python\`   \`LLM\`   \`XML\`   \`JSON\`   \`Prompt Engineering\`
      `,
    },
    en: {
      title: "LLM for KAOS diagrams → specs",
      tagline: "Automating Objectiver KAOS models into reliable specifications",
      meta: [
        { label: "Client", value: "Respect-IT" },
        { label: "Period", value: "2025" },
        { label: "Role", value: "Data & AI Engineer" },
      ],
      skills: [
        "Python",
        "LLM",
        "XML",
        "Prompt Engineering",
        "Requirements Engineering",
      ],
      content: `
### Context
Respect-IT builds Objectiver, a KAOS-based requirements engineering platform. The goal was to modernize how KAOS models are transformed into human-readable specifications using AI, cutting down manual effort for consultants.  

### Objectives
- Automatically produce coherent specifications from KAOS diagrams.  
- Reduce drafting time for Respect-IT teams.  
- Embed an LLM within the Objectiver ecosystem while preserving traceability and accuracy constraints.  

### Approach and deliverables
- Structured extraction of agents, goals, refinements and operations from Objectiver XML exports.  
- KAOS → text pipeline with JSON intermediate representations, engineering context building and tailored prompts.  
- Integration and benchmarking of language models (OpenAI, Mistral, on-prem alternatives) to output trustworthy technical narratives.  
- Qualitative evaluation across clarity, faithfulness and fluency, iterating with prompt engineering modes (explanation, summary, checklist).  
- Internal playbooks and close collaboration with system engineers to validate business interpretations.  

### Quantifiable impact
- **~70% time savings** on specification writing via automation.  
- **Consistent deliverables** that simplify review cycles and updates.  
- **Plugin-ready prototype** for future Objectiver integration or consultant-facing API.  

---

### Stack & core skills
\`Python\`   \`LLM\`   \`XML\`   \`JSON\`   \`Prompt Engineering\`
      `,
    },
  },

  epas65: {
    fr: {
      title: "DUERP & sécurité au travail",
      tagline: "Harmoniser les DUERP des établissements médico-sociaux EPAS 65",
      meta: [
        { label: "Organisme", value: "EPAS 65" },
        { label: "Période", value: "2025" },
        { label: "Rôle", value: "Assistant HSE" },
      ],
      skills: [
        "Analyse de risques",
        "Réglementation HSE",
        "Gestion de projet",
        "Concertation",
      ],
      content: `
### Contexte
Dans un plan de mise à niveau de la prévention des risques, l’EPAS 65 m’a confié la mise à jour et l’harmonisation des DUERP pour ses ESAT, foyers d’hébergement et centres médico-sociaux. L’objectif : sécuriser les pratiques, protéger les travailleurs en situation de handicap et répondre aux obligations réglementaires.  

### Objectifs
- Analyser les risques professionnels propres à chaque structure.  
- Mettre en forme des DUERP actualisés et homogènes, adaptés aux activités et publics accueillis.  
- Coordonner la démarche avec les référents sécurité, le F3SCT et les partenaires (APAVE, inspection).  
- Proposer des plans d’action hiérarchisés et réalistes.  

### Approche et réalisations
- Collecte des informations via visites de terrain, entretiens et revue documentaire.  
- Évaluation des risques selon une grille fréquence × gravité × maîtrise, avec focus sur les situations liées au handicap.  
- Intégration des recommandations d’experts (APAVE, médecine du travail) et articulation avec les procédures internes.  
- Rédaction d’un modèle DUERP harmonisé et déclinaisons par site, incluant plan d’actions et suivi.  
- Restitutions régulières à la direction, aux représentants du personnel et au F3SCT pour arbitrage.  

### Contraintes et enseignements
- Accès restreint à certains sites pendant des audits externes.  
- Période estivale complexe pour mobiliser les équipes.  
- Nécessité d’adapter méthodes et supports à des publics vulnérables.  

### Résultats
- **DUERP unifiés** couvrant l’ensemble des établissements EPAS 65.  
- **Meilleure lisibilité des risques** et priorisation des actions correctives.  
- **Culture prévention renforcée** grâce à la mobilisation des équipes et partenaires.  

---

### Stack et compétences clés
\`Analyse de risques\`   \`DUERP\`   \`Concertation\`   \`Gestion de projet\`
      `,
    },
    en: {
      title: "DUERP & workplace safety",
      tagline: "Harmonizing risk assessments across EPAS 65 care facilities",
      meta: [
        { label: "Organization", value: "EPAS 65" },
        { label: "Period", value: "2025" },
        { label: "Role", value: "HSE assistant" },
      ],
      skills: [
        "Risk analysis",
        "HSE compliance",
        "Project coordination",
        "Stakeholder engagement",
      ],
      content: `
### Context
EPAS 65 entrusted me with updating and harmonizing DUERP (occupational risk assessments) across its ESATs, care homes and medico-social centers. The mission supported regulatory compliance and worker protection, especially for staff with disabilities.  

### Objectives
- Assess site-specific occupational risks.  
- Deliver up-to-date, consistent DUERP documents tailored to each facility and audience.  
- Work closely with safety leads, F3SCT members and external partners (APAVE, labor inspectors).  
- Recommend actionable, prioritized prevention measures.  

### Approach and deliverables
- Gathered information through site visits, interviews and documentation review.  
- Rated risks using frequency × severity × control matrices, factoring disability-related constraints.  
- Embedded expert feedback (APAVE, occupational health) within the templates and action plans.  
- Authored a unified DUERP framework with site-specific adaptations and follow-up dashboards.  
- Shared progress with management, staff representatives and the F3SCT to secure alignment.  

### Challenges
- Limited access to certain facilities during external audits.  
- Busy summer schedules reducing on-site availability.  
- Need to adjust methods and materials for vulnerable workers.  

### Outcomes
- **Consistent DUERP documents** covering all EPAS 65 entities.  
- **Clearer risk visibility** and prioritized mitigation roadmaps.  
- **Strengthened prevention culture** via cross-team collaboration.  

---

### Stack & core skills
\`Risk analysis\`   \`DUERP\`   \`Stakeholder engagement\`   \`Project coordination\`
      `,
    },
  },

  poker: {
    fr: {
      title: "Projet Machine Learning – Poker",
      tagline: "Simuler et prédire les chances de victoire au Texas Hold’em",
      meta: [
        { label: "Cadre", value: "Projet académique" },
        { label: "Période", value: "2025" },
        { label: "Rôle", value: "Étudiant – Machine Learning" },
      ],
      skills: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Treys",
        "Visualisation",
      ],
      content: `
### Contexte
Premier projet complet en machine learning appliqué : prédire la probabilité de victoire d’une main de Texas Hold’em à chaque street (préflop, flop, turn, river). L’objectif était de maîtriser l’ensemble du cycle de vie d’un modèle prédictif, des données brutes aux métriques finales.  

### Objectifs
- Simuler des situations de jeu réalistes pour couvrir de multiples configurations.  
- Calculer la probabilité réelle de victoire de chaque main via Monte-Carlo.  
- Entraîner et comparer plusieurs algorithmes pour estimer cette probabilité selon le contexte.  
- Identifier les forces/faiblesses des modèles suivant les étapes du jeu.  

### Approche et réalisations
- Génération de milliers de parties avec la librairie \`treys\`, incluant positions, actions et tableaux partagés.  
- Calcul de probabilités exactes par simulations Monte-Carlo afin de disposer de labels fiables.  
- Feature engineering détaillé (main, board, nombre de joueurs, profondeur de tapis) et encodage adapté pour les modèles.  
- Entraînement de modèles variés : régression linéaire/polynomiale, \`RandomForestRegressor\`, \`GradientBoostingRegressor\`, réseau de neurones MLP.  
- Analyse des performances (MAE, RMSE, R²) par street pour comprendre les écarts entre algorithmes.  

### Résultats
- **Prédictions précises** avec un MLP optimisé, dépassant les modèles linéaires sur les phases flop/turn/river.  
- **Vue comparative** des algorithmes aidant à sélectionner la meilleure approche selon le stade du jeu.  
- **Compétences renforcées** en simulation de données, feature engineering, sélection de modèles et évaluation rigoureuse.  

---

### Stack et compétences clés
\`Python\`   \`treys\`   \`pandas\`   \`scikit-learn\`   \`matplotlib\`
      `,
    },
    en: {
      title: "Machine Learning Project – Poker",
      tagline: "Simulating and predicting Texas Hold’em win odds",
      meta: [
        { label: "Scope", value: "Academic project" },
        { label: "Period", value: "2025" },
        { label: "Role", value: "Student – Machine Learning" },
      ],
      skills: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Treys",
        "Visualization",
      ],
      content: `
### Context
First end-to-end machine learning project: predicting the win probability of a Texas Hold’em hand at every street. The focus was to practice the full predictive-model lifecycle from data generation to evaluation.  

### Objectives
- Simulate realistic game scenarios covering a wide range of contexts.  
- Compute ground-truth win odds through Monte Carlo simulations.  
- Train and benchmark multiple algorithms to estimate the probability based on game state.  
- Observe performance gaps per street to choose the right model for each phase.  

### Approach and deliverables
- Generated thousands of hands with the \`treys\` library, capturing positions, board cards and player stacks.  
- Ran Monte Carlo simulations to derive reliable labels for every situation.  
- Engineered features describing hole cards, community board, player count and stack depths.  
- Trained linear/polynomial regression, \`RandomForestRegressor\`, \`GradientBoostingRegressor\` and MLP networks.  
- Evaluated MAE, RMSE and R² per street, highlighting how accuracy evolves across preflop → river.  

### Outcomes
- **Accurate predictions** with a tuned MLP outperforming linear baselines on later streets.  
- **Comparative insights** guiding model selection depending on the game phase.  
- **Hands-on experience** in simulation, feature engineering, model selection and rigorous evaluation.  

---

### Stack & core skills
\`Python\`   \`treys\`   \`pandas\`   \`scikit-learn\`   \`matplotlib\`
      `,
    },
  },

  marketingweb: {
    fr: {
      title: "Sites web & marketing digital",
      tagline: "StudioVisioCom : vitrines digitales et IA pour le commerce local",
      meta: [
        { label: "Nature", value: "Projet entrepreneurial" },
        { label: "Période", value: "2025 – en cours" },
        { label: "Rôle", value: "Fondateur & dev full-stack" },
      ],
      skills: [
        "Django",
        "TailwindCSS",
        "Design graphique",
        "SEO local",
        "IA générative",
      ],
      content: `
### Contexte
StudioVisioCom est une initiative personnelle pour aider les commerçants locaux à gagner en visibilité en ligne sans complexité. L’offre combine sites vitrines administrables, identité visuelle et intégration d’outils IA pour alléger la charge opérationnelle des artisans.  

### Objectifs
- Concevoir des sites vitrines sobres, responsives et faciles à maintenir pour divers commerces (restauration, bien-être, chocolateries…).  
- Proposer des prestations graphiques (logos, menus, flyers) et marketing (réseaux sociaux, SEO local).  
- Intégrer des briques IA utiles : génération de contenus, chatbot, analyse d’avis clients.  
- Présenter chaque offre via des projets fictifs personnalisables pour inspirer les prospects.  

### Approche et réalisations
- Développement de sites sur mesure avec **Django**, **TailwindCSS** et composants réutilisables, garantissant performance et maintenance aisée.  
- Création de concepts vitrines (La Table d’Antoine, Les Délices Enchantés, Élégance Spa…) illustrant les prestations.  
- Génération de textes optimisés (présentations, CTA, descriptions SEO) à l’aide de **GPT-4** et workflows IA maison.  
- Intégration de formulaires intelligents, systèmes d’avis et notifications automatisées pour fluidifier la relation client.  
- Production d’assets graphiques : affiches, flyers, maquettes packaging, chartes visuelles cohérentes.  
- Développement en cours d’un générateur automatisé de sites vitrines piloté par IA.  

### Résultats actuels
- **Portfolio commercial complet** présentant les offres et cas d’usage.  
- **Premiers retours positifs** de commerçants locaux intéressés par l’approche clé-en-main.  
- **Base technique scalable** ouvrant la voie à une industrialisation de sites vitrines augmentés par l’IA.  

---

### Stack et compétences clés
\`Django\`   \`TailwindCSS\`   \`Design graphique\`   \`SEO local\`   \`GPT-4\`
      `,
    },
    en: {
      title: "Websites & digital marketing",
      tagline: "StudioVisioCom: AI-augmented storefronts for local businesses",
      meta: [
        { label: "Type", value: "Entrepreneurial project" },
        { label: "Period", value: "2025 – ongoing" },
        { label: "Role", value: "Founder & full-stack maker" },
      ],
      skills: [
        "Django",
        "TailwindCSS",
        "Graphic design",
        "Local SEO",
        "Generative AI",
      ],
      content: `
### Context
StudioVisioCom is my initiative to give local merchants an online presence without adding operational burden. The offer blends tailor-made showcase sites, branding assets and AI automation to promote local craftsmanship.  

### Objectives
- Build elegant, responsive and editable showcase websites for restaurants, bakeries, salons and more.  
- Deliver graphic design services (logos, menus, flyers) plus digital marketing packages (social media, local SEO).  
- Embed helpful AI features: content generation, customer chatbot, sentiment analysis on reviews.  
- Present customizable mock projects to demonstrate value for each business archetype.  

### Approach and deliverables
- Crafted bespoke websites with **Django**, **TailwindCSS** and reusable UI components to ensure performance and maintainability.  
- Produced fiction-based showcases (La Table d’Antoine, Les Délices Enchantés, Élégance Spa…) highlighting the service catalog.  
- Generated optimized copy (hero sections, CTAs, SEO descriptions) through **GPT-4** and custom prompt flows.  
- Integrated smart contact forms, review systems and automated notifications to streamline customer journeys.  
- Created supporting materials: posters, flyers, packaging mockups and cohesive brand guidelines.  
- Currently building an AI-driven automatic site generator to scale delivery.  

### Outcomes to date
- **Full commercial portfolio** ready to pitch services to local merchants.  
- **Early feedback** from artisans validating the turnkey positioning.  
- **Scalable technical foundation** to industrialize AI-augmented showcase sites.  

---

### Stack & core skills
\`Django\`   \`TailwindCSS\`   \`Graphic design\`   \`Local SEO\`   \`GPT-4\`
      `,
    },
  },

  altemed: {
    fr: {
      title: "Gestion d’infrastructures VE",
      tagline: "Construire le business model IRVE d’Altemed et ses outils décisionnels",
      meta: [
        { label: "Organisme", value: "Altemed" },
        { label: "Période", value: "2024" },
        { label: "Rôle", value: "Consultant junior data/business" },
      ],
      skills: [
        "Business model",
        "Python",
        "Géodata",
        "Finance",
        "Stratégie",
      ],
      content: `
### Contexte
Altemed, acteur de l’énergie et de l’environnement, explorait une nouvelle activité autour des infrastructures de recharge pour véhicules électriques (IRVE). Ma mission reposait sur l’étude de faisabilité, la construction d’un business model opérationnel et la conception d’outils d’aide à la décision.  

### Objectifs
- Analyser le marché de la recharge VE : typologies de clients, concurrence, rentabilité.  
- Modéliser les coûts d’installation/exploitation et bâtir des scénarios de revenus.  
- Concevoir des outils techniques pour simuler l’implantation et la performance économique.  

### Approche et réalisations
- Création d’un tableau de bord financier dynamique intégrant CAPEX, OPEX, fréquentation et ROI.  
- Scripts **Python** estimant la rentabilité d’une borne selon l’emplacement et l’usage attendu.  
- Cartographie interactive (\`folium\`, données Google Maps/OpenStreetMap) croisant trafic, densité population, concurrence.  
- Analyse comparative de modèles économiques (vente directe, abonnement, location).  
- Rapport stratégique et recommandations pour la direction.  

### Résultats
- **Business model chiffré** prêt à présenter à des partenaires/investisseurs.  
- **Outils internes** pour simuler les scénarios d’implantation et de rentabilité.  
- **Feuille de route claire** ouvrant la voie au lancement de l’activité IRVE.  

---

### Stack et compétences clés
\`Python\`   \`pandas\`   \`geopandas\`   \`folium\`   \`Modélisation financière\`
      `,
    },
    en: {
      title: "EV infrastructure management",
      tagline: "Designing Altemed’s EV charging business model and decision tools",
      meta: [
        { label: "Organization", value: "Altemed" },
        { label: "Period", value: "2024" },
        { label: "Role", value: "Junior consultant – data & strategy" },
      ],
      skills: [
        "Business modeling",
        "Python",
        "Geospatial analysis",
        "Finance",
        "Strategy",
      ],
      content: `
### Context
Altemed, an energy and environment company, wanted to assess a new EV charging venture. I was responsible for feasibility analysis, building the operating model and delivering decision-support tools.  

### Objectives
- Conduct market research on EV charging demand, competitors and profitability.  
- Deliver a financial model covering installation/operating costs and revenue scenarios.  
- Provide technical tooling to simulate locations and economic performance.  

### Approach and deliverables
- Developed a dynamic financial dashboard (CAPEX, OPEX, utilization, ROI).  
- Authored **Python** scripts estimating charger profitability based on location and expected usage.  
- Built an interactive map (\`folium\`, Google Maps/OpenStreetMap data) combining traffic, population density and competitor coverage.  
- Benchmarked business models (direct sales, subscription, leasing).  
- Produced a comprehensive report with strategic recommendations for leadership.  

### Outcomes
- **Investment-ready business model** with quantified scenarios.  
- **Internal simulators** to test rollout strategies and profitability.  
- **Clear roadmap** for launching the IRVE line backed by financial and technical groundwork.  

---

### Stack & core skills
\`Python\`   \`pandas\`   \`geopandas\`   \`folium\`   \`Financial modeling\`
      `,
    },
  },

  maje: {
    fr: {
      title: "Scraping & base de données – MAJE",
      tagline: "Consolider 8 500 producteurs de vin via un scraping multi-sources",
      meta: [
        { label: "Cadre", value: "Mission étudiante MAJE" },
        { label: "Période", value: "2025" },
        { label: "Rôle", value: "Développeur Python / Data Engineer" },
      ],
      skills: [
        "Python",
        "Selenium",
        "BeautifulSoup",
        "Pandas",
        "Data Matching",
      ],
      content: `
### Contexte
Mission étudiante MAJE visant à constituer une base exhaustive des producteurs de vins français. Les données devaient enrichir et comparer une base existante pour valoriser la filière et préparer des partenariats professionnels.  

### Objectifs
- Scraper les principaux annuaires viticoles (Hachette-Vins, La RVF, VinsocialClub…).  
- Extraire des informations exploitables : coordonnées, surface, typologie de vins, millésimes, prix, distinctions.  
- Nettoyer et fusionner les sources, tout en détectant automatiquement les doublons inter-sites.  
- Comparer la base consolidée avec un référentiel interne pour mesurer la couverture et les écarts.  

### Approche et réalisations
- Développement de scripts robustes avec **Selenium** et **BeautifulSoup** (gestion des cookies, délais anti-bannissement, rendu JS).  
- Extraction structurée des fiches domaines et des catalogues de vins : métadonnées, millésimes, notes, labels.  
- Normalisation puis export multi-formats (**JSON**, **CSV**) via **Pandas**, avec contrôles de qualité et logs détaillés.  
- Déduplication multi-critères (similarités \`rapidfuzz\`, règles maison) et fusion des enregistrements.  
- Tableaux de bord de couverture : taux de présence par région, doublons détectés, entrées uniques livrées.  

### Résultats mesurables
- **Base consolidée de 8 500+ domaines** nettoyée et dédoublonnée.  
- **>90 % de couverture** sur plusieurs régions clés.  
- Livrables prêts pour des comparaisons futures et l’exploitation commerciale (veille, prospection, analyses territoriales).  

---

### Stack et compétences clés
\`Python\`   \`Selenium\`   \`BeautifulSoup\`   \`Pandas\`   \`RapidFuzz\`
      `,
    },
    en: {
      title: "Scraping & database – MAJE",
      tagline: "Building a unified dataset of 8,500 French wineries via scraping",
      meta: [
        { label: "Program", value: "MAJE student mission" },
        { label: "Period", value: "2025" },
        { label: "Role", value: "Python Developer / Data Engineer" },
      ],
      skills: [
        "Python",
        "Selenium",
        "BeautifulSoup",
        "Pandas",
        "Data Matching",
      ],
      content: `
### Context
Student assignment (MAJE) focused on building a trustworthy database of French wine producers. The dataset had to benchmark and enrich an existing reference to support industry outreach and future partnerships.  

### Objectives
- Scrape leading winery listings (Hachette-Vins, La RVF, VinsocialClub…).  
- Extract actionable fields: contact details, acreage, wine portfolio, vintages, awards, pricing.  
- Clean, standardize and merge multi-source data while detecting cross-site duplicates.  
- Benchmark the consolidated dataset against an internal reference to quantify coverage and gaps.  

### Approach and deliverables
- Built resilient **Selenium** + **BeautifulSoup** scrapers (cookie handling, dynamic content, anti-ban pacing).  
- Parsed domain profiles and wine catalogs capturing metadata, vintages, ratings and labels.  
- Normalized outputs to **JSON** / **CSV** with **Pandas**, including quality checks and structured logging.  
- Applied fuzzy matching (\`rapidfuzz\`, custom rules) to deduplicate and merge entries.  
- Produced coverage dashboards: regional presence, unique entries, duplicate ratios and export readiness.  

### Quantifiable impact
- **8,500+ wineries consolidated** into a clean, deduplicated dataset.  
- **>90% coverage** achieved across key wine regions.  
- Reusable deliverables for competitive intelligence, prospecting and territorial analysis.  

---

### Stack & core skills
\`Python\`   \`Selenium\`   \`BeautifulSoup\`   \`Pandas\`   \`RapidFuzz\`
      `,
    },
  },
};
