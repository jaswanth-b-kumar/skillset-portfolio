import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const bgCircle =
  "https://www.figma.com/api/mcp/asset/0cdba0b7-f2d9-4b4a-bd11-e9265043b3da";
const charGroup4 =
  "https://www.figma.com/api/mcp/asset/80043519-a84b-42d0-a1d8-73e371736583";
const charGroup5 =
  "https://www.figma.com/api/mcp/asset/a3e57f89-c325-4d55-ab27-2cdf0212083a";
const charGroup2 =
  "https://www.figma.com/api/mcp/asset/b35fed36-c1aa-4631-aad7-5dec97536e63";
const charVector15 =
  "https://www.figma.com/api/mcp/asset/adf57b6b-f236-42e1-96d4-c4a83f0c6015";
const charGroup3 =
  "https://www.figma.com/api/mcp/asset/15027543-1c56-4e6f-8a34-d52f0aacfcb4";
const charGroup6 =
  "https://www.figma.com/api/mcp/asset/ab7a3eea-bd53-45d3-b5d3-6f3642491571";
const charGroup12 =
  "https://www.figma.com/api/mcp/asset/407f5b31-5040-4d58-ba5b-6904174502b5";
const charGroup8 =
  "https://www.figma.com/api/mcp/asset/388bef14-b33b-4d6d-9d72-8100131c19c1";

type LayerProps = {
  src: string;
  top: number;
  left: number;
  width: number;
  height: number;
  alt?: string;
};

function IllusLayer({ src, top, left, width, height, alt = "" }: LayerProps) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={!alt}
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        objectFit: "contain",
      }}
    />
  );
}

export default function AboutMe() {
  const { ref: illusRef, isVisible: illusVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: textRef, isVisible: textVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section className="bg-white w-full" id="about">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex items-center justify-between gap-10">
        {/* Illustration */}
        <div
          ref={illusRef}
          className={cn(
            "relative w-[526px] h-[526px] flex-shrink-0 anim-fade-left",
            illusVisible && "in-view"
          )}
        >
          <IllusLayer src={bgCircle} top={-2} left={-2} width={530} height={530} />
          <IllusLayer src={charGroup4} top={234} left={50} width={353} height={331} />
          <IllusLayer src={charGroup5} top={223} left={44} width={262} height={348} />
          <IllusLayer src={charGroup2} top={213} left={110} width={275} height={313} />
          <IllusLayer src={charVector15} top={228} left={208} width={267} height={327} />
          <IllusLayer src={charGroup3} top={223} left={222} width={258} height={336} />
          <IllusLayer src={charGroup6} top={356} left={120} width={148} height={88} />
          <IllusLayer src={charGroup12} top={38} left={191} width={130} height={113} />
          <IllusLayer
            src={charGroup8}
            top={59}
            left={203}
            width={120}
            height={157}
            alt="Developer character illustration"
          />
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
              Outside work, I won{" "}
              <strong className="text-black">1st place</strong> at the
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
