"use client";

import React, { useEffect, useState } from "react";
import { Github, Tag, Calendar } from "lucide-react";
import { retrieveGHRepos } from "@/actions/github";
import { GitHubRepo } from "@/types/github-repo";
import Skeleton from "../skeleton/skeleton";

const Portfolio = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await retrieveGHRepos();
      setRepos(repos);
      setLoading(false);
    };
    fetchRepos();
  }, []);

  return (
    <section className="py-16 px-4 md:px-6 bg-white/5">
      {loading ? (
        <Skeleton />
      ) : (
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-8">
            Portfolio Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repos.map(
              (project, index) =>
                project.visible && (
                  <div
                    key={index}
                    className="group relative flex flex-col rounded-lg bg-white/5 hover:bg-white/10 
                       border border-white/10 hover:border-white/20 
                       transition-all duration-300 overflow-hidden"
                  >
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Title and Date */}
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-white/70">
                          <Calendar className="w-4 h-4" />
                          {new Date(
                            project.created_at
                          ).toLocaleDateString()}{" "}
                          {/* Adjust date format as needed */}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/80 text-sm mb-4">
                        {project.description || "No description available"}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {/* If you have a tech stack in repo topics, map it here */}

                        {project.languages.length > 0 &&
                          project.languages.map((language) => (
                            <span
                              key={project.id}
                              className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 
                               flex items-center gap-1"
                            >
                              <Tag className="w-3 h-3" />
                              {language}
                            </span>
                          ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-white/70 hover:text-white 
                             transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
