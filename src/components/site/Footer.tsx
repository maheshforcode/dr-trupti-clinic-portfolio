import { Stethoscope, Instagram, Facebook, Twitter } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid place-items-center w-10 h-10 rounded-2xl bg-gradient-cta text-primary-foreground shadow-soft">
              <Stethoscope className="w-5 h-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display font-semibold text-foreground">Dr. Trupti Galange Clinic</span>
              <span className="text-[11px] tracking-wide text-muted-foreground uppercase">Dehugaon</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Compassionate & Modern Healthcare — gynecology, pregnancy care, and
            family wellness in Dehugaon.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-foreground/60 font-semibold">Navigate</div>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-foreground/75 hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-foreground/60 font-semibold">Connect</div>
          <div className="mt-4 flex items-center gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid place-items-center w-10 h-10 rounded-full bg-card border border-border text-foreground/70 hover:text-primary hover:-translate-y-0.5 transition-all shadow-card"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Dehugaon · 98989 89898
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Dr. Trupti Galange Women's Clinic. All rights reserved.</span>
          <span>Crafted with care for the women of Dehugaon</span>
        </div>
      </div>
    </footer>
  );
}
