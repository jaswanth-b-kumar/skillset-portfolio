import { FiLinkedin } from "react-icons/fi";
import { SiGithub, SiX, SiLeetcode } from "react-icons/si";
import { type IconType } from "react-icons";
import { Button } from "@/components/ui/button";

const heroIllustration =
  "https://www.figma.com/api/mcp/asset/58ef063b-d805-4447-a892-95a2d8e15ba7";

type SocialLink = {
  href: string;
  Icon: IconType;
  label: string;
  filled: boolean;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/jaswanth-bevara/",
    Icon: FiLinkedin,
    label: "LinkedIn",
    filled: true,
  },
  {
    href: "https://github.com/jaswanth-b-kumar",
    Icon: SiGithub,
    label: "GitHub",
    filled: false,
  },
  {
    href: "https://x.com/jaswanth_b_k",
    Icon: SiX,
    label: "X",
    filled: false,
  },
  {
    href: "https://leetcode.com/u/jaswanth-b-kumar/",
    Icon: SiLeetcode,
    label: "LeetCode",
    filled: false,
  },
];

export default function Hero() {
  return (
    <section className="bg-white w-full overflow-hidden" id="home">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex items-center justify-between gap-10">
        {/* Left: Text + Socials */}
        <div className="flex flex-col gap-12 flex-[0_0_600px] max-w-[600px]">
          <div className="flex flex-col gap-8">
            {/* Heading with staggered entrance */}
            <div className="flex flex-col">
              <div
                className="hero-line d-100 flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-black"
              >
                <span className="font-normal whitespace-nowrap">Hello I&apos;m</span>
                <span className="font-extrabold">Jaswanth.</span>
              </div>
              <div
                className="hero-line d-200 flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em]"
              >
                <span className="font-extrabold text-black">Senior Software</span>
              </div>
              <div
                className="hero-line d-300 flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em]"
              >
                <span className="font-extrabold text-stroke-black">Engineer</span>
                <span className="font-normal text-black">Based In</span>
                <span className="font-extrabold text-black">London.</span>
              </div>
            </div>

            <p
              className="hero-line d-400 text-base font-normal leading-6 tracking-[0.02em] text-zinc-500"
            >
              Senior Software Engineer with 5+ years shipping scalable React and
              TypeScript products for fintech platforms. I turn complex
              requirements into elegant, performant user interfaces — from
              live trading dashboards to AI-powered applications.
            </p>

            <p
              className="hero-line d-500 text-sm font-semibold leading-5 tracking-[0.02em] text-zinc-400 italic"
            >
              &ldquo;A UI is a conversation between a machine and a human. I just
              make sure it&rsquo;s a polite and beautiful one.&rdquo;
            </p>
          </div>

          {/* Social links */}
          <div className="hero-line d-600 flex items-center gap-8">
            {SOCIAL_LINKS.map(({ href, Icon, label, filled }) => (
              <Button
                key={label}
                asChild
                variant={filled ? "icon" : "icon-outline"}
                size="icon"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={20} className={filled ? "text-white" : "text-black"} />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Right: Illustration with float */}
        <div className="flex-[0_0_571px] max-w-[571px] flex items-center justify-end hero-line d-200">
          <img
            src={heroIllustration}
            alt="Developer at work"
            className="w-full h-auto max-w-[571px] block animate-float"
          />
        </div>
      </div>
    </section>
  );
}
