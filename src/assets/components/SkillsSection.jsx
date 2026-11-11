import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Psychology & Assesment
  { name: "Observation", level: 90, category: "Psychology & Assesment" },
  { name: "Interview", level: 90, category: "Psychology & Assesment" },
  { name: "Research Instrument Development", level: 95, category: "Psychology & Assesment" },
  { name: "Basic Psychological Intervention", level: 90, category: "Psychology & Assesment" },
  { name: "Psychoeducation", level: 95, category: "Psychology & Assesment" },

  // HR & People Development
  { name: "HR Administration", level: 80, category: "HR & People Development" },
  { name: "Employee Development", level: 70, category: "HR & People Development" },
  { name: "Training & Development", level: 70, category: "HR & People Development" },
  { name: "Job Analysis", level: 72, category: "HR & People Development" },
  { name: "Recruitment & Selection", level: 75, category: "HR & People Development" },
  { name: "Employee Relations", level: 70, category: "HR & People Development" },
  { name: "Organizational Development", level: 70, category: "HR & People Development" },
  
  // Interpersonal & Professional Skills
  { name: "Communication", level: 90, category: "Interpersonal & Professional Skills" },
  { name: "Active Listening", level: 90, category: "Interpersonal & Professional Skills" },
  { name: "Teamwork", level: 85, category: "Interpersonal & Professional Skills" },
  { name: "Leadership", level: 85, category: "Interpersonal & Professional Skills" },
  { name: "Problem Solving", level: 85, category: "Interpersonal & Professional Skills" },
  { name: "Critical Thinking", level: 85, category: "Interpersonal & Professional Skills" },
  { name: "Time Management", level: 90, category: "Interpersonal & Professional Skills" },
  { name: "Adaptability", level: 90, category: "Interpersonal & Professional Skills" },

  // Digital & Productivity Tools
  { name: "Statistical Data Processing/SPSS", level: 80, category: "Digital & Productivity Tools" },
  { name: "AI Productivity Tools", level: 85, category: "Digital & Productivity Tools" },
  { name: "Google Form", level: 95, category: "Digital & Productivity Tools" },
  { name: "Microsoft Word", level: 90, category: "Digital & Productivity Tools" },
  { name: "Microsoft Excel", level: 80, category: "Digital & Productivity Tools" },
  { name: "Microsoft PowerPoint", level: 80, category: "Digital & Productivity Tools" },
  { name: "Canva", level: 80, category: "Digital & Productivity Tools" },
];

const categories = ["all", "Psychology & Assesment", "HR & People Development", "Interpersonal & Professional Skills", "Digital & Productivity Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
