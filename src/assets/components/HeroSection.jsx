import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 md:pt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full items-center z-10">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest opacity-0 animate-fade-in text-start">
            Welcome
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight opacity-0 animate-fade-in-delay-1 text-start">
            Hi, I'm <span className="text-primary">Muhamad Hibatur Rahman</span>
          </h1>
          <div className="flex items-center gap-2 opacity-0 animate-fade-in-delay-2">
            <span className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary tracking-wide">
              I-O Psychology, HR & Recruitment, T&D, Assessment Psychology
            </span>
          </div>
         <p className="text-base text-muted-foreground leading-relaxed max-w-md opacity-0 animate-fade-in-delay-3 text-start">
            Specializing in Industrial and Organizational Psychology, I have experience
            in psychological assessment, data management, research, and field coordination.
            I am interested in human resource development, employee well-being,
            organizational behavior, and applying psychological principles to support
            effective and productive workplaces.
          </p>

          <div className="flex gap-3 flex-wrap pt-1 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex md:justify-end justify-center md:items-end items-center opacity-0 animate-fade-in-delay-2 md:text-end text-center">
          <img
            src="./foto_rohman.png"
            alt="Foto Rohman"
            className="w-64 md:w-84 aspect-[3/4] object-cover object-top rounded-2xl"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
