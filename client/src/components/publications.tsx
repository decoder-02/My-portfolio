import { motion } from "framer-motion";
import { FileText, Link2 } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-primary/5">
      <div className="container-padding">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
          <p className="text-muted-foreground max-w-2xl">
            Research contributions and conference papers.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-background border border-border shadow-lg w-full"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">Apr 2024</span>
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                Leap Motion Robot Maneuver in Midair for Multi-Finger Control System
              </h3>
              <p className="text-muted-foreground mb-4">
                International Conference on Intelligent Data Communication Technologies and Internet of Things (IDCIOT)
              </p>
              
              <div className="inline-flex items-center px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                Impact Factor: <span className="text-primary font-bold ml-1">10.76</span>
                <span className="mx-2 text-muted-foreground">|</span>
                Google Scholar
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
