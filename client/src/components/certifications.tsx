import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "Mar 2021"
  },
  {
    title: "WEB DEVELOPMENT",
    issuer: "Lernx",
    date: "Sep 2022"
  },
  {
    title: "Front-End Development",
    issuer: "Great Learning",
    date: "Mar 2023"
  },
  {
    title: "Angular [TypeScript]",
    issuer: "Udemy",
    date: "N/A"
  },
  {
    title: "Virtualization 2.0",
    issuer: "Academic Europe Open University",
    date: "Jan 2024"
  },
  {
    title: "Python 101 for Data Science",
    issuer: "XPLORE IT CORP",
    date: "Feb 2024"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "Mar 2024"
  },
  {
    title: "Advanced JavaScript for Coders",
    issuer: "Eduonix Learning Solutions",
    date: "Mar 2024"
  },
  {
    title: "Data Visualization",
    issuer: "FreeCodeCamp",
    date: "Apr 2024"
  },
  {
    title: "Favicon Grabber using Javascript / RxJS Observables",
    issuer: "Udemy",
    date: "Apr 2024"
  },
  {
    title: "Excel VBA for Beginners",
    issuer: "Great Learning",
    date: "May 2024"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-secondary/20">
      <div className="container-padding">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl">
            Continuous learning is part of the journey. Here are the professional milestones I've reached.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Award className="h-5 w-5" />
                </div>
                {cert.date !== "N/A" && (
                  <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded-full bg-secondary/30">
                    {cert.date}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-auto">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
