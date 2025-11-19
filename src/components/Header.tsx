import { useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "top", label: "Hero" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.classList.add("section-focus");
    setTimeout(() => target.classList.remove("section-focus"), 1200);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border/60">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Geraldo Ferraz</p>
        <nav className="hidden md:flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em]">
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
        <div className="hidden md:flex items-center gap-2">
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
        <button
          className="md:hidden rounded-full border border-border/60 p-2 text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-background/95 px-6 py-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Geraldo Ferraz</p>
            <button
              className="rounded-full border border-border/60 p-2 text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-3 text-sm uppercase tracking-[0.3em]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`rounded-2xl border px-4 py-3 text-left transition ${
                  activeSection === item.id
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4">
            <Button
              variant="outline"
              size="lg"
              className="border-border/70 text-foreground hover:bg-card/50"
              asChild
            >
              <a href="https://linkedin.com/in/geraldo-ferraz" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="mailto:contact@geraldoferraz.dev">Contact</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

