import { motion } from "framer-motion";
import GoldParticles from "./GoldParticles";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Mosaïque de jeunes leaders africains" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, hsl(235 67% 11%))" }} />
    </div>

    <GoldParticles />

    <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="gold-pill mb-6 inline-block">Programme Panafricain de Reconnaissance</span>
      </motion.div>

      <motion.h1
        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-foreground mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        EPIK <span className="text-primary">100</span>
      </motion.h1>

      <motion.p
        className="font-heading text-lg md:text-xl text-primary tracking-widest mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        100 jeunes leaders africains d'exception
      </motion.p>

      <motion.p
        className="font-body text-silver/80 text-base max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Un programme panafricain célébrant l'engagement, le leadership et l'impact positif de la jeunesse africaine.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <a href="#leaders" className="btn-gold">Découvrir les lauréats</a>
        <a href="#programme" className="inline-flex items-center justify-center px-8 py-3 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-300 border border-primary/50 text-primary hover:bg-primary/10">En savoir plus</a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
