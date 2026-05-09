import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    role: "New Mother",
    text: "Dr. Trupti was with me through every step of my pregnancy. Her calm, kind approach made me feel safe. I cannot recommend her enough.",
  },
  {
    name: "Anita K.",
    role: "PCOS Patient",
    text: "After years of struggle, Dr. Galange finally helped me understand and manage my PCOS. She listens with patience and explains everything clearly.",
  },
  {
    name: "Sneha M.",
    role: "Routine Patient",
    text: "The clinic feels welcoming and private. I always leave my appointments feeling cared for and informed about my own body.",
  },
  {
    name: "Reshma D.",
    role: "Wellness Visit",
    text: "Honestly the most thoughtful gynecologist in Dehugaon. She treats you like a person, not a case. Highly recommended.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Stories from <span className="text-gradient">our patients</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-elegant transition-all"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/15" />
              <blockquote className="text-foreground/85 leading-relaxed text-[15px]">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-gradient-cta text-primary-foreground font-semibold">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <div className="font-display font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
