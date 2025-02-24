import image1 from "../../public/assets/img/portfolio/portfolio-6.jpg";
import image2 from "../../public/assets/img/portfolio/portfolio-5.jpg";
import image3 from "../../public/assets/img/portfolio/portfolio-4.jpg";
import image4 from "../../public/assets/img/portfolio/portfolio-3.jpg";
import image5 from "../../public/assets/img/portfolio/portfolio-2.jpg";
import image6 from "../../public/assets/img/portfolio/portfolio-1.jpg";
import image7 from "../../public/assets/img/portfolio/portfolio-6.jpg";
import image8 from "../../public/assets/img/portfolio/portfolio-5.jpg";
import image9 from "../../public/assets/img/portfolio/portfolio-4.jpg";
import image10 from "../../public/assets/img/portfolio/portfolio-3.jpg";
import image11 from "../../public/assets/img/portfolio/portfolio-2.jpg";
import image12 from "../../public/assets/img/portfolio/portfolio-1.jpg";
import image13 from "../../public/assets/img/portfolio/portfolio-3.jpg";
import image14 from "../../public/assets/img/portfolio/portfolio-2.jpg";
import image15 from "../../public/assets/img/portfolio/portfolio-1.jpg";
import image16 from "../../public/assets/img/portfolio/portfolio-1.jpg";

const formations = [
  {
    "id": "excel-initiation-01",
    "categorie": "BUREAUTIQUE",
    "titre": "Formation Excel Niveau Initiation",
    "description": "Avec cette formation de niveau débutant, apprenez à réaliser des calculs simples, des tableurs, et des graphiques. Idéal pour les débutants et les utilisateurs intermédiaires, cette formation vous rendra rapidement opérationnel pour tirer le meilleur parti d'Excel dans votre travail quotidien.",
    "objectifs_pedagogiques": [
      "Maîtriser la manipulation de classeurs",
      "Saisir, modifier et trier des données",
      "Réaliser des calculs",
      "Construire des graphiques",
      "Mettre en forme et réaliser la mise en page"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "8h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "excel-intermediaire-01",
    "categorie": "BUREAUTIQUE",
    "titre": "Formation Excel Niveau Intermédiaire",
    "description": "Avec cette formation Excel de niveau Intermédiaire, approfondissez vos compétences en matière d’utilisation des feuilles de calcul et d’analyse de données.",
    "objectifs_pedagogiques": [
      "Perfectionner ses compétences sur Excel 2019",
      "Réaliser des calculs avancés",
      "Créer des plages nommées",
      "Réaliser et exploiter des tableaux de données",
      "Maîtriser les objets graphiques et la mise en forme"
    ],
    "niveau": "Intermédiaire",
    "public": "Tous publics",
    "duree": "11h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "excel-avance-01",
    "categorie": "BUREAUTIQUE",
    "titre": "Formation Excel Niveau Avancé",
    "description": "Excel 2019 est un logiciel tableur de la suite Microsoft. Excel vous permet d’effectuer des opérations de calcul, d’analyse de données, de représentation graphique et de programmation dans un but professionnel ou personnel. Avec cette formation de niveau Avancé, complétez vos compétences et maîtrisez les différentes fonctionnalités avancées d’Excel.",
    "objectifs_pedagogiques": [
      "Réaliser des calculs avancés complexes",
      "Créer des filtres de données avancés",
      "Savoir utiliser les outils d’analyse",
      "Réaliser et exploiter des tableaux et graphiques croisés dynamiques",
      "Utiliser les macro-commandes"
    ],
    "niveau": "Avancé",
    "public": "Tous publics",
    "duree": "10h30 environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "excel-expert-01",
    "categorie": "BUREAUTIQUE",
    "titre": "Formation Excel Niveau Expert",
    "description": "Gagnez en efficacité et maîtrisez Excel en peu de temps avec cette formation, axée sur des compétences cruciales telles que les raccourcis clavier, les tableaux croisés dynamiques, les formules avancées, la mise en forme, la gestion des données, et la création de graphiques personnalisés.",
    "objectifs_pedagogiques": [
      "Maîtriser les macros sur Excel 2019",
      "Exploiter les opérateurs mathématiques essentiels",
      "Utiliser les fonctions avancées des tableaux croisés dynamiques",
      "Créer et exploiter les formules matricielles",
      "Créer et utiliser les fonctions graphiques spécifiques"
    ],
    "niveau": "Expert",
    "public": "Tous publics",
    "duree": "7h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "certification-tosa-excel-2019",
    "categorie": "BUREAUTIQUE",
    "titre": "Réussir sa Certification TOSA Excel 2019",
    "description": "Cette formation complète et pratique vous prépare de manière efficace à la réussite de votre certification TOSA Excel 2019 en vous fournissant les connaissances approfondies.",
    "objectifs_pedagogiques": [
      "Acquérir une certification TOSA en se préparant efficacement à l'examen",
      "Développer des compétences pratiques dans l'utilisation des logiciels",
      "Éviter les pièges courants associés à la préparation et à l'examen TOSA",
      "Renforcer l'aisance des participants dans l'expression orale et écrite"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "word-debutant",
    "categorie": "BUREAUTIQUE",
    "titre": "Word - Niveau Débutant",
    "description": "Dans cette formation de niveau Débutant, vous allez découvrir les fonctionnalités de base de Word 2019, un logiciel incontournable de notre vie professionnelle et personnelle.",
    "objectifs_pedagogiques": [
      "Se familiariser avec l’interface du logiciel Word",
      "Maîtriser la mise en forme d’un texte ou d’un document simple",
      "Réaliser une mise en page",
      "Savoir créer des tableaux avec Word"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "7h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "word-intermediaire",
    "categorie": "BUREAUTIQUE",
    "titre": "Word - Niveau Intermédiaire",
    "description": "Avec cette formation de niveau intermédiaire, approfondissez vos compétences en matière d’utilisation des feuilles de calcul et d’analyse de données et maîtrisez les différentes fonctionnalités avancées de Word.",
    "objectifs_pedagogiques": [
      "Développer ses compétences sur Word",
      "Maîtriser la fonction Style",
      "Savoir créer une table des matières",
      "Être capable d’ajouter des notes ou des sauts de section",
      "Savoir insérer et utiliser un formulaire"
    ],
    "niveau": "Intermédiaire",
    "public": "Tous publics",
    "duree": "5h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "certification-tosa-word-2019",
    "categorie": "BUREAUTIQUE",
    "titre": "Réussir sa Certification TOSA Word 2019",
    "description": "Cette formation complète et pratique vous prépare de manière efficace à la réussite de votre certification TOSA Word 2019 en vous fournissant les connaissances approfondies.",
    "objectifs_pedagogiques": [
      "Acquérir une certification TOSA en se préparant efficacement à l'examen",
      "Développer des compétences pratiques dans l'utilisation des logiciels évalués",
      "Éviter les pièges courants associés à la préparation et à l'examen du TOSA",
      "Renforcer la confiance et l'aisance des participants dans l'expression orale et écrite"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "powerpoint-365",
    "categorie": "BUREAUTIQUE",
    "titre": "L’Essentiel de PowerPoint Version Office 365",
    "description": "Étudiant ou professionnel, vous ferez le plein d’astuces et de conseils grâce à cette formation pour créer des présentations dynamiques en utilisant les fonctionnalités avancées de Powerpoint.",
    "objectifs_pedagogiques": [
      "Maîtriser les fonctions essentielles de Powerpoint",
      "Savoir créer et personnaliser des formes",
      "Être capable d’insérer un son ou une vidéo dans une diapositive",
      "Créer des présentations dynamiques",
      "Partager ses présentations"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "1h30 environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "discover-powerpoint-2019",
    "categorie": "BUREAUTIQUE",
    "titre": "Découvrir PowerPoint 2019",
    "description": "Cette formation complète et pratique vous permettra de maîtriser les bases, des objets aux formes avancées. Apprenez à structurer des présentations captivantes, à animer vos créations et à concevoir des diaporamas interactifs.",
    "objectifs_pedagogiques": [
      "Acquérir une certification TOSA en se préparant efficacement à l'examen",
      "Développer des compétences pratiques dans l'utilisation des logiciels évalués",
      "Éviter les pièges courants associés à la préparation et à l'examen du TOSA",
      "Renforcer la confiance et l'aisance des participants dans l'expression orale et écrite"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "4h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "certification-tosa-powerpoint-2019",
    "categorie": "BUREAUTIQUE",
    "titre": "Réussir sa Certification TOSA PowerPoint 2019",
    "description": "Cette formation vise à préparer les participants à réussir la certification TOSA PowerPoint 2019 tout en enrichissant leurs compétences en manipulation avancée de PowerPoint.",
    "objectifs_pedagogiques": [
      "Acquérir une certification TOSA en se préparant efficacement à l'examen",
      "Développer des compétences pratiques dans l'utilisation des logiciels évalués",
      "Éviter les pièges courants associés à la préparation et à l'examen du TOSA",
      "Renforcer la confiance et l'aisance des participants dans l'expression orale et écrite"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "microsoft-office-365-for-windows",
    "categorie": "BUREAUTIQUE",
    "titre": "Savoir Utiliser les Applications Microsoft Office 365 pour Windows",
    "description": "Cette formation vise à préparer les participants à réussir la certification TOSA PowerPoint 2019 tout en enrichissant leurs compétences en manipulation avancée de PowerPoint.",
    "objectifs_pedagogiques": [
      "Savoir utiliser les fonctions principales des logiciels Word, Excel et Powerpoint",
      "Savoir utiliser les outils collaboratifs Sharepoint et Onedrive",
      "Réaliser des tâches bureautiques avec Office 365 sur Windows"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "11h30 environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  {
    "id": "discover-onedrive",
    "categorie": "BUREAUTIQUE",
    "titre": "Découvrir OneDrive de Microsoft",
    "description": "Formation Office 365 & OneDrive : Maîtrisez les outils essentiels de productivité. Apprenez à travailler efficacement avec Office 365, OneDrive et Microsoft Teams pour optimiser le stockage, le partage et la collaboration sur vos documents.",
    "objectifs_pedagogiques": [
      "Comprendre le fonctionnement de OneDrive",
      "Savoir synchroniser des fichiers avec OneDrive pour un accès hors ligne.",
      "Apprendre à gérer efficacement les fichiers synchronisés et les partager.",
      "Intégrer l'utilisation de OneDrive dans Microsoft Teams pour collaborer"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "1h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "image-url.jpg"
  },
  
  {
    "id": "anglais-debutant-a1-a2",
    "categorie": "LANGUES",
    "titre": "Anglais - Débutant (A1-A2)",
    "description": "Cette formation en Anglais, 100% en ligne, de niveau A1-A2 s’adresse aux apprenants désirant acquérir les bases de la langue anglaise.",
    "objectifs_pedagogiques": [
      "Acquérir les fondamentaux de la conjugaison et de la grammaire anglaises",
      "Acquérir les bases du vocabulaire anglais",
      "Comprendre et utiliser des expressions courantes et quotidiennes",
      "Se présenter ou présenter autrui",
      "Communiquer de façon simple"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "15h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "anglais-intermediaire-b1-b2",
    "categorie": "LANGUES",
    "titre": "Anglais - Intermédiaire (B1-B2)",
    "description": "Cette formation en Anglais, 100% en ligne, de niveau B1-B2 s’adresse aux apprenants désirant acquérir un niveau intermédiaire en anglais.",
    "objectifs_pedagogiques": [
      "Comprendre les points essentiels d’une discussion quand un langage clair et standard est utilisé",
      "Être autonome dans la plupart des situations où la langue cible est parlée",
      "Pouvoir produire un discours simple et cohérent sur des sujets familiers",
      "Savoir raconter un événement, une expérience"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "15h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "anglais-avance-c1-c2",
    "categorie": "LANGUES",
    "titre": "Anglais - Avancé (C1-C2)",
    "description": "Cette formation en Anglais, 100% en ligne, de niveau C1-C2 s’adresse aux apprenants désirant acquérir un niveau avancé en anglais.",
    "objectifs_pedagogiques": [
      "Maîtriser les temps verbaux du présent, passé, et futur.",
      "Utiliser correctement le future perfect et future perfect continuous.",
      "Réviser les temps passés, futurs, et conditionnels.",
      "Acquérir une expertise dans le futur continu et approfondir les structures conditionnelles."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "8h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "anglais-affaires-avance-c1-c2",
    "categorie": "LANGUES",
    "titre": "Anglais des Affaires Avancé (C1-C2)",
    "description": "Formation en Anglais des affaires de niveau C1-C2 pour développer des compétences en communication professionnelle.",
    "objectifs_pedagogiques": [
      "Comprendre des audios ou des conversations et saisir des significations implicites dans le domaine des affaires",
      "S’exprimer spontanément avec aisance dans une relation professionnelle ou commerciale",
      "Être capable de comprendre ou de rédiger avec aisance des documents professionnels"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "7h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "anglais-medical-a1-a2",
    "categorie": "LANGUES",
    "titre": "Anglais Médical (A1-A2)",
    "description": "Acquérez les bases de la communication médicale en anglais, de la salutation à la compréhension de documents médicaux.",
    "objectifs_pedagogiques": [
      "Acquérir les fondamentaux de la conjugaison et de la grammaire anglaises",
      "Acquérir les bases du vocabulaire anglais et du vocabulaire médical",
      "Comprendre et utiliser des expressions courantes et quotidiennes",
      "Communiquer de façon simple dans un contexte de soins."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "20h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "anglais-medical-b1-b2",
    "categorie": "LANGUES",
    "titre": "Anglais Médical (B1-B2)",
    "description": "Formation pour les apprenants ayant les bases de l'anglais et souhaitant approfondir leurs connaissances dans le domaine médical.",
    "objectifs_pedagogiques": [
      "Comprendre les points essentiels d’une discussion quand un langage clair et standard est utilisé",
      "Pouvoir produire un discours simple et cohérent sur des sujets familiers et dans des domaines d’intérêt",
      "Communiquer dans le domaine médical",
      "Savoir raconter un événement, une expérience."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "20h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "english-second-language-beginner",
    "categorie": "LANGUES",
    "titre": "English as a Second Language - Beginner Level",
    "description": "This course covers the basics of the English language, including countries, nationalities, personal descriptions, family and friends, daily life, and time-related vocabulary.",
    "objectifs_pedagogiques": [
      "Develop a fundamental understanding of the English language",
      "Learn to express countries and nationalities in English",
      "Describe oneself and discuss family and friends in English",
      "Explore topics related to daily life and routines.",
      "Gain proficiency in discussing time and schedules in English"
    ],
    "niveau": "Beginner",
    "public": "All",
    "duree": "12h",
    "prerequis": "No requirement",
    "accessibilite": {
      "audio_description": "Unavailable",
      "sous_titrage": "Unavailable"
    }
  },
  {
    "id": "english-second-language-intermediate",
    "categorie": "LANGUES",
    "titre": "English as a Second Language - Intermediate Level",
    "description": "This comprehensive course covers a wide range of English language skills, from developing conversational abilities to discussing current events, leisure activities, and grammar.",
    "objectifs_pedagogiques": [
      "Develop conversational and communication skills in English",
      "Explore current events and engage in discussions",
      "Expand your vocabulary related to food, beverages, and leisure activities.",
      "Gain a better understanding of grammar and tenses in English",
      "Learn to express plans, arrange meetings, and discuss job-related topics in English."
    ],
    "niveau": "Beginner",
    "public": "All",
    "duree": "3h",
    "prerequis": "No requirement",
    "accessibilite": {
      "audio_description": "Unavailable",
      "sous_titrage": "Unavailable"
    }
  },
  {
    "id": "english-second-language-advanced",
    "categorie": "LANGUES",
    "titre": "English as a Second Language - Advanced Level",
    "description": "This comprehensive course covers advanced English language skills, focusing on grammar, tense usage, and communication.",
    "objectifs_pedagogiques": [
      "Master the English tense system and avoid common present tense mistakes.",
      "Understand and apply narrative tenses for effective storytelling.",
      "Learn about diverse phrase types and their roles in sentences.",
      "Proficiently use various future forms to express future events.",
      "Gain expertise in English grammar, covering sentence structures."
    ],
    "niveau": "Beginner",
    "public": "All",
    "duree": "3h",
    "prerequis": "No requirement",
    "accessibilite": {
      "audio_description": "Unavailable",
      "sous_titrage": "Unavailable"
    }
  },
  {
    "id": "business-english-second-language",
    "categorie": "LANGUES",
    "titre": "Business English as a Second Language",
    "description": "This course hones professional skills, including resume writing, job interviews, communication (email, meetings, presentations, and reports), customer service, negotiation, and workplace dynamics.",
    "objectifs_pedagogiques": [
      "Develop strong resume and cover letter writing skills for effective job applications",
      "Acquire proficiency in communication through written and verbal channels",
      "Gain a deeper understanding of workplace dynamics, customer service, negotiation, and various job-related situations."
    ],
    "niveau": "Beginner",
    "public": "All",
    "duree": "3h",
    "prerequis": "No requirement",
    "accessibilite": {
      "audio_description": "Unavailable",
      "sous_titrage": "Unavailable"
    }
  },
  {
    "id": "preparation-examen-anglais-toeic",
    "categorie": "LANGUES",
    "titre": "Préparation à l'Examen Anglais TOEIC",
    "description": "Formation pour se préparer efficacement à l'examen TOEIC, incluant les sections Listening, Reading, et Speaking.",
    "objectifs_pedagogiques": [
      "Maîtriser les bases du TOEIC.",
      "Exceller dans les sections Listening et Reading du TOEIC.",
      "Perfectionner l'expression orale pour la section Speaking.",
      "Appliquer des stratégies de résolution de problèmes pour réussir le TOEIC."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "preparation-examen-anglais-cambridge",
    "categorie": "LANGUES",
    "titre": "Préparation à l'Examen Anglais Cambridge",
    "description": "Formation pour se préparer à l'examen Cambridge, en approfondissant la compréhension des sections Speaking et Writing.",
    "objectifs_pedagogiques": [
      "Acquérir une compréhension approfondie de l'examen Cambridge",
      "Se familiariser avec les sections Speaking et Writing de l'examen",
      "Appliquer des stratégies efficaces de résolution de problèmes",
      "Améliorer les compétences en expression orale et écrite"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "preparation-examen-anglais-ielts",
    "categorie": "LANGUES",
    "titre": "Préparation à l'Examen Anglais IELTS",
    "description": "Formation pour se préparer à l'examen IELTS, axée sur la réussite des sections Speaking et Writing.",
    "objectifs_pedagogiques": [
      "Acquérir une compréhension approfondie de l'examen IELTS",
      "Se familiariser avec les sections Speaking et Writing de l'examen",
      "Appliquer des stratégies efficaces de résolution de problèmes",
      "Améliorer les compétences en expression orale et écrite"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "preparation-examen-anglais-linguaskill",
    "categorie": "LANGUES",
    "titre": "Préparation à l'Examen Anglais Linguaskill",
    "description": "Formation pour se préparer à l'examen Linguaskill, incluant les sections Speaking et Writing.",
    "objectifs_pedagogiques": [
      "Acquérir une compréhension approfondie de l'examen Linguaskill",
      "Se familiariser avec les sections Speaking et Writing de l'examen",
      "Appliquer des stratégies efficaces de résolution de problèmes",
      "Améliorer les compétences en expression orale et écrite"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "preparation-examen-anglais-toefl",
    "categorie": "LANGUES",
    "titre": "Préparation à l'Examen Anglais TOEFL",
    "description": "Formation pour se préparer à l'examen TOEFL, visant les sections Speaking et Writing.",
    "objectifs_pedagogiques": [
      "Acquérir une compréhension approfondie de l'examen TOEFL",
      "Se familiariser avec les sections Speaking et Writing de l'examen",
      "Appliquer des stratégies efficaces de résolution de problèmes",
      "Améliorer les compétences en expression orale et écrite"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  
  {
    "id": "allemand-debutant-a1-a2",
    "categorie": "LANGUES",
    "titre": "ALLEMAND - DÉBUTANT (A1-A2)",
    "description": "Formation en Allemand 100% en ligne de niveau A1-A2 pour acquérir les bases de la langue allemande.",
    "objectifs_pedagogiques": [
      "Acquérir les fondamentaux de la conjugaison et de la grammaire allemande",
      "Acquérir les bases du vocabulaire allemand",
      "Comprendre et utiliser des expressions courantes et quotidiennes",
      "Se présenter ou présenter autrui",
      "Communiquer de façon simple"
    ],
    "niveau": "A1-A2",
    "public": "Tous publics",
    "duree": "12h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "arabe-debutant-a1-a2",
    "categorie": "LANGUES",
    "titre": "ARABE - DÉBUTANT (A1-A2)",
    "description": "Formation en Arabe 100% en ligne de niveau A1-A2 pour acquérir les bases de la langue arabe.",
    "objectifs_pedagogiques": [
      "Acquérir les fondamentaux de la grammaire arabe",
      "Acquérir les bases du vocabulaire arabe",
      "Comprendre et utiliser des expressions courantes",
      "Se présenter ou présenter autrui",
      "Communiquer de façon simple"
    ],
    "niveau": "A1-A2",
    "public": "Tous publics",
    "duree": "13h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "arabe-intermediaire-b1-b2",
    "categorie": "LANGUES",
    "titre": "ARABE - INTERMÉDIAIRE (B1-B2)",
    "description": "Formation en Arabe 100% en ligne de niveau B1-B2 pour améliorer votre compréhension et expression en arabe.",
    "objectifs_pedagogiques": [
      "Comprendre l’essentiel d’une discussion en langage clair et standard",
      "Être autonome dans la plupart des situations où la langue cible est parlée",
      "Produire un discours simple et cohérent sur des sujets familiers",
      "Savoir raconter un événement, une expérience"
    ],
    "niveau": "B1-B2",
    "public": "Tous publics",
    "duree": "13h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "chinois-mandarin-pinyin-a1-a2",
    "categorie": "LANGUES",
    "titre": "CHINOIS MANDARIN EN PINYIN (A1-A2)",
    "description": "Formation en Chinois Mandarin 100% en ligne de niveau A1-A2 pour apprendre les bases du chinois.",
    "objectifs_pedagogiques": [
      "Apprendre les bases de la langue chinoise, les tons et les sons, l'ordre des mots, le rythme bref de la phrase",
      "Former des phrases simples",
      "Découvrir la richesse de la culture et de la réalité chinoise",
      "Communiquer dans des situations simples de la vie quotidienne"
    ],
    "niveau": "A1-A2",
    "public": "Tous publics",
    "duree": "8h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "espagnol-debutant-a1-a2",
    "categorie": "LANGUES",
    "titre": "ESPAGNOL - DÉBUTANT (A1-A2)",
    "description": "Formation en Espagnol 100% en ligne de niveau A1-A2 pour apprendre les bases de la langue espagnole.",
    "objectifs_pedagogiques": [
      "Acquérir les fondamentaux de la grammaire espagnole",
      "Acquérir les bases du vocabulaire espagnol",
      "Comprendre et utiliser des expressions courantes",
      "Se présenter ou présenter autrui",
      "Communiquer de façon simple"
    ],
    "niveau": "A1-A2",
    "public": "Tous publics",
    "duree": "10h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "espagnol-intermediaire-b1-b2",
    "categorie": "LANGUES",
    "titre": "ESPAGNOL - INTERMÉDIAIRE (B1-B2)",
    "description": "Formation en Espagnol 100% en ligne de niveau B1-B2 pour améliorer votre compréhension et expression en espagnol.",
    "objectifs_pedagogiques": [
      "Comprendre des discussions courantes sur des sujets familiers",
      "Être autonome en voyage dans des régions parlant la langue cible",
      "Produire un discours cohérent sur des sujets personnels et familiers",
      "Raconter des événements, exprimer des espoirs et expliquer des projets"
    ],
    "niveau": "B1-B2",
    "public": "Tous publics",
    "duree": "10h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "espagnol-avance-c1-c2",
    "categorie": "LANGUES",
    "titre": "ESPAGNOL - AVANCÉ (C1-C2)",
    "description": "Formation en Espagnol 100% en ligne de niveau C1-C2 pour perfectionner votre niveau avancé en espagnol.",
    "objectifs_pedagogiques": [
      "Mener une conversation quotidienne en espagnol",
      "Acquérir un vocabulaire riche",
      "Voyager aisément dans les pays hispanophones",
      "Maîtriser la grammaire espagnole",
      "Gérer des échanges commerciaux complexes"
    ],
    "niveau": "C1-C2",
    "public": "Tous publics",
    "duree": "10h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "preparation-examen-espagnol-dele",
    "categorie": "LANGUES",
    "titre": "PRÉPARATION A L’EXAMEN ESPAGNOL DELE",
    "description": "Formation visant à préparer à l'examen DELE en espagnol.",
    "objectifs_pedagogiques": [
      "Introduire les concepts et les applications de DELE aux apprenants",
      "Fournir des conseils pratiques aux apprenants en mettant l'accent sur les stratégies efficaces pour préparer et réussir l'examen DELE"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "preparation-examen-espagnol-siele",
    "categorie": "LANGUES",
    "titre": "PRÉPARATION A L’EXAMEN ESPAGNOL SIELE",
    "description": "Formation visant à préparer à l'examen SIELE en espagnol.",
    "objectifs_pedagogiques": [
      "Améliorer les compétences de présentation, de communication écrite et orale",
      "Développer les aptitudes de compréhension de lecture et auditive",
      "Renforcer leur capacité à s'exprimer de manière claire et persuasive",
      "Les préparer à l’examen espagnol SIELE"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  
  {
    "id": "italien-debutant-a1-a2",
    "categorie": "LANGUES",
    "titre": "ITALIEN - DÉBUTANT (A1-A2)",
    "description": "Découvrez l'italien de manière efficace avec notre cours pour débutants. Apprenez les bases essentielles, des salutations au vocabulaire courant, en vous préparant à des conversations pratiques.",
    "objectifs_pedagogiques": [
      "Acquérir les fondamentaux de la grammaire italienne",
      "Acquérir les bases du vocabulaire italien",
      "Comprendre et utiliser des expressions courantes",
      "Se présenter ou présenter autrui",
      "Communiquer de façon simple"
    ],
    "niveau": "A1-A2",
    "public": "Tous publics",
    "duree": "13h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "japonais-debutant-a1-a2",
    "categorie": "LANGUES",
    "titre": "JAPONAIS - DÉBUTANT (A1-A2)",
    "description": "Plongez dans le japonais pour débutants, couvrant l'alphabet, les phrases de base, l'écriture, et des concepts progressifs tels que les questions, la négation, les adjectifs, et les conjugaisons. Découvrez également des notions culturelles liées à l'heure, aux comparaisons, et à l'expression de la volonté.",
    "objectifs_pedagogiques": [
      "Initiation aux fondements de la culture japonaise",
      "Acquérir les fondamentaux de la grammaire japonaise",
      "Acquérir les bases du vocabulaire japonais",
      "Comprendre et utiliser des expressions courantes et quotidiennes",
      "Se présenter ou présenter autrui",
      "Communiquer de façon simple"
    ],
    "niveau": "A1-A2",
    "public": "Tous publics",
    "duree": "12h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "langue-des-signes-francaise-a1-a2",
    "categorie": "LANGUES",
    "titre": "LANGUE DES SIGNES FRANCAISE NIVEAU A1-A2",
    "description": "Cette formation LSF, 100% en ligne, de niveau A1-A2 s’adresse aux apprenants désirant acquérir les bases de la langue des signes.",
    "objectifs_pedagogiques": [
      "Développer des compétences linguistiques orales et écrites inhérentes à la vie quotidienne et à l’environnement professionnel",
      "Acquérir des compétences culturelles et socio-langagières visant à faciliter l’intégration sociale et économique",
      "Enrichir son vocabulaire et éviter les fautes les plus courantes du français dans ses écrits professionnels"
    ],
    "niveau": "A1-A2",
    "public": "Tous publics",
    "duree": "8h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "portugais-debutant-a1-a2",
    "categorie": "LANGUES",
    "titre": "PORTUGAIS - DÉBUTANT (A1-A2)",
    "description": "Cette formation en Portugais, 100% en ligne, de niveau A1-A2 s’adresse aux apprenants désirant acquérir les bases de la langue portugaise.",
    "objectifs_pedagogiques": [
      "Acquérir les fondamentaux de la conjugaison et de la grammaire portugaise",
      "Acquérir les bases du vocabulaire portugais",
      "Comprendre et utiliser des expressions courantes et quotidiennes",
      "Se présenter ou présenter autrui",
      "Communiquer de façon simple"
    ],
    "niveau": "A1-A2",
    "public": "Tous publics",
    "duree": "15h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "russe-debutant-a1-a2",
    "categorie": "LANGUES",
    "titre": "RUSSE - DÉBUTANT (A1-A2)",
    "description": "Découvrez le russe à travers notre formation, de l'alphabet cyrillique à la maîtrise des cas et verbes, en passant par des thèmes variés comme la famille, les chiffres, et les verbes de mouvement.",
    "objectifs_pedagogiques": [
      "Acquérir les fondamentaux de la grammaire russe",
      "Acquérir les bases du vocabulaire russe",
      "Comprendre et utiliser des expressions courantes",
      "Se présenter ou présenter autrui",
      "Communiquer de façon simple"
    ],
    "niveau": "A1-A2",
    "public": "Tous publics",
    "duree": "14h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "photoshop-cc2023",
    "categorie": "INFOGRAPHIE",
    "titre": "PHOTOSHOP CC2023",
    "description": "Photoshop dispose de nombreux outils de traitements numériques de l’image et de filtres, dont vous découvrirez tous les secrets lors de cette formation. Après cette formation, vous serez capable d’utiliser les toutes fonctionnalités d’ADOBE PHOTOSHOP® vous permettant d’être autonome.",
    "objectifs_pedagogiques": [
      "Maîtriser l'interface de Photoshop",
      "Manipuler les outils de base",
      "Comprendre les concepts colorimétriques et de résolution",
      "Maîtriser les fonctionnalités avancées de Photoshop",
      "Utiliser les fonctionnalités spécialisées de Photoshop"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "8h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "illustrator-cc-2019-2023",
    "categorie": "INFOGRAPHIE",
    "titre": "ILLUSTRATOR CC 2019-2023 TOUS NIVEAUX",
    "description": "Explorez Adobe Illustrator étape par étape, de l'interface à l'exportation. Ce cours couvre les aspects essentiels, y compris les plans de travail, les repères, le dessin, la gestion des objets, le texte, la couleur et les effets, offrant une expertise complète en illustration vectorielle.",
    "objectifs_pedagogiques": [
      "Maîtriser l'interface et la personnalisation d'Illustrator",
      "Comprendre la création et la gestion de plans de travail",
      "Utiliser efficacement les repères et les formes primitives",
      "Manipuler les propriétés d'objet et les outils de sélection",
      "Explorer les fonctionnalités avancées"
    ],
    "niveau": "Tous Niveaux",
    "public": "Tous publics",
    "duree": "10h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "indesign-cc-2019-2023",
    "categorie": "INFOGRAPHIE",
    "titre": "INDESIGN CC 2019-2023 TOUS NIVEAUX",
    "description": "Le logiciel InDesign est destiné à la mise en page professionnelle de documents destinés à l’imprimerie (livres, journaux, publication, flyers, plaquettes, magazines, ...). Après cette formation, vous serez capable de réaliser des plaquettes, des brochures, des affiches ainsi que des dépliants.",
    "objectifs_pedagogiques": [
      "Maîtriser l'interface et la personnalisation d'InDesign",
      "Comprendre la création et la gestion de plans de travail",
      "Utiliser efficacement les repères et les formes primitives",
      "Manipuler les propriétés d'objet et les outils de sélection",
      "Explorer les fonctionnalités avancées"
    ],
    "niveau": "Tous Niveaux",
    "public": "Tous publics",
    "duree": "10h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  
  
  {
    "id": "bâtir-estime-confiance-soi",
    "categorie": "SOFT SKILLS",
    "titre": "BÂTIR SON ESTIME DE SOI ET SA CONFIANCE EN SOI",
    "description": "Renforcez votre estime de soi, gagnez en confiance et apprenez les clés de l'affirmation de soi. Bâtissez votre autonomie et découvrez comment créer la vie que vous souhaitez. Rejoignez-nous pour ce parcours enrichissant vers une meilleure version de vous-même.",
    "objectifs_pedagogiques": [
      "Renforcer l'estime de soi et la confiance en soi",
      "Développer les compétences pour améliorer l'estime de soi",
      "Favoriser l'autonomie personnelle",
      "Acquérir des techniques d'affirmation de soi et de création de ses objectifs"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "40min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "gestion-du-stress",
    "categorie": "SOFT SKILLS",
    "titre": "GESTION DU STRESS",
    "description": "Avec ce parcours concis et efficace, découvrez les clés pour comprendre et maîtriser le stress dans ce cours. Identifiez les sources de stress, apprenez des techniques de gestion et développez des stratégies mentales pour vous adapter aux défis quotidiens.",
    "objectifs_pedagogiques": [
      "Comprendre les principaux concepts liés au stress",
      "Identifier les situations sources de stress dans la vie quotidienne",
      "Acquérir des techniques de gestion du stress",
      "Appliquer les stratégies mentales pour faire face aux situations stressantes"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "30min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "utiliser-voix-pour-convaincre",
    "categorie": "SOFT SKILLS",
    "titre": "UTILISER SA VOIX POUR CONVAINCRE",
    "description": "Découvrez les secrets de l'utilisation persuasive de votre voix dans ce cours. Explorez les bases physiologiques, maîtrisez l'art de convaincre par la voix, explorez la dimension corporelle et apprenez à perfectionner votre expression vocale.",
    "objectifs_pedagogiques": [
      "Comprendre les aspects physiologiques de la voix",
      "Apprendre à utiliser la voix comme un outil de persuasion",
      "Explorer la dimension corporelle de l'expression vocale"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "1h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "langage-non-verbal",
    "categorie": "SOFT SKILLS",
    "titre": "LE LANGAGE NON VERBAL",
    "description": "Explorez les nuances de la communication non verbale avec ce cours. Maîtrisez l'art des expressions faciales, découvrez le pouvoir du sourire et du contact visuel, adoptez une posture affirmée, et apprenez à décoder le langage non verbal des autres. Des compétences essentielles pour une communication impactante.",
    "objectifs_pedagogiques": [
      "Comprendre l'importance cruciale de la communication non verbale",
      "Maîtriser l'impact des expressions faciales dans la communication",
      "Utiliser efficacement le sourire comme un atout dans toute communication",
      "Pratiquer le contact visuel pour établir et maintenir une connexion significative"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "1h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "secrets-body-language",
    "categorie": "SOFT SKILLS",
    "titre": "LES SECRETS DU BODY LANGAGE",
    "description": "Développez votre compréhension du langage corporel, améliorez votre présence avec des exercices pratiques et découvrez l'impact de votre posture et de votre apparence dans cette formation.",
    "objectifs_pedagogiques": [
      "Comprendre les signaux du langage corporel",
      "Appliquer des exercices pratiques pour améliorer sa présence",
      "Évaluer l'impact de la posture sur la communication",
      "Reconnaître l'importance de l'apparence, notamment la poignée de main"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "45 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "maitriser-communication",
    "categorie": "SOFT SKILLS",
    "titre": "MAÎTRISER VOTRE COMMUNICATION",
    "description": "Ce cours dynamique vise à renforcer vos compétences en communication pour établir des relations positives. Explorez la conscience de soi, surmontez les obstacles à une communication efficace, et développez des aptitudes essentielles telles que la capacité à poser des questions, l'écoute active, la lecture du langage corporel, et l'adaptation aux divers styles de communication.",
    "objectifs_pedagogiques": [
      "Apprenez à établir des relations constructives",
      "Développez une compréhension approfondie de vous-même",
      "Acquérez des compétences clés telles que la communication active et la lecture du langage corporel",
      "Maîtrisez divers styles de communication pour réussir dans toutes les interactions"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "50min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "se-presenter-10-min",
    "categorie": "SOFT SKILLS",
    "titre": "SE PRÉSENTER EN 10 MINUTES",
    "description": "Optimisez vos compétences en présentation avec ce cours dédié à l'identification des points de convergence essentiels. Apprenez à sélectionner les éléments clés, à rédiger et peaufiner une présentation percutante, et adoptez un plan stratégique pour accroître votre succès lors de vos interventions.",
    "objectifs_pedagogiques": [
      "Maîtriser le choix optimal de plateforme",
      "Affiner les compétences rédactionnelles pour des présentations percutantes",
      "Renforcer l'impact et l'adhésion lors de la présentation"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "40 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  
  {
    "id": "recruter-sans-discriminer",
    "categorie": "MANAGEMENT/RH",
    "titre": "RECRUTER SANS DISCRIMINER",
    "description": "Appréhendez les pratiques de recrutement équitables et non discriminatoires. Soyez l'agent du changement dans votre entreprise en favorisant l'équité et la diversité grâce à cette formation.",
    "objectifs_pedagogiques": [
      "Comprendre les obligations légales liées à la non-discrimination à l'embauche.",
      "Reconnaître les situations à risque de discrimination dans le recrutement.",
      "Adopter des pratiques de recrutement équitables.",
      "Mettre en place des critères d'embauche clairs.",
      "Utiliser des procédures d'entretien standardisées pour l'évaluation des compétences."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "1h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "accompagnement-nouveau-salarie",
    "categorie": "MANAGEMENT/RH",
    "titre": "ACCOMPAGNEMENT D’UN NOUVEAU SALARIÉ",
    "description": "De la définition de l'intégration à la création d'équipes, fixez des objectifs et découvrez des astuces pour rendre votre programme unique. Un parcours rapide et efficace pour optimiser l'engagement des employés.",
    "objectifs_pedagogiques": [
      "Développer un leadership positif et susciter l’adhésion de ses collaborateurs.",
      "S’organiser quotidiennement dans son travail.",
      "Accompagner les nouveaux salariés.",
      "Apaiser et résoudre les conflits.",
      "Gestion des performances des employés.",
      "Gestion du stress et confiance en soi."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "40 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "gestion-performances-employes",
    "categorie": "MANAGEMENT/RH",
    "titre": "GESTION DES PERFORMANCES DES EMPLOYÉS",
    "description": "Acquérez les compétences clés pour mettre en œuvre un modèle de gestion partagée, fixer des objectifs, et évaluer le rendement de manière efficace. Boostez votre expertise en gestion pour optimiser la performance de votre équipe à l’aide de cette formation concise et efficace.",
    "objectifs_pedagogiques": [
      "Comprendre le modèle de gestion partagée.",
      "Maîtriser le processus de fixation d'objectifs.",
      "Appliquer les phases de préparation, d'activation et d'évaluation continue.",
      "Gérer efficacement l'évaluation officielle des performances des employés."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "45 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "stimuler-recompenser-employes",
    "categorie": "MANAGEMENT/RH",
    "titre": "STIMULER ET RÉCOMPENSER SES EMPLOYÉS",
    "description": "Optimisez la performance de votre équipe, et découvrez les bases de l'appréciation et les rouages de la motivation grâce à cette formation concise et efficace.",
    "objectifs_pedagogiques": [
      "Développer un leadership positif et susciter l’adhésion de ses collaborateurs.",
      "S’organiser quotidiennement dans son travail.",
      "Accompagner les nouveaux salariés.",
      "Apaiser et résoudre les conflits.",
      "Gestion des performances des employés.",
      "Gestion du stress et confiance en soi."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "45 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "comblez-gap-generationnel",
    "categorie": "MANAGEMENT/RH",
    "titre": "COMBLEZ LE GAP GÉNÉRATIONNEL",
    "description": "Explorez les clés de la gestion intergénérationnelle avec cette formation concise et efficace. Explorez l'histoire, trouvez des terrains d'entente, comprenez les générations, recrutez avec créativité, planifiez efficacement, et élaborez des stratégies de maintien en poste. Une approche pratique pour réussir dans la diversité générationnelle au travail.",
    "objectifs_pedagogiques": [
      "Comprendre les enjeux de la gestion intergénérationnelle.",
      "Retracer l'évolution historique de la diversité générationnelle.",
      "Identifier les points communs pour favoriser la collaboration.",
      "Analyser les caractéristiques distinctives des différentes générations au travail."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "30 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "resolution-des-conflits",
    "categorie": "MANAGEMENT/RH",
    "titre": "LA RÉSOLUTION DES CONFLITS",
    "description": "Explorez les clés de la gestion des conflits dans cette formation efficace. Apprenez à identifier les types de conflits, à améliorer la communication, et à aider les autres à surmonter les conflits.",
    "objectifs_pedagogiques": [
      "Comprendre et définir les conflits.",
      "Identifier les types et les phases des conflits.",
      "Améliorer les compétences de communication pour résoudre les conflits.",
      "Acquérir des techniques pour aider à surmonter les conflits chez les autres."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "1h20 environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "comprendre-gestion-de-projet",
    "categorie": "MANAGEMENT/RH",
    "titre": "COMPRENDRE LES BASES DE LA GESTION DE PROJET",
    "description": "Explorez les fondamentaux de la gestion de projet à travers cette série de cours, de la définition des projets au cycle de vie, en passant par le rôle crucial du chef de projet et les compétences nécessaires pour vendre et présenter un projet.",
    "objectifs_pedagogiques": [
      "Maîtriser les bases de la gestion de projet.",
      "Assumer efficacement le rôle de chef de projet.",
      "Appliquer le cycle de vie d'un projet pour vendre et présenter les objectifs avec succès."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "30 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "maitriser-gestion-de-projet",
    "categorie": "MANAGEMENT/RH",
    "titre": "MAITRISER LA GESTION DE PROJET",
    "description": "Explorez les rouages de la gestion de projet à travers ce cours complet, abordant des aspects tels que la planification, la budgétisation, l'évaluation des risques et la clôture de projet.",
    "objectifs_pedagogiques": [
      "Appréhender les techniques de planification.",
      "Appliquer des astuces efficaces pour la budgétisation.",
      "Évaluer et atténuer stratégiquement les risques du projet.",
      "Contrôler les changements et clôturer les projets avec succès."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "30 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "apprendre-a-deleger",
    "categorie": "MANAGEMENT/RH",
    "titre": "APPRENDRE À DÉLÉGUER",
    "description": "Explorez l'art de la délégation à travers ce cours détaillé, couvrant les principes fondamentaux, les choix de délégation et le développement de compétences de délégateur.",
    "objectifs_pedagogiques": [
      "Comprendre l'importance et les raisons de déléguer efficacement.",
      "Acquérir des compétences pour choisir judicieusement les personnes à déléguer.",
      "Connaître les étapes clés de la délégation pour devenir un délégateur performant."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "30 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  
  {
    "id": "fondements-methode-agile",
    "categorie": "PRODUCTIVITE",
    "titre": "LES FONDEMENTS DE LA METHODE AGILE",
    "description": "Explorez les aspects fondamentaux de la prise de décision et de la résolution de problèmes, du processus individuel aux dynamiques de groupe. Acquérir des compétences pratiques grâce à un modèle structuré et une boîte à outils.",
    "objectifs_pedagogiques": [
      "Comprendre les concepts clés.",
      "Appliquer un modèle structuré.",
      "Utiliser une boîte à outils variée.",
      "Développer des compétences en prise de décision de groupe."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "choisir-bons-outils-aide-decision",
    "categorie": "PRODUCTIVITE",
    "titre": "CHOISIR LES BONS OUTILS D’AIDE À LA DÉCISION",
    "description": "Explorez les aspects fondamentaux de la prise de décision et de la résolution de problèmes, du processus individuel aux dynamiques de groupe. Acquérir des compétences pratiques grâce à un modèle structuré et une boîte à outils.",
    "objectifs_pedagogiques": [
      "Comprendre les concepts clés.",
      "Appliquer un modèle structuré.",
      "Utiliser une boîte à outils variée.",
      "Développer des compétences en prise de décision de groupe."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "1h30 environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "gerer-efficacement-votre-temps",
    "categorie": "PRODUCTIVITE",
    "titre": "GÉREZ EFFICACEMENT VOTRE TEMPS",
    "description": "Optimisez votre gestion du temps. Apprenez à fixer des objectifs, à planifier efficacement, à établir des priorités avec cette formation concise et efficace.",
    "objectifs_pedagogiques": [
      "Maîtriser les principes de base de la gestion du temps.",
      "Acquérir des compétences pour fixer des objectifs efficacement.",
      "Appliquer des astuces de planification pour optimiser le temps.",
      "Développer la capacité à prendre des décisions et à déléguer."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "45 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "profiter-pleinement-teletravail",
    "categorie": "PRODUCTIVITE",
    "titre": "PROFITER PLEINEMENT DU TÉLÉTRAVAIL",
    "description": "Explorez les fondements d'un télétravail réussi en définissant un cadre optimal et en adoptant des stratégies de travail virtuel. Acquérez les compétences essentielles pour diriger des équipes à distance et optimisez votre productivité professionnelle dans le monde du travail virtuel.",
    "objectifs_pedagogiques": [
      "Définir les paramètres essentiels pour un milieu de travail à distance productif.",
      "Mettre en place un système virtuel de travail efficace.",
      "Maîtriser les technologies nécessaires au télétravail.",
      "Acquérir des compétences en leadership virtuel pour optimiser la collaboration."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "45 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  {
    "id": "initiation-intelligence-artificielle",
    "categorie": "PRODUCTIVITE",
    "titre": "INITIATION À L'INTELLIGENCE ARTIFICIELLE",
    "description": "Ce module vise à introduire l'intelligence artificielle (IA). Il aborde de façon succincte les bases de l'IA, les différents types d'IA, ainsi que les moyens d'intégrer l'IA dans différents contextes.",
    "objectifs_pedagogiques": [
      "Comprendre les fondamentaux de l'intelligence artificielle (IA).",
      "Identifier les différents types d'IA et leurs applications.",
      "Acquérir des connaissances sur l'intégration de l'IA dans divers domaines."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "25 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    }
  },
  
  {
    "id": "comptabilite-initiation-01",
    "categorie": "COMPTABILITÉ",
    "titre": "Comptabilité - Initiation",
    "description": "Ce parcours de formation vous permettra d’acquérir les fondamentaux techniques de la comptabilité, incluant le bilan, le résultat, le débit-crédit, la TVA, et les SIG.",
    "objectifs_pedagogiques": [
      "Comprendre et analyser un bilan comptable",
      "Savoir passer une écriture et déterminer un résultat comptable",
      "Réaliser un inventaire comptable et mettre à jour les comptes de stocks",
      "Comprendre et appliquer les mécanismes de la TVA",
      "Analyser des SIG et déterminer le BFR"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "12h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "comptabilite-initiation.jpg"
  },
  {
    "id": "comptabilite-fondamentaux-01",
    "categorie": "COMPTABILITÉ",
    "titre": "Comptabilité - Les Fondamentaux",
    "description": "Découvrez les fondamentaux de la comptabilité, du débutant au perfectionnement, en abordant des concepts clés de la comptabilité d'entreprise.",
    "objectifs_pedagogiques": [
      "Comprendre et analyser un bilan comptable",
      "Savoir passer une écriture et déterminer un résultat comptable",
      "Réaliser un inventaire comptable et mettre à jour les comptes de stocks",
      "Comprendre et appliquer les mécanismes de la TVA",
      "Analyser des SIG et déterminer le BFR"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "12h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "comptabilite-fondamentaux.jpg"
  },
  {
    "id": "gestion-de-paie-01",
    "categorie": "GESTION DE PAIE",
    "titre": "Gestion de Paie - Identifier les Règles",
    "description": "Explorez les fondements des métiers liés à la paie, les bases du droit du travail, les meilleures pratiques de veille et les aspects essentiels des contrats de travail.",
    "objectifs_pedagogiques": [
      "Comprendre les métiers associés à la gestion de la paie",
      "Maîtriser les sources clés du droit du travail",
      "Apprendre les pratiques de veille en paie",
      "Acquérir une compréhension complète des formalités d'embauche"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "gestion-de-paie.jpg"
  },
  {
    "id": "calcul-bulletin-paie-01",
    "categorie": "GESTION DE PAIE",
    "titre": "Calculer le Bulletin de Paie",
    "description": "Maîtrisez les calculs de bulletins de paie, collectez les informations nécessaires et gérez les relations avec les organismes sociaux.",
    "objectifs_pedagogiques": [
      "Collecter les informations nécessaires pour les bulletins de salaire",
      "Assurer les tâches administratives, comptables et la gestion sociale du personnel",
      "Gérer les déclarations et les relations avec les organismes sociaux, dont l'URSSAF",
      "Maîtriser le logiciel EBP et d'autres outils informatiques dédiés à la paie"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "2h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "calcul-bulletin-paie.jpg"
  },
  {
    "id": "prelevement-a-la-source-01",
    "categorie": "GESTION DE PAIE",
    "titre": "Prélèvement à la Source",
    "description": "Comprenez la réforme du prélèvement à la source, ses calculs et l'application du Compte Individualisé (CI).",
    "objectifs_pedagogiques": [
      "Comprendre la réforme du Prélèvement à la Source (PAS) et ses motivations",
      "Déterminer l'obligation de déclaration d'impôt sur le revenu (IR)",
      "Explorer le rôle du Compte Individualisé (CI) dans le PAS",
      "Maîtriser les calculs du PAS, incluant l'assiette et les taux",
      "Accéder aux ressources clés, dont le BOFIP taux non personnalisé, pour le PAS"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "6h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "prelevement-a-la-source.jpg"
  },
  {
    "id": "identification-temps-de-travail-01",
    "categorie": "GESTION DE PAIE",
    "titre": "Identifier les Aménagements du Temps de Travail",
    "description": "Explorez la gestion du temps de travail, de la mensualisation aux spécificités des horaires et des conventions de forfait.",
    "objectifs_pedagogiques": [
      "Comprendre la mensualisation et son rôle dans la gestion du temps de travail",
      "Maîtriser la durée légale du temps de travail",
      "Apprendre les règles du travail à temps partiel",
      "Explorer les aspects du travail de nuit, de soirée, et du temps de travail effectif",
      "Connaître les conventions de forfait pour une gestion efficace du temps de travail"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "6h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "identification-temps-de-travail.jpg"
  },
  {
    "id": "role-IRP-et-confidentialite-01",
    "categorie": "GESTION DE PAIE",
    "titre": "Identifier le Rôle des IRP et la Notion de Confidentialité",
    "description": "Plongez dans les bases du droit du travail, couvrant les instances représentatives, les procédures de licenciement, et le RGPD.",
    "objectifs_pedagogiques": [
      "Comprendre la CPRI, son rôle et sa composition",
      "Apprendre les mandats et le fonctionnement de la CPRI",
      "Explorer le monde syndical et le rôle du délégué syndical",
      "Connaître le CSE et les droits des salariés protégés",
      "Maîtriser les aspects juridiques du licenciement des salariés protégés, le droit de grève, les conflits collectifs, l'inspection du travail, les contentieux du travail, et le RGPD"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "6h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "role-IRP-et-confidentialite.jpg"
  },
  {
    "id": "calcul-bulletin-paie-variable-01",
    "categorie": "GESTION DE PAIE",
    "titre": "Calculer un Bulletin de Paie avec les Éléments Variables",
    "description": "Maîtrisez les aspects de la gestion des ressources humaines, des heures supplémentaires aux congés, en passant par les arrêts maladie.",
    "objectifs_pedagogiques": [
      "Comprendre les règles de gratification des stagiaires",
      "Maîtriser les contrats de professionnalisation et d'apprentissage",
      "Gérer efficacement la paie des mandataires et le cumul avec un salarié",
      "Explorer les spécificités des VRP et de la déduction forfaitaire spécifique"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "6h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "calcul-bulletin-paie-variable.jpg"
  },
  {
    "id": "calcul-paie-de-depart-01",
    "categorie": "GESTION DE PAIE",
    "titre": "Calculer la Paie de Départ (SDTC)",
    "description": "Explorez les procédures liées au départ d'un salarié, comprenant les indemnités de congés payés, de préavis, et autres indemnités.",
    "objectifs_pedagogiques": [
      "Comprendre les évolutions et modifications du contrat de travail",
      "Connaître les différents types de procédures liées aux contrats de travail",
      "Maîtriser le calcul de l'indemnité compensatrice de congés payés",
      "Apprendre à calculer et verser les indemnités",
      "Explorer les formalités associées au départ d'un salarié"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "6h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "calcul-paie-de-depart.jpg"
  },
  {
    "id": "calcul-post-paie-01",
    "categorie": "GESTION DE PAIE",
    "titre": "Calculer les Éléments Post Paie",
    "description": "Découvrez la DSN, le contrôle des charges sociales, la retraite supplémentaire, et la comptabilisation de la paie.",
    "objectifs_pedagogiques": [
      "Comprendre la DSN et le contrôle des charges sociales",
      "Explorer la retraite supplémentaire et ses implications",
      "Connaître les taxes parafiscales et leur impact sur la paie",
      "Maîtriser l'épargne salariale et son rôle dans la rémunération",
      "Apprendre à comptabiliser la paie et générer des reportings sociaux"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "6h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "calcul-post-paie.jpg"
  },
  {
    "id": "oral-blanc-01",
    "categorie": "GESTION DE PAIE",
    "titre": "Oral Blanc - Gestionnaire de Paie",
    "description": "Préparez-vous à l'examen de gestionnaire de paie en simulant un oral blanc et en renforçant vos compétences de présentation.",
    "objectifs_pedagogiques": [
      "Préparer à l'oral blanc du titre professionnel de gestionnaire de paie",
      "Améliorer les compétences de présentation",
      "Renforcer la capacité à répondre efficacement aux questions lors de l'examen"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "30 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "oral-blanc.jpg"
  },
  {
    "id": "initiation-metier-secretaire-bureautique",
    "categorie": "SECRÉTARIAT BUREAUTIQUE",
    "titre": "Initiation au Métier de Secrétaire Bureautique",
    "description": "Accueil, gestion de l’organisation, maîtrise des outils bureautiques, cette formation de 14h vous permettra d’acquérir les bases du métier de secrétaire. Elle vous donnera une première approche du métier et vous incitera à envisager une formation plus approfondie pour obtenir un titre professionnel de secrétaire.",
    "objectifs_pedagogiques": [
      "Maîtriser l'accueil professionnel et les compétences organisationnelles",
      "Devenir expert en archivage et surmonter les obstacles liés au classement",
      "Perfectionner les compétences en classement",
      "Améliorer la rédaction de comptes rendus",
      "Savoir utiliser Office 365"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "14h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "initiation-metier-secretaire-bureautique.jpg"
  },
  
  {
    "id": "initiation-metier-secretaire-medicale",
    "categorie": "SECRÉTARIAT MÉDICAL",
    "titre": "Initiation au Métier de Secrétaire Médicale",
    "description": "Cette formation introductive offre une introduction approfondie au métier de secrétaire médical, couvrant le secrétariat, le système médico-social, la biologie, l'imagerie médicale, et la préparation au concours.",
    "objectifs_pedagogiques": [
      "Acquérir les compétences fondamentales du métier de secrétaire médical.",
      "Comprendre le fonctionnement du système médico-social.",
      "Maîtriser des notions basiques de biologie et de moyens thérapeutiques.",
      "Se familiariser avec la terminologie et les abréviations du secteur médical.",
      "Savoir utiliser Office 365"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "4h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "initiation-metier-secretaire-medicale.jpg"
  },
  {
    "id": "demarrer-booster-micro-entreprise",
    "categorie": "RECONVERSION PROFESSIONNELLE",
    "titre": "Démarrer et Booster votre Micro-Entreprise",
    "description": "Avec cette formation, le porteur de projet sera en capacité d'appréhender les fondamentaux de la micro-entreprise, de créer sa micro-entreprise, de gérer sa comptabilité, sa trésorerie et le paiement de ses impôts. Il pourra également utiliser les outils à sa disposition, tels que les réseaux sociaux pour développer son activité.",
    "objectifs_pedagogiques": [
      "Connaitre le fonctionnement de la micro-entreprise (fiscal et social)",
      "Elaborer son projet de création d'entreprise",
      "Mettre en place une organisation administrative et comptable",
      "Préparer les démarches et le dossier d'immatriculation",
      "Apprendre à utiliser les réseaux sociaux pour booster sa micro-entreprise"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "11h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "demarrer-booster-micro-entreprise.jpg"
  },
  {
    "id": "creation-cabinet-infirmier-liberal",
    "categorie": "RECONVERSION PROFESSIONNELLE",
    "titre": "Création d'un Cabinet Infirmier Libéral",
    "description": "Cette formation aborde les aspects essentiels de l'installation et de la gestion d'une pratique libérale, couvrant les aspects juridiques, fiscaux, la gestion de cabinet, et la protection sociale. Elle offre une base solide pour les professionnels cherchant à réussir dans le domaine libéral.",
    "objectifs_pedagogiques": [
      "Comprendre les étapes et les exigences de l'installation en libéral",
      "Maîtriser les aspects juridiques et fiscaux du statut de libéral",
      "Acquérir des compétences de gestion pour gérer un cabinet libéral efficacement",
      "Apprendre les bases de la protection sociale, de l'assurance, et de la comptabilité liées à l'exercice en libéral."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "4h30 environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "creation-cabinet-infirmier-liberal.jpg"
  },
  {
    "id": "essentiel-de-la-naturopathie",
    "categorie": "RECONVERSION PROFESSIONNELLE",
    "titre": "L'Essentiel de la Naturopathie",
    "description": "Cette formation offre une exploration approfondie des fondements de la naturopathie, dotant les apprenants des connaissances essentielles pour promouvoir le bien-être holistique. Grâce à des modules variés, elle permet d'acquérir des compétences pratiques en gestion de l'énergie, équilibre acido-basique, utilisation des plantes médicinales, favorisant ainsi une approche complète de la santé naturelle.",
    "objectifs_pedagogiques": [
      "Comprendre l'histoire et les principes de la naturopathie.",
      "Gérer l'énergie positive et maintenir l'équilibre mental.",
      "Appréhender l'équilibre acido-basique et ses stratégies naturopathiques.",
      "Maîtriser l'utilisation des plantes médicinales en naturopathie."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "8h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "essentiel-de-la-naturopathie.jpg"
  },
  
  {
    "id": "revit-2021-fondamentaux",
    "categorie": "CAO-DAO",
    "titre": "Revit 2021 - Les Fondamentaux",
    "description": "Le logiciel Revit Autodesk est un outil de référence en matière de conception et de dessin leader pour la modélisation des données du bâtiment (BIM). Avec cette formation, vous apprendrez à utiliser Revit 2020 pour modéliser, analyser et simuler vos projets, puis à générer votre documentation.",
    "objectifs_pedagogiques": [
      "Savoir manipuler l’interface",
      "Être en mesure de créer une maquette numérique",
      "Réaliser des modélisations simples et complexes",
      "Réaliser des rendus réalistes"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "5h15 environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "revit-2021-fondamentaux.jpg"
  },
  {
    "id": "autocad-2021-fondamentaux",
    "categorie": "CAO-DAO",
    "titre": "AutoCAD 2021 - Les Fondamentaux",
    "description": "Prenez en main les fonctionnalités et les nombreux outils d’AutoCAD. Exécutez ainsi efficacement des tâches de dessin d’architecture. Imprimez également sur tous les types de formats de papier et abordez des techniques pour optimiser votre flux de travail au quotidien.",
    "objectifs_pedagogiques": [
      "Utiliser AutoCAD pour concevoir et modéliser un projet",
      "Créer un plan en 2D et 3D",
      "Mettre en page et imprimer un projet",
      "Savoir utiliser les fonctionnalités avancées"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "5h20 environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "autocad-2021-fondamentaux.jpg"
  },
  {
    "id": "archicad-2021-fondamentaux",
    "categorie": "CAO-DAO",
    "titre": "Archicad 2021 - Les Fondamentaux",
    "description": "Cette formation vous permettra de maîtriser les bases du logiciel ArchiCAD. Vous apprendrez à utiliser les fonctions pas à pas, de la création 2D et 3D à la réalisation de dossier de plans, en passant par tous les outils nécessaires dédiés aux besoins de vos projets.",
    "objectifs_pedagogiques": [
      "Maîtriser l'environnement d'ArchiCAD",
      "Utiliser les outils de navigation et les outils de dessin",
      "Créer et utiliser les outils de points de vue et les outils de documentation",
      "Utiliser et gérer les nomenclatures et les vues",
      "Réaliser et exporter des mises en page"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "12h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "archicad-2021-fondamentaux.jpg"
  },
  {
    "id": "sketchup-2021-fondamentaux",
    "categorie": "CAO-DAO",
    "titre": "Sketchup 2021 – Les Fondamentaux",
    "description": "Apprenez à utiliser le logiciel SketchUp, de la création 2D à la modélisation 3D, en passant par tous les outils nécessaires dédiés aux besoins de vos projets. A l’issue de cette formation, vous mettrez en application toutes les compétences que vous aurez acquises par un atelier pratique et complet de modélisation d’un agencement d’appartement.",
    "objectifs_pedagogiques": [
      "Maîtriser l’interface graphique et gérer l’espace de travail",
      "Créer des géométries en 2D, des groupes et modéliser en 3D",
      "Créer et insérer des composants",
      "Maîtriser les solides et ajouter des annotations",
      "Appliquer et personnaliser des textures",
      "Gérer la structure de votre modèle et créer des sections, des scènes et animations"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "5h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "sketchup-2021-fondamentaux.jpg"
  },
  
  {
    "id": "haccp-methode",
    "categorie": "SECURITE",
    "titre": "La Méthode HACCP",
    "description": "Depuis le 1er octobre 2012, tous les établissements ayant une activité de restauration doivent avoir dans leurs effectifs au moins une personne formée à la méthode HACCP. L'objectif de la formation est de vous permettre de développer vos compétences et remplir vos obligations en matière d'hygiène alimentaire.",
    "objectifs_pedagogiques": [
      "Analyser les risques sanitaires liés aux aliments",
      "Maîtriser la réglementation applicable en matière d'hygiène alimentaire",
      "Être capable d'organiser son activité en conformité avec les règles HACCP",
      "Mettre en place des actions d'auto-contrôle",
      "Assumer la fonction de référent hygiène"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "14h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "haccp-methode.jpg"
  },
  {
    "id": "cybersecurite-entreprise",
    "categorie": "SECURITE",
    "titre": "La Cybersécurité en Entreprise",
    "description": "Cette formation en cybersécurité entreprise offre une approche originale et pratique pour comprendre les menaces numériques, appliquer des mesures préventives, et développer une stratégie sécuritaire.",
    "objectifs_pedagogiques": [
      "Identifier et analyser les principales cybermenaces",
      "Acquérir des compétences pratiques pour renforcer la sécurité informatique",
      "Concevoir une stratégie adaptée aux besoins spécifiques de l'entreprise",
      "Appliquer les réflexes essentiels"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "14h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "cybersecurite-entreprise.jpg"
  },
  
  {
    "id": "html-css-debutant-expert",
    "categorie": "DEVELOPPEMENT WEB",
    "titre": "HTML5 et CSS3 de Débutant à Expert",
    "description": "Que vous vouliez créer un site web, ou utiliser un CMS comme WordPress ou développer des applications web, vous aurez besoin obligatoirement de passer par ces langages ! Vous apprendrez les bases de ces langages, puis les fonctionnalités avancées, enfin, nous réaliserons un site internet de présentation et nous le publierons en ligne chez un hébergeur gratuit afin de partager votre profil au plus grand nombre sur la toile.",
    "objectifs_pedagogiques": [
      "Utiliser un éditeur de code et créer une page internet",
      "Apprendre à utiliser et styliser les éléments HTML",
      "Utiliser les sélecteurs avancés et les grilles en CSS",
      "Apprendre les boites flexibles (flexbox)",
      "Les pseudo-classes et les pseudo-éléments",
      "Réaliser des transitions et les animations CSS"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "14h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "html-css-debutant-expert.jpg"
  },
  {
    "id": "javascript-fondamentaux",
    "categorie": "DEVELOPPEMENT WEB",
    "titre": "JavaScript - Les Fondamentaux",
    "description": "JavaScript est un langage informatique qui permet de dynamiser les sites Internet. Il s’associe donc à l’HTML et au CSS dans la création des pages web. Avec Javascript, vous pourrez par exemple modifier l’apparence d’un contenu sans repasser par le serveur, animer des images, contrôler du contenu multimédia. Avec cette formation, faites l’acquisition des notions de base de JavaScript et améliorer votre employabilité.",
    "objectifs_pedagogiques": [
      "Acquérir les notions de base de JavaScript",
      "Exploiter les principaux frameworks",
      "Etre capable d’exploiter Javascript pour dynamiser un site web"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "7h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "javascript-fondamentaux.jpg"
  },
  {
    "id": "react-redux",
    "categorie": "DEVELOPPEMENT WEB",
    "titre": "Créer des Sites Interactifs avec React et Redux",
    "description": "Découvrez React, la bibliothèque JavaScript incontournable pour le développement web moderne. Apprenez ses fondamentaux, maîtrisez des concepts avancés tels que Redux, et appliquez vos compétences à travers des projets pratiques.",
    "objectifs_pedagogiques": [
      "Comprendre les fondamentaux de React",
      "Différencier les sites 'Single Page' et 'Multi Page'",
      "Maîtriser les outils et logiciels nécessaires",
      "Comprendre les concepts avancés de React et Redux",
      "Appliquer les compétences dans des projets pratiques"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "7h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "react-redux.jpg"
  },
  {
    "id": "devenir-developpeur-python",
    "categorie": "DEVELOPPEMENT WEB",
    "titre": "Devenir un Développeur Python",
    "description": "Python est le nouveau langage de programmation en vogue, utilisé pour diverses applications : l’écriture de programmes, la manipulation de volumes importants de données, les serveurs web et même les nano ordinateurs Raspberry Pi. Que vous soyez un programmeur débutant ou expérimenté, cette formation vous fournira les compétences de base dans le langage Python.",
    "objectifs_pedagogiques": [
      "Acquérir les notions de base de Python",
      "Savoir utiliser les modules Python",
      "Etre capable d’exploiter des données à l’aide de Python"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "12h30 environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "devenir-developpeur-python.jpg"
  },
  {
    "id": "devenir-developpeur-csharp",
    "categorie": "DEVELOPPEMENT WEB",
    "titre": "Devenir un Développeur C#",
    "description": "Dans cette formation, vous apprendrez les bases du C#, puis progressivement vous monterez en compétences pour enfin maîtriser ce fabuleux langage de programmation. Des questionnaires ainsi que des ateliers pratiques (avec corrigé) vous permettrons de tester vos compétences tout au long de cette formation. À la fin de ce cours, vous serez capable d’utiliser le C# et de créer des applications sous Mac, Windows ou encore Unity.",
    "objectifs_pedagogiques": [
      "Acquérir les bases de la programmation en C#",
      "Etre capable de créer des applications avec Visual Studio",
      "Savoir créer des interfaces graphiques",
      "Mettre en application les bonnes pratiques qualité dans le cadre d’un projet web"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "17h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "devenir-developpeur-csharp.jpg"
  },
  {
    "id": "essentiel-wordpress-woocommerce",
    "categorie": "DEVELOPPEMENT WEB",
    "titre": "L’Essentiel de WordPress 5 et WooCommerce",
    "description": "WordPress est un logiciel libre utilisé pour créer des sites, des blogs ou des applications. Avec l’extension WooCommerce faites de votre site une boutique en ligne. Apprenez les fondamentaux pour créer un site web et une boutique en ligne personnalisés avec cette formation pour débutant.",
    "objectifs_pedagogiques": [
      "Savoir installer et configurer WordPress et les bons plugins",
      "Savoir ajouter et gérer les contenus, les thèmes et créer des pages",
      "Différencier les Articles, Catégories et Pages WordPress",
      "Etre capable de créer un site ecommerce",
      "Acquérir les bases du référencencement SEO"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "13h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "essentiel-wordpress-woocommerce.jpg"
  },
  {
    "id": "essentiel-wordpress",
    "categorie": "DEVELOPPEMENT WEB",
    "titre": "L’Essentiel de WordPress 5",
    "description": "WordPress est un logiciel libre utilisé pour créer des sites, des blogs ou des applications. Apprenez les fondamentaux pour créer un site web avec cette formation pour débutant.",
    "objectifs_pedagogiques": [
      "Savoir installer WordPress",
      "Etre capable de configurer WordPress",
      "Savoir installer et configurer les bons plugins",
      "Savoir ajouter et gérer les contenus",
      "Etre capable de gérer les thèmes et créer des pages",
      "Différencier les Articles, Catégories et Pages WordPress"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "10h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "essentiel-wordpress.jpg"
  },
  {
    "id": "woocommerce",
    "categorie": "DEVELOPPEMENT WEB",
    "titre": "WooCommerce",
    "description": "Avec cette formation, apprenez les fondamentaux essentiels pour créer une boutique en ligne personnalisée avec l'extension WooCommerce. Vous développerez les compétences nécessaires pour concrétiser vos idées dans le domaine du e-commerce.",
    "objectifs_pedagogiques": [
      "Savoir installer WordPress",
      "Etre capable de configurer WordPress",
      "Savoir installer et configurer les bons plugins",
      "Savoir ajouter et gérer les contenus",
      "Etre capable de gérer les thèmes et créer des pages",
      "Différencier les Articles, Catégories et Pages WordPress"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "10h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "woocommerce.jpg"
  },
  
  {
    "id": "storytelling-marketing",
    "categorie": "VENTE / MARKETING DIGITAL",
    "titre": "Le Storytelling",
    "description": "Explorez le pouvoir du storytelling dans le marketing à travers notre cours. Maîtrisez la boîte à outils du marketing narratif, apprenez les notions essentielles de la narration, perfectionnez votre communication client, et développez une histoire captivante pour affiner votre marque.",
    "objectifs_pedagogiques": [
      "Acquérir les compétences de base du marketing narratif.",
      "Maîtriser les outils pratiques du storytelling en marketing.",
      "Développer des compétences de communication efficace avec les clients.",
      "Créer et peaufiner une histoire captivante pour renforcer la marque."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "50 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "storytelling-marketing.jpg"
  },
  {
    "id": "surmonter-les-objections",
    "categorie": "VENTE / MARKETING DIGITAL",
    "titre": "Surmonter les Objections",
    "description": "Cette formation dynamique 'Surmonter les objections' vise à renforcer vos compétences en communication, à anticiper et traiter efficacement les objections clients, ainsi qu'à conclure avec succès vos ventes en identifiant les signaux d'achat. Un programme essentiel pour maximiser votre impact commercial.",
    "objectifs_pedagogiques": [
      "Maîtriser les techniques pour anticiper et surmonter les objections clients.",
      "Développer des compétences en communication pour renforcer la crédibilité.",
      "Acquérir des outils pour traiter efficacement les réclamations des clients.",
      "Savoir conclure une vente en identifiant les signaux d'achat."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "45 min environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "surmonter-les-objections.jpg"
  },
  {
    "id": "formation-email-marketing",
    "categorie": "VENTE / MARKETING DIGITAL",
    "titre": "Formation Email Marketing",
    "description": "Le marketing par courriel, aussi appelé Emailing, existera toujours. Il est essentiel pour les spécialistes du marketing, ainsi que les gérants de petites entreprises, les coachs, les consultants. Dans ce cours, vous apprendrez l’essentiel de la planification, de la création, et de la réalisation de campagnes de marketing par courriel réussies.",
    "objectifs_pedagogiques": [
      "Entrer en contact avec un plus grand nombre de contacts et prospects",
      "Accroître l’influence et la portée d’une entreprise",
      "Analyser les différentes applications du marketing par courriel",
      "Sélectionner une stratégie de campagne",
      "Appliquer une stratégie définie",
      "Suivre et analyser les résultats d’une campagne d’emailing"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "9h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "formation-email-marketing.jpg"
  },
  {
    "id": "former-un-call-center",
    "categorie": "VENTE / MARKETING DIGITAL",
    "titre": "Former un Call Center",
    "description": "Le marketing par courriel, aussi appelé Emailing, existera toujours. Il est essentiel pour les spécialistes du marketing, ainsi que les gérants de petites entreprises, les coachs, les consultants. Dans ce cours, vous apprendrez l’essentiel de la planification, de la création, et de la réalisation de campagnes de marketing par courriel réussies.",
    "objectifs_pedagogiques": [
      "Entrer en contact avec un plus grand nombre de contacts et prospects",
      "Accroître l’influence et la portée d’une entreprise",
      "Analyser les différentes applications du marketing par courriel",
      "Sélectionner une stratégie de campagne",
      "Appliquer une stratégie définie",
      "Suivre et analyser les résultats d’une campagne d’emailing"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "1h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "former-un-call-center.jpg"
  },
  {
    "id": "dynamisez-vos-presentations-commerciales",
    "categorie": "VENTE / MARKETING DIGITAL",
    "titre": "Dynamisez vos Présentations Commerciales",
    "description": "Explorez l'art de rédiger des propositions convaincantes, recevez des conseils d'experts pour une correction efficace, perfectionnez vos compétences en présentation, et découvrez les secrets d'une tenue professionnelle. Une formation pratique pour exceller dans la communication d'affaires.",
    "objectifs_pedagogiques": [
      "Maîtriser la rédaction efficace de propositions.",
      "Appliquer les conseils d'experts en correction.",
      "Préparer et structurer des présentations percutantes.",
      "Adopter une approche professionnelle en matière d'habillement."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "1h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "dynamisez-vos-presentations-commerciales.jpg"
  },
  {
    "id": "social-selling-petites-entreprises",
    "categorie": "VENTE / MARKETING DIGITAL",
    "titre": "Le Social Selling pour les Petites Entreprises",
    "description": "Optimisez votre approche de vente en ligne avec cette formation concrète et efficace. Explorez les étapes clés du social selling, de la recherche à l'établissement de relations, en passant par le partage de contenu. Adaptez ces stratégies à votre petite entreprise pour maximiser votre succès dans le monde numérique en constante évolution.",
    "objectifs_pedagogiques": [
      "Maîtriser les principes fondamentaux du social selling.",
      "Effectuer une recherche efficace dans le contexte du social selling.",
      "Développer des compétences pour établir des relations professionnelles en ligne.",
      "Comprendre l'importance du partage de contenu dans le social selling."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "1h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "social-selling-petites-entreprises.jpg"
  },
  {
    "id": "facebook-ads-debutant-a-expert",
    "categorie": "VENTE / MARKETING DIGITAL",
    "titre": "Facebook Ads : De Débutant à Expert Version 2022",
    "description": "De nos jours, le marketing sur les médias sociaux est devenu un indispensable dans la réflexion marketing d’une entreprise. Découvrez à travers cette formation d’actualité, comment adapter votre communication d’entreprise sur les réseaux, comment gagner du temps et optimiser vos actions au quotidien, et comment fédérer vos clients autour de votre entreprise et de vos produits.",
    "objectifs_pedagogiques": [
      "Savoir créer une communauté en ligne",
      "Utiliser les réseaux sociaux pour développer ses ventes et accroître sa notoriété",
      "Savoir communiquer en ligne en élaborant une stratégie de contenu",
      "Être capable de mesurer le retour sur investissement de vos médias sociaux."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "18h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "facebook-ads-debutant-a-expert.jpg"
  },
  {
    "id": "gestion-des-reseaux-sociaux",
    "categorie": "VENTE / MARKETING DIGITAL",
    "titre": "Gestion des Réseaux Sociaux de Débutant à Expert 2022",
    "description": "Les réseaux sociaux sont devenus un outil incontournable dans la commercialisation des biens et services. Cette formation vous permettra d’acquérir les compétences fondamentales afin d’utiliser au mieux les réseaux sociaux dans une perspective professionnelle.",
    "objectifs_pedagogiques": [
      "Savoir utiliser les réseaux sociaux pour mieux communiquer",
      "Mettre en avant ses produits et services à l’aide des principaux réseaux sociaux",
      "Maîtriser les bonnes pratiques du community management",
      "Savoir exploiter les principales fonctionnalités des réseaux sociaux les plus connus."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "15h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "gestion-des-reseaux-sociaux.jpg"
  },
  {
    "id": "google-ads-essentiel",
    "categorie": "VENTE / MARKETING DIGITAL",
    "titre": "L'Essentiel de Google Ads",
    "description": "Que vous souhaitiez faire connaître vos produits ou services, votre marque, votre entreprise, votre site web, Google Ads est la solution incontournable qui vous permettra d’améliorer votre visibilité sur internet. Avec cette formation, apprenez à créer, optimiser et suivre vos performances de campagne dans la durée avec Google Ads.",
    "objectifs_pedagogiques": [
      "Générer du trafic qualifié vers un site / une page de vente",
      "Créer, développer et optimiser une campagne Google Ads / AdWords",
      "Savoir choisir le type de campagne AdWords appropriée",
      "Être capable de cibler des visiteurs",
      "Suivre les conversions afin de déterminer la rentabilité des campagnes."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "9h environ",
    "prerequis": "Aucun prérequis",
    "accessibilite": {
      "audio_description": "Non",
      "sous_titrage": "Non"
    },
    "image": "google-ads-essentiel.jpg"
  },
  
  {
    "id": "risque-suicidaire-infirmiere",
    "categorie": "SOINS INFIRMIERS",
    "titre": "Prévention et Prise en Charge Infirmière du Risque Suicidaire",
    "description": "Cette formation sensibilise l’infirmier(ère) et lui donne des outils pour un dépistage et une prise en charge optimale du risque suicidaire. Acquérez les compétences essentielles pour comprendre, prévenir, et intervenir face à la crise suicidaire.",
    "objectifs_pedagogiques": [
      "Maitriser le vocabulaire relatif à la thématique suicidaire",
      "Comprendre la typologie de la crise et le cheminement de la crise",
      "Savoir dépister et évaluer une personne à risque",
      "Intervenir auprès des personnes à risque suicidaire",
      "Connaître les ressources et le réseau afin d’orienter efficacement le patient"
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "6h environ",
    "prerequis": "Aucun prérequis",
    "materiel_necessaire": [
      "Disposer d'un ordinateur ou d’une tablette",
      "Une connexion Internet"
    ],
    "modalites_evaluation": "Sans audio description ni sous-titrage",
    "image": "risque-suicidaire-infirmiere.jpg"
  },
  {
    "id": "alzheimer-prise-en-charge-infirmiere",
    "categorie": "SOINS INFIRMIERS",
    "titre": "Alzheimer et Prise en Charge Infirmière",
    "description": "La maladie d’Alzheimer est une maladie neurodégénérative dont les causes ne sont pas formellement identifiées et pour laquelle il n’existe pas de traitement curatif. Cette formation offre une approche complète de la maladie d'Alzheimer, et permet également de développer des compétences d'évaluation et de transmission des informations, tout en explorant différentes orientations possibles dans la prise en charge.",
    "objectifs_pedagogiques": [
      "Comprendre l'évolution de la maladie d'Alzheimer.",
      "Identifier les impacts sociaux et familiaux.",
      "Accompagner au quotidien les personnes atteintes.",
      "Reconnaître et évaluer l'évolution des troubles.",
      "Développer des compétences en communication adaptée."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "6h environ",
    "prerequis": "Aucun prérequis",
    "materiel_necessaire": [
      "Disposer d'un ordinateur ou d’une tablette",
      "Une connexion Internet"
    ],
    "modalites_evaluation": "Sans audio description ni sous-titrage",
    "image": "alzheimer-prise-en-charge-infirmiere.jpg"
  },
  {
    "id": "prise-en-charge-douleur-infirmiere",
    "categorie": "SOINS INFIRMIERS",
    "titre": "La Prise en Charge Infirmière de la Douleur",
    "description": "De l’évaluation à l’accompagnement du patient, en passant par la mise en place de plan de soin, cette formation vise à apporter aux professionnels de santé les savoirs de base indispensables et les compétences appropriées, pour comprendre et prendre en charge le patient douloureux.",
    "objectifs_pedagogiques": [
      "Situer la douleur dans la politique de santé publique",
      "Identifier et évaluer les différents types de douleur avec des outils validés",
      "Connaître les traitements, leurs spécificités et prévenir les effets secondaires",
      "Mettre en place des protocoles de prévention des douleurs induites par les soins",
      "Assurer la prise en charge en améliorant les pratiques professionnelles."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "7h environ",
    "prerequis": "Aucun prérequis",
    "modalites_evaluation": "Sans audio description ni sous-titrage",
    "image": "prise-en-charge-douleur-infirmiere.jpg"
  },
  {
    "id": "prises-en-charge-plaies-cicatrisation",
    "categorie": "SOINS INFIRMIERS",
    "titre": "Prise en Charge des Plaies et Cicatrisation",
    "description": "La formation 'plaies et cicatrisation' aborde tous les aspects de la prise en charge des principales plaies dites complexes. Les différentes familles de pansements, les conseils d’utilisation et les éléments permettant de choisir le pansement adéquat sont étudiés, et ce en respectant le cadre législatif en vigueur.",
    "objectifs_pedagogiques": [
      "Rappeler les bases théoriques et pratiques de la cicatrisation.",
      "Actualiser les connaissances sur les principales plaies complexes.",
      "Maîtriser les modes d'action, indications, contre-indications et utilisations des pansements.",
      "Choisir et prescrire les dispositifs médicaux adaptés en fonction du type de plaie.",
      "Optimiser la prise en charge des patients atteints de plaies."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "7h environ",
    "prerequis": "Aucun prérequis",
    "modalites_evaluation": "Sans audio description ni sous-titrage",
    "image": "prises-en-charge-plaies-cicatrisation.jpg"
  },
  {
    "id": "abords-vasculaires-soins-a-domicile",
    "categorie": "SOINS INFIRMIERS",
    "titre": "Abords Vasculaires & Soins Infirmiers à Domicile",
    "description": "La formation 'plaies et cicatrisation' aborde tous les aspects de la prise en charge des principales plaies dites complexes. Les différentes familles de pansements, les conseils d’utilisation et les éléments permettant de choisir le pansement adéquat sont étudiés, et ce en respectant le cadre législatif en vigueur.",
    "objectifs_pedagogiques": [
      "Connaître les différents abords vasculaires rencontrés à domicile",
      "Appréhender l’utilisation, les manipulations et les soins infirmiers qui s’y réfèrent",
      "Connaître, pour chaque dispositif, les principes généraux des protocoles de soins",
      "Prévenir les infections et garantir la qualité et la sécurité des soins",
      "Evaluer ses pratiques et les réajuster si nécessaire."
    ],
    "niveau": "Initiation",
    "public": "Tous publics",
    "duree": "5h environ",
    "prerequis": "Aucun prérequis",
    "modalites_evaluation": "Sans audio description ni sous-titrage",
    "image": "abords-vasculaires-soins-a-domicile.jpg"
  }





]

export default formations;