import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const imgCrypto =
  "https://www.figma.com/api/mcp/asset/c943b0bb-aed6-4d84-8dae-48e4a20d9382";
const imgEuphoria =
  "https://www.figma.com/api/mcp/asset/f20694f9-37e4-45f5-9c35-3831ff0ff415";
const imgBlog =
  "https://www.figma.com/api/mcp/asset/3e5921a2-0c85-4ad0-abf8-5444e2d89611";

type Project = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  reverse?: boolean;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Crypto Screener Application",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: imgCrypto,
    imageAlt: "Crypto Screener Application screenshot",
    link: "#",
  },
  {
    number: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: imgEuphoria,
    imageAlt: "Euphoria Ecommerce website screenshot",
    link: "#",
    reverse: true,
  },
  {
    number: "03",
    title: "Blog Website Template",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: imgBlog,
    imageAlt: "Blog website screenshot",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-black w-full" id="project">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex flex-col gap-5">
        {/* Heading */}
        <div className="flex items-baseline justify-center gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-white py-5">
          <span className="font-normal">My</span>
          <span className="font-extrabold">Projects</span>
        </div>

        {/* Projects list */}
        {PROJECTS.map((project) => (
          <div
            key={project.number}
            className={cn(
              "flex items-center gap-10 py-5",
              project.reverse && "flex-row-reverse"
            )}
          >
            {/* Image */}
            <div
              className={cn(
                "flex-[0_0_594px] h-[476px] flex items-center overflow-hidden",
                project.reverse && "justify-end"
              )}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-[530px] h-[398px] object-cover rounded-[18px] shadow-[0px_8px_18px_-6px_rgba(24,39,75,0.12),0px_12px_42px_-4px_rgba(24,39,75,0.12)] block"
              />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col gap-7 min-w-0">
              <span className="text-[48px] font-extrabold leading-[56px] tracking-[-0.02em] text-white">
                {project.number}
              </span>
              <h3 className="text-[32px] font-bold leading-10 tracking-[-0.02em] text-white m-0">
                {project.title}
              </h3>
              <p className="text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
                {project.description}
              </p>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white w-5 h-5 p-0 hover:bg-transparent hover:opacity-70"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={20} strokeWidth={1.5} />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
