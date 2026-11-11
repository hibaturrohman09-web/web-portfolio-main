import { Users, Brain, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Human Resource Development & Human Resource Department
            </h3>

            <p className="text-muted-foreground">
              As a graduate of Psychology, I focus on supporting human resources management, recruitment,
              talent administration, and development — delivering work that is organized,
              accurate, and follows professional standards.
            </p>

            <p className="text-muted-foreground">
              I am passionate about applying psychological knowledge to provide effective solutions,
              and keep learning and improving my skills to stay relevant and grow in an 
              ever-changing professional world.           
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Hire Me
              </a>
  <a
  href="https://drive.google.com/file/d/1BhAFOhpOcfQbH9RjZXqHHiHopEL8mTiK/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
>
  Download CV
</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Human Resources & Recruitment
                  </h4>
                  <p className="text-muted-foreground">
                    Supporting recruitment processes, candidate screening, selection,
                    and human resource administration to help identify and develop
                    potential employees.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Psychological Assessment
                  </h4>
                  <p className="text-muted-foreground">
                    Supporting psychological assessment activities, data administration,
                    and interpretation to understand individual potential, characteristics,
                    and development needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Training & Development
                  </h4>
                  <p className="text-muted-foreground">
                    Supporting training and development programs through needs analysis,
                    program coordination, and activities that promote employee growth
                    and organizational effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
