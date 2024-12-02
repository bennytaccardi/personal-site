import React from "react";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

export default function Career() {
  const careerEntries = [
    {
      year: "2023 - ongoing",
      role: "Backend Engineer",
      company: "Unobravo srl",
      url: "https://www.unobravo.com",
      description:
        "At Unobravo, I design scalable systems, optimize APIs, and enhance application performance, achieving up to 90% faster response times and boosting therapist recruitment by 20%.",
      icon: <Briefcase className="w-6 h-6" />,
      skills: [
        "Cloud Architecture",
        "System Design",
        "Backend development",
        "AWS",
        "Node.js",
        "GraphQL",
        "Typescript",
        "Pulumi",
        "Terraform",
        "GitHub actions",
      ],
    },
    {
      year: "2021 - 2022",
      role: "Software Engineer",
      company: "Engineering S.p.A.",
      url: "https://www.eng.it/",
      description:
        "In my engineering experience, I delivered innovative solutions for European research projects, optimized geospatial tools, and reduced bug tickets by 30% using IaC and version control.",
      icon: <Briefcase className="w-6 h-6" />,
      skills: [
        "System Design",
        "Fullstack development",
        "Ansible",
        "Python (FastAPI)",
        "Java (SpringBoot)",
        "Geoserver",
        "Apache Superset",
      ],
    },
    {
      year: "2020-2021",
      role: "Software Developer",
      company: "Vidyasoft s.r.l",
      url: "https://www.vidyasoft.it/",
      description:
        "At Vidyasoft, I developed backend solutions for banking clients, implemented a fraud detection algorithm, and boosted company revenue by 12% while increasing banking partnerships by 60%.",
      icon: <Briefcase className="w-6 h-6" />,
      skills: [
        "Backend development",
        "AI/ML",
        "Java",
        "Python",
        "PyTorch",
        "Deep Neural Networks",
        "Angular",
      ],
    },
    {
      year: "2019-2021",
      role: "Computer Engineering Master's Degree",
      company: "University of Salento",
      description: "",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: [],
    },
    {
      year: "2015-2019",
      role: "Computer Engineering Bachelor's Degree",
      company: "University of Salento",
      description: "",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: [],
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
                  <a href={entry.url} target="_blank">
                    <p className="text-sm text-white/70 mt-1">
                      {entry.company}
                      {entry.icon}
                    </p>
                  </a>
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
