"use client";

export function Graphic({
  kind,
}: {
  kind: "eyes" | "burst" | "orbit" | "steps" | "spark" | "window";
}) {
  if (kind === "eyes")
    return (
      <div className="draw-eyes" aria-hidden="true">
        <span className="draw-eye">
          <i />
        </span>
        <span className="draw-eye">
          <i />
        </span>
      </div>
    );
  if (kind === "burst")
    return (
      <svg
        className="draw-burst"
        viewBox="0 0 240 180"
        fill="none"
        aria-hidden="true"
      >
        {Array.from({ length: 24 }, (_, i) => (
          <ellipse
            key={i}
            cx="120"
            cy="90"
            rx="20"
            ry="76"
            stroke="currentColor"
            strokeWidth="1.2"
            transform={`rotate(${i * 7.5} 120 90)`}
          />
        ))}
        <circle cx="120" cy="90" r="24" fill="currentColor" />
      </svg>
    );
  if (kind === "orbit")
    return (
      <svg
        className="draw-orbit"
        viewBox="0 0 240 180"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="120"
          cy="90"
          rx="95"
          ry="42"
          stroke="currentColor"
          transform="rotate(-30 120 90)"
        />
        <ellipse
          cx="120"
          cy="90"
          rx="95"
          ry="42"
          stroke="currentColor"
          transform="rotate(30 120 90)"
        />
        <circle
          cx="120"
          cy="90"
          r="33"
          fill="var(--yellow)"
          stroke="currentColor"
        />
        <path
          d="m103 98 32-20m-20-3 22 1-9 20"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="48" cy="111" r="9" fill="currentColor" />
        <circle cx="186" cy="121" r="5" fill="currentColor" />
      </svg>
    );
  if (kind === "steps")
    return (
      <svg
        className="draw-steps"
        viewBox="0 0 240 180"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M33 150h44v-35h43V80h43V45h44"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M39 105 187 24m-30-3 32 1-13 30"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="77"
          cy="150"
          r="5"
          fill="var(--yellow)"
          stroke="currentColor"
        />
        <circle
          cx="163"
          cy="80"
          r="5"
          fill="var(--yellow)"
          stroke="currentColor"
        />
      </svg>
    );
  if (kind === "window")
    return (
      <div className="draw-window" aria-hidden="true">
        <div>
          <i />
          <i />
          <i />
        </div>
        <span>
          hello,
          <br />
          <b>future.</b>
          <em>↗</em>
        </span>
      </div>
    );
  return (
    <svg
      className="draw-spark"
      viewBox="0 0 200 180"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m100 13 10 48 39-29-25 44 53 3-49 22 34 35-48-15-14 46-14-46-48 15 34-35-49-22 53-3-25-44 39 29z"
        fill="var(--yellow)"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="100"
        cy="89"
        r="17"
        fill="var(--paper)"
        stroke="currentColor"
      />
    </svg>
  );
}
export function GraphicHero() {
  return (
    <section className="agency-hero">
      <div className="hero-atmosphere" aria-hidden="true"><img src="/assets/futurize-ribbon.webp" alt="" fetchPriority="high" /></div>
      <div className="agency-hero-top"><span>Marketing solutions &amp;<br />business development</span><span>Ramallah, Palestine<br />Independent minds.</span></div>
      <div className="agency-hero-main">
        <span className="eyebrow">Futurize / Strategy. Creativity. Technology.</span>
        <h1>A different<br /><span>perspective.</span></h1>
        <div className="agency-hero-bottom"><p>Strategy, creativity and technology.<br />Connected to move your brand forward.</p><a href="#clients" className="hero-explore">Meet our clients <span>↓</span></a></div>
      </div>
      <div className="hero-disciplines"><span>01 / Strategy</span><span>02 / Branding</span><span>03 / Digital</span><span>04 / Production</span><span>05 / Experiences</span></div>
    </section>
  );
}
