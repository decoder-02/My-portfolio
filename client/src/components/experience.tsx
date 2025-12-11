import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "PURCHASING POWER",
    period: "Present",
    description: "Currently working as an Associate Software Engineer.",
    technologies: ["Angular", "Typescript", "Java", "Spring Boot", "OracleSQL"]
  },
  {
    role: "Data Analyst",
    company: "PURCHASING POWER",
    period: "May 2024",
    description: "Analyzed data sets to identify trends and patterns, contributing to data-driven decision making processes.",
    technologies: ["Adobe Analytics", "Google Analytics", "Reporting"]
  },
  {
    role: "Full Stack Java",
    company: "SHIASH INFO SOLUTIONS PRIVATE LIMITED",
    period: "Sep 2023",
    description: "Worked on full-stack Java development, building robust backend services and integrating them with frontend interfaces.",
    technologies: ["Java", "Full Stack", "Web Development"]
  },
  {
    role: "Web Development",
    company: "NLC INDIA LIMITED",
    period: "Dec 2022",
    description: "Gained hands-on experience in web development technologies and corporate software development practices.",
    technologies: ["Web Technologies", "Development"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-secondary/20">
      <div className="container-padding">
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-4"
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
            Professional experience gained through internships/works in various domains.
          </motion.p>
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-8">
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
