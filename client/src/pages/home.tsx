import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Publications from "@/components/publications";
import Certifications from "@/components/certifications";
import Roadmap from "@/components/roadmap";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        <Certifications />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
