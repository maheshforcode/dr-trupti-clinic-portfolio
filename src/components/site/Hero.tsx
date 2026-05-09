import { motion } from "framer-motion";
import { Calendar, Phone, Award, HeartPulse, ShieldCheck } from "lucide-react";
import doctorImg from "@/assets/doctor-profile.jpeg";

const badges = [
  { icon: Award, label: "Experienced Specialist" },
  { icon: ShieldCheck, label: "Modern Care" },
  { icon: HeartPulse, label: "Patient-Focused Treatment" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-blush blur-3xl opacity-60 -z-10" />
      <div className="absolute top-40 -right-32 w-[32rem] h-[32rem] rounded-full bg-lavender blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong text-xs font-medium text-foreground/70 shadow-card">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Now accepting new patients in Dehugaon
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Trusted Healthcare & <span className="text-gradient">Women's Wellness</span> in Dehugaon
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Providing compassionate gynecology, pregnancy care, and modern healthcare
            services with a patient-first approach.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-cta text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </a>
            <a
              href="tel:9898989898"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-strong text-foreground font-medium shadow-card hover:bg-white transition-all"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-strong shadow-card"
              >
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-secondary text-primary">
                  <b.icon className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium text-foreground/85">{b.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-soft rounded-[2.5rem] blur-2xl opacity-70" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-white/60 aspect-[4/5]">
            <img
              src={doctorImg}
              alt="Dr. Trupti Galange, gynecologist in Dehugaon"
              className="w-full h-full object-cover"
              width={1024}
              height={1280}
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl glass-strong shadow-elegant flex items-center gap-3"
          >
            <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-cta text-primary-foreground">
              <HeartPulse className="w-5 h-5" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">Happy Patients</div>
              <div className="font-display font-semibold text-foreground">5,000+ Cared For</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl glass-strong shadow-elegant"
          >
            <div className="flex items-center gap-1 text-amber-500">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">Rated by patients</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
