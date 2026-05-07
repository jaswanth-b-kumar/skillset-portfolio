import { useState, useEffect } from "react";
import { FiLinkedin } from "react-icons/fi";
import { SiGithub, SiX, SiLeetcode } from "react-icons/si";
import { type IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroIllustration =
  "https://www.figma.com/api/mcp/asset/58ef063b-d805-4447-a892-95a2d8e15ba7";

const ROLES = [
  "Senior Software Engineer",
  "React · TypeScript Expert",
  "Fintech Platform Builder",
  "AI-Augmented Developer",
  "Hackathon Champion 🏆",
];

const STATS = [
  { value: "5+",   label: "Years Exp." },
  { value: "10+",  label: "Features Shipped" },
  { value: "8s→3s",label: "Page Load Win" },
  { value: "570+", label: "Commits @ Liv-ex" },
  { value: "#1",   label: "UK-India Hackathon" },
];

type SocialLink = { href: string; Icon: IconType; label: string; filled: boolean };

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://www.linkedin.com/in/jaswanth-bevara/", Icon: FiLinkedin,  label: "LinkedIn", filled: true  },
  { href: "https://github.com/jaswanth-b-kumar",          Icon: SiGithub,    label: "GitHub",   filled: false },
  { href: "https://x.com/jaswanth_b_k",                   Icon: SiX,         label: "X",        filled: false },
  { href: "https://leetcode.com/u/jaswanth-b-kumar/",     Icon: SiLeetcode,  label: "LeetCode", filled: false },
];

/* Floating achievement chips around the illustration */
const CHIPS = [
  { text: "🏆 #1 UK Hackathon", topPct: "6%",  rightPct: "-2%", dur: "6s",   offset: "-0.5s", cls: "chip-d1", rotate: "-2deg" },
  { text: "⚡ 8s → 3s Load",    topPct: "32%", rightPct: "-8%", dur: "5.5s", offset: "-3s",   cls: "chip-d2", rotate:  "1.5deg" },
  { text: "570+ Commits",        topPct: "58%", rightPct: "-6%", dur: "7s",   offset: "-1.5s", cls: "chip-d3", rotate: "-1.5deg" },
  { text: "99.9% Uptime",        topPct: "80%", rightPct: "-2%", dur: "5s",   offset: "-2.5s", cls: "chip-d4", rotate:  "2deg" },
];

function CyclingRole() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block font-semibold text-sm tracking-widest uppercase text-black transition-all duration-300"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(6px)" }}
    >
      {ROLES[idx]}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="bg-white w-full overflow-hidden" id="home">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex items-center justify-between gap-10">

        {/* Left: Text + Socials */}
        <div className="flex flex-col gap-10 flex-[0_0_600px] max-w-[600px]">

          {/* Status badge + cycling role */}
          <div className="hero-line d-50 flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full bg-white">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-xs font-bold tracking-wider uppercase text-black">Open to Roles</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full overflow-hidden min-w-[220px]">
              <CyclingRole />
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {/* Heading */}
            <div className="flex flex-col">
              <div className="hero-line d-100 flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-black">
                <span className="font-normal whitespace-nowrap">Hello I&apos;m</span>
                <span className="font-extrabold name-shimmer">Jaswanth.</span>
              </div>
              <div className="hero-line d-200 flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em]">
                <span className="font-extrabold text-black">Senior Software</span>
              </div>
              <div className="hero-line d-300 flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em] flex-wrap">
                <span className="font-extrabold text-stroke-black whitespace-nowrap">Engineer</span>
                <span className="font-normal text-black whitespace-nowrap">Based In</span>
                <span className="font-extrabold text-black whitespace-nowrap">London.</span>
              </div>
            </div>

            <p className="hero-line d-400 text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              Senior Software Engineer with 5+ years shipping scalable React and
              TypeScript products for fintech platforms. I turn complex
              requirements into elegant, performant user interfaces — from
              live trading dashboards to AI-powered applications.
            </p>

            <p className="hero-line d-500 text-sm font-semibold leading-5 tracking-[0.02em] text-zinc-400 italic">
              &ldquo;A UI is a conversation between a machine and a human. I just
              make sure it&rsquo;s a polite and beautiful one.&rdquo;
            </p>
          </div>

          {/* Social links */}
          <div className="hero-line d-600 flex items-center gap-8">
            {SOCIAL_LINKS.map(({ href, Icon, label, filled }) => (
              <Button key={label} asChild variant={filled ? "icon" : "icon-outline"} size="icon">
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={20} className={filled ? "text-white" : "text-black"} />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Right: Illustration + floating chips */}
        <div className="relative flex-[0_0_600px] max-w-[600px] flex items-center justify-end hero-line d-200">
          {/* Achievement chips */}
          {CHIPS.map((chip) => (
            <div
              key={chip.text}
              className={cn("chip-enter absolute z-10", chip.cls)}
              style={{ top: chip.topPct, right: chip.rightPct }}
            >
              <div
                className="animate-float"
                style={{ animationDuration: chip.dur, animationDelay: chip.offset }}
              >
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black rounded-full text-xs font-bold tracking-wide text-black shadow-[2px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap"
                  style={{ transform: `rotate(${chip.rotate})`, display: "inline-flex" }}
                >
                  {chip.text}
                </span>
              </div>
            </div>
          ))}

          <img
            src={heroIllustration}
            alt="Developer at work"
            className="w-full h-auto max-w-[500px] block animate-float relative z-0"
            style={{ animationDuration: "5s", animationDelay: "-1.5s" }}
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t-2 border-black bg-white">
        <div className="max-w-[1440px] mx-auto px-28 py-8 flex items-center justify-between gap-4 flex-wrap">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={cn(
                "flex flex-col items-center gap-1 flex-1 min-w-[100px] anim-stat-pop hero-line",
                `d-${(i + 7) * 100}`
              )}
            >
              <span className="text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-black">
                {value}
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
