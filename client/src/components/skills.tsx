import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, PenTool, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "Vue.js"]
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "PostgreSQL", "Express", "Python", "GraphQL", "Redis"]
  },
  {
    title: "Tools & DevOps",
    icon: Terminal,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Jest"]
  },
  {
    title: "Design",
    icon: PenTool,
    skills: ["Figma", "UI/UX", "Responsive Design", "Accessibility", "Prototyping"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-padding">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've spent years refining my stack. Here are the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-secondary/40 transition-colors"
            >
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-6 shadow-sm border border-border/50">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
