import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/App.css";

const projects = [
  {
    id: 1,
    title: "Casa Terracota",
    year: "2023",
    location: "Southern Leyte, Philippines",
    type: "Residential",
    description: "A sun-drenched family home merging raw concrete and local timber, designed around a central courtyard garden that breathes with the landscape.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 2,
    title: "The Granary Loft",
    year: "2022",
    location: "Bohol, Philippines",
    type: "Adaptive Reuse",
    description: "A century-old grain warehouse transformed into a live-work studio, preserving original stone walls while layering in warm brass and reclaimed oak.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    id: 3,
    title: "Silay Cultural Pavilion",
    year: "2022",
    location: "Silay City, Philippines",
    type: "Cultural",
    description: "An open-air pavilion rooted in Negrense heritage — steep bamboo rooflines, rammed-earth walls, and a gathering space for the living community.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
  },
  {
    id: 4,
    title: "Verdant Office Park",
    year: "2021",
    location: "Mandaue City, Philippines",
    type: "Commercial",
    description: "A campus of five low-rise offices connected by shaded garden corridors, where biophilic design reduces cooling loads by 38%.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 5,
    title: "Amakan House",
    year: "2021",
    location: "Dumaguete, Philippines",
    type: "Residential",
    description: "A hillside retreat built almost entirely from locally sourced amakan and limestone, disappearing into the tropical ridge it crowns.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    id: 6,
    title: "Harbor Chapel",
    year: "2020",
    location: "Oslob, Philippines",
    type: "Sacred",
    description: "A meditation chapel perched on a coastal cliff, where filtered light through natural lattice creates an ever-shifting interior landscape.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  },
];

const services = [
  {
    icon: "◈",
    title: "Architectural Design",
    desc: "From initial concept to construction documentation — residential, commercial, and cultural projects with a rooted, site-specific approach.",
    details: [
      "Concept development and schematic design",
      "Design development and documentation",
      "Construction drawings and specifications",
      "Permit and regulatory submissions",
      "Site visits and construction administration",
    ]
  },
  {
    icon: "◉",
    title: "Project Documentation",
    desc: "From schematic drawings to as-built records — precise, complete documentation that bridges design intent and construction reality.",
    details: [
      "As-built drawings and record documents",
      "Shop drawing review",
      "Material and finish schedules",
      "Project manuals and specifications",
      "Digital and physical file management",
    ]
  },
  {
    icon: "◇",
    title: "Technical Drafting",
    desc: "Precise technical drawings and blueprints that translate architectural concepts into clear, buildable construction documents.",
    details: [
      "Floor plans, elevations and sections",
      "Detailed construction drawings",
      "Structural and MEP coordination",
      "3D modeling and visualization",
      "CAD and BIM drafting services",
    ]
  },
];

const FILTERS = ["All", "Residential", "Commercial", "Cultural", "Adaptive Reuse", "Sacred"];

export default function App() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  const filtered = activeFilter === "All" ? projects : projects.filter(p => p.type === activeFilter);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav className="navbar navbar-blur">
        <span className="navbar-brand" onClick={() => scrollTo("hero")}>Raven Atlier <em className="navbar-brand-em">Architect</em></span>
        <div className="navbar-links">
          {["about", "services", "projects", "contact"].map(s => (
            <span key={s} className="nav-link" onClick={() => scrollTo(s)}>{s}</span>
          ))}
            <span className="nav-link" onClick={() => navigate("/shop")}>shop</span>
        </div>
      </nav>

      {/* HERO */}
      <section ref={heroRef} id="hero" className="hero">
        <div className="hero-text">
          <p className="fade-up fade-up-d1 hero-tagline">Architecture & Interior Design — Southern Leyte, Philippines</p>
          <h1 className="fade-up fade-up-d2 hero-title">
            Spaces rooted<br />in <em>earth,</em><br />built for life.
          </h1>
          <p className="fade-up fade-up-d3 hero-description">
            Over a decade of designing homes, cultural spaces, and workplaces that honor local materials, climate, and community.
          </p>
          <div className="fade-up fade-up-d3 hero-buttons">
            <button className="submit-btn" onClick={() => scrollTo("projects")}>View Work</button>
            <span className="nav-link" onClick={() => scrollTo("contact")} style={{ fontSize: "13px" }}>Get in touch →</span>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1646215992874-2c10ace951b6?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Architecture" />
          <div className="hero-image-overlay" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div style={{ position: "relative" }}>
          <img src="./public/cropped_photo_sis.jpg" alt="Architect" className="about-image" />
          {/* <div style={{ position: "absolute", bottom: "-2rem", right: "-2rem", background: "#F5F0E8", padding: "1.5rem 2rem", border: "1px solid #C4B49A" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#2C2820" }}>12+</p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8C7B68", marginTop: "4px" }}>Years of Practice</p>
          </div> */}
        </div>
        <div>
          <p className="about-subtitle">About</p>
          <h2 className="about-title">Architecture as a dialogue with place</h2>
          <p className="about-description">
            I'm Scarlett Raven, a licensed architect based in Southern Leyte. My practice is built on the belief that the best buildings are inseparable from their context — the soil they rest on, the air they catch, and the people they shelter.
          </p>
          <p className="about-description">
            Drawing from vernacular Filipino building traditions and contemporary material research, I design spaces that are quiet, durable, and deeply alive.
          </p>
          {/* <div style={{ display: "flex", gap: "3rem" }}>
            {[["42", "Projects"], ["6", "Awards"], ["4", "Countries"]].map(([n, l]) => (
              <div key={l}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 300, color: "#B5956A" }}>{n}</p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8C7B68" }}>{l}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <div className="projects-filter">
          <div>
            <p className="projects-subTitle">Selected Work</p>
            <h2 className="projects-title">Projects</h2>
          </div>
          <div className="projects-filter-arrangement">
            {FILTERS.map(f => (
              <button key={f} className={`filter-btn ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
        <div className="projects-tiles">
          {filtered.map((p, i) => (
            <div key={p.id} className="project-card" style={{ animationDelay: `${i * 0.05}s` }}>
              <div style={{ overflow: "hidden" }}>
                <img src={p.image} alt={p.title} className="proj-img" />
              </div>
              <div className="project-tile-margin">
                <div className="project-tile-title">
                  <span className="project-tile-type">{p.type}</span>
                  <span className="project-tile-year">{p.year}</span>
                </div>
                <h3 className="project-tile-name">{p.title}</h3>
                <p className="project-tile-location">{p.location}</p>
                <p className="project-tile-description">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <p className="services-subtitle">What I Offer</p>
        <div className="services-description-margin">
          <h2 className="services-title">Services</h2>
          <p className="services-description">Each project is a collaboration — beginning with deep listening and ending in a place that feels inevitable.</p>
        </div>
        <div className="services-card">
          {services.map(s => (
            <div key={s.title} className="service-card" onClick={() => setSelectedService(s)}>
              <span className="services-icon">{s.icon}</span>
              <h3 className="services-card-name">{s.title}</h3>
              <p className="services-card-description">{s.desc}</p>
              <span className="service-more">Learn more →</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE MODAL */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>✕</button>
            <span className="modal-icon">{selectedService.icon}</span>
            <h3 className="modal-title">{selectedService.title}</h3>
            <p className="modal-desc">{selectedService.desc}</p>
            <ul className="modal-list">
              {selectedService.details.map(d => (
                <li key={d} className="modal-list-item">
                  <span className="modal-bullet">—</span>{d}
                </li>
              ))}
            </ul>
            <button className="submit-btn" onClick={() => { setSelectedService(null); scrollTo("contact"); }}>
              Get in Touch
            </button>
          </div>
        </div>
      )}


      {/* CONTACT */}
      <section id="contact" className="contact">
        <div>
          <p className="contact-label">Contact</p>
          <h2 className="contact-title">Let's build something meaningful together</h2>
          <p className="contact-description">Whether you have a project in mind or are simply at the beginning of your journey, I welcome the conversation. Every great space starts with a question.</p>
          <div className="contact-info">
            {[["Email", "scarlett.ravenatelier@gmail.com"], ["Studio", "Southern Leyte, Philippines"], ["Phone", "09126936662"]].map(([l, v]) => (
              <div key={l}>
                <p className="contact-info-label">{l}</p>
                <p className="contact-info-value">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          {submitted ? (
            <div className="contact-success">
              <p className="contact-success-title">Thank you.</p>
              <p className="contact-success-message">Your message has been received. I'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <label className="form-label">Name</label>
                <input required placeholder="Your full name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input required type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea required placeholder="Tell me about your project..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-brand">Scarlett Raven Architect</span>
        <span className="footer-copy">© 2026 — All Rights Reserved</span>
      </footer>
    </div>
  );
}
