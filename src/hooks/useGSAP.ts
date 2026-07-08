"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  start?: string;
}

/**
 * Animates a container's children in on scroll using GSAP ScrollTrigger.
 * Pass a CSS selector for the children to animate, or use the returned ref
 * as the trigger element.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  selector: string,
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const {
      y = 48,
      opacity = 0,
      duration = 0.7,
      stagger = 0.1,
      delay = 0,
      ease = "power3.out",
      start = "top 85%",
    } = options;

    const ctx = gsap.context(() => {
      const targets = ref.current!.querySelectorAll(selector);
      if (targets.length === 0) return;

      gsap.fromTo(
        targets,
        { y, opacity, willChange: "transform, opacity" },
        {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          delay,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

  return ref;
}

/**
 * Single-element scroll reveal.
 */
export function useSingleReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const {
      y = 48,
      opacity = 0,
      duration = 0.7,
      delay = 0,
      ease = "power3.out",
      start = "top 88%",
    } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y, opacity, willChange: "transform, opacity" },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
