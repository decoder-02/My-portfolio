import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Leap Motion Robot Maneuver",
    description: "Intuitive midair control of a robotic car equipped with two DC motors using a Leap Motion sensor and Python. Enables multi-finger gesture control.",
    tags: ["Python", "Leap Motion", "Robotics", "IoT"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    date: "Jan 2024"
  },
  {
    title: "Analysis on Stroke Disease",
    description: "Developed ML models to predict stroke risk using attributes like hypertension, BMI, and glucose levels. Implemented classifiers including SVM, Random Forest, and XGBoost.",
    tags: ["Machine Learning", "Python", "Data Science", "XGBoost"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    date: "Sep 2023"
  },
  {
    title: "University Adhoc Website",
    description: "Engineered a web-based application to optimize student-educator engagement with an intuitive interface and interactive functionalities.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    date: "Feb 2023"
  },
  {
    title: "Snake Game Using Java",
    description: "Developed using OOP concepts and Java Swing. Integrated functionalities for multidirectional movement and dynamic length augmentation.",
    tags: ["Java", "OOP", "Swing", "Game Dev"],
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800",
    date: "Nov 2022"
  },
  {
    title: "Super Market Billing Project",
    description: "User-friendly software for efficient and accurate billing in supermarket environments built with C++.",
    tags: ["C++", "Billing System", "Console App"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    date: "Jan 2020"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container-padding">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A showcase of my practical applications of theory, ranging from robotics and ML to web development and system programming.
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
              <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-colors group bg-secondary/5">
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {project.date}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3 mt-2">
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
