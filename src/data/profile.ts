export interface Profile {
  name: string;
  firstName: string;
  title: string;
  avatar: string;
  university: string;
  degree: string;
  gpa: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  researchgate: string;
  cvPath: string;
  tagline: string;
}

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export const profile: Profile = {
  name: "Hossein Rezaei",
  firstName: "Hossein",
  title: "B.Sc. Student · Catalysis & Green Chemistry",
  avatar: "/profile.jpg",
  university: "Khatam al-Anbia University of Behbahan",
  degree: "B.Sc. in Applied Chemistry",
  gpa: "17.9 / 20",
  location: "Behbahan, Khuzestan, Iran",
email: "hossein9990.ir@gmail.com",
  linkedin: "https://www.linkedin.com/in/hossein-rezaei-chemistry/",
  github: "https://github.com/Norbert646",
  researchgate: "https://www.researchgate.net/profile/Hossein-Rezaei-Chem",
  cvPath: "/cv/Hossein-Rezaei-Academic-CV.pdf",
  tagline: "Building toward graduate research in catalysis and green chemistry, with laboratory training in organic synthesis and instrumental analysis — preparing for a Master's in Europe.",
};

export const navLinks: readonly NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Interests", href: "#interests" },
  { label: "Analysis", href: "#analysis" },
  { label: "Skills", href: "#skills" },
  { label: "Preparation", href: "#preparation" },
  { label: "Experience", href: "#experience" },
  { label: "Journey", href: "#journey" },
    { label: "Development", href: "#development" },
  { label: "CV", href: "#cv" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];