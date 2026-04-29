import {
  type LucideIcon,
  GitBranch,
  Braces,
  Palette,
  Server,
  BookOpen,
  Network,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SkillCardProps = {
  icon: LucideIcon;
  label: string;
  selected?: boolean;
};

function SkillCard({ icon: Icon, label, selected = false }: SkillCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-8 w-[186px] h-[186px] p-6 border-2 border-black rounded-[4px] flex-shrink-0",
        selected ? "bg-black" : "bg-white"
      )}
    >
      <Icon
        size={56}
        strokeWidth={1.5}
        className={selected ? "text-white" : "text-black"}
      />
      <span
        className={cn(
          "text-xl font-bold leading-6 tracking-[-0.02em] text-center capitalize w-full",
          selected ? "text-white" : "text-black"
        )}
      >
        {label}
      </span>
    </div>
  );
}

const ROW_1: SkillCardProps[] = [
  { icon: GitBranch, label: "Git" },
  { icon: Braces, label: "JavaScript", selected: true },
  { icon: Palette, label: "Sass/Scss" },
  { icon: Server, label: "Nest.Js" },
  { icon: BookOpen, label: "Storybook" },
];

const ROW_2: SkillCardProps[] = [
  { icon: Server, label: "Nest.Js" },
  { icon: GitBranch, label: "Git" },
  { icon: BookOpen, label: "Storybook" },
  { icon: Network, label: "Socket.io" },
  { icon: Palette, label: "Sass/Scss" },
];

export default function Skills() {
  return (
    <section className="bg-white w-full" id="skills">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex flex-col gap-5">
        {/* Heading */}
        <div className="flex items-baseline justify-center gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-black py-5">
          <span className="font-normal">My</span>
          <span className="font-extrabold">Skills</span>
        </div>

        {/* Grid */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-between w-full py-5 flex-wrap gap-4">
            {ROW_1.map((skill) => (
              <SkillCard key={`r1-${skill.label}`} {...skill} />
            ))}
          </div>
          <div className="flex items-center justify-between w-full py-5 flex-wrap gap-4">
            {ROW_2.map((skill, i) => (
              <SkillCard key={`r2-${skill.label}-${i}`} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
