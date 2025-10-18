import { Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  period: string;
  description: string;
  highlights?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Mid-Level Software Engineer",
    period: "Jun 2025 - Present · 5 months",
    description: "At Amigo Tech, I lead and contribute to critical initiatives in both mobile and backend development. Recently, I spearheaded the development of a new social networking API for the Amigo Network — a feature-rich section within our app that allows doctors to connect, share insights, and build their professional network.",
    highlights: [
      "Designed and implemented social networking APIs using NestJS, including real-time connections, feeds, and post ranking",
      "Participated in the transition from a custom React Native setup to Expo, improving DX and delivery speed",
      "Actively involved in code reviews, mentorship, and architecture planning",
    ],
  },
  {
    title: "Junior Software Engineer",
    period: "Jul 2024 - Jun 2025 · 1 year",
    description: "As a Software Engineer at Amigo Tech, I contribute to the development and maintenance of our mobile application, which streamlines the daily workflow for doctors. My responsibilities include ensuring code quality through rigorous reviews, maintaining alignment with best practices, and driving performance optimizations.",
    highlights: [
      "Played a key role in developing Amigo Intelligence, an AI-driven feature aimed at assisting doctors",
      "Improved patient record management, enabling doctors to efficiently summarize patient records and analyze exams",
      "Participated in code reviews and technical discussions",
    ],
  },
  {
    title: "Software Development Intern",
    period: "Mar 2024 - Jul 2024 · 5 months",
    description: "Started my journey at Amigo Tech, contributing to various development tasks and learning from experienced engineers.",
    highlights: [
      "Developed new features for the mobile application",
      "Fixed bugs and improved app performance",
      "Gained experience with React Native and backend technologies",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto animate-slide-up">
        <h2 className="text-4xl font-bold mb-12 text-gradient text-center">Experience</h2>
        
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 glass px-8 py-4 rounded-2xl border border-primary/20 card-glow hover:border-primary/40 smooth-transition">
            <Briefcase className="h-7 w-7 text-primary animate-pulse" />
            <div className="text-left">
              <h3 className="text-2xl font-bold text-foreground">Amigo Tech</h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-3 w-3" />
                <span>Recife, Pernambuco, Brasil</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />
          
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="relative pl-20 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background glow animate-pulse" style={{ animationDelay: `${idx * 0.2}s` }} />
                
                <div className="glass p-6 rounded-2xl border border-border card-glow hover:border-primary/50 smooth-transition group hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gradient mb-1 group-hover:scale-105 smooth-transition">{exp.title}</h3>
                    </div>
                    <div className="text-muted-foreground text-sm flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground/90 mb-4">{exp.description}</p>
                  
                  {exp.highlights && (
                    <ul className="space-y-2 text-foreground/80">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 glass p-8 rounded-2xl border border-accent/20 card-glow hover:border-accent/40 smooth-transition">
          <h3 className="text-2xl font-semibold text-gradient mb-3">Education</h3>
          <p className="text-xl text-foreground/95 mb-1 font-semibold">CESAR School</p>
          <p className="text-muted-foreground mb-1">Bachelor's degree, Computer Science</p>
          <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent" />
            2022 - 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
