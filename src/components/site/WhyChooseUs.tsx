import { motion } from "framer-motion";
import { Award, Sofa, UserCheck, Microscope, Lock, CalendarCheck } from "lucide-react";

const items = [
  { icon: Award, title: "Experienced Specialist", desc: "10+ years guiding women through every health milestone." },
  { icon: Sofa, title: "Comfortable Environment", desc: "A warm, calm clinic designed to put you at ease." },
  { icon: UserCheck, title: "Personalized Attention", desc: "Care plans built around you — never one-size-fits-all." },
  { icon: Microscope, title: "Advanced Care", desc: "Modern equipment and current evidence-based protocols." },
  { icon: Lock, title: "Confidential Consultation", desc: "Your privacy is treated with utmost respect, always." },
  { icon: CalendarCheck, title: "Easy Appointments", desc: "Simple booking, flexible timing, and quick callbacks." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Why Choose Us</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            A clinic built around <span className="text-gradient">you</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-elegant transition-all flex gap-4"
            >
              <span className="grid place-items-center w-12 h-12 shrink-0 rounded-2xl bg-secondary text-primary">
                <it.icon className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">{it.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
