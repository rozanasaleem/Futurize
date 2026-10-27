import Link from "next/link";
import { projects } from "@/lib/content";
import type { Metadata } from "next";
import { ContactBand, Services } from "@/components/Site";
export const metadata: Metadata = { title: "Studio" };
export default function Studio() {
  return (
    <>
      <section className="page-intro">
        <span className="eyebrow">02 / Meet Futurize</span>
        <h1>
          Ideas built
          <br />
          for the real
          <br />
          world<span className="yellow-dot">.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            Independent thinking.
            <br />
            Connected disciplines. Palestine.
          </p>
        </div>
      </section>
      <section className="studio-story section-pad">
        <span className="eyebrow">Our approach</span>
        <div>
          <h2>
            From first thought
            <br />
            to final detail.
          </h2>
          <p className="body-large">
            Futurize combines marketing strategy, brand development, content
            production, website experiences and event management. We create work
            that people see, experience and remember.
          </p>
          <p>
            We look at the whole picture: how a brand speaks, how it shows up
            online, and what it feels like in the real world. Strategy gives the
            work direction. Creative and production bring it to life.
          </p>
        </div>
      </section>
      <section className="history section-pad">
        <span className="eyebrow">Our clients</span><h2>Across industries.<br />Connected by ambition.</h2>
        <div className="history-list">{projects.filter(p => p.group === "current").map(p => <Link href={`/work/${p.slug}/`} key={p.slug}><h3>{p.name}</h3><span>↗</span></Link>)}</div>
      </section>
      <Services />
      <ContactBand />
    </>
  );
}
