"use client";

import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects-section"
      style={{ padding: "100px 20px", position: "relative", maxWidth: "1150px", margin: "0 auto", textAlign: "center" }}
    >
      <h2 className="section-title">
        Projects Showcase —{" "}
        <span className="purple-text">What I&apos;ve Built!</span>
      </h2>

      <br />

      <div className="experience-grid">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="experience-card"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
              e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
            }}
          >
            {/* Date tag */}
            <div className="experience-date">{project.date}</div>

            {/* Category tag */}
            <div className="project-tag" style={{ display: "inline-block", width: "max-content" }}>
              {project.category}
            </div>

            {/* Name */}
            <h3>{project.name}</h3>

            {/* Description */}
            <p>{project.description}</p>

            {/* Links */}
            <div className="project-links-wrapper">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn primary-btn"
                >
                  <i className="fa-regular fa-eye" /> View Live
                </a>
              ) : (
                <span className="project-btn primary-btn inactive-btn">
                  <i className="fa-regular fa-eye" /> View Live
                </span>
              )}

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn primary-btn"
                >
                  <i className="fa-brands fa-github" /> GitHub
                </a>
              ) : (
                <span className="project-btn primary-btn inactive-btn">
                  <i className="fa-brands fa-github" /> GitHub
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
