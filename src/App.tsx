import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import ScientificInterests from "./components/ScientificInterests";
import InstrumentalAnalysis from "./components/InstrumentalAnalysis";
import LabSkills from "./components/LabSkills";
import InternationalPrep from "./components/InternationalPrep";
import IndustrialExperience from "./components/IndustrialExperience";
import AcademicJourney from "./components/AcademicJourney";
import AcademicDevelopment from "./components/AcademicDevelopment";
import CV from "./components/CV";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-offwhite text-navy font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <ScientificInterests />
        <InstrumentalAnalysis />
        <LabSkills />
        <InternationalPrep />
        <IndustrialExperience />
        <AcademicJourney />
        <AcademicDevelopment />
        <CV />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
