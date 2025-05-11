import React from "react";
import { skills } from "../data/skills";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="mb-24 px-6 md:px-12 py-12 rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/10 shadow-lg"
    >
      <h2 className="skills-title animate-fade-up">Tools & Technologies</h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-2 md:px-6 pb-2">
          {skills.map(({ name, icon }) => (
            <div
              key={icon}
              className="flex-shrink-0 w-24 h-24 bg-white/50 backdrop-blur border border-border rounded-xl shadow-md text-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white"
            >
              <img
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={name}
                title={name}
                className="w-10 h-10 mx-auto mb-2 transition-transform group-hover:rotate-3"
              />
              <p className="text-xs font-medium text-text-accent">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
