import { Handshake, Globe, TrendingUp, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const criteria = [
  { icon: Handshake, title: "Engagement structuré", desc: "Au sein de la communauté" },
  { icon: Globe, title: "Actions précoces", desc: "Au service de l'intérêt général" },
  { icon: TrendingUp, title: "Cohérence", desc: "Dans le développement personnel et académique" },
  { icon: Rocket, title: "Capacité à conduire et impulser", desc: "Des initiatives collectives" },
];

const CriteresSection = () => (
  <section id="criteres" className="section-gradient-1 py-24 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground gold-underline gold-underline-center text-center mb-6">
          Une sélection guidée par l'engagement et le potentiel des jeunes leaders
        </h2>
        <p className="font-body text-silver text-center max-w-3xl mx-auto mb-16">
          Les lauréats de EPIK 100 ont été identifiés à travers les clubs EPIK Leaders et les réseaux partenaires, selon plusieurs critères :
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {criteria.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1}>
            <div className="glass-card p-8 flex items-start gap-5 h-full">
              <c.icon className="text-primary shrink-0 mt-1" size={32} />
              <div>
                <h3 className="font-heading text-lg text-primary mb-2">{c.title}</h3>
                <p className="font-body text-silver text-sm">{c.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <p className="font-body text-silver italic text-center max-w-3xl mx-auto">
          EPIK 100 met en lumière des leaders émergents dont le parcours est encore en évolution, représentant une génération consciente des défis de l'Afrique et désireuse de contribuer activement à leur résolution.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default CriteresSection;
