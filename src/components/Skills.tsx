import { Layers, Server, Smartphone, Terminal, Zap } from "lucide-react";

const stackColumns = [
  {
    title: "Client surfaces",
    icon: Smartphone,
    description: "Polished React and Angular consoles with accessibility, analytics, and state charts.",
    items: ["ReactJs", "AngularJs", "TailwindCss",  "ShadcnUi", "Recharts", "Framer Motion"],
  },
  {
    title: "API & services",
    icon: Server,
    description: "Node/NestJS services for card, Pix, boleto, and settlement orchestration.",
    items: ["Node.js", "NestJS", "PostgreSQL", "MySQL", "Prisma", "Sequelize", "Redis", "Serverless"],
  },
  {
    title: "Tooling & automation",
    icon: Terminal,
    description: "DX tooling that keeps AmigoPay web squads aligned and releases boring.",
    items: ["CI/CD", "Vitest", "ESLint", "Docker", "Expo Application Services", "Feature flags", "Observability stacks"],
  },
];

const trackRecord = [
  {
    title: "Design systems",
    body: "React + Angular libraries powering merchant and ops consoles, with tokens aligned to payment brand rules.",
    details: ["Ship UI kits consumed by 4 squads", "Own accessibility reviews and motion specs"],
  },
  {
    title: "Realtime data",
    body: "WebSockets and background jobs broadcasting payment statuses, risk alerts, and reconciliation insights.",
    details: ["Latency budgets under 120ms for status pushes", "Alerting pipelines with feature-flagged fallbacks"],
  },
  {
    title: "Data workflows",
    body: "PostgreSQL/MySQL ledgers modeled with Prisma & Sequelize for settlements, payouts, and audits.",
    details: ["Multi-acquirer payout matcher", "Ledger snapshots for finance + compliance tooling"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-black via-background to-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/70 mb-3">Stacks I pilot</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
              Vertically integrated web skills for payment-heavy teams.
            </h2>
            <p className="text-lg text-muted-foreground/90 mt-4">
              I bounce between architecture diagrams, pull requests, and Figma handoffs without losing fidelity. Expect
              documentation, async video walkthroughs, and a calm release rhythm—even when we are juggling React, Angular,
              NestJS, PostgreSQL, MySQL, Prisma, and Sequelize within a single release train.
            </p>
          </div>
          <div className="glass rounded-3xl border border-primary/20 p-6 max-w-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Ecosystem</p>
            <p className="text-xl font-semibold text-primary mt-3">React · Angular · Nodejs · NestJs</p>
            <p className="text-sm text-muted-foreground mt-2">
              Comfortable across web surfaces + the services powering them.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stackColumns.map((column) => {
            const Icon = column.icon;
            return (
              <div key={column.title} className="rounded-3xl border border-border/60 bg-card/70 p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/15 text-primary p-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{column.title}</h3>
                </div>
                <p className="text-muted-foreground">{column.description}</p>
                <div className="flex flex-wrap gap-2 text-sm text-foreground/90">
                  {column.items.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full border border-border/60 bg-card/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-card/80 to-black/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full bg-primary/15 text-primary p-2">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Track record</p>
              <p className="text-lg font-semibold text-foreground">What teams lean on me for</p>
            </div>
          </div>
          <div className="space-y-4">
            {trackRecord.map((item) => (
              <div key={item.title} className="border border-border/50 rounded-2xl p-4 bg-card/80 space-y-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary/80">{item.title}</p>
                  <p className="text-foreground mt-1">{item.body}</p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside marker:text-primary/80">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
