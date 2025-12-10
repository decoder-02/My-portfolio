import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, PenTool, GitBranch, Cpu, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Excellence",
    icon: Layout,
    description: "Building responsive, accessible, and performant UIs.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend Architecture",
    icon: Database,
    description: "Designing scalable APIs and efficient data structures.",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "Python", "Go"]
  },
  {
    title: "DevOps & Cloud",
    icon: Globe,
    description: "Deploying, monitoring, and scaling applications.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"]
  },
  {
    title: "Tools & Workflow",
    icon: Terminal,
    description: "Optimizing development velocity and code quality.",
    skills: ["Git", "Jest", "Figma", "Webpack", "Vite", "Agile"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/2 -z-10" />
      
      <div className="container-padding">
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Arsenal</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              I don't just write code; I architect solutions. Here are the tools I use to turn complex problems into elegant software.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <Cpu className="w-24 h-24 text-primary/10" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <category.icon className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <category.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-6 h-12">{category.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 text-sm font-medium rounded-md bg-secondary/30 border border-border/50 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
