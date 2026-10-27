"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { projects, expertise, type Project } from "@/lib/content";
import { Graphic } from "@/components/GraphicHero";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <svg width="0" height="0" aria-hidden="true" className="logo-filters">
        <defs>
          <filter id="logo-on-dark" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0 0 0 0 1  -0.114 0 0 0 1  -0.674 0 0 0 1  0 0 0 1 0" />
          </filter>
        </defs>
      </svg>
      <Link href="/" className="brand" aria-label="Futurize home">
        <img
          src="/assets/futurize-logo-transparent.png"
          alt="Futurize — Marketing solutions and business development"
          width="792"
          height="324"
        />
      </Link>
      <span className="nav-location">
        Independent thinking.
        <br />
        Made in Palestine.
      </span>
      <button
        id="menu-toggle"
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="navigation"
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="navigation"
        className={open ? "nav open" : "nav"}
        aria-label="Main navigation"
      >
        {[
          ["/work/", "Work"],
          ["/studio/", "Studio"],
          ["/#expertise", "Expertise"],
          ["/contact/", "Contact"],
        ].map(([href, label]) => (
          <Link
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            aria-current={
              path.replace(/\/$/, "") === href.replace(/\/$/, "")
                ? "page"
                : undefined
            }
          >
            {label}
            <span className="nav-index">
              0{["Work", "Studio", "Expertise", "Contact"].indexOf(label) + 1}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
export function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    els.forEach((e) => {
      e.classList.add("will-reveal");
      obs.observe(e);
    });
    return () => obs.disconnect();
  }, [path]);
  return null;
}
export function ClientIdentity({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={`client-identity ${large ? "identity-large" : ""} ${project.logo ? "has-logo" : "has-placeholder"} ${["q-center", "bekdash"].includes(project.slug) ? "identity-dark" : ""}`}>
      <span className="identity-cross" aria-hidden="true">+</span>
      {project.logo ? (
        <img src={`/assets/${project.logo}`} alt={`${project.name} logo`} width="400" height="200" />
      ) : (
        <strong>{project.name}</strong>
      )}
      <span className="identity-label">{project.logo ? "Client identity" : "Logo placeholder"}</span>
    </div>
  );
}
export function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <article className="project-card" data-reveal>
      <Link href={`/work/${p.slug}/`} className="project-link">
        <ClientIdentity project={p} />
        <div className="project-caption">
          <h3>{p.name}</h3><span aria-hidden="true">↗</span>
        </div>
        <p className="project-line">{String(index + 1).padStart(2, "0")} / Client</p>
      </Link>
    </article>
  );
}
export function ProjectGrid({ items = projects }: { items?: Project[] }) {
  return <div className="project-grid">{items.map(p => <ProjectCard key={p.slug} project={p} index={projects.findIndex(item => item.slug === p.slug)} />)}</div>;
}
export function WorkArchive() {
  return <div className="client-archive-groups">{([
    ["current", "Selected clients", "Brands we work with."],
    ["history", "Previous relationships", "Selected brands from our history."],
    ["events", "Events & experiences", "Selected event and production entries."],
  ] as const).map(([group, title, description]) => <section key={group} className="client-archive-group"><h2>{title}</h2><p>{description}</p><ProjectGrid items={projects.filter(p => p.group === group)} /></section>)}</div>;
}
export function Services() {
  const artTypes = ["eyes", "burst", "window", "orbit", "spark", "steps"] as const;
  return (
    <section id="expertise" className="expertise section-pad service-editorial">
      <div className="editorial-heading"><span className="eyebrow">03 / What we do</span><h2>Services</h2><p>Different disciplines.<br />One connected perspective.</p></div>
      <div className="service-rows">
        {expertise.map(([name, desc], i) => <Link href="/contact/" key={name} className="service-row" aria-label={`Discuss ${name}`}>
          <h3><span aria-hidden="true">+</span>{name}</h3>
          <div className="service-thumb"><Graphic kind={artTypes[i]} /></div>
          <p>{desc}</p><span className="service-row-arrow" aria-hidden="true">↗</span>
        </Link>)}
      </div>
    </section>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="contact-top">
        <span className="eyebrow">Have something in mind?</span>
        <span className="eyebrow">Let’s talk about it.</span>
      </div>
      <Link href="/contact/" className="contact-title">
        Let’s make
        <br />
        it happen.
        <span className="contact-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
      <div className="contact-bottom">
        <a href="mailto:Ahmad@futurize.agency">Ahmad@futurize.agency ↗</a>
        <span>Al Balou, Ramallah, Palestine</span>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <Link href="/" aria-label="Futurize home">
        FUTURIZE<span>®</span>
      </Link>
      <span>© {new Date().getFullYear()} Futurize</span>
      <a href="#main">Back to top ↑</a>
    </footer>
  );
}
