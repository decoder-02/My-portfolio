import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TechFlow Systems",
    period: "2023 - Present",
    description: "Leading the frontend migration to Next.js, improving site performance by 40%. Mentoring junior developers and establishing code quality standards.",
    technologies: ["React", "Next.js", "TypeScript", "AWS"]
  },
  {
    role: "Software Engineer",
    company: "Innovate Digital",
    period: "2021 - 2023",
    description: "Developed and maintained key features for a high-traffic e-commerce platform. Implemented a new payment gateway integration that increased conversion by 15%.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Stripe"]
  },
  {
    role: "Junior Developer",
    company: "Creative Solutions",
    period: "2019 - 2021",
    description: "Collaborated with design teams to implement responsive user interfaces. Assisted in backend API development and database optimization.",
    technologies: ["React", "Express", "MongoDB", "Sass"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container-padding">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl"
          >
            My professional journey and the value I've delivered along the way.
          </motion.p>
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary border border-background ring-4 ring-background" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <div className="flex items-center text-sm font-medium text-muted-foreground mt-1 sm:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </div>
              </div>
              
              <div className="flex items-center text-primary font-medium mb-4">
                <Briefcase className="w-4 h-4 mr-2" />
                {exp.company}
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
