import { Briefcase, GitBranch, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroIllustration =
  "https://www.figma.com/api/mcp/asset/5d75fed4-13fc-4913-b592-e596608509c8";

const SOCIAL_LINKS = [
  { href: "https://linkedin.com/in/jaswanth-b-kumar", Icon: Briefcase, label: "LinkedIn", filled: true },
  { href: "https://github.com/jaswanth-b-kumar", Icon: GitBranch, label: "GitHub", filled: false },
  { href: "https://twitter.com", Icon: X, label: "Twitter", filled: false },
  { href: "https://dev.to", Icon: Terminal, label: "Dev.to", filled: false },
] as const;

export default function Hero() {
  return (
    <section className="bg-white w-full" id="home">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex items-center justify-between gap-10">
        {/* Left: Text + Socials */}
        <div className="flex flex-col gap-12 flex-[0_0_600px] max-w-[600px]">
          <div className="flex flex-col gap-8">
            {/* Heading */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-black">
                <span className="font-normal whitespace-nowrap">Hello I'am</span>
                <span className="font-extrabold">Jaswanth.</span>
              </div>
              <div className="flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em]">
                <span className="font-extrabold text-black">Software</span>
                <span className="font-extrabold text-stroke-black">Engineer</span>
              </div>
              <div className="flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-black">
                <span className="font-normal">Based In</span>
                <span className="font-extrabold">London.</span>
              </div>
            </div>

            <p className="text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              I'm a passionate, self-proclaimed developer who specializes in full
              stack development (React.js &amp; Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital products
              to life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-8">
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
                  <Icon size={20} strokeWidth={1.75} className={filled ? "text-white" : "text-black"} />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex-[0_0_571px] max-w-[571px] flex items-center justify-end">
          <img
            src={heroIllustration}
            alt="Developer at work"
            className="w-full h-auto max-w-[571px] block"
          />
        </div>
      </div>
    </section>
  );
}
