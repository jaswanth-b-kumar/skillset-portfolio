import "./AboutMe.css";

/* About Me illustration layers (Figma assets) */
const bgCircle =
  "https://www.figma.com/api/mcp/asset/0cdba0b7-f2d9-4b4a-bd11-e9265043b3da";
const charGroup4 =
  "https://www.figma.com/api/mcp/asset/80043519-a84b-42d0-a1d8-73e371736583";
const charGroup5 =
  "https://www.figma.com/api/mcp/asset/a3e57f89-c325-4d55-ab27-2cdf0212083a";
const charGroup2 =
  "https://www.figma.com/api/mcp/asset/b35fed36-c1aa-4631-aad7-5dec97536e63";
const charVector15 =
  "https://www.figma.com/api/mcp/asset/adf57b6b-f236-42e1-96d4-c4a83f0c6015";
const charGroup3 =
  "https://www.figma.com/api/mcp/asset/15027543-1c56-4e6f-8a34-d52f0aacfcb4";
const charGroup6 =
  "https://www.figma.com/api/mcp/asset/ab7a3eea-bd53-45d3-b5d3-6f3642491571";
const charGroup12 =
  "https://www.figma.com/api/mcp/asset/407f5b31-5040-4d58-ba5b-6904174502b5";
const charGroup8 =
  "https://www.figma.com/api/mcp/asset/388bef14-b33b-4d6d-9d72-8100131c19c1";

export default function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        {/* Illustration */}
        <div className="about__illustration">
          <img
            className="about__illus-layer about__illus-bg"
            src={bgCircle}
            alt=""
            aria-hidden="true"
          />
          <img
            className="about__illus-layer about__illus-g4"
            src={charGroup4}
            alt=""
            aria-hidden="true"
          />
          <img
            className="about__illus-layer about__illus-g5"
            src={charGroup5}
            alt=""
            aria-hidden="true"
          />
          <img
            className="about__illus-layer about__illus-g2"
            src={charGroup2}
            alt=""
            aria-hidden="true"
          />
          <img
            className="about__illus-layer about__illus-v15"
            src={charVector15}
            alt=""
            aria-hidden="true"
          />
          <img
            className="about__illus-layer about__illus-g3"
            src={charGroup3}
            alt=""
            aria-hidden="true"
          />
          <img
            className="about__illus-layer about__illus-g6"
            src={charGroup6}
            alt=""
            aria-hidden="true"
          />
          <img
            className="about__illus-layer about__illus-g12"
            src={charGroup12}
            alt=""
            aria-hidden="true"
          />
          <img
            className="about__illus-layer about__illus-g8"
            src={charGroup8}
            alt="Developer character illustration"
          />
        </div>

        {/* Text content */}
        <div className="about__content">
          <div className="about__heading">
            <span className="about__heading-regular">About</span>
            <span className="about__heading-bold">Me</span>
          </div>

          <div className="about__paragraphs">
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js &amp; Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital products
              to life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way. Now,
              7 years after starting my web development journey, I'm building
              cutting-edge web applications using modern technologies such as
              Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
