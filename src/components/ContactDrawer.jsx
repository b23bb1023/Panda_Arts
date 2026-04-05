import { useState } from "react";
import { useCursor } from "../context/CursorContext";

export default function ContactDrawer({ open, onClose }) {
  const { setCursorType } = useCursor();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`drawer drawer--contact${open ? " drawer--open" : ""}`}>
      <button
        className="drawer__close"
        onClick={onClose}
        onMouseEnter={() => setCursorType("view")}
        onMouseLeave={() => setCursorType("default")}
      >
        Close ✕
      </button>

      <div className="drawer__body container">
        <p className="drawer__label">Contact</p>

        {submitted ? (
          <div className="contact-success">
            <h2>Thank you! 🐼</h2>
            <p>Your message has been received. We'll be in touch soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                onMouseEnter={() => setCursorType("default")}
              />
            </div>
            <div className="contact-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                onMouseEnter={() => setCursorType("default")}
              />
            </div>
            <div className="contact-field">
              <label>Message</label>
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                onMouseEnter={() => setCursorType("default")}
              />
            </div>
            <button
              type="submit"
              className="contact-submit"
              onMouseEnter={() => setCursorType("view")}
              onMouseLeave={() => setCursorType("default")}
            >
              Send Message →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
