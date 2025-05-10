import React from "react";

const TimelineSection = ({ title, entries }) => (
  <div className="mb-16">
    <h3 className="timeline-header">{title}</h3>
    <div className="relative lg:flex lg:flex-wrap lg:gap-8 lg:items-start border-l lg:border-l-0 lg:border-t border-border">
      {entries.map(({ institution, description }, idx) => (
        <div className="timeline-marker" key={idx}>
          <span className="timeline-bullet"></span>
          <h4 className="timeline-title">{institution}</h4>
          <p className="timeline-p">{description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Timeline = () => {
  const education = [
    {
      institution: "Noroff College",
      description: "Frontend Developer | Aug 2023 - Jun 2025",
    },
    {
      institution: "Universitetet i Sørøst-Norge",
      description:
        "Master's Degree in Primary School Education | Aug 2018 - Jun 2023",
    },
    {
      institution: "Drammen Toppidrett VGs",
      description: "High School | Aug 2015 - Jun 2018",
    },
  ];

  const workExperience = [
    {
      institution: "Lier Videregående skole",
      description: "Teacher in High School | Jan 2022 - Present",
    },
    {
      institution: "Åskollen Barneskole",
      description: "Teaching Assistant | Jan 2017 – Jun 2022",
    },
    {
      institution: "Drammen kommune: Sommerskole",
      description: "Activity Leader | Jun 2019 - Aug 2021",
    },
    {
      institution: "Digitale Læringsverkstedet",
      description: "Student Assistant | Aug 2019 - Nov 2019",
    },
    {
      institution: "Torshov Sport",
      description: "Sales Associate | Mar 2016 - Aug 2018",
    },
  ];

  return (
    <section id="timeline" className="p-8">
      <TimelineSection title="Education" entries={education} />
      <TimelineSection title="Work Experience" entries={workExperience} />
    </section>
  );
};

export default Timeline;
