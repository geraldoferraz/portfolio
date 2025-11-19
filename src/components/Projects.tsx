import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "BrightLift",
    url: "https://brightlift.ai/",
    description:
      "AI-driven marketing platform that automates the creation, targeting, and launch of digital ad campaigns end-to-end across Meta and Pinterest.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "Sequelize"],
  },
  {
    title: "GateWatch",
    url: "https://www.gatewatch.ai/",
    description:
      "Market-intelligence dashboard that tracks U.S. financial indicators and performs sentiment analysis across news sources and social feeds. Built to experiment with NLP pipelines and real-time visualizations.",
    stack: ["React", "NestJS", "PostgreSQL", "Redis", "Sequelize"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/70 mb-3">Personal projects</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Indie labs, built off-hours.</h2>
            <p className="text-lg text-muted-foreground/90 mt-4 max-w-[1000px]">
              This section highlights projects I design and code outside AmigoTech— playgrounds for React, Angular, NestJS,
              Node.js, PostgreSQL, Redis, and Sequelize that let me explore ideas without touching company IP.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-3xl border border-border/70 bg-card/80 p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-foreground/80">
                {project.stack.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full border border-border/50">
                    {item}
                  </span>
                ))}
              </div>
              <Button variant="outline" className="border-border/70 hover:border-primary/60 hover:bg-primary/5" asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit site
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
