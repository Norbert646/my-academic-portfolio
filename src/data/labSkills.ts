export interface SkillGroup {
  title: string;
  icon: "beaker" | "layers" | "shield" | "laptop";
  items: string[];
  note: string;
}

export const labSkillGroups: SkillGroup[] = [
  {
    title: "Solution Preparation",
    icon: "beaker",
    items: [
      "Molarity & concentration calculations",
      "Standard and stock solution preparation",
      "Dilution technique and volumetric accuracy",
    ],
    note: "Developing confidence through repeated laboratory practice.",
  },
  {
    title: "Separation Techniques",
    icon: "layers",
    items: [
      "Filtration and extraction methods",
      "Distillation fundamentals",
      "Thin-layer and column chromatography basics",
    ],
    note: "Trained through supervised coursework laboratories.",
  },
  {
    title: "Laboratory Safety Principles",
    icon: "shield",
    items: [
      "Chemical handling and storage protocols",
      "Personal protective equipment (PPE) practice",
      "Safety data sheet (SDS) interpretation",
    ],
    note: "Applied consistently as a foundation for all practical work.",
  },
  {
    title: "Digital & Technical Skills",
    icon: "laptop",
    items: [
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Basic data analysis and charting for lab reports",
      "Familiarity with ChemDraw for structure drawing",
    ],
    note: "Used regularly to support coursework and reporting.",
  },
];
