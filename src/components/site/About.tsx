import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Heart, Award } from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";

const highlights = [
  { icon: GraduationCap, label: "MBBS, MS — Obstetrics & Gynecology" },
  { icon: Stethoscope, label: "Specialist in Pregnancy & PCOS Care" },
  { icon: Heart, label: "Patient-Focused, Compassionate Approach" },
  { icon: Award, label: "10+ Years Clinical Experience" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 relative"
        >
          <div className="absolute -inset-4 bg-gradient-soft rounded-[2rem] blur-2xl opacity-60" />
          <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-elegant border border-white/60">
            <img src={doctorImg} alt="Dr. Trupti Galange portrait" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-2xl glass-strong shadow-card">
            <div className="text-xs text-muted-foreground">Founder & Chief Consultant</div>
            <div className="font-display font-semibold text-foreground">Dr. Trupti Galange</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About the Doctor</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Caring for every woman, at every <span className="text-gradient">stage of life</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Dr. Trupti Galange is a dedicated gynecologist and women's health specialist serving
            Dehugaon and surrounding areas. With over a decade of experience, she combines modern
            medical practice with a deeply personal, listening-first approach — creating a safe
            space where women can openly discuss their health.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Her expertise spans pregnancy care, PCOS, infertility, menstrual disorders, and
            complete women's wellness. Every patient receives a tailored treatment plan built
            around comfort, dignity, and long-term well-being.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-0.5 transition-transform"
              >
                <span className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-secondary text-primary">
                  <h.icon className="w-5 h-5" />
                </span>
                <span className="text-sm font-medium text-foreground/85 leading-snug pt-1.5">{h.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
