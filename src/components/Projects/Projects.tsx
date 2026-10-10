import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type Fact = { label: string; value: string };

type Project = {
  number: string;
  badge?: string;
  title: string;
  description: string;
  facts: Fact[];
  tech: string[];
  link: string;
  linkLabel: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Liv-ex Finance and Settlement Service",
    description:
      "The finance service behind settlement on the Liv-ex fine wine trading platform. I designed the charge data model and built 15+ REST endpoints in NestJS, Prisma and PostgreSQL, so that one API call raises every charge a settled trade creates, across 7 currencies. I also wrote the net statement and contra review logic, built the React screens staff use on top of it, and set up its deployment to AWS with Docker, Terraform and GitHub Actions.",
    facts: [
      { label: "Role",   value: "Full stack engineer" },
      { label: "Scope",  value: "15+ REST endpoints, 7 currencies" },
      { label: "Result", value: "One API call replaces manual charge entry" },
    ],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "React", "AWS", "Docker", "Terraform", "GitHub Actions"],
    link: "#contact",
    linkLabel: "Ask me about this work",
  },
  {
    number: "02",
    title: "Liv-ex Market Intelligence",
    description:
      "Delivered the Market Intelligence editorial platform on the Liv-ex fine wine trading site (500+ daily active users). Built article cards, single article view, multi-level search and filter UI, mobile layouts, permission-gated access, and a featured section with video background, all powered by Contentful CMS. Reduced critical page-load from 8s to 3s and boosted user engagement by 15%.",
    facts: [
      { label: "Role",   value: "Frontend owner" },
      { label: "Scope",  value: "500+ daily active users" },
      { label: "Result", value: "User engagement up 15%" },
    ],
    tech: ["React", "TypeScript", "Redux", "Contentful CMS", "Highcharts", "WebSocket", "i18next", "AWS"],
    link: "#contact",
    linkLabel: "Ask me about this work",
  },
  {
    number: "03",
    badge: "4th Place at the UK-India AIxcelerate Hackathon 2026",
    title: "Poopla: AI-Assisted Infant Gut Health Screening",
    description:
      "Led full-stack AI infant gut health screening development in a 5-member team: Next.js 15 frontend, FastAPI backend, asynchronous SQS inference worker, and Terraform-managed AWS infrastructure across 7 services. Engineered authenticated and anonymous inference paths with role-based access control and a clinical review queue. Presented the production-deployed system at the UK Pavilion at the AI Summit in Delhi, India, in February 2026.",
    facts: [
      { label: "Role",   value: "Full stack lead, team of 5" },
      { label: "Scope",  value: "7 AWS services on Terraform" },
      { label: "Result", value: "4th place, presented at the UK Pavilion, AI Summit, Delhi, February 2026" },
    ],
    tech: ["Next.js 15", "FastAPI", "Python", "PostgreSQL", "AWS", "Terraform", "Docker"],
    link: "https://web-production-6172f.up.railway.app/",
    linkLabel: "Open the live app",
  },
  {
    number: "04",
    title: "CarpeDiem: London Experiences Marketplace",
    description:
      "CarpeDiem is a marketplace that helps people in London find last-minute things to do. As the freelance UI/UX and part-time backend engineer, I designed and built the mobile-first web app in Next.js and Tailwind CSS, covering the landing page, pin and plan pages, offers and a bucket list. I also built reviews with photos and videos, shareable pin links, and the admin tools and API endpoints behind them.",
    facts: [
      { label: "Role",   value: "Freelance UI/UX and backend engineer" },
      { label: "Period", value: "Dec 2025 to Aug 2026" },
      { label: "Scope",  value: "150+ commits across UI, API and infrastructure" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Figma", "REST API", "PostgreSQL", "Terraform"],
    link: "https://carpediemldn.com/",
    linkLabel: "Visit carpediemldn.com",
  },
  {
    number: "05",
    title: "Skillset Portfolio",
    description:
      "I built this portfolio from scratch with React 18, TypeScript, Vite, and Tailwind CSS, following a Figma design system. It has scroll-triggered animations, category-filtered skills, floating hero chips, and a hackathon timeline. Deployed on GitHub Pages via CI/CD.",
    facts: [
      { label: "Role",   value: "Solo build" },
      { label: "Scope",  value: "Responsive single page site" },
      { label: "Result", value: "Live on GitHub Pages" },
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Figma", "GitHub Pages"],
    link: "https://github.com/jaswanth-b-kumar/skillset-portfolio",
    linkLabel: "View the source on GitHub",
  },
];

export default function Projects() {
  const { ref: headingRef, isVisible: headingVisible } = useInView<HTMLDivElement>();
  const { ref: p1Ref, isVisible: p1Visible } = useInView<HTMLElement>(0.1);
  const { ref: p2Ref, isVisible: p2Visible } = useInView<HTMLElement>(0.1);
  const { ref: p3Ref, isVisible: p3Visible } = useInView<HTMLElement>(0.1);
  const { ref: p4Ref, isVisible: p4Visible } = useInView<HTMLElement>(0.1);
  const { ref: p5Ref, isVisible: p5Visible } = useInView<HTMLElement>(0.1);

  const refs    = [p1Ref,    p2Ref,    p3Ref,    p4Ref,    p5Ref];
  const visibles = [p1Visible, p2Visible, p3Visible, p4Visible, p5Visible];

  return (
    <section className="bg-black w-full" id="project">
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
          <span className="font-extrabold">Projects</span>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-6 md:gap-8 py-5">
          {PROJECTS.map((project, i) => {
            const external = project.link.startsWith("http");
            const LinkIcon = external ? FiArrowUpRight : FiArrowRight;
            return (
              <article
                key={project.number}
                ref={refs[i]}
                className={cn(
                  "rounded-[12px] border border-zinc-700 hover:border-zinc-500 transition-colors duration-300",
                  "p-5 md:p-8 flex flex-col gap-5 md:gap-6 anim-fade-up",
                  visibles[i] && "in-view",
                  i > 0 && `d-${i * 100}`
                )}
              >
                {/* Number + badge */}
                <div className="flex items-center gap-4 flex-wrap">
                  <span
                    aria-hidden="true"
                    className="display-font text-stroke-white text-[32px] md:text-[44px] font-extrabold leading-none"
                  >
                    {project.number}
                  </span>
                  {project.badge && (
                    <span className="inline-flex text-xs font-bold px-3 py-1.5 bg-amber-400 text-black rounded-full tracking-wide badge-pulse">
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  {/* Details */}
                  <div className="flex-1 flex flex-col gap-4 min-w-0">
                    <h3 className="text-lg md:text-2xl font-bold leading-tight md:leading-8 tracking-[-0.02em] text-white m-0">
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

                    <a
                      href={project.link}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="inline-flex self-start items-center gap-2 hover:gap-3 mt-1 text-sm font-bold text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {project.linkLabel}
                      <LinkIcon size={16} aria-hidden="true" />
                    </a>
                  </div>

                  {/* At a glance */}
                  <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5 lg:content-start lg:w-[260px] lg:flex-shrink-0 m-0 pt-5 border-t border-zinc-800 lg:pt-0 lg:border-t-0 lg:pl-8 lg:border-l">
                    {project.facts.map(({ label, value }) => (
                      <div key={label} className="flex flex-col gap-1">
                        <dt className="text-[11px] font-bold tracking-widest uppercase text-zinc-500">
                          {label}
                        </dt>
                        <dd className="text-sm font-semibold leading-5 text-zinc-100 m-0">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
