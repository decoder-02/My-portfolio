import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Verified expertise in designing distributed systems on AWS.",
    link: "#"
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2023",
    description: "Proficiency in building scalable and highly available applications.",
    link: "#"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    date: "2022",
    description: "Skills to design, build and configure cloud native applications.",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-secondary/20">
      <div className="container-padding">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl">
            Continuous learning is part of the journey. Here are some of the professional milestones I've reached.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Award className="h-6 w-6" />
              </div>
              
              <div className="mb-4">
                <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">
                {cert.issuer}
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              <a 
                href={cert.link} 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Verify Credential
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
