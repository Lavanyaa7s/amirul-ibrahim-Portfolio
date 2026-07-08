"use client";

// Skill data with Devicon classes — matches the reference site
const SKILLS = [
  { icon: "devicon-python-plain colored", label: "Python" },
  { icon: "devicon-typescript-plain colored", label: "TypeScript" },
  { icon: "devicon-javascript-plain colored", label: "JavaScript" },
  { icon: "devicon-java-plain colored", label: "Java" },
  { icon: "devicon-cplusplus-plain colored", label: "C++" },
  { icon: "devicon-html5-plain colored", label: "HTML" },
  { icon: "devicon-css3-plain colored", label: "CSS" },
  { icon: "devicon-react-original colored", label: "React.js" },
  { icon: "devicon-nextjs-plain", label: "Next.js" },
  { icon: "devicon-nodejs-plain-wordmark colored", label: "Node.js" },
  { icon: "devicon-express-original", label: "Express.js" },
  { icon: "devicon-tailwindcss-original colored", label: "Tailwind CSS" },
  { icon: "devicon-threejs-original", label: "Three.js" },
  { icon: "devicon-postgresql-plain colored", label: "PostgreSQL" },
  { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
  { icon: "devicon-mysql-plain colored", label: "MySQL" },
  { icon: "devicon-git-plain colored", label: "Git" },
  { icon: "devicon-github-original", label: "GitHub" },
  { icon: "devicon-docker-plain colored", label: "Docker" },
  { icon: "devicon-vercel-original", label: "Vercel" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="skills-section"
      style={{ padding: "100px 20px", textAlign: "center", position: "relative", zIndex: 2 }}
    >
      <h2 className="section-title">
        Technical Skills —{" "}
        <span className="purple-text">Core Expertise!</span>
      </h2>

      <div className="skill-grid">
        {SKILLS.map((skill) => (
          <div key={skill.label} className="skill-card">
            <i className={skill.icon} />
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
