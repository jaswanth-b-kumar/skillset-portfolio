import "./Testimonials.css";

const avatar1 =
  "https://www.figma.com/api/mcp/asset/0b3dadc7-1470-4103-b3d1-a249d81db1f2";
const avatar2 =
  "https://www.figma.com/api/mcp/asset/e8824862-fac0-4b45-be87-ad7b08db6de1";
const quoteLight =
  "https://www.figma.com/api/mcp/asset/f11f6687-2f57-4556-8e4a-8f3b70003af7";
const quoteDark =
  "https://www.figma.com/api/mcp/asset/75549bfb-3375-41d1-8914-25a5bf9a7ac8";

type TestimonialCardProps = {
  avatar: string;
  quote: string;
  name: string;
  role: string;
  dark?: boolean;
};

function TestimonialCard({
  avatar,
  quote,
  name,
  role,
  dark = false,
}: TestimonialCardProps) {
  return (
    <div className={`testimonial-card${dark ? " testimonial-card--dark" : ""}`}>
      <div className="testimonial-card__avatar-wrap">
        <img
          className="testimonial-card__avatar"
          src={avatar}
          alt={name}
          width="96"
          height="96"
        />
        <img
          className="testimonial-card__quote-icon"
          src={dark ? quoteDark : quoteLight}
          alt=""
          aria-hidden="true"
        />
      </div>
      <p className="testimonial-card__quote">{quote}</p>
      <div className="testimonial-card__divider" />
      <p className="testimonial-card__name">{name}</p>
      <p className="testimonial-card__role">{role}</p>
    </div>
  );
}

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    avatar: avatar1,
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Evren Shah",
    role: "Designer",
  },
  {
    avatar: avatar2,
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Flora Sheen",
    role: "Designer",
    dark: true,
  },
  {
    avatar: avatar1,
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Evren Shah",
    role: "Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__heading">
          <span className="testimonials__heading-regular">My</span>
          <span className="testimonials__heading-bold">Testimonial</span>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
