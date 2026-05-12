import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export default function AboutMe() {
  const { ref: illusRef, isVisible: illusVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: textRef, isVisible: textVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section className="bg-white w-full" id="about">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex items-center justify-between gap-10">
        {/* Terminal illustration */}
        <div
          ref={illusRef}
          className={cn(
            "relative w-[526px] h-[526px] flex-shrink-0 anim-fade-left rounded-[24px] overflow-hidden bg-zinc-950 flex flex-col",
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
          <div className="flex-1 px-6 py-5 font-mono text-sm leading-7 select-none overflow-hidden">
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
              <span className="text-orange-300">"Senior SWE"</span>
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
              <span className="text-cyan-400">5</span>
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
              <span className="text-orange-300">"Node.js"</span>
              <span className="text-zinc-500">, </span>
              <span className="text-orange-300">"AWS"</span>
              <span className="text-zinc-500">,</span>
            </p>
            <p className="pl-12">
              <span className="text-orange-300">"FastAPI"</span>
              <span className="text-zinc-500">, </span>
              <span className="text-orange-300">"Python"</span>
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
              <p><span className="text-zinc-600">{"// "}</span><span className="text-zinc-400">10+ features shipped</span></p>
            </div>
          </div>

          {/* Blinking cursor */}
          <div className="px-6 pb-5 font-mono text-sm flex items-center gap-1">
            <span className="text-zinc-500">{">"}</span>
            <div className="w-2 h-4 bg-white/70 animate-pulse" />
          </div>
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className={cn(
            "flex flex-col gap-5 flex-1 max-w-[610px] anim-fade-right",
            textVisible && "in-view"
          )}
        >
          <div className="display-font flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-black py-5">
            <span className="font-normal">About</span>
            <span className="font-extrabold">Me</span>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              I&apos;m a Senior Software Engineer with 5+ years of experience
              building high-impact frontend products across fintech and
              enterprise environments. I specialise in React.js, TypeScript,
              and UI architecture, with a strong focus on performance
              engineering and production quality. My current role at Liv-ex in
              London places me in a lean, high-ownership setup where speed,
              quality, and product clarity are equally important.
            </p>
            <p className="text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              At Liv-ex, I&apos;m one of two React developers on a fine wine
              trading platform and have taken end-to-end ownership of the
              Market Intelligence module — from Contentful CMS integration
              to advanced search, real-time WebSocket features, and
              architecture work across a React + TypeScript monorepo. I
              shipped 10+ production features while maintaining 90% Sonar
              coverage and 99.9% platform uptime.
            </p>
            <p className="text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              Outside work, I reached 4th place at the
              UK-India AIxcelerate Hackathon 2026 with{" "}
              <em>Poopla</em> — an AI-assisted infant gut health screening app
              built on Next.js 15, FastAPI, and AWS, presented at the UK AI
              Showcase. I&apos;m passionate about AI-augmented development
              and regularly use Claude Code and GitHub Copilot to accelerate
              delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
