import { motion } from "framer-motion";
import {
  Baby, Activity, Sparkles, Droplets, Flower, Stethoscope, Scan, HeartHandshake,
} from "lucide-react";

const services = [
  { icon: Baby, title: "Pregnancy & Prenatal Care", desc: "Compassionate end-to-end care for a safe and healthy pregnancy journey." },
  { icon: Activity, title: "PCOS Treatment", desc: "Holistic management of PCOS with lifestyle, hormonal, and modern care." },
  { icon: Sparkles, title: "Infertility Consultation", desc: "Personalized assessments and guidance for couples planning a family." },
  { icon: Droplets, title: "Menstrual Disorder Treatment", desc: "Diagnosis and treatment of irregular, painful, or heavy periods." },
  { icon: Flower, title: "Menopause Care", desc: "Gentle support and treatment to ease symptoms and protect long-term health." },
  { icon: Stethoscope, title: "Routine Checkups", desc: "Preventive women's health screenings and annual wellness visits." },
  { icon: Scan, title: "Ultrasound & Diagnostics", desc: "On-site diagnostics with accurate, modern ultrasound imaging." },
  { icon: HeartHandshake, title: "Family Planning Guidance", desc: "Confidential counseling on contraception and reproductive choices." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-soft relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our Services</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Comprehensive women's care, <span className="text-gradient">all under one roof</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From your first checkup to lifelong wellness — every service is delivered with
            sensitivity, modern technology, and complete privacy.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-soft text-primary group-hover:bg-gradient-cta group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-6 h-6" />
              </span>
              <h3 className="mt-5 font-display font-semibold text-foreground text-lg leading-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
