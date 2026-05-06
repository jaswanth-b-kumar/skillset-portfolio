import { type IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiRedux,
  SiNextdotjs,
  SiDocker,
  SiGit,
  SiTailwindcss,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type SkillCardProps = {
  icon: IconType;
  label: string;
  selected?: boolean;
  delayClass?: string;
  isRowVisible?: boolean;
};

function SkillCard({
  icon: Icon,
  label,
  selected = false,
  delayClass = "",
  isRowVisible = false,
}: SkillCardProps) {
  return (
    <div
      className={cn(
        "skill-card group flex flex-col items-center justify-center gap-8 w-[186px] h-[186px] p-6 border-2 border-black rounded-[4px] flex-shrink-0 cursor-default",
        "anim-scale-in",
        delayClass,
        isRowVisible && "in-view",
        selected ? "bg-black" : "bg-white hover:bg-black"
      )}
    >
      <Icon
        size={56}
        className={cn(
          "transition-colors duration-200",
          selected ? "text-white" : "text-black group-hover:text-white"
        )}
      />
      <span
        className={cn(
          "text-xl font-bold leading-6 tracking-[-0.02em] text-center capitalize w-full transition-colors duration-200",
          selected ? "text-white" : "text-black group-hover:text-white"
        )}
      >
        {label}
      </span>
    </div>
  );
}

const ROW_1: Omit<SkillCardProps, "isRowVisible">[] = [
  { icon: SiReact, label: "React.js", selected: true },
  { icon: SiTypescript, label: "TypeScript", delayClass: "d-100" },
  { icon: SiJavascript, label: "JavaScript", delayClass: "d-200" },
  { icon: SiNodedotjs, label: "Node.js", delayClass: "d-300" },
  { icon: SiPython, label: "Python", delayClass: "d-400" },
];

const ROW_2: Omit<SkillCardProps, "isRowVisible">[] = [
  { icon: SiRedux, label: "Redux", delayClass: "d-100" },
  { icon: SiNextdotjs, label: "Next.js", delayClass: "d-200" },
  { icon: SiDocker, label: "Docker", delayClass: "d-300" },
  { icon: SiGit, label: "Git", delayClass: "d-400" },
  { icon: SiTailwindcss, label: "Tailwind CSS", delayClass: "d-500" },
];

export default function Skills() {
  const { ref: headingRef, isVisible: headingVisible } = useInView<HTMLDivElement>();
  const { ref: r1Ref, isVisible: r1Visible } = useInView<HTMLDivElement>(0.1);
  const { ref: r2Ref, isVisible: r2Visible } = useInView<HTMLDivElement>(0.1);

  return (
    <section className="bg-white w-full" id="skills">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex flex-col gap-5">
        {/* Heading */}
        <div
          ref={headingRef}
          className={cn(
            "flex items-baseline justify-center gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-black py-5 anim-fade-up",
            headingVisible && "in-view"
          )}
        >
          <span className="font-normal">My</span>
          <span className="font-extrabold">Skills</span>
        </div>

        {/* Grid */}
        <div className="flex flex-col items-center w-full">
          <div
            ref={r1Ref}
            className="flex items-center justify-between w-full py-5 flex-wrap gap-4"
          >
            {ROW_1.map((skill) => (
              <SkillCard
                key={`r1-${skill.label}`}
                {...skill}
                isRowVisible={r1Visible}
              />
            ))}
          </div>
          <div
            ref={r2Ref}
            className="flex items-center justify-between w-full py-5 flex-wrap gap-4"
          >
            {ROW_2.map((skill) => (
              <SkillCard
                key={`r2-${skill.label}`}
                {...skill}
                isRowVisible={r2Visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
