import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container-padding">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl">
            My academic foundation and qualifications.
          </p>
        </div>

        <div className="space-y-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-secondary/10 border border-border/50 w-full"
          >
            <div className="shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold">Bachelor of Engineering in Computer Science</h3>
                <span className="text-sm font-mono bg-secondary px-3 py-1 rounded-full text-muted-foreground">04/2024</span>
              </div>
              <p className="text-lg font-medium mb-1">St.Joseph's Institute Of Technology, Chennai</p>
              <p className="text-primary font-bold mb-4">CGPA: 8.65</p>
              
              <div>
                <p className="text-sm font-bold text-muted-foreground mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" /> Relevant Coursework
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data structures, Networking, Operating Systems, Discrete mathematics, Design and Analysis of algorithms, Computer architecture, Mobile computing, Cryptography, Cloud computing, Internet Programming.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-secondary/10 border border-border/50"
          >
            <div className="shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold">12th Grade (CBSE)</h3>
                <span className="text-sm font-mono bg-secondary px-3 py-1 rounded-full text-muted-foreground">Completed</span>
              </div>
              <p className="text-lg font-medium mb-1">Boaz Public School</p>
              <p className="text-primary font-bold">Academic Performance: 72.6%</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
