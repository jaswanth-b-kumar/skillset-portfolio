import { useState } from "react";
import "./Contact.css";

const linkedinIcon =
  "https://www.figma.com/api/mcp/asset/54af594b-b293-4789-a09d-cb60260d2bbb";
const githubIcon =
  "https://www.figma.com/api/mcp/asset/be1aa231-6529-4677-b161-2c223c1131eb";
const twitterIcon =
  "https://www.figma.com/api/mcp/asset/0b0635e1-4eb5-48ce-8eda-7aef814fd28b";
const devIcon =
  "https://www.figma.com/api/mcp/asset/195c8775-01f6-4f57-8e2b-822f3fa28ba3";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up form submission
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        {/* Left: Form */}
        <div className="contact__form-col">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>
            <div className="contact__field">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>
            <div className="contact__field">
              <input
                type="url"
                name="website"
                placeholder="Your website (If exists)"
                value={form.website}
                onChange={handleChange}
                className="contact__input"
              />
            </div>
            <div className="contact__field">
              <textarea
                name="message"
                placeholder="How can I help?*"
                value={form.message}
                onChange={handleChange}
                className="contact__textarea"
                required
              />
            </div>

            <div className="contact__actions">
              <button type="submit" className="contact__submit-btn">
                Get In Touch
              </button>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-btn contact__social-btn--filled"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/jaswanth-b-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-btn contact__social-btn--outlined"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-btn contact__social-btn--outlined"
                aria-label="Twitter"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a
                href="https://dev.to"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-btn contact__social-btn--outlined"
                aria-label="Dev.to"
              >
                <img src={devIcon} alt="Dev.to" />
              </a>
            </div>
          </form>
        </div>

        {/* Right: CTA text */}
        <div className="contact__text-col">
          <div className="contact__cta">
            <div className="contact__cta-heading">
              <div className="contact__cta-line">
                <span className="contact__cta-bold">Let's</span>
                <span className="contact__cta-outline">talk</span>
                <span className="contact__cta-bold">for</span>
              </div>
              <p className="contact__cta-bold">Something special</p>
            </div>
            <p className="contact__cta-sub">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
          </div>

          <div className="contact__info">
            <p className="contact__email">jaswanthphot@gmail.com</p>
            <p className="contact__phone">+44 1234567890</p>
          </div>
        </div>
      </div>
    </section>
  );
}
