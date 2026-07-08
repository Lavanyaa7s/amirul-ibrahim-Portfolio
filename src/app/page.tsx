"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import WebPresenceSection from "@/components/WebPresenceSection";
import ContactSection from "@/components/ContactSection";
import ResumeModal from "@/components/ResumeModal";
import Footer from "@/components/Footer";

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), { ssr: false });

// Custom cursor component
function CustomCursor() {
  useEffect(() => {
    const dot = document.querySelector<HTMLDivElement>(".cursor-dot");
    const outline = document.querySelector<HTMLDivElement>(".cursor-outline");
    if (!dot || !outline) return;

    let outX = 0, outY = 0, dotX = 0, dotY = 0;
    let targetX = 0, targetY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX; targetY = e.clientY;
      dot.style.left = targetX + "px";
      dot.style.top  = targetY + "px";
    };

    const animateOutline = () => {
      outX += (targetX - outX) * 0.15;
      outY += (targetY - outY) * 0.15;
      outline.style.left = outX + "px";
      outline.style.top  = outY + "px";
      requestAnimationFrame(animateOutline);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest("a, button, input, textarea, .floating-icon, .experience-card, .skill-card, .cert-item, .profile-card, .glass-card")) {
        outline.classList.add("hovered");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest("a, button, input, textarea, .floating-icon, .experience-card, .skill-card, .cert-item, .profile-card, .glass-card")) {
        outline.classList.remove("hovered");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mouseout", onMouseOut, { passive: true });
    animateOutline();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" data-cursor-dot />
      <div className="cursor-outline" data-cursor-outline />
    </>
  );
}

// Minimal sticky navbar — matches DevHQ's approach
function Navbar({ onOpenResume }: { onOpenResume: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Profiles", href: "#profiles" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(11,11,11,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(168,85,247,0.15)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{
          fontWeight: 800,
          fontSize: "1.4rem",
          textDecoration: "none",
          background: "linear-gradient(to right, #fff, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.5px",
        }}
      >
        DevHQ
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "28px",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
        className="nav-desktop"
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: "#d1d5db",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                transition: "color 0.3s",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a855f7"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#d1d5db"; }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "1.4rem",
          cursor: "pointer",
        }}
        className="nav-hamburger"
      >
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0, right: 0,
            background: "rgba(11,11,11,0.95)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(168,85,247,0.2)",
            padding: "20px 40px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: "#d1d5db", textDecoration: "none", fontSize: "1rem", fontWeight: 500 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

export default function HomePage() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {/* Three.js background */}
      <ThreeBackground />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Sticky navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Resume modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* All sections */}
      <HeroSection onOpenResume={() => setResumeOpen(true)} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <WebPresenceSection />
      <ContactSection />
      <Footer />
    </>
  );
}
