export interface EducationEntry {
  period: string;
  title: string;
  institution: string;
  location: string;
  detail: string;
  highlight?: string;
}

export const educationTimeline: EducationEntry[] = [
  {
    period: "2022 — Present",
    title: "B.Sc. in Applied Chemistry",
    institution: "Khatam al-Anbia University of Behbahan",
    location: "Behbahan, Iran",
    detail:
      "Undergraduate coursework spanning organic, inorganic, physical, and analytical chemistry, complemented by laboratory sessions in instrumental analysis and separation techniques.",
    highlight: "Current GPA: 17.9 / 20",
  },
  {
    period: "2018 — 2022",
    title: "Secondary Education, Mathematics & Physical Sciences",
    institution: "National Curriculum, Iran",
    location: "Khuzestan Province, Iran",
    detail:
      "Focused pre-university study in mathematics and the physical sciences, forming the analytical basis for later specialization in chemistry.",
  },
];
