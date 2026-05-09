import { useEffect, useState } from "react";
import { Menu, X, Flower2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-18 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-10 h-10 rounded-2xl bg-gradient-cta text-primary-foreground shadow-soft group-hover:scale-105 transition-transform">
            <Flower2 className="w-5 h-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-semibold text-foreground text-[15px]">Dr. Trupti Galange</span>
            <span className="text-[11px] tracking-wide text-muted-foreground uppercase">Women's Clinic</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary rounded-full hover:bg-secondary/60 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-cta text-primary-foreground text-sm font-medium shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
        >
          Book Appointment
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass-strong text-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass-strong border-t border-border"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-4 py-3 rounded-xl text-foreground/80 hover:bg-secondary/60"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-cta text-primary-foreground text-sm font-medium"
              >
                Book Appointment
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
