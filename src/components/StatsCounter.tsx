import { useEffect, useRef, useState } from "react";
import { Users, Globe, Award, Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: Users, value: 100, suffix: "", label: "Jeunes leaders" },
  { icon: Globe, value: 20, suffix: "+", label: "Pays représentés" },
  { icon: Award, value: 5, suffix: "", label: "Secteurs d'impact" },
  { icon: Lightbulb, value: 1, suffix: "er", label: "Programme panafricain" },
];

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

const StatItem = ({ icon: Icon, value, suffix, label, delay }: { icon: typeof Users; value: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 1200, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <AnimatedSection delay={delay}>
      <div ref={ref} className="flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full border border-primary/40 flex items-center justify-center mb-4">
          <Icon className="text-primary" size={24} />
        </div>
        <span className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
          {count}{suffix}
        </span>
        <span className="font-body text-silver text-sm tracking-wide">{label}</span>
      </div>
    </AnimatedSection>
  );
};

const StatsCounter = () => (
  <section className="relative py-20 px-4" style={{ background: "linear-gradient(135deg, hsl(235 67% 9%) 0%, hsl(254 67% 20%) 100%)" }}>
    <div className="absolute inset-0 border-y border-primary/10" />
    <div className="max-w-5xl mx-auto relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsCounter;
