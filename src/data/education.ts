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
    period: "2019 — 2022",
    title: "Secondary Education, Experimental Sciences",
    institution: "Azadegan High School",
    location: "Ahvaz, Khuzestan, Iran",
    detail:
      "Focused pre-university study in the Experimental Sciences track, including advanced coursework in chemistry, biology, physics, and mathematics, forming a broad scientific foundation for later specialization in chemistry."

  },
];
