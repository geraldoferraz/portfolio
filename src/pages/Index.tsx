import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden" id="top">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,83,45,0.35),_transparent_55%)]" />
      <AnimatedBackground />
      <FloatingParticles />
      <main className="relative z-10 flex flex-col gap-0">
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
