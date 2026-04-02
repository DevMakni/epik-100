import { Globe, Play } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const sectors = ["Éducation", "Entrepreneuriat", "Innovation sociale", "Environnement", "Santé"];

const CeremonieSection = () => (
  <section id="ceremonie" className="bg-background py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground gold-underline gold-underline-center text-center mb-16">
          Une cérémonie de distinction et de reconnaissance
        </h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        <AnimatedSection>
          <p className="font-body text-silver leading-relaxed mb-8">
            Organisée au Maroc pendant la CAN, la cérémonie EPIK 100 rend hommage aux 100 lauréats à travers un trophée symbolique récompensant leur engagement et leurs premières contributions au sein de leurs communautés dans des secteurs tels que :
          </p>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span key={s} className="gold-pill text-xs">{s}</span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="text-primary" size={28} />
              <h3 className="font-heading text-lg text-primary">Plateforme de networking panafricaine</h3>
            </div>
            <p className="font-body text-silver text-sm leading-relaxed">
              Au-delà de la reconnaissance, la cérémonie constitue une plateforme de networking panafricaine, réunissant mentors, entreprises, institutions et partenaires, et favorisant les échanges autour de projets à venir.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="glass-card p-8 flex flex-col items-center justify-center gap-4 cursor-pointer group">
          <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="text-primary ml-1" size={24} />
          </div>
          <span className="font-heading text-primary text-sm tracking-widest">🎬 BEST OF EPIK 100</span>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CeremonieSection;
