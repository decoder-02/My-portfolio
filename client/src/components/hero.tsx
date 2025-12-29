import { motion } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_abstract_geometric_background.png";
import profilePic from "@assets/generated_images/Image7.png";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 md:opacity-30 z-0" />
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-15 md:opacity-20 absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 md:via-background/60 to-background" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-padding relative z-10 flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="mb-6 md:mb-0 relative group flex-shrink-0"
        >
          <div className="hidden md:block absolute -inset-1 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-md opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="w-28 h-28 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl relative mx-auto md:mx-0">
                    <img
                      src={profilePic}
                      alt="Akash Rajkumar"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '25% 15%', transform: 'scale(1.6)', transformOrigin: 'center', transition: 'transform 300ms ease' }}
                    />
          </div>
          {/* removed online indicator for cleaner mobile/desktop appearance */}
        </motion.div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-medium uppercase bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full shadow-sm mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to work
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3"
          >
            Hi, I&#39;m
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gray-500 to-primary">Akash Rajkumar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed bg-background/5 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none"
          >
            I build thoughtful, accessible web experiences - from polished frontends to robust backend services. I focus on clean UX, performance, and maintainable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative flex items-center gap-2">
                View Projects <Code2 className="w-4 h-4" />
              </span>
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-background border border-border text-foreground font-medium rounded-full hover:bg-secondary/50 transition-all"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator removed for cleaner layout on all devices */}
    </section>
  );
}
