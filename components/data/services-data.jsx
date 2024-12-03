
const servicesData = [
    {
      "id": "01",
      "titre": "LANGUES",
      "liste": [
        {"id": "1", "intitule": "Anglais Débutant - Intermédiaire - Avancé"},
        {"id": "2", "intitule": "Anglais des affaires - Avancé C1-C2"},
        {"id": "3", "intitule": "Anglais Médical Débutant A1-A2"},
        {"id": "4", "intitule": "ESL Beginner - Intermediate - Advanced - Business"},
        {"id": "5", "intitule": "Préparation aux examens TOEIC - Cambridge"},
        {"id": "6", "intitule": "Préparation aux examens IELTS - Linguaskill - TOEFL"},
        {"id": "7", "intitule": "Allemand Débutant A1-A2"},
        {"id": "8", "intitule": "Arabe Débutant - Intermédiaire"},
        {"id": "9", "intitule": "Chinois Niveau A1-A2"},
        {"id": "10", "intitule": "Espagnol Débutant - Intermédiaire - Avancé"},
        {"id": "11", "intitule": "Préparation aux examens DELE - BRIGHT - SIELE"},
        {"id": "12", "intitule": "Français Langue Etrangère (FLE) Niveau A1/A2 - B1 - B2"},
        {"id": "13", "intitule": "Préparation à l’examen du DELF"},
        {"id": "14", "intitule": "Italien Débutant A1-A2"},
        {"id": "15", "intitule": "Japonais Débutant A1-A2"},
        {"id": "16", "intitule": "Langues des signes française Niveau A1-A2"},
        {"id": "17", "intitule": "Portugais Débutant A1-A2"},
        {"id": "18", "intitule": "Russe Débutant A1-A2"}
      ]
    },
    {
        "id": "02",
        "titre": "SOFT SKILLS",
        "liste": [
          {"id": "1", "intitule": "Bâtir son estime de soi et sa confiance en soi"},
          {"id": "2", "intitule": "Gestion du stress"},
          {"id": "3", "intitule": "Utiliser sa voix pour convaincre"},
          {"id": "4", "intitule": "Le langage non verbal"},
          {"id": "5", "intitule": "Les secrets du body langage"},
          {"id": "6", "intitule": "Maîtriser votre communication"},
          {"id": "7", "intitule": "Se présenter 10 minutes"},
          {"id": "8", "intitule": "Construire son personal branding"},
          {"id": "9", "intitule": "Maitriser la pensée critique"},
          {"id": "10", "intitule": "Découvrir la PNL"},
          {"id": "11", "intitule": "Réussir vos présentations pour convaincre"},
          {"id": "12", "intitule": "Réussir votre présentation virtuelle"},
          {"id": "13", "intitule": "Parler en public : Gérer la pression"},
          {"id": "14", "intitule": "L’écoute active"},
          {"id": "15", "intitule": "Conquérir tous les publics"},
          {"id": "16", "intitule": "Réussir son entretien"},
          {"id": "17", "intitule": "Maitriser les relations publiques"},
          {"id": "18", "intitule": "Intelligence émotionnelle"}
        ]
      },
    {
        "id": "03",
        "titre": "BUREAUTIQUE",
        "liste": [
          {"id": "1", "intitule": "Excel pour Office 365 Initiation - Intermédiaire - Avancé - Expert"},
          {"id": "2", "intitule": "Excel 2019 Initiation - Intermédiaire - Avancé - Expert"},
          {"id": "3", "intitule": "Réussir sa certification Tosa Excel 2019"},
          {"id": "4", "intitule": "Word 2019 Débutant - Intermédiaire"},
          {"id": "5", "intitule": "Réussir sa certification Tosa Word 2019"},
          {"id": "6", "intitule": "L’essentiel de PowerPoint - version Office 365"},
          {"id": "7", "intitule": "Découvrir PowerPoint 2019"},
          {"id": "8", "intitule": "Réussir sa certification Tosa PowerPoint 2019"},
          {"id": "9", "intitule": "Savoir utiliser les applications Microsoft Office 365"},
          {"id": "10", "intitule": "Les bases de l'informatique"},
          {"id": "11", "intitule": "Découvrir OneDrive de Microsoft"},
          {"id": "12", "intitule": "Découvrir SharePoint Online de Microsoft"},
          {"id": "13", "intitule": "Outlook sur le web avec Microsoft 365"},
          {"id": "14", "intitule": "Collaborer en ligne avec Teams de Microsoft 365"},
          {"id": "15", "intitule": "Les outils de collaboration Google"}
        ]
      },
      {
        "id": "04",
        "titre": "COMPTABILITE / PAIE",
        "liste": [
          {"id": "1", "intitule": "Comptabilité - Initiation"},
          {"id": "2", "intitule": "Comptabilité - Perfectionnement"},
          {"id": "3", "intitule": "Gestion de Paie : UE1 - Identifier les règles"},
          {"id": "4", "intitule": "UE2 - Calculer le bulletin de paie"},
          {"id": "5", "intitule": "UE3 - Le prélèvement à la source (PAS)"},
          {"id": "6", "intitule": "UE4 - Identifier les aménagements du temps de travail"},
          {"id": "7", "intitule": "UE5 - Identifier le rôle des IRP et la notion de confidentialité"},
          {"id": "8", "intitule": "UE6 - Calculer un bulletin de paie avec les éléments variables"},
          {"id": "9", "intitule": "UE7 - Calculer une paie dite particulière"},
          {"id": "10", "intitule": "UE8 - Calculer la paie de départ - Le SDTC"},
          {"id": "11", "intitule": "UE9 - Calculer les éléments post paie"},
          {"id": "12", "intitule": "UE10 - Oral Blanc"}
        ]
      },
      {
        "id": "05",
        "titre": "KINESITHERAPIE",
        "liste": [
          {"id": "1", "intitule": "Kinésithérapie en réhabilitation respiratoire"},
          {"id": "2", "intitule": "Bilans et red-flags en kiné respiratoire ambulatoire"},
          {"id": "3", "intitule": "Levée des tensions musculaires"},
          {"id": "4", "intitule": "Rééducation pelvi-périnéale féminine les bases"},
          {"id": "5", "intitule": "Renforcement abdominal et santé du périnée"},
          {"id": "6", "intitule": "Prise en charge des pathologies de l'épaule"},
          {"id": "7", "intitule": "Prise en charge des pathologies du genou"},
          {"id": "8", "intitule": "Prise en charge de l’atm articulation temporo-mandibulaire"},
          {"id": "9", "intitule": "Prise en charge de la lombalgie"},
          {"id": "10", "intitule": "Prise en charge de la cervicalgie"},
          {"id": "11", "intitule": "Rééducation des pathologies traumatiques de la cheville"}
        ]
      },
      {
        "id": "06",
        "titre": "VENTE MARKETING DIGITAL",
        "liste": [
          {"id": "1", "intitule": "Le story telling"},
          {"id": "2", "intitule": "Surmonter les objections"},
          {"id": "3", "intitule": "Formation Email marketing"},
          {"id": "4", "intitule": "Vente et relation client"},
          {"id": "5", "intitule": "Former un call center"},
          {"id": "6", "intitule": "Dynamisez vos présentations commerciales"},
          {"id": "7", "intitule": "Le social selling pour les petites entreprises"},
          {"id": "8", "intitule": "Booster son entreprise avec les réseaux sociaux"},
          {"id": "9", "intitule": "Gestion des réseaux sociaux de Débutant à Expert 2022"},
          {"id": "10", "intitule": "L’essentiel de Google Ads"}
        ]
      },
      {
        "id": "07",
        "titre": "PRODUCTIVITE DE L’ENTREPRISE",
        "liste": [
          {"id": "1", "intitule": "Les Fondements de la méthode Agile"},
          {"id": "2", "intitule": "Choisir les bons outils d’aide à la décision"},
          {"id": "3", "intitule": "Gérez efficacement votre temps"},
          {"id": "4", "intitule": "Profiter pleinement du télétravail"},
          {"id": "5", "intitule": "Ergonomie du poste de travail"},
          {"id": "6", "intitule": "Initiation à l'Intelligence Artificielle"},
          {"id": "7", "intitule": "Power BI, de débutant à expérimenté par la pratique"},
          {"id": "8", "intitule": "Maîtrisez les fondations de GPT"},
          {"id": "9", "intitule": "Familiarisez-vous avec les fonctionnalités de ChatGPT"},
          {"id": "10", "intitule": "Maîtrisez le Prompt engineering avec ChatGPT"}
        ]
      },
      {
        "id": "08",
        "titre": "MANAGEMENT / RH",
        "liste": [
          {"id": "1", "intitule": "Recruter sans discriminer"},
          {"id": "2", "intitule": "Accompagnement d’un nouveau salarié"},
          {"id": "3", "intitule": "Gestion des performances des employés"},
          {"id": "4", "intitule": "Stimuler et récompenser ses employés"},
          {"id": "5", "intitule": "Comblez le gap générationnel"},
          {"id": "6", "intitule": "La résolution des conflits"},
          {"id": "7", "intitule": "Comprendre les bases de la gestion de projet"},
          {"id": "8", "intitule": "Maitriser la gestion de projet"},
          {"id": "9", "intitule": "Apprendre à déléguer"}
        ]
      },
      {
        "id": "09",
        "titre": "DEVELOPPEMENT WEB",
        "liste": [
          {"id": "1", "intitule": "HTML5 et CSS3 de Débutant à Expert"},
          {"id": "2", "intitule": "JavaScript - les fondamentaux"},
          {"id": "3", "intitule": "Créer des sites interactifs avec React et Redux"},
          {"id": "4", "intitule": "Devenir un développeur Python"},
          {"id": "5", "intitule": "Devenir un développeur C#"},
          {"id": "6", "intitule": "L’essentiel de Wordpress 5 et Woocommerce"},
          {"id": "7", "intitule": "L’essentiel de Wordpress 5"},
          {"id": "8", "intitule": "Woocommerce"}
        ]
      },
      {
        "id": "10",
        "titre": "RECONVERSION PROFESSIONNELLE",
        "liste": [
          {"id": "1", "intitule": "Initiation au métier de secrétaire bureautique"},
          {"id": "2", "intitule": "Initiation au métier de secrétaire médicale"},
          {"id": "3", "intitule": "Démarrer et Booster votre Micro-entreprise"},
          {"id": "4", "intitule": "Création d'un cabinet infirmier libéral"},
          {"id": "5", "intitule": "L’essentiel de la Naturopathie"},
          {"id": "6", "intitule": "Le métier de décorateur(trice) d’intérieur"}
        ]
      },
      {
        "id": "11",
        "titre": "SOINS INFIRMIERS",
        "liste": [
          {"id": "1", "intitule": "Prévention et prise en charge infirmière du risque suicidaire"},
          {"id": "2", "intitule": "Alzheimer et prise en charge infirmière"},
          {"id": "3", "intitule": "La prise en charge infirmière de la douleur"},
          {"id": "4", "intitule": "Prise en charge des plaies et cicatrisations"},
          {"id": "5", "intitule": "Abords vasculaires & soins infirmiers à domicile"}
        ]
      },
      {
        "id": "12",
        "titre": "CAO -DAO",
        "liste": [
          {"id": "1", "intitule": "Revit 2021 - Les fondamentaux"},
          {"id": "2", "intitule": "Autocad 2021 - Les fondamentaux"},
          {"id": "3", "intitule": "Archicad 2021 - Les fondamentaux"},
          {"id": "4", "intitule": "SketchUp 2021 – Les fondamentaux"}
        ]
      },
    {
      "id": "13",
      "titre": "INFOGRAPHIE",
      "liste": [
        {"id": "1", "intitule": "Photoshop CC 2019-2023 (Tous niveaux)"},
        {"id": "2", "intitule": "Illustrator CC 2019-2023 (Tous niveaux)"},
        {"id": "3", "intitule": "InDesign CC 2019-2023 (Tous niveaux)"},
        {"id": "4", "intitule": "Entreprendre avec Canva"}
      ]
    },
    {
        "id": "14",
        "titre": "SECURITE",
        "liste": [
          {"id": "1", "intitule": "La méthode HACCP"},
          {"id": "2", "intitule": "La cybersécurité en entreprise"},
          {"id": "3", "intitule": "L’essentiel du RGPD"}
        ]
      },
    {
      "id": "15",
      "titre": "VIDEO",
      "liste": [
        {"id": "1", "intitule": "Adobe Premiere Pro 2020 2024"},
        {"id": "2", "intitule": "Adobe After Effects 2020 2024"}
      ]
    },
    {
      "id": "16",
      "titre": "PHARMACIE",
      "liste": [
        {"id": "1", "intitule": "Gestion de l'urgence à l'officine"},
        {"id": "2", "intitule": "Bilan de médication de la théorie à la pratique"}
      ]
    }
  ]
  
export default servicesData;