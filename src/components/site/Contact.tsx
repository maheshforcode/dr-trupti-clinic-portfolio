import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Calendar } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Visit the Clinic</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            We'd love to <span className="text-gradient">meet you</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Drop by, give us a call, or send a message. Our team is here to help you
            schedule your visit at a time that suits you best.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: MapPin, title: "Clinic Location", body: "Dr. Trupti Galange Women's Clinic, Dehugaon" },
              { icon: Phone, title: "Phone", body: "98989 89898", href: "tel:9898989898" },
              { icon: Mail, title: "Email", body: "care@drtruptigalange.in", href: "mailto:care@drtruptigalange.in" },
              { icon: Clock, title: "Working Hours", body: "Mon — Sat · 9:00 AM – 8:00 PM\nSunday · By appointment" },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href || "#"}
                className="block p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center w-12 h-12 shrink-0 rounded-2xl bg-secondary text-primary">
                    <c.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
                    <div className="mt-1 font-medium text-foreground whitespace-pre-line">{c.body}</div>
                  </div>
                </div>
              </a>
            ))}

            <a
              href="tel:9898989898"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-cta text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" /> Book an Appointment
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden border border-border shadow-card min-h-[420px] bg-card"
          >
            <iframe
              title="Clinic location map"
              src="https://www.google.com/maps?q=Dehugaon&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px] border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
