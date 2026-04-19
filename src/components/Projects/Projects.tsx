import { ExternalLink } from "lucide-react";
import "./Projects.css";

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
  link?: string;
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
    <section className="projects" id="project">
      <div className="projects__inner">
        <div className="projects__heading">
          <span className="projects__heading-regular">My</span>
          <span className="projects__heading-bold">Projects</span>
        </div>

        {PROJECTS.map((project) => (
          <div
            key={project.number}
            className={`project-item${project.reverse ? " project-item--reverse" : ""}`}
          >
            <div className="project-item__image">
              <img src={project.image} alt={project.imageAlt} />
            </div>
            <div className="project-item__details">
              <span className="project-item__number">{project.number}</span>
              <h3 className="project-item__title">{project.title}</h3>
              <p className="project-item__description">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="project-item__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={20} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
