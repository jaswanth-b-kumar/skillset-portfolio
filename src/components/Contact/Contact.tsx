import { useState } from "react";
import { FiLinkedin } from "react-icons/fi";
import { SiGithub, SiX, SiLeetcode } from "react-icons/si";
import { type IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { ref: formRef, isVisible: formVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useInView<HTMLDivElement>(0.1);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailto = `mailto:jaswanth.k.bevara@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <section className="bg-white w-full" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 md:px-28 py-10 md:py-[60px] flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-[60px]">
        {/* Left: Form */}
        <div
          ref={formRef}
          className={cn(
            "w-full md:flex-1 flex flex-col justify-center py-5 anim-fade-left",
            formVisible && "in-view"
          )}
        >
          {submitted ? (
            <div className="flex flex-col gap-4 items-start">
              <p className="text-2xl font-bold text-black">Message sent! 🎉</p>
              <p className="text-base text-zinc-500">
                Thank you for reaching out. I&apos;ll get back to you shortly.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", website: "", message: "" });
                }}
              >
                Send another
              </Button>
            </div>
          ) : (
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
                placeholder="Your website (optional)"
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

              <div className="flex items-center gap-4 md:gap-6 flex-wrap">
                <Button
                  type="submit"
                  className="text-base md:text-xl font-semibold tracking-[0.02em]"
                >
                  Get In Touch
                </Button>

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
                      <Icon
                        size={20}
                        className={filled ? "text-white" : "text-black"}
                      />
                    </a>
                  </Button>
                ))}
              </div>
            </form>
          )}
        </div>

        {/* Right: CTA text */}
        <div
          ref={ctaRef}
          className={cn(
            "w-full md:flex-1 flex flex-col justify-center gap-8 md:gap-10 py-5 anim-fade-right",
            ctaVisible && "in-view"
          )}
        >
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="display-font flex flex-col gap-2 md:gap-3 text-[28px] leading-[34px] md:text-[48px] md:leading-[56px] font-extrabold tracking-[-0.02em]">
              <div className="flex items-baseline gap-3 md:gap-4 flex-wrap">
                <span className="text-black">Let&apos;s</span>
                <span className="text-stroke-black">talk</span>
                <span className="text-black">for</span>
              </div>
              <p className="text-black">Something special</p>
            </div>
            <p className="text-sm md:text-base font-normal leading-6 tracking-[0.02em] text-zinc-500">
              Open to senior frontend roles, interesting engineering problems,
              and collaborations where craft and performance both matter.
              Let&apos;s build something exceptional together.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <a
              href="mailto:jaswanth.k.bevara@gmail.com"
              className="text-lg md:text-[28px] font-semibold leading-7 md:leading-8 tracking-[-0.02em] text-black hover:opacity-70 transition-opacity break-all"
            >
              jaswanth.k.bevara@gmail.com
            </a>
            <a
              href="tel:+4407356095607"
              className="text-lg md:text-[28px] font-semibold leading-7 md:leading-8 tracking-[-0.02em] text-black hover:opacity-70 transition-opacity"
            >
              +44 07356 095607
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
