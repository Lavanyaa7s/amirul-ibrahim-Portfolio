"use client";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <div
      id="resumeModal"
      className={`resume-modal${isOpen ? " show" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
    >
      <div className="resume-modal-content glass-card" style={{
        transform: isOpen ? "scale(1)" : "scale(0.8)",
        opacity: isOpen ? 1 : 0,
        filter: "blur(0)",
      }}>
        <span
          className="close-modal"
          id="closeResumeBtn"
          onClick={onClose}
          role="button"
          tabIndex={0}
          aria-label="Close"
          onKeyDown={(e) => e.key === "Enter" && onClose()}
        >
          &times;
        </span>

        <h2 style={{ marginBottom: 20 }}>
          My Resume —{" "}
          <span className="purple-text">On Paper!</span>
        </h2>

        <div className="resume-iframe-container">
          {isOpen && (
            <iframe
              src="/resume.html"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Resume Document"
            />
          )}
        </div>
      </div>
    </div>
  );
}
