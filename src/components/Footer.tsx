"use client";

import { personal } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand" style={{ marginBottom: 10 }}>
          <h2 className="footer-logo">
            {personal.firstName}
            <span className="purple-text">{personal.lastName}</span>
          </h2>
          <p className="footer-tagline">
            Innovation at the Intersection of Code and Design!
          </p>
        </div>

        {/* Nav links */}
        <ul className="footer-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="footer-socials">
          <a
            href={personal.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="social-link email"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {personal.name} | Designed &amp; Developed with{" "}
          <i className="fa-solid fa-heart" style={{ color: "var(--accent-purple)" }} />
          !
        </p>
        <button
          id="backToTop"
          className="back-to-top"
          aria-label="Back to Top"
          onClick={scrollTop}
        >
          <i className="fa-solid fa-arrow-up" />
        </button>
      </div>
    </footer>
  );
}
