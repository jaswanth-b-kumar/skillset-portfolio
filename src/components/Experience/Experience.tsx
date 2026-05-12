import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

function LivexLogo() {
  return (
    <div className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 bg-[#7B1D1D] shadow-md">
      <span className="text-white text-xs font-extrabold tracking-tight leading-none">LX</span>
    </div>
  );
}

function AccentureLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="Accenture">
      <rect width="36" height="36" rx="6" fill="#1a1a1a" />
      <text x="4" y="28" fontSize="28" fontWeight="900" fill="#A100FF" fontFamily="Arial, sans-serif">&gt;</text>
    </svg>
  );
}

type ExperienceEntry = {
  logo: React.ReactNode;
  title: string;
  company: string;
  period: string;
  tech: string[];
  bullets: string[];
  highlight?: boolean;
};

const EXPERIENCES: ExperienceEntry[] = [
  {
    logo: <LivexLogo />,
    company: "Liv-ex Ltd.",
    title: "Software Engineer",
    period: "Jun 2024 – Present",
    tech: ["React", "TypeScript", "Redux", "Node.js", "AWS", "Contentful", "Highcharts", "WebSocket", "i18next", "Vitest", "SonarQube", "Claude Code"],
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
    tech: ["JavaScript", "React", "TypeScript", "Angular", "Three.js", "jQuery", "REST APIs", "SharePoint"],
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
  const { ref: headingRef,  isVisible: headingVisible  } = useInView<HTMLDivElement>();
  const { ref: achieveRef,  isVisible: achieveVisible  } = useInView<HTMLDivElement>(0.1);
  const { ref: card1Ref,    isVisible: card1Visible    } = useInView<HTMLDivElement>(0.1);
  const { ref: card2Ref,    isVisible: card2Visible    } = useInView<HTMLDivElement>(0.1);

  return (
    <section className="bg-black w-full" id="experience">
      <div className="max-w-[1440px] mx-auto px-4 md:px-28 py-10 md:py-[60px] flex flex-col gap-5">

        {/* Heading */}
        <div
          ref={headingRef}
          className={cn(
            "display-font flex items-baseline justify-center gap-4 text-[28px] leading-[34px] md:text-[48px] md:leading-[56px] tracking-[-0.02em] text-white py-5 anim-fade-up",
            headingVisible && "in-view"
          )}
        >
          <span className="font-normal">My</span>
          <span className="font-extrabold">Experience</span>
        </div>

        {/* Hackathon Achievement Banner */}
        <div
          ref={achieveRef}
          className={cn(
            "hacka-card rounded-[12px] p-5 md:p-6 flex items-start md:items-center gap-4 md:gap-6 anim-fade-up",
            "bg-zinc-800/60 border border-zinc-700/50",
            achieveVisible && "in-view d-100"
          )}
        >
          <span className="text-3xl flex-shrink-0 select-none mt-0.5 md:mt-0" aria-label="medal">🎖️</span>
          <div className="flex flex-col gap-1.5 flex-1">
            <p className="text-zinc-200 font-semibold text-sm md:text-base leading-5 tracking-wide">
              UK-India AIxcelerate Hackathon 2026 — 4th Place
            </p>
            <p className="text-zinc-400 text-xs md:text-sm leading-5">
              Built <span className="text-white font-medium">Poopla</span>, an AI-assisted infant gut health screening app with Next.js 15, FastAPI, Python &amp; AWS across 7 services. Presented at the UK Pavilion &amp; UK AI Showcase.
            </p>
          </div>
          <div className="flex-shrink-0 hidden sm:flex flex-col items-end gap-1">
            <span className="text-xs text-zinc-500 mt-1">May 2026</span>
          </div>
        </div>

        {/* Experience timeline — desktop shows side line, mobile is just stacked cards */}
        <div className="relative flex gap-8 px-0 md:px-6 py-6 md:py-10">
          {/* Timeline line — desktop only */}
          <div className="hidden md:flex relative flex-shrink-0 w-5 flex-col items-center pt-6 pb-6">
            <div className="w-px bg-zinc-700 timeline-line absolute top-6 bottom-6" />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6 md:gap-8 flex-1">
            {EXPERIENCES.map((exp, i) => {
              const ref = i === 0 ? card1Ref : card2Ref;
              const visible = i === 0 ? card1Visible : card2Visible;
              return (
                <div
                  key={exp.company}
                  ref={ref}
                  className={cn(
                    "relative rounded-[12px] p-5 md:p-[30px_28px] flex flex-col gap-4 md:gap-5 transition-shadow duration-300",
                    "anim-fade-up",
                    i === 1 && "d-200",
                    visible && "in-view",
                    exp.highlight
                      ? "bg-zinc-800 exp-card-featured card-glow-red"
                      : "border border-zinc-700 hover:border-zinc-500"
                  )}
                >
                  {/* Timeline dot — desktop only */}
                  <div
                    className={cn(
                      "hidden md:block absolute -left-[41px] top-9 w-3.5 h-3.5 rounded-full border-2 z-10",
                      exp.highlight
                        ? "bg-[#7B1D1D] border-[#a83232] shadow-[0_0_8px_2px_rgba(123,29,29,0.5)]"
                        : "bg-zinc-600 border-zinc-500"
                    )}
                  />

                  {/* Current badge */}
                  {exp.highlight && (
                    <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-[#7B1D1D]/40 text-[#e57373] border border-[#7B1D1D]/60 tracking-wide">
                      Current
                    </span>
                  )}

                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6 flex-wrap">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="flex-shrink-0">{exp.logo}</div>
                      <div className="flex flex-col gap-0.5">
                        <h3 className="text-base md:text-xl font-semibold leading-6 md:leading-7 tracking-[-0.02em] text-white m-0">
                          {exp.title}
                        </h3>
                        <span className="text-sm font-semibold text-zinc-400 tracking-[0.02em]">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs md:text-sm font-semibold leading-5 tracking-[-0.02em] text-zinc-500 whitespace-nowrap flex-shrink-0 md:mt-1">
                      {exp.period}
                    </span>
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] md:text-[11px] font-semibold px-2 md:px-2.5 py-0.5 rounded-full bg-zinc-700/60 text-zinc-300 border border-zinc-600/50 tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2 pl-0 list-none m-0">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="text-xs md:text-sm font-normal leading-5 md:leading-6 tracking-[0.02em] text-zinc-300 flex gap-3">
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
      </div>
    </section>
  );
}
