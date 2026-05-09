import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Trupti Galange Clinic — Gynecologist & Healthcare in Dehugaon" },
      {
        name: "description",
        content:
          "Compassionate & modern healthcare in Dehugaon — gynecology, pregnancy care, PCOS, infertility, and routine checkups by Dr. Trupti Galange.",
      },
      { property: "og:title", content: "Dr. Trupti Galange Clinic — Dehugaon" },
      {
        property: "og:description",
        content: "Modern gynecology, pregnancy, and family healthcare in Dehugaon.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}
