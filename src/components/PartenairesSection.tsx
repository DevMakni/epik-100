import AnimatedSection from "./AnimatedSection";

const partners = ["Fondation Atlas", "AfricaConnect", "Banque Panafricaine", "EduTech Africa", "GreenFuture", "Innov'Hub"];

const PartenairesSection = () => (
  <section id="partenaires" className="bg-background py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground gold-underline gold-underline-center text-center mb-16">
          Ils soutiennent EPIK 100
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {partners.map((p, i) => (
            <div key={p} className="flex items-center gap-4">
              <div className="glass-card px-8 py-5 flex items-center justify-center min-w-[140px]">
                <span className="font-body text-silver text-sm tracking-wide">{p}</span>
              </div>
              {i < partners.length - 1 && (
                <div className="w-px h-8 bg-primary/30 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PartenairesSection;
