import { useState } from "react";
import { Briefcase, GitBranch, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type LucideIcon } from "lucide-react";

type SocialLink = {
  href: string;
  Icon: LucideIcon;
  label: string;
  filled: boolean;
};

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://linkedin.com/in/jaswanth-b-kumar", Icon: Briefcase, label: "LinkedIn", filled: true },
  { href: "https://github.com/jaswanth-b-kumar", Icon: GitBranch, label: "GitHub", filled: false },
  { href: "https://twitter.com", Icon: X, label: "Twitter", filled: false },
  { href: "https://dev.to", Icon: Terminal, label: "Dev.to", filled: false },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", website: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up form submission
  }

  return (
    <section className="bg-white w-full" id="contact">
      <div className="max-w-[1440px] mx-auto px-28 py-[60px] flex items-center justify-between gap-[60px]">
        {/* Left: Form */}
        <div className="flex-1 flex flex-col justify-center py-5">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <Input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              type="url"
              name="website"
              placeholder="Your website (If exists)"
              value={form.website}
              onChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="How can I help?*"
              value={form.message}
              onChange={handleChange}
              required
            />

            {/* Submit + socials row */}
            <div className="flex items-center gap-6 flex-wrap">
              <Button type="submit" className="text-xl font-semibold tracking-[0.02em]">
                Get In Touch
              </Button>

              {SOCIAL_LINKS.map(({ href, Icon, label, filled }) => (
                <Button
                  key={label}
                  asChild
                  variant={filled ? "icon" : "icon-outline"}
                  size="icon"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon size={20} strokeWidth={1.75} className={filled ? "text-white" : "text-black"} />
                  </a>
                </Button>
              ))}
            </div>
          </form>
        </div>

        {/* Right: CTA text */}
        <div className="flex-1 flex flex-col justify-center gap-10 py-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 text-[48px] font-extrabold leading-[56px] tracking-[-0.02em]">
              <div className="flex items-baseline gap-4 flex-wrap">
                <span className="text-black">Let's</span>
                <span className="text-stroke-black">talk</span>
                <span className="text-black">for</span>
              </div>
              <p className="text-black">Something special</p>
            </div>
            <p className="text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[28px] font-semibold leading-8 tracking-[-0.02em] text-black">
              jaswanthphot@gmail.com
            </p>
            <p className="text-[28px] font-semibold leading-8 tracking-[-0.02em] text-black">
              +44 1234567890
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
