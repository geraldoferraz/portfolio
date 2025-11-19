const pillars = [
  {
    title: "Systems thinking",
    description:
      "Payment journeys stretch across web surfaces, APIs, and bank partners. I map contracts, settlement timings, and reconciliation paths before touching UI.",
  },
  {
    title: "Compliance-first delivery",
    description:
      "PCI, LGPD, PSD2, acquirer rules—constraints fuel creativity. Monitoring, alerting, and access controls land with every feature.",
  },
  {
    title: "Partnership mindset",
    description:
      "AmigoPay teams span product, risk, ops, and finance. I keep everyone looped in with async write-ups, ritual demos, and on-call empathy.",
  },
];

const deliveryModes = [
  {
    label: "Merchant onboarding",
    detail: "React + Angular flows validating KYC/KYB, onboarding APIs, and audit logs.",
  },
  {
    label: "Payment platforms",
    detail: "NestJS services orchestrating card, Pix, and boleto transactions with SQL durability.",
  },
  {
    label: "Settlement intelligence",
    detail: "Node workers, Prisma/Sequelize jobs, and data products exposing payouts to finance.",
  },
];

const stackSignals = [
  { headline: "Frontend", body: "React, Angular, Tailwind, component libraries, observability hooks" },
  { headline: "Backend", body: "NestJS, Node.js, PostgreSQL, MySQL, Prisma, Sequelize, queues" },
  { headline: "Payments", body: "Checkout orchestration, risk signals, settlements, transaction monitoring" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/70 mb-4">Operating system</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Web payments specialist shaping AmigoPay’s React, Angular, and NestJS universe.
            </h2>
            <p className="text-lg text-muted-foreground/90 mb-10">
              I run end-to-end: requirements, architecture, implementation, and post-launch observability. The AmigoPay
              charter covers merchant experiences, transaction APIs, payouts, and reconciliation tooling—and I keep every
              stitch typed, monitored, and explainable.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border border-border/70 rounded-3xl p-6 bg-gradient-to-br from-card/80 to-card/30">
                  <h3 className="text-2xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground mt-3">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass rounded-3xl border border-primary/30 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Engagements</p>
              <h3 className="text-3xl font-semibold text-primary mt-4">Builder for hire</h3>
              <p className="text-muted-foreground mt-3">
                Drop into demanding environments, unlock velocity, and leave systems better than I found them.
              </p>
            </div>

            {deliveryModes.map((mode) => (
              <div key={mode.label} className="rounded-3xl border border-border/70 bg-card/70 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{mode.label}</span>
                  <span className="text-primary text-sm">Always on</span>
                </div>
                <p className="text-lg text-foreground mt-2">{mode.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stackSignals.map((signal) => (
            <div key={signal.headline} className="rounded-3xl border border-border/60 bg-gradient-to-br from-card/70 to-card/30 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80">{signal.headline}</p>
              <p className="text-lg text-muted-foreground mt-3">{signal.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
