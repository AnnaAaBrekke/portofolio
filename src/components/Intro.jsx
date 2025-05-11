import React, { useEffect, useState } from "react";
import { IntroCardSkeleton } from "./Skeleton";

const IntroCard = ({ title, description, delay }) => (
  <div
    className={`relative bg-tertiary p-6 rounded-2xl shadow-md transition-transform duration-500 transform hover:scale-105 hover:shadow-xl group overflow-hidden animate-fade-up`}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
  >
    <p className="text-primary font-semibold text-lg mb-2">{title}</p>
    <div className="absolute inset-0 bg-primary bg-opacity-90 text-text-secondary flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm leading-relaxed text-center">
      <p>{description}</p>
    </div>
  </div>
);

const IntroSection = () => {
  const [loading, setLoading] = useState(true);

  const cards = [
    {
      id: "frontend",
      title: "Frontend Developer",
      description:
        "Graduated from Noroff College with a degree in Frontend Development.",
    },
    {
      id: "education",
      title: "Master’s in Education",
      description:
        "Graduated from USN. Master’s thesis focused on algorithm awareness in Social Studies.",
    },
    {
      id: "handball",
      title: "Handball Captain",
      description:
        "Captain at Nordstrand Damer Elite, competing in Norway’s first division.",
    },
    {
      id: "teacher",
      title: "High School Teacher",
      description: "Teaching at Lier Videregående Skole since 2022.",
    },
    {
      id: "media",
      title: "Media Creator",
      description:
        "Passionate about photography, video editing, and AI-generated images.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="intro"
      className="relative text-center mb-4 overflow-hidden bg-gradient-to-br from-secondary to-button text-text-secondary p-10 rounded-3xl shadow-2xl"
    >
      <h1 className="text-4xl lg:text-5xl font-bold mb-10 tracking-tight">
        Anna Aasprong Brekke
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {loading
          ? cards.map((card) => <IntroCardSkeleton key={card.id} />)
          : cards.map((card, index) => (
              <IntroCard
                key={card.id}
                title={card.title}
                description={card.description}
                delay={index * 100}
              />
            ))}
      </div>
    </section>
  );
};

export default IntroSection;
