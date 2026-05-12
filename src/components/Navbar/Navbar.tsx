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

function LogoIcon() {
  return (
    <svg width="25" height="36" viewBox="120 34 25 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M143.529 46.2118C143.529 50.8819 140.762 54.9082 136.779 56.7351C138.461 55.3496 139.532 53.248 139.532 50.896C139.532 46.7642 136.226 43.4042 132.112 43.3205C132.057 43.3167 132.008 43.3167 131.953 43.3167C131.898 43.3167 131.848 43.3167 131.794 43.3205C130.267 43.4033 129.059 44.6664 129.059 46.2108V60.6814C129.059 65.4748 125.17 69.3638 120.376 69.3638V46.2118C120.376 39.8193 125.56 34.6353 131.953 34.6353C138.345 34.6353 143.529 39.8193 143.529 46.2118Z"
        fill="black"
      />
      <path
        d="M133.999 48.2582C135.129 47.128 135.129 45.2956 133.999 44.1654C132.869 43.0352 131.036 43.0352 129.906 44.1654C128.776 45.2956 128.776 47.128 129.906 48.2582C131.036 49.3884 132.869 49.3884 133.999 48.2582Z"
        fill="black"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-zinc-100 sticky top-0 z-50 backdrop-blur-sm">
      {/* Desktop + mobile top bar */}
      <div className="max-w-[1440px] mx-auto h-[64px] md:h-[88px] px-4 md:px-28 flex items-center justify-between gap-8">
        <a href="/" className="flex items-center gap-3 no-underline flex-shrink-0" aria-label="Home">
          <LogoIcon />
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
