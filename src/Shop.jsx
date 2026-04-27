import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Shop.css";

export default function ComingSoon() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({ email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject: "New message from your Shop",
        source_page: "Shop Page",
        form_purpose:"pre-launch email waitlist", 
        email: formData.email,
        note: "Email wish to be notified once shop is open",
      }),
    });

    const data = await res.json();
    if (data.success) {
    setSubmitted(true);
    setFormData({email: ""});
    }
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
            <input type="email" required placeholder="Enter your email address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
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