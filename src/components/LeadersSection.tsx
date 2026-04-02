import AnimatedSection from "./AnimatedSection";

const leaders = [
  { name: "Aminata Diallo", country: "Sénégal", sector: "Éducation", bio: "Fondatrice d'une académie numérique formant plus de 500 jeunes filles dans les zones rurales du Sénégal." },
  { name: "James Ochieng", country: "Kenya", sector: "Innovation sociale", bio: "Créateur d'une plateforme mobile connectant les agriculteurs aux marchés urbains dans l'est de l'Afrique." },
  { name: "Yasmine El Amrani", country: "Maroc", sector: "Entrepreneuriat", bio: "Co-fondatrice d'une startup de recyclage textile employant des artisans locaux à Casablanca." },
  { name: "Kouadio Ange", country: "Côte d'Ivoire", sector: "Environnement", bio: "Leader d'un mouvement de reforestation ayant planté plus de 10 000 arbres en Afrique de l'Ouest." },
  { name: "Chidinma Okafor", country: "Nigeria", sector: "Santé", bio: "Médecin engagée dans l'accès aux soins en milieu rural, fondatrice d'une clinique mobile itinérante." },
  { name: "Paul Kamga", country: "Cameroun", sector: "Entrepreneuriat", bio: "Entrepreneur tech développant des solutions fintech pour l'inclusion financière des jeunes africains." },
];

const LeadersSection = () => (
  <section id="leaders" className="bg-background py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground gold-underline gold-underline-center text-center mb-4">
          Les 100 jeunes leaders d'exception d'Afrique – EPIK 100
        </h2>
        <p className="font-heading text-primary text-center text-lg mb-16 tracking-widest">
          EPIK 100 — Promotion 2025
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {leaders.map((l, i) => (
          <AnimatedSection key={l.name} delay={i * 0.08}>
            <div className="glass-card p-6 text-center h-full flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-primary mb-4 flex items-center justify-center" style={{ background: `linear-gradient(135deg, hsl(254 67% 33%), hsl(235 67% 18%))` }}>
                <span className="font-heading text-primary text-2xl font-bold">{l.name.charAt(0)}</span>
              </div>
              <h3 className="font-heading text-foreground font-semibold mb-2">{l.name}</h3>
              <p className="text-primary text-sm mb-1">🌍 {l.country}</p>
              <span className="gold-pill text-xs mb-3">{l.sector}</span>
              <p className="font-body text-silver text-xs leading-relaxed mt-auto">{l.bio}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="text-center">
          <button className="btn-gold">Voir tous les leaders</button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LeadersSection;
