import React from "react";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

export default function Career() {
  const careerEntries = [
    {
      year: "2024",
      role: "Senior Software Engineer",
      company: "Tech Innovation Labs",
      description:
        "Leading development of cloud-native applications and mentoring junior developers. Specialized in distributed systems and microservices architecture.",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["Cloud Architecture", "Team Leadership", "System Design"],
    },
    {
      year: "2022",
      role: "Software Engineer",
      company: "Digital Solutions Inc",
      description:
        "Developed full-stack applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["React", "Node.js", "DevOps"],
    },
    {
      year: "2020",
      role: "Junior Developer",
      company: "StartUp Ventures",
      description:
        "Built and maintained web applications. Collaborated with design team to implement responsive user interfaces.",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["JavaScript", "HTML/CSS", "Git"],
    },
    {
      year: "2019",
      role: "Computer Science Degree",
      company: "Tech University",
      description:
        "Bachelor's degree in Computer Science with focus on software engineering and artificial intelligence.",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: ["Algorithms", "Data Structures", "Machine Learning"],
    },
  ];
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-8">Career Timeline</h2>
        <div className="space-y-6">
          {careerEntries.map((entry, i) => (
            <div
              key={i}
              className="relative p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300
                         border border-white/10 hover:border-white/20
                         md:ml-8"
            >
              {/* Timeline connector */}
              <div className="hidden md:block absolute left-0 top-0 h-full w-0.5 -ml-4 bg-white/20" />

              {/* Content */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Year badge */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 md:hidden" />
                  <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium">
                    {entry.year}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{entry.role}</h3>
                  <p className="text-sm text-white/70 mt-1">{entry.company}</p>
                  <p className="mt-2 text-white/80">{entry.description}</p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {entry.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
