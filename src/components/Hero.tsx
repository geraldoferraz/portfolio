import { Github, Linkedin, Mail, Code2, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-glow-pulse -translate-x-1/2 -translate-y-1/2"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="absolute -top-10 -left-10 animate-bounce">
          <Code2 className="w-8 h-8 text-primary opacity-50" />
        </div>
        <div
          className="absolute -top-5 -right-10 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <Sparkles className="w-6 h-6 text-secondary opacity-50" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
          Hi, I'm <span className="text-gradient animate-glow">Rafael Falk</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Software Engineer @ Amigo Tech
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          React Native & React | NodeJS | NestJS | TypeScript | SQL
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 smooth-transition glow group"
            asChild
          >
            <a
              href="https://github.com/falkrafa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 smooth-transition" />
              GitHub
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="glass border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary smooth-transition group"
            asChild
          >
            <a
              href="https://linkedin.com/in/rafael-falk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 smooth-transition" />
              LinkedIn
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="glass border-secondary/30 text-foreground hover:bg-secondary/10 hover:border-secondary smooth-transition group"
            asChild
          >
            <a href="mailto:contact@rafaelfalk.dev">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 smooth-transition" />
              Contact
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center z-20 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-muted-foreground opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
