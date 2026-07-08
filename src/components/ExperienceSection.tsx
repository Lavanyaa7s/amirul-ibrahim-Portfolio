"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    const progress = progressRef.current;
    if (!items || !progress) return;

    // IntersectionObserver for items
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const dot = entry.target.querySelector(".timeline-dot");
            if (dot) dot.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );
    items.forEach((el) => io.observe(el));

    // Scroll-driven timeline progress
    const updateProgress = () => {
      const timeline = timelineRef.current;
      if (!timeline || !progress) return;
      const rect = timeline.getBoundingClientRect();
      const scrolled = Math.max(0, window.innerHeight - rect.top);
      const total = rect.height + window.innerHeight;
      const pct = Math.min(100, (scrolled / total) * 100);
      progress.style.height = pct + "%";
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <section
      id="experience"
      className="projects-section"
      style={{ padding: "100px 20px", position: "relative", maxWidth: "1150px", margin: "0 auto", textAlign: "center" }}
    >
      <h2 className="section-title">
        Work Experience —{" "}
        <span className="purple-text">Professional Journey!</span>
      </h2>

      <br />

      <div ref={timelineRef} className="timeline">
        {/* Vertical line */}
        <div className="timeline-line">
          <div ref={progressRef} className="timeline-progress" />
        </div>

        {experiences.map((exp, index) => {
          const side = index % 2 === 0 ? "left" : "right";
          return (
            <div key={exp.index} className={`timeline-item ${side}`}>
              {/* Ghost number */}
              <div className="timeline-number">{exp.index}</div>

              {/* Card */}
              <div className="timeline-content">
                {/* Company tag */}
                <div className="project-tag">{exp.company}</div>

                {/* Company logo placeholder */}
                <div
                  style={{
                    width: 80, height: 80,
                    background: "rgba(168,85,247,0.15)",
                    border: "2px solid rgba(168,85,247,0.3)",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#a855f7",
                    marginBottom: 20,
                    fontFamily: "'VALORANT', sans-serif",
                  }}
                >
                  {exp.logo}
                </div>

                <h3>{exp.role}</h3>
                <p style={{ textAlign: "left", padding: "10px 0" }}>
                  {exp.bullets.map((b, bi) => (
                    <span key={bi}>
                      • {b}
                      {bi < exp.bullets.length - 1 ? <><br /><br /></> : null}
                    </span>
                  ))}
                </p>
              </div>

              {/* Date */}
              <div className="timeline-date">{exp.dateRange}</div>

              {/* Dot */}
              <div className="timeline-dot" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
