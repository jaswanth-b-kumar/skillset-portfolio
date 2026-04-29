import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const avatar1 =
  "https://www.figma.com/api/mcp/asset/0b3dadc7-1470-4103-b3d1-a249d81db1f2";
const avatar2 =
  "https://www.figma.com/api/mcp/asset/e8824862-fac0-4b45-be87-ad7b08db6de1";

type TestimonialCardProps = {
  avatar: string;
  quote: string;
  name: string;
  role: string;
  dark?: boolean;
};

function TestimonialCard({ avatar, quote, name, role, dark = false }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-[20px] p-10 flex flex-col items-center gap-6 w-[370px] flex-shrink-0",
        "shadow-[0px_6px_8px_0px_rgba(24,39,75,0.12),0px_8px_16px_0px_rgba(24,39,75,0.08)]",
        dark ? "bg-black" : "bg-white"
      )}
    >
      {/* Avatar + quote badge */}
      <div className="relative flex-shrink-0">
        <img
          src={avatar}
          alt={name}
          width="96"
          height="96"
          className="w-24 h-24 rounded-full object-cover block"
        />
        <div
          className={cn(
            "absolute -bottom-2 -right-2 w-[30px] h-[30px] rounded-full flex items-center justify-center",
            dark ? "bg-white" : "bg-black"
          )}
        >
          <Quote
            size={14}
            strokeWidth={2}
            className={dark ? "text-black" : "text-white"}
          />
        </div>
      </div>

      <p
        className={cn(
          "text-base font-normal leading-5 tracking-[0.02em] text-center w-full",
          dark ? "text-white" : "text-neutral-600"
        )}
      >
        {quote}
      </p>

      <div className={cn("w-[120px] h-0.5 flex-shrink-0", dark ? "bg-white" : "bg-black")} />

      <p
        className={cn(
          "text-xl font-semibold leading-6 tracking-[-0.02em] text-center capitalize w-full",
          dark ? "text-white" : "text-neutral-600"
        )}
      >
        {name}
      </p>

      <p
        className={cn(
          "text-base font-semibold leading-5 tracking-[-0.02em] text-center w-full",
          dark ? "text-white" : "text-zinc-500"
        )}
      >
        {role}
      </p>
    </div>
  );
}

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    avatar: avatar1,
    quote: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Evren Shah",
    role: "Designer",
  },
  {
    avatar: avatar2,
    quote: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Flora Sheen",
    role: "Designer",
    dark: true,
  },
  {
    avatar: avatar1,
    quote: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Evren Shah",
    role: "Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex flex-col gap-5">
        {/* Heading */}
        <div className="flex items-baseline justify-center gap-4 text-[48px] leading-[56px] tracking-[-0.02em] text-black py-5">
          <span className="font-normal">My</span>
          <span className="font-extrabold">Testimonial</span>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-between gap-6 px-6 py-10 flex-wrap">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
