"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

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

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group"
              aria-label="Go to home"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                style={{
                  background: "rgba(0,212,255,0.15)",
                  border: "1px solid rgba(0,212,255,0.4)",
                }}
              >
                <Code2 size={16} style={{ color: "var(--brand)" }} />
              </div>
              <span
                className="font-bold text-sm hidden sm:block"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: "var(--brand)",
                  letterSpacing: "-0.01em",
                }}
              >
                amirul.dev
              </span>
            </button>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = activeId === href.replace("#", "");
                return (
                  <li key={href}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-brand"
                          : "text-gray-400 hover:text-white"
                      }`}
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        background: isActive
                          ? "rgba(0,212,255,0.08)"
                          : "transparent",
                        color: isActive ? "var(--brand)" : undefined,
                        fontSize: "0.83rem",
                      }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="hidden sm:inline-flex btn-primary"
                style={{ padding: "0.5rem 1.2rem", fontSize: "0.82rem" }}
              >
                Hire Me
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute top-0 right-0 h-full w-72 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "var(--surface)",
            borderLeft: "1px solid var(--border)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 pt-20">
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1" role="list">
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive = activeId === href.replace("#", "");
                  return (
                    <li key={href}>
                      <button
                        onClick={() => handleNavClick(href)}
                        className="w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          background: isActive
                            ? "rgba(0,212,255,0.08)"
                            : "transparent",
                          color: isActive ? "var(--brand)" : "var(--text-secondary)",
                          borderLeft: isActive ? "3px solid var(--brand)" : "3px solid transparent",
                        }}
                      >
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="btn-primary w-full justify-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
