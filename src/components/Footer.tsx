import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

const quickLinks = [
  { label: "Hero", href: "#top" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/geraldoferraz", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/geraldo-ferraz", icon: Linkedin },
  { label: "Email", href: "mailto:geraldoferraz876@gmail.com", icon: Mail },
];

const Footer = () => {
  return (
    <footer className="px-6 py-20 border-t border-border/60 bg-black/40" id="contact">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              Geraldo Ferraz
            </div>
            <p className="text-2xl font-semibold">Web payments engineer at AmigoPay (AmigoTech).</p>
            <p className="text-sm text-muted-foreground"> React · Angular · Node.js · NestJS · PostgreSQL · MySQL · Prisma · Sequelize</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Navigation</p>
            <div className="flex flex-col gap-2 text-sm">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-muted-foreground hover:text-primary smooth-transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Channels</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-between rounded-2xl border border-border/70 px-4 py-3 text-sm text-foreground/90 hover:border-primary/60 hover:bg-primary/5 smooth-transition"
                  >
                    <span>{social.label}</span>
                    <Icon className="h-4 w-4 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Geraldo Ferraz · Crafted with React, TypeScript, and a neon grid.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
