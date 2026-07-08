"use client";

import { socials, personal } from "@/data/portfolio";

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "linkedin":
      return <i className="fa-brands fa-linkedin" style={{ color: "#0077b5" }} />;
    case "github":
      return <i className="fa-brands fa-github" style={{ color: "#fff" }} />;
    case "leetcode":
      return <i className="devicon-leetcode-plain colored" />;
    case "hackerrank":
      return <i className="fa-brands fa-hackerrank" style={{ color: "#2ec866" }} />;
    case "devto":
      return <i className="fa-brands fa-dev" style={{ color: "#fff" }} />;
    case "twitter":
      return <i className="fa-brands fa-x-twitter" style={{ color: "#fff" }} />;
    default:
      return <i className="fa-solid fa-globe" style={{ color: "#a855f7" }} />;
  }
}

export default function WebPresenceSection() {
  return (
    <section
      id="profiles"
      className="profiles-section"
      style={{ padding: "100px 20px 140px", maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 2 }}
    >
      <h2 className="section-title">
        Web Presence —{" "}
        <span className="purple-text">Dev Network!</span>
      </h2>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-img-main">
          {/* Avatar SVG — replace with <img> if you have a real photo */}
          <svg
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", borderRadius: "50%", position: "relative", zIndex: 3 }}
            aria-label="Profile avatar"
          >
            <circle cx="80" cy="80" r="80" fill="#1a0a2e" />
            <ellipse cx="80" cy="70" rx="30" ry="32" fill="#2d1b50" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" />
            <path d="M30 155 Q35 115 80 115 Q125 115 130 155" fill="#1a0a2e" stroke="rgba(168,85,247,0.2)" strokeWidth="1" />
            <ellipse cx="68" cy="67" rx="4.5" ry="5" fill="#a855f7" />
            <ellipse cx="92" cy="67" rx="4.5" ry="5" fill="#a855f7" />
            <ellipse cx="69" cy="67" rx="2.5" ry="3" fill="#0b0b0b" />
            <ellipse cx="93" cy="67" rx="2.5" ry="3" fill="#0b0b0b" />
            <path d="M70 83 Q80 90 90 83" stroke="rgba(168,85,247,0.8)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M50 55 Q52 36 80 33 Q108 36 110 55 Q98 44 80 43 Q62 44 50 55Z" fill="#0f0820" />
          </svg>
        </div>
        <div className="profile-text">
          <p className="purple-text">@amirul-ibrahim</p>
        </div>
      </div>

      {/* Social Cards */}
      <div className="profiles-grid">
        {socials.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
            aria-label={`Visit ${social.platform} profile`}
          >
            <div className="profile-icon">
              <SocialIcon icon={social.icon} />
            </div>
            <div className="profile-info">
              <h3>{social.label}</h3>
              <p>{social.sublabel}</p>
            </div>
          </a>
        ))}
      </div>

      <br />
      <p className="profile-note">
        You can explore further by clicking on any of the profile cards above!
      </p>
    </section>
  );
}
