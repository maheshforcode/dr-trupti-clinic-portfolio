import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-cta px-8 py-16 lg:p-20 text-center shadow-elegant"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary-foreground/80 font-semibold">
            Schedule a visit
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-semibold text-primary-foreground leading-[1.05] max-w-3xl mx-auto">
            Your Health & Comfort Matter
          </h2>
          <p className="mt-5 text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Book a confidential consultation today and take the first step toward
            personalized, compassionate care.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary font-medium shadow-soft hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" /> Book Your Consultation Today
            </a>
            <a
              href="tel:9898989898"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-primary-foreground border border-white/40 font-medium hover:bg-white/15 transition-all"
            >
              <Phone className="w-4 h-4" /> Call 98989 89898
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
