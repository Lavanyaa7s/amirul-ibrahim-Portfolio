"use client";

import { useEffect, useRef } from "react";
import { personal } from "@/data/portfolio";

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // IntersectionObserver for reveal animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("expanded");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);

    // Interactive 3D tilt & translateZ parallax — matches reference script.js exactly
    const onMouseMove = (e: MouseEvent) => {
      if (!el.classList.contains("expanded")) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      const title = el.querySelector("h2");
      const para = el.querySelector("p");

      if (title) title.style.transform = "translateZ(40px)";
      if (para) para.style.transform = "translateZ(20px)";

      el.style.transition = "transform 0.1s ease-out";
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const onMouseLeave = () => {
      if (!el.classList.contains("expanded")) return;
      el.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
      el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

      const title = el.querySelector("h2");
      const para = el.querySelector("p");
      if (title) title.style.transform = "translateZ(0)";
      if (para) para.style.transform = "translateZ(0)";

      setTimeout(() => {
        if (el) el.style.transition = "";
      }, 600);
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      observer.disconnect();
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section
      id="about"
      className="about-section"
      style={{
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div ref={cardRef} className="glass-card scroll-reveal">
        <h2>
          About Me —{" "}
          <span className="purple-text">Behind The Code!</span>
        </h2>
        <p>
          {personal.bio.join(" ")}
        </p>
      </div>
    </section>
  );
}
