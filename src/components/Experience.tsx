import { ArrowUpRight, Calendar, MapPin, Radio } from "lucide-react";

const deployments = [
  {
    role: "Web Engineer · AmigoPay (AmigoTech)",
    period: "Jan 2025 — Present",
    location: "Recife · On-site",
    impact:
      "Owned onboarding, payouts, and transaction monitoring experiences. Reduced reconciliation time by 40% by rolling out Sequelize-ledger tables and Angular tooling for finance. Daily toolkit: NestJS + Node.js services, PostgreSQL ledgers, Redis event channels, and Sequelize migrations.",
    signals: [
      "Merchant onboarding React flows",
      "Angular settlement tools",
      "Node/NestJS services with automated compliance checks",
    ],
  },
  {
    role: "Engineering Intern · AmigoTech",
    period: "Aug 2024 — Dec 2024",
    location: "Recife · On-site",
    impact:
      "Supported the payments platform team with CI, QA automation, and SQL migrations, working side-by-side with the on-site squad. Helped maintain NestJS + Node.js services, PostgreSQL/Redis infra, and Sequelize models that back AmigoPay settlements.",
    signals: [
      "Sequelize migrations + tooling for new services",
      "CI pipelines for payment services",
      "Support tooling for transaction observability",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-background to-black">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/70 mb-3">Deployment log</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Web + payments roles inside AmigoTech.</h2>
            <p className="text-lg text-muted-foreground/90 mt-4 max-w-[1000px]">
              I stay embedded with AmigoPay squads, owning delivery rhythms, compliance gates, and architecture decisions
              across React, Angular, NestJS, and SQL layers.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {deployments.map((deployment) => (
            <div
              key={deployment.role}
              className="rounded-3xl border border-border/70 bg-gradient-to-br from-card/80 to-black/30 p-6 md:p-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-primary/70">Role</p>
                  <h3 className="text-2xl font-semibold text-foreground mt-2">{deployment.role}</h3>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    {deployment.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {deployment.location}
                  </span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground/90">{deployment.impact}</p>

              <div className="flex flex-wrap gap-3">
                {deployment.signals.map((signal) => (
                  <span key={signal} className="px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/90 bg-card/70">
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="my-10 border-t border-border/70" />

        <div className="rounded-3xl border border-border/70 bg-card/70 p-6 flex flex-wrap gap-6 items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Education</p>
            <h3 className="text-2xl font-semibold text-foreground mt-2">CESAR School · Computer Science</h3>
            <p className="text-muted-foreground">2022 — 2025 · Recife</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
