import { Instagram, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => (
  <footer style={{ background: "hsl(235 67% 7%)" }} className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="font-heading text-2xl text-primary mb-2">EPIK 100</h3>
        <p className="font-body text-silver text-sm">Programme Panafricain de Reconnaissance · CAN 2025 · Maroc</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
        <div>
          <h4 className="font-heading text-foreground text-sm mb-4 tracking-wider">À PROPOS</h4>
          <ul className="space-y-2 font-body text-silver text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">EPIK Leaders</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Notre mission</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Les clubs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-foreground text-sm mb-4 tracking-wider">PROGRAMME</h4>
          <ul className="space-y-2 font-body text-silver text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">EPIK 100</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Critères de sélection</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Cérémonie</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-foreground text-sm mb-4 tracking-wider">CONTACT</h4>
          <ul className="space-y-2 font-body text-silver text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Presse</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Partenariats</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Nous écrire</a></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        {[Instagram, Linkedin, Twitter].map((Icon, i) => (
          <a key={i} href="#" className="text-primary hover:text-primary/80 transition-colors">
            <Icon size={20} />
          </a>
        ))}
      </div>

      <div className="border-t border-primary/20 pt-6 text-center">
        <p className="font-body text-silver text-xs">
          © 2026 EPIK Leaders. Tous droits réservés. <span className="text-logo-red">●</span>
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
