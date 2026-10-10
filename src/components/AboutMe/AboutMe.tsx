import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export default function AboutMe() {
  const { ref: illusRef, isVisible: illusVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: textRef, isVisible: textVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section className="bg-white w-full" id="about">
      <div className="max-w-[1440px] mx-auto px-4 md:px-28 py-10 md:py-[60px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        {/* Terminal illustration */}
        <div
          ref={illusRef}
          className={cn(
            "relative w-full md:w-[526px] md:h-[526px] md:flex-shrink-0 anim-fade-left rounded-[24px] overflow-hidden bg-zinc-950 flex flex-col",
            illusVisible && "in-view"
          )}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 bg-zinc-900 border-b border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-zinc-500 font-mono tracking-wide">jaswanth.ts</span>
          </div>

          {/* Code body */}
          <div className="flex-1 px-5 md:px-6 py-4 md:py-5 font-mono text-xs md:text-sm leading-6 md:leading-7 select-none overflow-hidden">
            <p>
              <span className="text-purple-400">const </span>
              <span className="text-sky-300">developer</span>
              <span className="text-zinc-500"> = </span>
              <span className="text-yellow-300">{"{"}</span>
            </p>
            <p className="pl-6">
              <span className="text-emerald-400">name</span>
              <span className="text-zinc-500">: </span>
              <span className="text-orange-300">"Jaswanth B Kumar"</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-6">
              <span className="text-emerald-400">role</span>
              <span className="text-zinc-500">: </span>
              <span className="text-orange-300">"Senior Full Stack SWE"</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-6">
              <span className="text-emerald-400">location</span>
              <span className="text-zinc-500">: </span>
              <span className="text-orange-300">"London 🇬🇧"</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-6">
              <span className="text-emerald-400">yearsExp</span>
              <span className="text-zinc-500">: </span>
              <span className="text-cyan-400">6</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-6">
              <span className="text-emerald-400">stack</span>
              <span className="text-zinc-500">: </span>
              <span className="text-yellow-300">{"["}</span>
            </p>
            <p className="pl-12">
              <span className="text-orange-300">"React"</span>
              <span className="text-zinc-500">, </span>
              <span className="text-orange-300">"TypeScript"</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-12">
              <span className="text-orange-300">"NestJS"</span>
              <span className="text-zinc-500">, </span>
              <span className="text-orange-300">"PostgreSQL"</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-12">
              <span className="text-orange-300">"Node.js"</span>
              <span className="text-zinc-500">, </span>
              <span className="text-orange-300">"AWS"</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-6">
              <span className="text-yellow-300">{"]"}</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-6">
              <span className="text-emerald-400">passion</span>
              <span className="text-zinc-500">: </span>
              <span className="text-orange-300">"AI-augmented dev"</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p>
              <span className="text-yellow-300">{"}"}</span>
              <span className="text-zinc-500">;</span>
            </p>
            <div className="mt-4 border-t border-zinc-800 pt-4">
              <p><span className="text-zinc-600">{"// "}</span><span className="text-zinc-400">99.9% uptime maintained</span></p>
              <p><span className="text-zinc-600">{"// "}</span><span className="text-zinc-400">15+ features shipped</span></p>
            </div>
          </div>

          {/* Blinking cursor */}
          <div className="px-5 md:px-6 pb-4 md:pb-5 font-mono text-sm flex items-center gap-1">
            <span className="text-zinc-500">{">"}</span>
            <div className="w-2 h-4 bg-white/70 animate-pulse" />
          </div>
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className={cn(
            "flex flex-col gap-5 w-full md:flex-1 md:max-w-[610px] anim-fade-right",
            textVisible && "in-view"
          )}
        >
          <div className="display-font flex items-baseline gap-4 text-[28px] leading-[34px] md:text-[48px] md:leading-[56px] tracking-[-0.02em] text-black py-5">
            <span className="font-normal">About</span>
            <span className="font-extrabold">Me</span>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-sm md:text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              I&apos;m a Senior Full Stack Engineer with 6+ years of experience
              across fintech and enterprise products. I started out on the
              frontend and it&apos;s still where I&apos;m strongest. These
              days I also design the database, write the NestJS APIs and
              handle the AWS deployment for the features I build. I care
              about performance and about code that holds up in production.
              At Liv-ex in London I work in a small team where each engineer
              owns their features from start to finish.
            </p>
            <p className="text-sm md:text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              Liv-ex runs a trading platform for fine wine, and right now I
              work on its finance and settlement system. I built core parts
              of the NestJS finance service, including the charge data model,
              settlement charge generation, net statements and contra review.
              I also built the React screens that sit on top of it and set up
              its deployment to AWS. Before that I owned the Market
              Intelligence module, where I integrated Contentful CMS and
              built advanced search and real-time WebSocket features. Over
              that time I shipped 15+ production features while keeping Sonar
              coverage at 90% and platform uptime at 99.9%.
            </p>
            <p className="text-sm md:text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              Outside work, I reached 4th place at the
              UK-India AIxcelerate Hackathon 2026 with{" "}
              <em>Poopla</em>, an AI-assisted infant gut health screening app
              built on Next.js 15, FastAPI, and AWS. We presented it at the UK
              Pavilion at the AI Summit in Delhi, India, in February 2026.
              I&apos;m passionate about AI-augmented development
              and regularly use Claude Code and GitHub Copilot to accelerate
              delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
