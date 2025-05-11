import React from "react";
import { educationEntries, workEntries } from "../data/timeline";

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

const Timeline = () => (
  <section id="timeline" className="p-8">
    <TimelineSection title="Education" entries={educationEntries} />
    <TimelineSection title="Work Experience" entries={workEntries} />
  </section>
);

export default Timeline;
