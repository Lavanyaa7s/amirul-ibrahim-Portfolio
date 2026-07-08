"use client";

import { useState, useEffect } from "react";
import { personal } from "@/data/portfolio";

// Cycling typing and deleting animation hook — matches DevHQ reference exactly
function useCyclingTypingEffect(words: string[], typeSpeed = 100, deleteSpeed = 60, pauseTime = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const currentWord = words[wordIndex];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
}

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const roles = personal.heroRoles || ["DEVELOPER", "DESIGNER", "PROGRAMMER", "WRITER", "CODER"];
  const displayedText = useCyclingTypingEffect(roles, 100, 60, 1500);

  return (
    <main
      className="hero"
      id="home"
      style={{
        textAlign: "center",
        paddingTop: "5vh",
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Floating corner icons */}
      <div className="floating-icon icon-top-left" aria-hidden="true">
        <i className="fa-solid fa-code" />
      </div>
      <div className="floating-icon icon-top-right" aria-hidden="true">
        <i className="fa-solid fa-brain" />
      </div>
      <div className="floating-icon icon-bottom-left" aria-hidden="true">
        <i className="fa-solid fa-trophy" />
      </div>
      <div className="floating-icon icon-bottom-right" aria-hidden="true">
        <i className="fa-regular fa-lightbulb" />
      </div>

      <div className="content-wrapper">
        {/* Sub-title */}
        <h2
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
            fontWeight: 700,
            marginBottom: "20px",
            letterSpacing: "0.5px",
            color: "#fff",
          }}
        >
          {personal.headline || "Woah! You Landed on the Portfolio Website of The"}
        </h2>

        <br />
        <br />

        {/* Main title with cycling role typing effect */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 9vw, 6.5rem)",
            fontWeight: 900,
            margin: "20px 0",
            lineHeight: 1.2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "1.25em",
            textAlign: "center",
          }}
        >
          <span
            className="purple-text"
            style={{
              borderRight: "3px solid #a855f7",
              paddingRight: "6px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              animation: "blink-caret 0.75s step-end infinite",
            }}
          >
            {displayedText}
          </span>
        </h1>

        <br />
        <br />

        {/* Name | Role */}
        <h5
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 2.4rem)",
            fontWeight: 300,
            marginTop: "10px",
            marginBottom: "40px",
            color: "#fff",
          }}
        >
          {personal.name} | {personal.role}
        </h5>

        <br />

        {/* CTA Buttons */}
        <div
          className="hero-buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "10px",
            flexWrap: "wrap",
          }}
        >
          <a
            href={personal.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
            id="hero-linkedin-btn"
          >
            <i className="fa-brands fa-linkedin" />
            Let&apos;s Connect
          </a>
          <button
            onClick={onOpenResume}
            className="btn-resume"
            id="hero-resume-btn"
          >
            <i className="fa-regular fa-file-lines" />
            View Resume
          </button>
        </div>
      </div>
    </main>
  );
}
