import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-padding flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg mb-2">Alex Dev</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
