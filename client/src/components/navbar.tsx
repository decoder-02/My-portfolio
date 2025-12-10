import { Link } from "wouter";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container-padding h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="font-mono text-xl font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          AR.
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="h-4 w-px bg-border mx-2" />
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-lg font-medium text-left hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com" className="p-2 bg-secondary rounded-full">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com" className="p-2 bg-secondary rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" className="p-2 bg-secondary rounded-full">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
