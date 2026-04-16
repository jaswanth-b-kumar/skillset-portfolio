import "./Skills.css";

const gitIcon =
  "https://www.figma.com/api/mcp/asset/fb36fc04-0c70-418a-9e80-4f84c57e2e2f";
const jsIcon =
  "https://www.figma.com/api/mcp/asset/2dea3301-b3c8-4d64-ad63-67b55e6a7a3e";
const sassIcon =
  "https://www.figma.com/api/mcp/asset/4bda0b73-f9ae-4e7a-a2a8-743843115033";
const nestIcon =
  "https://www.figma.com/api/mcp/asset/4b11354e-c854-4700-970b-2e2b3d2f552f";
const storybookIcon =
  "https://www.figma.com/api/mcp/asset/060aa548-b1c4-45fe-932e-f5163168305c";
const socketIcon =
  "https://www.figma.com/api/mcp/asset/e9654c15-9bd4-4915-84a4-2aab1d512af3";

type SkillCardProps = {
  icon: string;
  label: string;
  selected?: boolean;
};

function SkillCard({ icon, label, selected = false }: SkillCardProps) {
  return (
    <div className={`skill-card${selected ? " skill-card--selected" : ""}`}>
      <div className="skill-card__icon">
        <img
          src={icon}
          alt={label}
          style={selected ? { filter: "invert(1)" } : undefined}
        />
      </div>
      <span className="skill-card__label">{label}</span>
    </div>
  );
}

const ROW_1 = [
  { icon: gitIcon, label: "Git" },
  { icon: jsIcon, label: "JavaScript", selected: true },
  { icon: sassIcon, label: "Sass/Scss" },
  { icon: nestIcon, label: "Nest.Js" },
  { icon: storybookIcon, label: "Storybook" },
];

const ROW_2 = [
  { icon: nestIcon, label: "Nest.Js" },
  { icon: gitIcon, label: "Git" },
  { icon: storybookIcon, label: "Storybook" },
  { icon: socketIcon, label: "Socket.io" },
  { icon: sassIcon, label: "Sass/Scss" },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <div className="skills__heading">
          <span className="skills__heading-regular">My</span>
          <span className="skills__heading-bold">Skills</span>
        </div>

        <div className="skills__grid">
          <div className="skills__row">
            {ROW_1.map((skill) => (
              <SkillCard key={`r1-${skill.label}`} {...skill} />
            ))}
          </div>
          <div className="skills__row">
            {ROW_2.map((skill, i) => (
              <SkillCard key={`r2-${skill.label}-${i}`} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
