export interface Technique {
  abbr: string;
  name: string;
  description: string;
  level: string;
}

export const instrumentalTechniques: Technique[] = [
  {
    abbr: "GC",
    name: "Gas Chromatography",
    description:
      "Introduced to sample volatilization, column separation, and detector principles for the analysis of volatile compounds.",
    level: "Laboratory coursework exposure",
  },
  {
    abbr: "HPLC",
    name: "High Performance Liquid Chromatography",
    description:
      "Trained in the fundamentals of mobile/stationary phase selection and chromatogram interpretation under supervision.",
    level: "Supervised training sessions",
  },
  {
    abbr: "AAS",
    name: "Atomic Spectroscopy",
    description:
      "Familiarity with atomic absorption principles for elemental quantification, gained through structured practicals.",
    level: "Introductory laboratory training",
  },
  {
    abbr: "UV-Vis",
    name: "UV–Visible Spectroscopy",
    description:
      "Practical experience recording absorbance spectra and applying Beer–Lambert principles for concentration estimation.",
    level: "Hands-on laboratory practice",
  },
  {
    abbr: "XRD",
    name: "X-Ray Diffraction",
    description:
      "Conceptual and demonstrative exposure to diffraction patterns for structural and crystallographic characterization.",
    level: "Conceptual / demonstrative exposure",
  },
];
