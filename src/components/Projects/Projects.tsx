import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const imgPoopla    = "https://www.figma.com/api/mcp/asset/217c39aa-82b7-49f4-bfc7-d0f5048d6e52";
const imgLivex     = "https://www.figma.com/api/mcp/asset/057f7b00-9974-493a-96f9-856139ff8129";
const imgPortfolio = "https://www.figma.com/api/mcp/asset/152f6789-6ec7-4c77-865e-35b57edc212a";

type Project = {
  number: string;
  badge?: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  link: string;
  linkLabel?: string;
  reverse?: boolean;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    badge: "UK-India AIxcelerate Hackathon 2026 — 4th Place",
    title: "Poopla — AI-Assisted Infant Gut Health Screening",
    description:
      "Led full-stack AI infant gut health screening development in a 5-member team: Next.js 15 frontend, FastAPI backend, asynchronous SQS inference worker, and Terraform-managed AWS infrastructure across 7 services. Engineered authenticated and anonymous inference paths with role-based access control and a clinical review queue. Presented the production-deployed system at the UK Pavilion and UK AI Showcase.",
    tech: ["Next.js 15", "FastAPI", "Python", "PostgreSQL", "AWS", "Terraform", "Docker"],
    image: imgPoopla,
    imageAlt: "Poopla app screenshot",
    link: "#",
    linkLabel: "Code & demo available on request",
  },
  {
    number: "02",
    title: "Liv-ex Market Intelligence",
    description:
      "Delivered a full-stack Market Intelligence editorial platform on the Liv-ex fine wine trading site (500+ daily active users). Built article cards, single article view, multi-level search and filter UI, mobile layouts, permission-gated access, and a featured section with video background — all powered by Contentful CMS. Reduced critical page-load from 8s to 3s and boosted user engagement by 15%.",
    tech: ["React", "TypeScript", "Redux", "Contentful CMS", "Highcharts", "WebSocket", "i18next", "AWS"],
    image: imgLivex,
    imageAlt: "Liv-ex Market Intelligence screenshot",
    link: "#",
    linkLabel: "Production platform (details on request)",
    reverse: true,
  },
  {
    number: "03",
    title: "Skillset Portfolio",
    description:
      "This portfolio — built from scratch with React 18, TypeScript, Vite, and Tailwind CSS following a Figma design system. Features scroll-triggered animations, category-filtered skills, floating hero chips, and a hackathon timeline. Deployed on GitHub Pages via CI/CD.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Figma", "GitHub Pages"],
    image: imgPortfolio,
    imageAlt: "Portfolio website screenshot",
    link: "https://jaswanth-b-kumar.github.io/skillset-portfolio/",
    linkLabel: "View live",
  },
];

export default function Projects() {
  const { ref: headingRef, isVisible: headingVisible } = useInView<HTMLDivElement>();
  const { ref: p1Ref, isVisible: p1Visible } = useInView<HTMLDivElement>(0.1);
  const { ref: p2Ref, isVisible: p2Visible } = useInView<HTMLDivElement>(0.1);
  const { ref: p3Ref, isVisible: p3Visible } = useInView<HTMLDivElement>(0.1);

  const refs    = [p1Ref,    p2Ref,    p3Ref];
  const visibles = [p1Visible, p2Visible, p3Visible];

  return (
    <section className="bg-black w-full" id="project">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex flex-col gap-5">
        {/* Heading */}
        <div
          ref={headingRef}
          className={cn(
            "display-font flex items-baseline justify-center gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-white py-5 anim-fade-up",
            headingVisible && "in-view"
          )}
        >
          <span className="font-normal">My</span>
          <span className="font-extrabold">Projects</span>
        </div>

        {/* Projects list */}
        {PROJECTS.map((project, i) => (
          <div
            key={project.number}
            ref={refs[i]}
            className={cn(
              "flex items-center gap-10 py-5 anim-fade-up",
              visibles[i] && "in-view",
              i > 0 && `d-${i * 100}`,
              project.reverse && "flex-row-reverse"
            )}
          >
            {/* Image with 3-D tilt */}
            <div
              className={cn(
                "flex-[0_0_594px] h-[476px] flex items-center overflow-hidden project-card",
                project.reverse && "justify-end"
              )}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-[530px] h-[398px] object-cover rounded-[18px] shadow-[0px_8px_18px_-6px_rgba(24,39,75,0.24),0px_12px_42px_-4px_rgba(24,39,75,0.24)] block"
              />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col gap-5 min-w-0">
              <span className="text-[48px] font-extrabold leading-[56px] tracking-[-0.02em] text-white">
                {project.number}
              </span>

              {project.badge && (
                <span className="inline-flex self-start text-xs font-bold px-3 py-1.5 bg-amber-400 text-black rounded-full tracking-wide badge-pulse">
                  {project.badge}
                </span>
              )}

              <h3 className="text-[32px] font-bold leading-10 tracking-[-0.02em] text-white m-0">
                {project.title}
              </h3>
              <p className="text-sm font-normal leading-6 tracking-[0.02em] text-zinc-400">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-semibold px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700 transition-colors hover:bg-zinc-700">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
