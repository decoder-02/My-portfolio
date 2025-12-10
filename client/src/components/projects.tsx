import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization and inventory management.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, drag-and-drop interface, and team workspaces.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application that helps creators generate blog posts, captions, and marketing copy.",
    tags: ["OpenAI API", "React", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    demoLink: "#",
    codeLink: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container-padding">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects that demonstrate my passion for building clean, efficient, and scalable software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-colors group bg-background">
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a 
                      href={project.demoLink}
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                      title="View Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.codeLink}
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                      title="View Code"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
