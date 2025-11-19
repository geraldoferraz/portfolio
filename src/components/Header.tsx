import { useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { id: "top", label: "Hero" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("top");

  const sections = useMemo(
    () =>
      navItems
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => Boolean(el)),
    [],
  );

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-20% 0px -60% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sections]);

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.classList.add("section-focus");
    setTimeout(() => target.classList.remove("section-focus"), 1200);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border/60">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Geraldo Ferraz</p>
        <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`rounded-full border px-3 py-1 transition ${
                activeSection === item.id
                  ? "border-primary text-primary"
                  : "border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-border/70 text-foreground hover:bg-card/50"
            asChild
          >
            <a href="https://linkedin.com/in/geraldo-ferraz" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="mailto:contact@geraldoferraz.dev">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

