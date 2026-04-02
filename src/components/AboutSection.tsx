import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="programme" className="bg-background py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground gold-underline gold-underline-center text-center mb-12">
          Un programme panafricain de reconnaissance
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="font-body text-silver space-y-5 leading-relaxed text-center">
          <p>
            En marge de la Coupe d'Afrique des Nations (CAN), EPIK Leaders lance EPIK 100, un programme panafricain de reconnaissance célébrant 100 jeunes Africains engagés, sélectionnés pour la cohérence de leur parcours, leur implication dans la communauté et leur volonté de générer un impact positif.
          </p>
          <p>
            À travers EPIK 100, EPIK Leaders propose un cadre structuré, bienveillant et exigeant, conçu pour accompagner les participants dans les premières étapes de leur parcours de leadership.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
