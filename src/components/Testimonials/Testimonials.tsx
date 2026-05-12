import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type AchievementCard = {
  icon: string;
  stat: string;
  title: string;
  description: string;
  dark?: boolean;
};

const ACHIEVEMENTS: AchievementCard[] = [
  {
    icon: "🎖️",
    stat: "4th Place",
    title: "UK–India AIxcelerate\nHackathon 2026",
    description:
      "Built Poopla, a Next.js 15 + FastAPI infant gut health screening app, with a 5-member team. Presented the production-deployed system at the UK Pavilion and UK AI Showcase.",
    dark: false,
  },
  {
    icon: "⚡",
    stat: "8s → 3s",
    title: "Page Load\nOptimization",
    description:
      "Reduced critical page-load time by 62% through API and rendering optimizations at Liv-ex, maintaining 99.9% production uptime across high-traffic trading workflows.",
    dark: true,
  },
  {
    icon: "📈",
    stat: "+15% / +20%",
    title: "Measurable\nProduct Impact",
    description:
      "15% user engagement increase via Market Intelligence delivery; 20% platform stickiness boost from advanced search and filter features across 500+ daily active users.",
    dark: false,
  },
];

function AchievementCard({ icon, stat, title, description, dark = false }: AchievementCard) {
  return (
    <div
      className={cn(
        "rounded-[20px] p-10 flex flex-col items-center gap-6 w-[370px] flex-shrink-0",
        "shadow-[0px_6px_8px_0px_rgba(24,39,75,0.12),0px_8px_16px_0px_rgba(24,39,75,0.08)]",
        dark ? "bg-black border border-zinc-700" : "bg-white"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "text-4xl w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0",
          dark ? "bg-zinc-800" : "bg-zinc-100"
        )}
      >
        {icon}
      </div>

      {/* Stat */}
      <p
        className={cn(
          "text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-center",
          dark ? "text-white" : "text-black"
        )}
      >
        {stat}
      </p>

      <div className={cn("w-[120px] h-0.5 flex-shrink-0", dark ? "bg-zinc-600" : "bg-black")} />

      {/* Title */}
      <p
        className={cn(
          "text-xl font-bold leading-7 text-center whitespace-pre-line",
          dark ? "text-white" : "text-black"
        )}
      >
        {title}
      </p>

      {/* Description */}
      <p
        className={cn(
          "text-sm font-normal leading-6 tracking-[0.02em] text-center",
          dark ? "text-zinc-400" : "text-zinc-500"
        )}
      >
        {description}
      </p>
    </div>
  );
}

export default function Achievements() {
  const { ref: headingRef, isVisible: headingVisible } = useInView<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section className="bg-white w-full" id="achievements">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex flex-col gap-5">
        {/* Heading */}
        <div
          ref={headingRef}
          className={cn(
            "display-font flex items-baseline justify-center gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-black py-5 anim-fade-up",
            headingVisible && "in-view"
          )}
        >
          <span className="font-normal">Key</span>
          <span className="font-extrabold">Achievements</span>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="flex items-stretch justify-center gap-8 py-10 flex-wrap"
        >
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={a.stat}
              className={cn(
                "anim-scale-in",
                i === 0 && "d-100",
                i === 1 && "d-300",
                i === 2 && "d-500",
                cardsVisible && "in-view"
              )}
            >
              <AchievementCard {...a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
