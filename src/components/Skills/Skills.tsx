import { useState } from "react";
import { type IconType } from "react-icons";
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiPython,
  SiRedux, SiNextdotjs, SiAngular, SiFastapi, SiDocker, SiGit,
  SiTerraform, SiJest, SiGraphql, SiPostgresql, SiVitest,
  SiSass, SiVite, SiContentful,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

function makeTextIcon(text: string) {
  return function TextIcon({ size = 40, className }: { size?: number; className?: string }) {
    return (
      <span
        className={cn("font-extrabold font-mono leading-none text-center block", className)}
        style={{ fontSize: Math.max(14, size * 0.42) + "px" }}
      >
        {text}
      </span>
    );
  };
}

const HighchartsIcon = makeTextIcon("HC");
const WebSocketIcon  = makeTextIcon("WS");
const I18nIcon       = makeTextIcon("i18n");
const SonarIcon      = makeTextIcon("SQ");
const SnykIcon       = makeTextIcon("SN");
const ClaudeIcon     = makeTextIcon("CC");
const CopilotIcon    = makeTextIcon("GP");

type Category = "All" | "Frontend" | "Backend" | "Cloud & Tools" | "Testing" | "AI Dev";
const CATEGORIES: Category[] = ["All", "Frontend", "Backend", "Cloud & Tools", "Testing", "AI Dev"];

type Skill = {
  icon: IconType | React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  cats: Category[];
};

const SKILLS: Skill[] = [
  { icon: SiReact,         label: "React.js",      cats: ["Frontend"] },
  { icon: SiTypescript,    label: "TypeScript",     cats: ["Frontend"] },
  { icon: SiJavascript,    label: "JavaScript",     cats: ["Frontend"] },
  { icon: SiRedux,         label: "Redux",          cats: ["Frontend"] },
  { icon: SiNextdotjs,     label: "Next.js",        cats: ["Frontend", "Backend"] },
  { icon: SiAngular,       label: "Angular",        cats: ["Frontend"] },
  { icon: SiSass,          label: "SCSS",           cats: ["Frontend"] },
  { icon: HighchartsIcon,  label: "Highcharts",     cats: ["Frontend"] },
  { icon: SiNodedotjs,     label: "Node.js",        cats: ["Backend"] },
  { icon: SiPython,        label: "Python",         cats: ["Backend"] },
  { icon: SiFastapi,       label: "FastAPI",        cats: ["Backend"] },
  { icon: SiGraphql,       label: "GraphQL",        cats: ["Backend"] },
  { icon: SiPostgresql,    label: "PostgreSQL",     cats: ["Backend"] },
  { icon: WebSocketIcon,   label: "WebSocket",      cats: ["Backend"] },
  { icon: FaAws,           label: "AWS",            cats: ["Cloud & Tools"] },
  { icon: SiDocker,        label: "Docker",         cats: ["Cloud & Tools"] },
  { icon: SiTerraform,     label: "Terraform",      cats: ["Cloud & Tools"] },
  { icon: SiGit,           label: "Git",            cats: ["Cloud & Tools"] },
  { icon: SiVite,          label: "Vite",           cats: ["Cloud & Tools"] },
  { icon: SiContentful,    label: "Contentful",     cats: ["Cloud & Tools"] },
  { icon: I18nIcon,        label: "i18next",        cats: ["Cloud & Tools"] },
  { icon: SiJest,          label: "Jest",           cats: ["Testing"] },
  { icon: SiVitest,        label: "Vitest",         cats: ["Testing"] },
  { icon: SonarIcon,       label: "SonarQube",      cats: ["Testing"] },
  { icon: SnykIcon,        label: "Snyk",           cats: ["Testing"] },
  { icon: ClaudeIcon,      label: "Claude Code",    cats: ["AI Dev"] },
  { icon: CopilotIcon,     label: "GH Copilot",     cats: ["AI Dev"] },
];

type SkillCardProps = {
  icon: Skill["icon"];
  label: string;
  selected?: boolean;
  delayClass?: string;
  isVisible?: boolean;
};

function SkillCard({ icon: Icon, label, selected = false, delayClass = "", isVisible = false }: SkillCardProps) {
  return (
    <div
      className={cn(
        "skill-card group flex flex-col items-center justify-center gap-4 md:gap-8",
        "w-full aspect-square md:w-[186px] md:h-[186px] md:aspect-auto",
        "p-4 md:p-6 border-2 border-black rounded-[4px] cursor-default",
        "anim-scale-in",
        delayClass,
        isVisible && "in-view",
        selected ? "bg-black" : "bg-white hover:bg-black"
      )}
    >
      <Icon
        size={56}
        className={cn(
          "transition-colors duration-200 shrink-0",
          selected ? "text-white" : "text-black group-hover:text-white"
        )}
      />
      <span
        className={cn(
          "text-base md:text-xl font-bold leading-tight md:leading-6 tracking-[-0.02em] text-center capitalize w-full transition-colors duration-200",
          selected ? "text-white" : "text-black group-hover:text-white"
        )}
      >
        {label}
      </span>
    </div>
  );
}

const MARQUEE_ITEMS = SKILLS.map((s) => ({ icon: s.icon, label: s.label }));

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [filterKey, setFilterKey] = useState(0);

  const { ref: sectionRef, isVisible: sectionVisible } = useInView<HTMLDivElement>(0.05);
  const { ref: headingRef, isVisible: headingVisible } = useInView<HTMLDivElement>();

  function handleCategoryChange(cat: Category) {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    setFilterKey((k) => k + 1);
  }

  const filtered =
    activeCategory === "All" ? SKILLS : SKILLS.filter((s) => s.cats.includes(activeCategory));

  return (
    <section className="bg-white w-full" id="skills">
      <div className="max-w-[1440px] mx-auto px-4 md:px-28 py-10 md:py-[60px] flex flex-col gap-5">
        {/* Heading */}
        <div
          ref={headingRef}
          className={cn(
            "display-font flex items-baseline justify-center gap-4 text-[28px] leading-[34px] md:text-[48px] md:leading-[56px] tracking-[-0.02em] text-black py-5 anim-fade-up",
            headingVisible && "in-view"
          )}
        >
          <span className="font-normal">My</span>
          <span className="font-extrabold">Skills</span>
        </div>

        {/* Category filter tabs */}
        <div
          className={cn(
            "flex items-center justify-center gap-2 md:gap-3 flex-wrap pb-2 anim-fade-up",
            headingVisible && "in-view d-200"
          )}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-semibold tracking-tight rounded-full border-2 transition-all duration-200 whitespace-nowrap",
                activeCategory === cat
                  ? "bg-black text-white border-black scale-105"
                  : "bg-white text-black border-black hover:bg-zinc-100 hover:scale-105"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid — 2 cols on mobile, wrap on desktop */}
        <div ref={sectionRef}>
          <div
            key={filterKey}
            className="skills-grid-enter grid grid-cols-2 gap-4 md:flex md:items-center md:justify-center md:flex-wrap md:gap-4 py-5"
          >
            {filtered.map((skill, i) => (
              <SkillCard
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                selected={skill.label === "React.js" && activeCategory === "All"}
                delayClass={i < 9 ? `d-${(i + 1) * 100}` : ""}
                isVisible={sectionVisible}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling tech marquee strip */}
      <div className="border-t-2 border-b-2 border-black py-4 overflow-hidden bg-black">
        <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <Icon size={18} className="text-white flex-shrink-0" />
              <span className="text-xs font-bold tracking-widest uppercase text-white">{label}</span>
              <span className="text-zinc-600 pl-3">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
