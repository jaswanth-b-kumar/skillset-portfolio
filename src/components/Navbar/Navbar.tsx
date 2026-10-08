import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About Me",   href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#project"    },
  { label: "Contact",    href: "#contact"    },
];

const RESUME_HREF = "/skillset-portfolio/Jaswanth_Kumar_Bevara_Resume.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-zinc-100 sticky top-0 z-50 backdrop-blur-sm">
      {/* Desktop + mobile top bar */}
      <div className="max-w-[1440px] mx-auto h-[64px] md:h-[88px] px-4 md:px-28 flex items-center justify-between gap-8">
        <a href="/" className="flex items-center gap-3 no-underline flex-shrink-0" aria-label="Home">
          <span className="display-font font-bold text-xl leading-6 tracking-[-0.02em] text-black capitalize">
            Jaswanth
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={cn(
                    "nav-link font-semibold text-base leading-6 tracking-[-0.02em] text-black no-underline",
                    "hover:opacity-60 transition-opacity"
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop resume button */}
        <Button asChild className="hidden md:flex flex-shrink-0">
          <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" download>
            Resume
            <FiDownload size={16} aria-hidden="true" />
          </a>
        </Button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-zinc-100 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-4 py-5 flex flex-col gap-5">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="font-semibold text-base leading-6 tracking-[-0.02em] text-black no-underline hover:opacity-60 transition-opacity"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button asChild className="self-start">
            <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" download>
              Resume
              <FiDownload size={16} aria-hidden="true" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
