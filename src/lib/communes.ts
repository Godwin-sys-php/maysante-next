export type Commune = {
  slug: string;
  name: string;
  postalCodes: string[];
  neighborhoods?: string[];
  intro: string;
  region: "bruxelles" | "peripherie";
};

export const communes: Commune[] = [
  {
    slug: "anderlecht",
    name: "Anderlecht",
    postalCodes: ["1070"],
    neighborhoods: ["Cureghem", "Scherdemael", "Neerpede", "Erasme"],
    intro:
      "Soins infirmiers et garde malade à domicile à Anderlecht (1070), au quotidien comme en urgence. Nous intervenons dans tous les quartiers de la commune.",
    region: "bruxelles",
  },
  {
    slug: "auderghem",
    name: "Auderghem",
    postalCodes: ["1160"],
    neighborhoods: ["Transvaal", "Pinoy", "Blankedelle"],
    intro:
      "Équipe d'infirmiers à domicile et garde malade à Auderghem (1160). Prise en charge personnalisée, 7j/7, à proximité immédiate de votre domicile.",
    region: "bruxelles",
  },
  {
    slug: "berchem-sainte-agathe",
    name: "Berchem-Sainte-Agathe",
    postalCodes: ["1082"],
    intro:
      "Soins à domicile à Berchem-Sainte-Agathe (1082) : pansements, injections, suivi post-opératoire et garde malade par des professionnels qualifiés.",
    region: "bruxelles",
  },
  {
    slug: "bruxelles-ville",
    name: "Bruxelles-Ville",
    postalCodes: ["1000", "1020", "1120", "1130"],
    neighborhoods: ["Centre", "Laeken", "Neder-Over-Heembeek", "Haren"],
    intro:
      "Soins infirmiers à domicile à Bruxelles-Ville (1000, 1020, 1120, 1130). Intervention rapide dans le centre, à Laeken, Neder-Over-Heembeek et Haren.",
    region: "bruxelles",
  },
  {
    slug: "etterbeek",
    name: "Etterbeek",
    postalCodes: ["1040"],
    intro:
      "Soins infirmiers et garde malade à domicile à Etterbeek (1040). Une équipe disponible 7j/7 pour accompagner vos proches dans toute la commune.",
    region: "bruxelles",
  },
  {
    slug: "evere",
    name: "Evere",
    postalCodes: ["1140"],
    intro:
      "Soins à domicile à Evere (1140) : prise en charge personnalisée, soins infirmiers réguliers et garde malade jour et nuit.",
    region: "bruxelles",
  },
  {
    slug: "forest",
    name: "Forest",
    postalCodes: ["1190"],
    intro:
      "Infirmiers à domicile à Forest (1190). Pansements, injections, soins palliatifs et garde malade dans tous les quartiers de la commune.",
    region: "bruxelles",
  },
  {
    slug: "ganshoren",
    name: "Ganshoren",
    postalCodes: ["1083"],
    intro:
      "Soins infirmiers et garde malade à Ganshoren (1083). Un accompagnement humain et professionnel à proximité de votre domicile.",
    region: "bruxelles",
  },
  {
    slug: "ixelles",
    name: "Ixelles",
    postalCodes: ["1050"],
    neighborhoods: ["Châtelain", "Flagey", "Cimetière d'Ixelles", "Matongé"],
    intro:
      "Soins infirmiers à domicile et garde malade à Ixelles (1050). Intervention dans tous les quartiers : Flagey, Châtelain, Matongé, Cimetière d'Ixelles.",
    region: "bruxelles",
  },
  {
    slug: "jette",
    name: "Jette",
    postalCodes: ["1090"],
    intro:
      "Soins à domicile à Jette (1090). Une équipe d'infirmiers disponibles 7j/7 pour vos soins quotidiens et la garde de vos proches.",
    region: "bruxelles",
  },
  {
    slug: "koekelberg",
    name: "Koekelberg",
    postalCodes: ["1081"],
    intro:
      "Infirmiers à domicile et garde malade à Koekelberg (1081). Soins personnalisés, suivi régulier et présence attentive.",
    region: "bruxelles",
  },
  {
    slug: "molenbeek-saint-jean",
    name: "Molenbeek-Saint-Jean",
    postalCodes: ["1080"],
    intro:
      "Soins infirmiers à domicile à Molenbeek-Saint-Jean (1080). Pansements, perfusions, suivi post-opératoire et garde malade dans toute la commune.",
    region: "bruxelles",
  },
  {
    slug: "saint-gilles",
    name: "Saint-Gilles",
    postalCodes: ["1060"],
    neighborhoods: ["Parvis", "Bosnie", "Hôtel des Monnaies"],
    intro:
      "Soins à domicile à Saint-Gilles (1060). Interventions au Parvis, Bosnie, Hôtel des Monnaies et dans toute la commune.",
    region: "bruxelles",
  },
  {
    slug: "saint-josse-ten-noode",
    name: "Saint-Josse-ten-Noode",
    postalCodes: ["1210"],
    intro:
      "Soins infirmiers et garde malade à Saint-Josse-ten-Noode (1210). Une équipe locale, réactive, à votre écoute 7j/7.",
    region: "bruxelles",
  },
  {
    slug: "schaerbeek",
    name: "Schaerbeek",
    postalCodes: ["1030"],
    neighborhoods: ["Place Dailly", "Helmet", "Josaphat", "Meiser"],
    intro:
      "Soins infirmiers à domicile à Schaerbeek (1030). Intervention dans tous les quartiers : Helmet, Josaphat, Meiser, Place Dailly.",
    region: "bruxelles",
  },
  {
    slug: "uccle",
    name: "Uccle",
    postalCodes: ["1180"],
    neighborhoods: ["Saint-Job", "Vivier d'Oie", "Calevoet", "Fort-Jaco"],
    intro:
      "Soins à domicile à Uccle (1180). Une équipe d'infirmiers et de gardes malades disponibles dans tous les quartiers de la commune.",
    region: "bruxelles",
  },
  {
    slug: "watermael-boitsfort",
    name: "Watermael-Boitsfort",
    postalCodes: ["1170"],
    intro:
      "Soins infirmiers à domicile à Watermael-Boitsfort (1170). Prise en charge attentive et respectueuse, en milieu résidentiel.",
    region: "bruxelles",
  },
  {
    slug: "woluwe-saint-lambert",
    name: "Woluwe-Saint-Lambert",
    postalCodes: ["1200"],
    intro:
      "Soins à domicile à Woluwe-Saint-Lambert (1200). Garde malade jour et nuit, pansements, injections, suivi régulier.",
    region: "bruxelles",
  },
  {
    slug: "woluwe-saint-pierre",
    name: "Woluwe-Saint-Pierre",
    postalCodes: ["1150"],
    intro:
      "Soins infirmiers à domicile à Woluwe-Saint-Pierre (1150). Une équipe à votre écoute pour un accompagnement de qualité.",
    region: "bruxelles",
  },
  {
    slug: "zaventem",
    name: "Zaventem",
    postalCodes: ["1930"],
    intro:
      "Soins à domicile à Zaventem (1930), en périphérie immédiate de Bruxelles. Interventions rapides à proximité de l'aéroport.",
    region: "peripherie",
  },
  {
    slug: "machelen",
    name: "Machelen",
    postalCodes: ["1830"],
    intro:
      "Soins infirmiers à domicile à Machelen (1830). Garde malade et accompagnement personnalisé en périphérie de Bruxelles.",
    region: "peripherie",
  },
  {
    slug: "kortenberg",
    name: "Kortenberg",
    postalCodes: ["3070"],
    intro:
      "Soins à domicile à Kortenberg (3070). Une équipe disponible pour vos soins quotidiens et la garde de vos proches.",
    region: "peripherie",
  },
  {
    slug: "steenokkerzeel",
    name: "Steenokkerzeel",
    postalCodes: ["1820"],
    intro:
      "Soins infirmiers et garde malade à Steenokkerzeel (1820), à proximité immédiate de Bruxelles.",
    region: "peripherie",
  },
];

export function getCommune(slug: string): Commune | undefined {
  return communes.find((c) => c.slug === slug);
}
