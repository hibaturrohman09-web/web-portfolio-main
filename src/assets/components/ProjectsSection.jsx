
import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  Lightbulb,
  BookOpen,
  CalendarDays,
  Brain,
  Heart,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    category: "Internship",
    title: "School Counselor",
    organization: "SMK Bhinneka Karawang",
    description:
      "Providing psychological support, conducting counseling, and supporting students' mental well-being.",
    year: "2025",
    image: `${import.meta.env.BASE_URL}projects/Magang1.jpeg`,
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    category: "Organization",
    title: "Coordinator for Tempuran District",
    organization: "KKN Universitas Buana Perjuangan Karawang",
    description:
      "Leading and coordinating the KKN team in Tempuran Subdistrict to carry out community service programs.",
    year: "2025",
    image: `${import.meta.env.BASE_URL}projects/KKN1.jpeg`,
    icon: Users,
  },
  {
    id: 3,
    category: "Project",
    title: "Mental Health Campaign",
    organization: "Community Project",
    description:
      "Conducting mental health education and awareness activities to support a healthier community.",
    year: "2025",
    image: `${import.meta.env.BASE_URL}projects/KKN2.jpeg`,
    icon: Lightbulb,
  },
  {
    id: 4,
    category: "Research",
    title: "Psychology Research",
    organization: "Academic Research",
    description:
      "Exploring human behavior through psychological observation, academic research, and analysis.",
    year: "2025",
    image: `${import.meta.env.BASE_URL}projects/Narasumber1.jpeg`,
    icon: BookOpen,
  },
  {
    id: 5,
    category: "Organization",
    title: "Student Organization",
    organization: "Psychology Student Community",
    description:
      "Contributing ideas, collaborating with members, and participating in academic activities.",
    year: "2025",
    image: `${import.meta.env.BASE_URL}projects/hubunganindustri.jpeg`,
    icon: Users,
  },
  {
  id: 6,
  category: "Organization",
  title: "Industrial Visit",
  organization: "PT Komatsu Indonesia",
  description:
    "Gaining industry insights through an educational visit to PT Komatsu Indonesia, exploring workplace environments, industrial operations, and organizational practices.",
  year: "2025",
  image: `${import.meta.env.BASE_URL}projects/KunjunganIndustri.jpeg`,
  icon: Users,
  },
  {
  id: 7,
  category: "Research",
  title: "Academic Research",
  organization: "Universitas Buana Perjuangan Karawang",
  description:
    "Conducted psychological research examining self-efficacy and social support as predictors of learning motivation among tenth-grade students at SMK Bhinneka Karawang.",
  year: "2026",
  image: `${import.meta.env.BASE_URL}projects/Penelitian.jpeg`,
  icon: BookOpen,
  },
];

const filters = [
  { name: "All", icon: BriefcaseBusiness },
  { name: "Internship", icon: GraduationCap },
  { name: "Organization", icon: Users },
  { name: "Project", icon: Lightbulb },
  { name: "Research", icon: BookOpen },
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredExperiences =
    activeFilter === "All"
      ? experiences
      : experiences.filter(
          (item) => item.category === activeFilter
        );

  
return (
  <section
    id="projects"
    className="relative overflow-hidden py-24 px-4 md:px-8 bg-background text-foreground transition-colors duration-300"
  >
    {/* Background Decoration */}
    <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute right-8 top-10 text-[220px] font-serif text-primary/10 pointer-events-none select-none hidden md:block">
        Ψ
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

       {/* Heading */}
<div className="text-center mb-12">

  {/* Badge */}
  <div className="inline-flex items-center mb-5">
    <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
      Experience & Contributions
    </span>
  </div>

  {/* Title - Menambahkan dark:text-white agar di mode terang jadi gelap dan mode gelap jadi putih */}
  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5">
    My Experience{" "}
    <span className="text-primary">
      & Contributions
    </span>
  </h2>

  {/* Subtitle / Deskripsi */}
  <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
    A journey of learning, collaboration, and meaningful contribution in the field of Psychology.
  </p>
</div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.name;

            return (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-white dark:bg-[#1c130e] text-slate-700 dark:text-slate-200 border-primary/20 hover:bg-primary/5 hover:border-primary/40"
                }`}
              >
                <Icon size={17} />
                {filter.name}
              </button>
            );
          })}
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredExperiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group bg-white dark:bg-[#1a120d] rounded-2xl overflow-hidden border border-primary/10 dark:border-white/10 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                      <Icon size={14} />
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col min-h-[195px]">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-primary mb-3">
                    {item.organization}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow transition-colors">
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-primary/10 dark:border-white/10">
                    <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CalendarDays size={15} className="text-primary" />
                      {item.year}
                    </span>

                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Psychology Banner */}
        <div className="mt-7 relative overflow-hidden rounded-2xl bg-primary min-h-[260px] flex items-center">
          <div className="absolute right-0 top-0 text-[250px] font-serif text-white/10 leading-none pointer-events-none">
            Ψ
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-7 px-8 md:px-16 py-12">
            <div className="shrink-0 w-24 h-24 rounded-full border border-white/40 flex items-center justify-center">
              <Brain size={52} className="text-white" strokeWidth={1.2} />
            </div>

            <div className="hidden md:block w-px h-28 bg-white/50" />

            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Together for a Healthier Mind
              </h3>

              <p className="text-white/80 text-base md:text-lg italic max-w-2xl leading-relaxed">
                "Because understanding people is the first step
                towards a kinder and more inclusive world."
              </p>
            </div>

            <Heart
              size={65}
              className="hidden lg:block text-white/30 ml-auto"
              strokeWidth={1}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
