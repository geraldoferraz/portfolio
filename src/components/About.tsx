const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto animate-slide-up relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
        
        <div className="space-y-6 text-lg text-foreground/90">
          <p>
            In my current role, I take pride in being a <span className="text-primary font-semibold">team player</span> who 
            thrives in collaborative environments. I enjoy refining code, optimizing performance, and ensuring that every 
            solution is efficient and easy to maintain.
          </p>
          
          <div className="glass p-8 rounded-2xl border border-primary/20 card-glow hover:border-primary/40 smooth-transition">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Main Skills</h3>
            <ul className="space-y-3 text-foreground/90">
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Develop and maintain web and mobile applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Implement features for both front-end and back-end</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Write clean, efficient, and well-structured code</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Version control and collaboration using Git</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Translate business requirements into scalable and efficient software solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
