import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
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
        <Projects />
        <Certifications />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
