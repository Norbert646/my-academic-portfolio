export interface Course {
  name: string;
  detail: string;
}

export const courses: Course[] = [
  {
    name: "General & Inorganic Chemistry",
    detail:
      "Atomic structure, periodicity, bonding theory, and coordination chemistry fundamentals.",
  },
  {
    name: "Organic Chemistry I & II",
    detail:
      "Nomenclature, stereochemistry, reaction mechanisms, and functional group transformations.",
  },
  {
    name: "Physical Chemistry",
    detail:
      "Thermodynamics, kinetics, and equilibrium as applied to chemical systems.",
  },
  {
    name: "Analytical Chemistry",
    detail:
      "Quantitative and qualitative analysis, titrimetric methods, and error analysis.",
  },
  {
    name: "Instrumental Analysis Laboratory",
    detail:
      "Supervised practicals in chromatographic and spectroscopic methods.",
  },
  {
    name: "Industrial Chemistry",
    detail:
      "Overview of process chemistry and unit operations relevant to chemical industries.",
  },
  {
    name: "Chemical Safety & Laboratory Ethics",
    detail:
      "Principles of safe practice, hazard communication, and responsible conduct in research.",
  },
];
