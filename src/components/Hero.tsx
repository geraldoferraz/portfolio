import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, ClipboardCopy, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const NAME = "Geraldo Ferraz";
const PHONE_NUMBER = "+55 81 998455109";

const Hero = () => {
  const [displayName, setDisplayName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const full = NAME;

    if (!isDeleting && displayName === full) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayName === "") {
      const pauseTimer = setTimeout(() => setIsDeleting(false), 600);
      return () => clearTimeout(pauseTimer);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayName(full.slice(0, displayName.length - 1));
      } else {
        setDisplayName(full.slice(0, displayName.length + 1));
      }
    }, isDeleting ? 80 : 140);

    return () => clearTimeout(timeout);
  }, [displayName, isDeleting]);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  const handleCopyPhone = async () => {
    try {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      await navigator.clipboard.writeText(PHONE_NUMBER);
      setPhoneCopied(true);
      copyTimeoutRef.current = setTimeout(() => setPhoneCopied(false), 1000);
    } catch {
      setPhoneCopied(true);
      copyTimeoutRef.current = setTimeout(() => setPhoneCopied(false), 1000);
    }
  };

  return (
    <section id="top" className="relative min-h-screen px-6 py-24 md:px-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-black/80 to-background" />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 -left-20 w-[420px] h-[420px] bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-foreground flex items-center gap-2">
          {displayName}
          <span className="h-10 w-[2px] bg-primary animate-pulse" />
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          Web payments engineer at AmigoPay (AmigoTech) crafting reliable React, Angular, NestJS, Node.js, Prisma, and
          Sequelize solutions for compliant transactions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="px-8 bg-primary text-primary-foreground shadow-primary/30 hover:bg-primary/90"
            asChild
          >
            <a href="mailto:geraldoferraz876@gmail.com">
              Send me an email
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 border-border/80 text-foreground hover:bg-card/40"
            asChild
          >
            <a href="https://linkedin.com/in/geraldo-ferraz" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </Button>
        </div>

        <div className="w-full grid gap-4 md:grid-cols-3 text-left text-sm">
          <a
            href="https://github.com/geraldoferraz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/60 p-4 hover:bg-card/80 smooth-transition"
          >
            <div className="rounded-full bg-primary/15 text-primary p-2.5">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">GitHub</p>
              <p className="font-semibold text-foreground">geraldoferraz</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/geraldo-ferraz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/60 p-4 hover:bg-card/80 smooth-transition"
          >
            <div className="rounded-full bg-primary/15 text-primary p-2.5">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">LinkedIn</p>
              <p className="font-semibold text-foreground">/geraldo-ferraz</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/60 p-4">
            <div className="rounded-full bg-primary/15 text-primary p-2.5">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Phone</p>
              <p className="font-semibold text-foreground">{PHONE_NUMBER}</p>
            </div>
            <button
              type="button"
              onClick={handleCopyPhone}
              className="rounded-full border border-border/60 p-2 hover:border-primary/60 hover:text-primary transition-colors"
              aria-label={phoneCopied ? "Copied phone number" : "Copy phone number"}
            >
              {phoneCopied ? <Check className="h-4 w-4 text-primary" /> : <ClipboardCopy className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="rounded-full border border-border/60 px-4 py-2">ReactJs</span>
          <span className="rounded-full border border-border/60 px-4 py-2">AngularJs</span>
          <span className="rounded-full border border-border/60 px-4 py-2">TailwindCss</span>
          <span className="rounded-full border border-border/60 px-4 py-2">NodeJs</span>
          <span className="rounded-full border border-border/60 px-4 py-2">NestJS</span>
          <span className="rounded-full border border-border/60 px-4 py-2">PostgreSQL</span>
          <span className="rounded-full border border-border/60 px-4 py-2">MySQL</span>
          <span className="rounded-full border border-border/60 px-4 py-2">Prisma</span>
          <span className="rounded-full border border-border/60 px-4 py-2">Sequelize</span>
          <span className="rounded-full border border-border/60 px-4 py-2">Redis</span>
          <span className="rounded-full border border-border/60 px-4 py-2">Docker</span>
          <span className="rounded-full border border-border/60 px-4 py-2">CI/CD</span>
          <span className="rounded-full border border-border/60 px-4 py-2">Observability stacks</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
