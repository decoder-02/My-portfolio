import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_abstract_geometric_background.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <div className="container-padding relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium tracking-wider uppercase bg-secondary text-secondary-foreground rounded-full">
            Available for hire
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Building Digital
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl text-lg md:text-xl text-muted-foreground mb-10"
        >
          I'm Alex, a Software Engineer specializing in building accessible, 
          performant, and beautiful web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
