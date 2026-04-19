import "./Experience.css";

function GoogleLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Google"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function YouTubeLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-label="YouTube"
    >
      <rect x="0" y="5" width="32" height="22" rx="5" fill="#FF0000" />
      <path d="M13 10.5l9 5.5-9 5.5V10.5z" fill="white" />
    </svg>
  );
}

function AppleLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="white"
      aria-label="Apple"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

type ExperienceEntry = {
  logo: React.ReactNode;
  title: string;
  period: string;
  description: string;
  highlight?: boolean;
};

const EXPERIENCES: ExperienceEntry[] = [
  {
    logo: <GoogleLogo />,
    title: "Lead Software Engineer at Google",
    period: "Nov 2019 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    logo: <YouTubeLogo />,
    title: "Software Engineer at Youtube",
    period: "Jan 2017 - Oct 2019",
    description:
      "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    highlight: true,
  },
  {
    logo: <AppleLogo />,
    title: "Junior Software Engineer at Apple",
    period: "Jan 2016 - Dec 2017",
    description:
      "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
  },
];

export default function Experience() {
  return (
    <section className="experience">
      <div className="experience__inner">
        <div className="experience__heading">
          <span className="experience__heading-regular">My</span>
          <span className="experience__heading-bold">Experience</span>
        </div>

        <div className="experience__list">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              className={`experience__card${exp.highlight ? " experience__card--highlight" : ""}`}
            >
              <div className="experience__card-header">
                <div className="experience__card-left">
                  <div className="experience__logo">{exp.logo}</div>
                  <h3 className="experience__title">{exp.title}</h3>
                </div>
                <span className="experience__period">{exp.period}</span>
              </div>
              <p className="experience__description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
