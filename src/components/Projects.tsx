import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Track Sync",
    description: "A NestJS server that integrates with the Spotify API to fetch the last track played on your account. The project automatically updates your GitHub README with the song information, allowing your followers to see what you're listening to.",
    technologies: ["NestJS", "Spotify API", "GitHub API", "TypeScript"],
    githubUrl: "https://github.com/falkrafa/track-sync.md",
  },
  {
    title: "Nest-Seq CLI",
    description: "A powerful command-line tool for scaffolding NestJS projects with Sequelize ORM. It simplifies project setup by generating a fully structured NestJS application with Sequelize and Swagger documentation.",
    technologies: ["NestJS", "Sequelize", "CLI", "TypeScript", "Swagger"],
    githubUrl: "https://github.com/falkrafa/nest-seq-cli",
  },
  {
    title: "FlixWorld",
    description: "A movie portal to find where to watch your favorite movies and TV shows. Browse through a vast collection of content and discover streaming platforms.",
    technologies: ["React", "TypeScript", "API Integration"],
    liveUrl: "https://flixworld.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30 relative">
      <div className="max-w-6xl mx-auto animate-slide-up relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-gradient text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={project.title}
              className="glass p-6 rounded-2xl border border-border card-glow hover:border-primary/50 smooth-transition hover:scale-105 hover:-translate-y-2 group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold text-gradient mb-3 group-hover:scale-105 smooth-transition">{project.title}</h3>
              
              <p className="text-foreground/80 mb-4 min-h-[100px]">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 glass border border-primary/30 text-primary rounded-full text-sm hover:bg-primary/20 smooth-transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 glass border-primary/30 text-primary hover:bg-primary/20 hover:border-primary smooth-transition"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                
                {project.liveUrl && (
                  <Button 
                    variant="outline"
                    size="sm"
                    className="flex-1 glass border-secondary/30 text-secondary hover:bg-secondary/20 hover:border-secondary smooth-transition"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
