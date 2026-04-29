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
      style={{ position: "absolute", top, left, width, height, objectFit: "contain" }}
    />
  );
}

export default function AboutMe() {
  return (
    <section className="bg-white w-full" id="about">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex items-center justify-between gap-10">
        {/* Illustration */}
        <div className="relative w-[526px] h-[526px] flex-shrink-0">
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
        <div className="flex flex-col gap-5 flex-1 max-w-[610px]">
          <div className="flex items-baseline gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-black py-5">
            <span className="font-normal">About</span>
            <span className="font-extrabold">Me</span>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js &amp; Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital products
              to life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
            <p className="text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way. Now,
              7 years after starting my web development journey, I'm building
              cutting-edge web applications using modern technologies such as
              Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p className="text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
