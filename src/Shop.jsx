import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Shop.css";

export default function ComingSoon() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="cs-wrapper">

      {/* Back button */}
      <button className="cs-back" onClick={() => navigate("/")}>
        ← Back to Portfolio
      </button>

      {/* Content */}
      <div className="cs-content">
        <p className="cs-label">Shop</p>
        <h1 className="cs-title">Something beautiful<br />is <em>coming soon.</em></h1>
        <p className="cs-desc">
          We are curating a collection of architectural prints, design resources,
          and handpicked materials. Be the first to know when we launch.
        </p>

        {submitted ? (
          <div className="cs-success">
            <p className="cs-success-title">Thank you.</p>
            <p className="cs-success-msg">You're on the list — we'll be in touch soon.</p>
          </div>
        ) : (
          <form className="cs-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="cs-input"
            />
            <button type="submit" className="cs-btn">Notify Me</button>
          </form>
        )}

      </div>

      {/* Decorative elements */}
      <div className="cs-decor-top" />
      <div className="cs-decor-bottom" />

      {/* Footer */}
      <div className="cs-footer">
        <span>© 2026 Scarlett Raven Architect</span>
      </div>

    </div>
  );
}