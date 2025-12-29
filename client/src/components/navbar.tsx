import { Menu, Github, Linkedin, User, Briefcase, Code, Book, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ];

  const linkIcons: Record<string, any> = {
    About: User,
    Experience: Briefcase,
    Projects: Code,
    Publications: Book,
    Contact: Mail,
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // always close the sheet after clicking
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <div
          className="font-mono text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
            AR
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/50 p-1 rounded-full border border-border/50 backdrop-blur-sm">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all duration-200"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/starboi03"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-r-sjitbps/"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-secondary rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border/50">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-6 px-4">
                {/* Sheet header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-mono font-bold">
                    AR
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Akash Raj</div>
                    <div className="text-xs text-muted-foreground">Portfolio & Projects</div>
                  </div>
                </div>

                <nav className="flex flex-col gap-2 mt-4">
                  {links.map((link, index) => {
                    const Icon = linkIcons[link.name];
                    return (
                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        className="w-full flex items-center gap-3 text-lg font-medium p-3 rounded-lg hover:bg-secondary/60 transition-colors"
                      >
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <span className="flex-1 text-left">{link.name}</span>
                        <span className="text-sm text-muted-foreground">→</span>
                      </motion.button>
                    );
                  })}
                </nav>

                <div className="h-px bg-border my-4" />

                <div className="flex gap-4 justify-center">
                  <a
                    href="https://github.com/starboi03"
                    className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akash-r-sjitbps/"
                    className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
