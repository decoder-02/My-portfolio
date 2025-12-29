import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  },
  {
    title: "RxJs In Practice",
    issuer: "Udemy",
    date: "Aug 2025"
  }
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertifications = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className="py-16 bg-secondary/20">
      <div className="container-padding">
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl">
            Continuous learning is part of the journey. Here are the professional milestones I've reached.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleCertifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Award className="h-6 w-6" />
                  </div>
                  {cert.date !== "N/A" && (
                    <span className="text-xs font-mono font-medium text-muted-foreground border border-border px-3 py-1 rounded-full bg-secondary/30">
                      {cert.date}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mt-auto pt-4 border-t border-border/30">
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {certifications.length > 6 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show More ({certifications.length - 6} more) <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
