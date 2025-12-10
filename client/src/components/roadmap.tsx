import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target, Zap, Circle } from "lucide-react";

const roadmapItems = [
  {
    title: "Exploring WebAssembly",
    status: "In Progress",
    description: "Deep diving into Rust and WASM to build high-performance web modules for image processing.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    title: "AI-Driven UX Patterns",
    status: "Planning",
    description: "Researching how generative AI can dynamically adapt user interfaces based on user behavior and context.",
    icon: Lightbulb,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Decentralized Identity",
    status: "Future Idea",
    description: "Prototyping a privacy-first authentication system using self-sovereign identity principles.",
    icon: Target,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    title: "Open Source Contribution",
    status: "Ongoing",
    description: "Looking to contribute to major React ecosystem libraries to give back to the community.",
    icon: Rocket,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
      
      <div className="container-padding">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium uppercase tracking-wider">The Journey</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Roadmap</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Where I'm headed next. A glimpse into my current learning path, future ideas, and technical explorations.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line for Mobile */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="md:w-1/2 md:px-12 pl-20 pr-4 w-full">
                  <div className={`p-6 rounded-2xl border bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${item.border}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bg} ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-background border ${item.border} ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-background border-4 border-border shadow-sm z-10">
                  <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                </div>
                
                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
