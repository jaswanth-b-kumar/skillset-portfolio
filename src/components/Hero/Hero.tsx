import "./Hero.css";

const heroIllustration =
  "https://www.figma.com/api/mcp/asset/5d75fed4-13fc-4913-b592-e596608509c8";
const linkedinIcon =
  "https://www.figma.com/api/mcp/asset/54af594b-b293-4789-a09d-cb60260d2bbb";
const githubIcon =
  "https://www.figma.com/api/mcp/asset/f99e2bce-cc21-4695-8056-c4719e3dc3e0";
const twitterIcon =
  "https://www.figma.com/api/mcp/asset/0b0635e1-4eb5-48ce-8eda-7aef814fd28b";
const devIcon =
  "https://www.figma.com/api/mcp/asset/195c8775-01f6-4f57-8e2b-822f3fa28ba3";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__heading">
              <div className="hero__line">
                <span className="hero__regular">Hello I'am</span>
                <span className="hero__extrabold">Jaswanth.</span>
              </div>
              <div className="hero__line">
                <span className="hero__extrabold">Software</span>
                <span className="hero__outline">Engineer</span>
              </div>
              <div className="hero__line">
                <span className="hero__regular">Based In</span>
                <span className="hero__extrabold">London.</span>
              </div>
            </div>
            <p className="hero__description">
              I'm a passionate, self-proclaimed developer who specializes in full
              stack development (React.js &amp; Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital products
              to life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
          </div>

          <div className="hero__socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-btn hero__social-btn--filled"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/jaswanth-b-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-btn hero__social-btn--outlined"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-btn hero__social-btn--outlined"
              aria-label="Twitter"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-btn hero__social-btn--outlined"
              aria-label="Dev.to"
            >
              <img src={devIcon} alt="Dev.to" />
            </a>
          </div>
        </div>

        <div className="hero__illustration">
          <img src={heroIllustration} alt="Developer at work" />
        </div>
      </div>
    </section>
  );
}
