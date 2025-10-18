import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-gradient-to-b from-transparent to-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Rafael Falk</h3>
            <p className="text-muted-foreground">Software Engineer @ Amigo Tech</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/falkrafa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl border border-primary/30 hover:border-primary smooth-transition hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-primary group-hover:rotate-12 smooth-transition" />
            </a>
            
            <a 
              href="https://linkedin.com/in/rafael-falk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl border border-accent/30 hover:border-accent smooth-transition hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-accent group-hover:scale-110 smooth-transition" />
            </a>
            
            <a 
              href="mailto:contact@rafaelfalk.dev"
              className="p-3 glass rounded-xl border border-secondary/30 hover:border-secondary smooth-transition hover:scale-110 group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-secondary group-hover:scale-110 smooth-transition" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Rafael Falk. Built with React & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
