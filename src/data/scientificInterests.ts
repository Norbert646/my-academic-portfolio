export interface InterestCard {
  id: string;
  title: string;
  icon: "flask" | "atom" | "leaf" | "analytics";
  short: string;
  detail: string;
}

export const scientificInterests: InterestCard[] = [
  {
    id: "organic",
    title: "Organic Chemistry",
    icon: "flask",
    short: "Structure, reactivity, and synthesis of organic molecules.",
    detail:
      "Coursework and laboratory exercises in organic chemistry have shaped my interest in reaction mechanisms and synthetic pathways. I am particularly drawn to how molecular structure governs reactivity — an area I hope to explore further at the graduate level.",
  },
  {
    id: "organometallic",
    title: "Organometallic Chemistry & Catalysis",
    icon: "atom",
    short: "Metal-mediated transformations and catalytic principles.",
    detail:
      "Introductory exposure to organometallic compounds and catalytic cycles has stimulated my curiosity about how transition metals enable selective transformations. This remains an area I am keen to study in greater depth during a Master's program.",
  },
  {
    id: "green",
    title: "Sustainable / Green Chemistry",
    icon: "leaf",
    short: "Environmentally conscious approaches to chemical processes.",
    detail:
      "I follow developments in green chemistry with genuine interest — particularly efforts to reduce hazardous reagents and energy demand in chemical processes. It reflects a direction I would like my academic work to move toward.",
  },
  {
    id: "analytical",
    title: "Analytical Chemistry",
    icon: "analytics",
    short: "Instrumental methods for identification and quantification.",
    detail:
      "Laboratory training in instrumental techniques has given me an early appreciation for analytical chemistry as a discipline connecting theory with measurable, verifiable results — a connection I find intellectually satisfying.",
  },
];
