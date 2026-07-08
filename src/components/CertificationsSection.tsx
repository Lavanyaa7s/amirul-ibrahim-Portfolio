"use client";

import { certifications } from "@/data/portfolio";

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="certifications-section"
      style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}
    >
      <h2 className="section-title">
        Certifications —{" "}
        <span className="purple-text">Learning Milestones!</span>
      </h2>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <div key={cert.title} className="cert-item">
            {/* Image / Placeholder */}
            <div className="cert-img-wrapper">
              {/* Placeholder with cert color — replace with real <img> */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}44)`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                <i
                  className="fa-solid fa-award"
                  style={{ fontSize: "3rem", color: cert.color }}
                />
                <span
                  style={{
                    fontFamily: "'VALORANT', sans-serif",
                    fontSize: "0.8rem",
                    color: cert.color,
                    letterSpacing: "1px",
                    textAlign: "center",
                    padding: "0 16px",
                  }}
                >
                  {cert.issuer}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="cert-overlay">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-overlay-link"
                >
                  <span>View Credentials</span>
                  <i className="fa-solid fa-arrow-right-long" />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
