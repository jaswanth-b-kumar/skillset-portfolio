import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

function LivexLogo() {
  return (
    <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 bg-[#7B1D1D]">
      <span className="text-white text-[10px] font-extrabold tracking-tight leading-none">
        LX
      </span>
    </div>
  );
}

function AccentureLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-label="Accenture"
    >
      <text
        x="2"
        y="26"
        fontSize="28"
        fontWeight="900"
        fill="#A100FF"
        fontFamily="Arial, sans-serif"
      >
        &gt;
      </text>
    </svg>
  );
}

type Bullet = string;

type ExperienceEntry = {
  logo: React.ReactNode;
  title: string;
  company: string;
  period: string;
  tech: string;
  bullets: Bullet[];
  highlight?: boolean;
};

const EXPERIENCES: ExperienceEntry[] = [
  {
    logo: <LivexLogo />,
    company: "Liv-ex Ltd.",
    title: "Software Engineer",
    period: "Jun 2024 – Present",
    tech: "React · TypeScript · Node.js · AWS · Contentful · Highcharts · Redux · WebSocket · i18next · Claude Code",
    bullets: [
      "Owned Market Intelligence end-to-end — shipped React/TypeScript features from design through production, increasing user engagement by 15%",
      "Integrated Contentful headless CMS, eliminating 1 engineering day per article across 2,000+ Market Intelligence pieces and cutting editorial dependency on engineering",
      "Shipped 10+ platform features: Advanced Search (3 phases), WebSocket-driven Market Price Confidence, Offex data integration, and Highcharts visualizations — boosting platform stickiness by 20%",
      "Reduced critical page-load from 8s → 3s through API and rendering optimizations, maintaining 99.9% uptime on high-traffic trading workflows",
      "Contributed to React + TypeScript monorepo (lvx5): shared UI primitives, theming, i18n, infinite-scroll table interactions across 2 app contexts",
      "Maintained 90% Sonar coverage; incorporated Claude Code and GitHub Copilot to accelerate PR-ready delivery and cut boilerplate effort",
    ],
    highlight: true,
  },
  {
    logo: <AccentureLogo />,
    company: "Accenture",
    title: "Advanced Application Engineering Senior Analyst",
    period: "Sep 2020 – Apr 2024",
    tech: "JavaScript · React · TypeScript · Angular · Three.js · jQuery · REST APIs · SharePoint",
    bullets: [
      "Delivered 50+ JavaScript SharePoint-hosted microsites for global stakeholders across India, US and Europe — owning the full frontend implementation lifecycle",
      "Built animation-heavy, cross-browser responsive interfaces using Three.js and Scrollify for high-engagement 2D/3D user experiences under tight release cycles",
      "Promoted to Senior Analyst: led React-based design library development providing 1,000+ reusable UI templates, reducing frontend widget effort by 70%",
      "Mentored junior developers, led code reviews, and drove sprint planning for a team of 8, accelerating application performance by 20%",
      "Architected TypeScript and Angular frontend for an internal finance application, improving page load times by 25%",
    ],
  },
];

export default function Experience() {
  const { ref: headingRef, isVisible: headingVisible } = useInView<HTMLDivElement>();
  const { ref: card1Ref, isVisible: card1Visible } = useInView<HTMLDivElement>(0.1);
  const { ref: card2Ref, isVisible: card2Visible } = useInView<HTMLDivElement>(0.1);

  return (
    <section className="bg-black w-full" id="experience">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex flex-col gap-5">
        {/* Heading */}
        <div
          ref={headingRef}
          className={cn(
            "flex items-baseline justify-center gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-white py-5 anim-fade-up",
            headingVisible && "in-view"
          )}
        >
          <span className="font-normal">My</span>
          <span className="font-extrabold">Experience</span>
        </div>

        {/* List */}
        <div className="flex flex-col gap-8 px-6 py-10">
          {EXPERIENCES.map((exp, i) => {
            const ref = i === 0 ? card1Ref : card2Ref;
            const visible = i === 0 ? card1Visible : card2Visible;
            return (
              <div
                key={exp.company}
                ref={ref}
                className={cn(
                  "rounded-[10px] p-[30px_24px] flex flex-col gap-5",
                  "anim-fade-up",
                  i === 1 && "d-200",
                  visible && "in-view",
                  exp.highlight ? "bg-zinc-800" : "border border-zinc-600"
                )}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="flex-shrink-0">{exp.logo}</div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-2xl font-semibold leading-7 tracking-[-0.02em] text-white m-0">
                        {exp.title}
                      </h3>
                      <span className="text-sm font-semibold text-zinc-400 tracking-[0.02em]">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold leading-5 tracking-[-0.02em] text-zinc-400 whitespace-nowrap flex-shrink-0 mt-1">
                    {exp.period}
                  </span>
                </div>

                {/* Tech tags */}
                <p className="text-xs font-semibold text-zinc-500 tracking-[0.04em] uppercase leading-5">
                  {exp.tech}
                </p>

                {/* Bullet points */}
                <ul className="flex flex-col gap-2 pl-0 list-none m-0">
                  {exp.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="text-sm font-normal leading-6 tracking-[0.02em] text-zinc-300 flex gap-3"
                    >
                      <span className="text-zinc-500 flex-shrink-0 mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
