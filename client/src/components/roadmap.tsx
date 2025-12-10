import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target, Zap } from "lucide-react";

const roadmapItems = [
  {
    title: "Exploring WebAssembly",
    status: "In Progress",
    description: "Deep diving into Rust and WASM to build high-performance web modules for image processing.",
    icon: Zap,
    color: "text-amber-500"
  },
  {
    title: "AI-Driven UX Patterns",
    status: "Planning",
    description: "Researching how generative AI can dynamically adapt user interfaces based on user behavior and context.",
    icon: Lightbulb,
    color: "text-blue-500"
  },
  {
    title: "Decentralized Identity",
    status: "Future Idea",
    description: "Prototyping a privacy-first authentication system using self-sovereign identity principles.",
    icon: Target,
    color: "text-emerald-500"
  },
  {
    title: "Open Source Contribution",
    status: "Ongoing",
    description: "Looking to contribute to major React ecosystem libraries to give back to the community.",
    icon: Rocket,
    color: "text-purple-500"
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24">
      <div className="container-padding">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Roadmap</h2>
          <p className="text-muted-foreground max-w-2xl">
            Where I'm headed next. A glimpse into my current learning path, future ideas, and technical explorations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl border border-border/50 hover:bg-secondary/20 transition-colors"
            >
              <div className={`shrink-0 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {item.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
