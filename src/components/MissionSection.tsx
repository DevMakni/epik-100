import { RefreshCw, Handshake, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const missions = [
  { icon: RefreshCw, text: "Encourager la poursuite de l'engagement" },
  { icon: Handshake, text: "Renforcer les liens entre clubs EPIK Leaders" },
  { icon: Globe, text: "Favoriser les échanges entre initiatives locales et réseaux panafricains" },
];

const MissionSection = () => (
  <section id="mission" className="section-gradient-2 py-24 px-4 relative">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground gold-underline gold-underline-center text-center mb-12">
          EPIK 100 : prolonger l'engagement d'EPIK Leaders
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="font-body text-silver space-y-4 mb-14 max-w-3xl mx-auto">
          <p>Conçue comme un moment collectif de reconnaissance, EPIK 100 s'inscrit dans la mission d'EPIK Leaders : valoriser l'engagement de la jeunesse africaine et l'accompagner dans ses premiers pas de leadership à travers le continent.</p>
          <p>Cette initiative encourage la poursuite de l'engagement, renforce les liens entre les clubs EPIK Leaders et favorise les échanges entre initiatives locales et réseaux panafricains.</p>
          <p>À travers ce programme, EPIK Leaders construit un réseau de leaders africains, véritables ambassadeurs de la coopération, de l'innovation et de l'engagement citoyen dans leurs pays.</p>
        </div>
      </AnimatedSection>

      <div className="space-y-4 mb-16">
        {missions.map((m, i) => (
          <AnimatedSection key={m.text} delay={i * 0.1}>
            <div className="glass-strip p-5 flex items-center gap-5">
              <m.icon className="text-primary shrink-0" size={24} />
              <p className="font-body text-foreground">{m.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <p className="font-heading text-xl md:text-2xl text-foreground text-center leading-relaxed max-w-4xl mx-auto">
          Un réseau de leaders africains, véritables ambassadeurs de la coopération, de l'innovation et de l'engagement citoyen dans leurs pays.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default MissionSection;
