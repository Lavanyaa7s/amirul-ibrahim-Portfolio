"use client";

import { useState } from "react";
import { personal } from "@/data/portfolio";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_KEY");
    data.append("subject", `Portfolio contact from ${data.get("name")}`);
    data.append("redirect", "false");

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) { setFormState("success"); form.reset(); }
      else throw new Error(json.message);
    } catch (err) {
      setFormState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="contact-section"
      style={{ padding: "100px 20px", maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 2 }}
    >
      <div className="contact-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "50px" }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Get In Touch —{" "}
          <span className="purple-text">Ask Me Anything!</span>
        </h2>

        <h4 className="contact-note">
          Ready to collaborate or have a project in mind?
          <br />
          I&apos;m always open to new opportunities and interesting conversations.
        </h4>

        <div className="contact-card">
          <form
            id="contactForm"
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Name */}
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder=" "
                autoComplete="off"
                disabled={formState === "loading" || formState === "success"}
              />
              <label htmlFor="name">Name</label>
              <i className="fa-solid fa-user input-icon" />
            </div>

            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder=" "
                autoComplete="off"
                disabled={formState === "loading" || formState === "success"}
              />
              <label htmlFor="email">Email</label>
              <i className="fa-solid fa-envelope input-icon" />
            </div>

            {/* Message */}
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder=" "
                disabled={formState === "loading" || formState === "success"}
              />
              <label htmlFor="message">Message</label>
              <i className="fa-solid fa-comment input-icon" />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-submit"
              disabled={formState === "loading" || formState === "success"}
              id="contact-submit-btn"
            >
              {formState === "loading" ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin" />
                  Sending...
                </>
              ) : formState === "success" ? (
                <>
                  <i className="fa-solid fa-check" />
                  Message Sent!
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <i className="fa-solid fa-paper-plane" />
                </>
              )}
            </button>

            {formState === "error" && (
              <p style={{ color: "#f87171", textAlign: "center", marginTop: 12 }}>
                {errorMsg || "Something went wrong. Try again."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
