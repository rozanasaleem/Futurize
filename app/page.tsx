import Link from "next/link";
import { ContactBand, Services, ClientIdentity } from "@/components/Site";
import { GraphicHero, Graphic } from "@/components/GraphicHero";
import { projects } from "@/lib/content";

export default function Home() {
  const current = projects.filter(p => p.group === "current");
  const history = projects.filter(p => p.group === "history");
  const featured = current.slice(0, 3);
  return <>
    <GraphicHero />
    <section className="agency-about section-pad">
      <span className="eyebrow">Independent minds.<br />Connected thinking.</span>
      <div><h2>One team.<br />The whole picture.</h2><p>We are Futurize, a multidisciplinary agency based in Ramallah, Palestine. We bring marketing, branding, digital development, creative production and business thinking together.</p><Link href="/studio/" className="text-link">Get to know us <span>↗</span></Link></div>
    </section>
    <section className="home-clients section-pad" id="clients">
      <div className="editorial-heading"><span className="eyebrow">01 / In good company</span><h2>Our clients</h2><Link href="/work/" className="text-link">Meet all clients ↗</Link></div>
      <div className="client-logo-grid">{current.map(p => <Link key={p.slug} href={`/work/${p.slug}/`} className={p.logo ? "client-logo-tile" : "client-logo-tile client-name-tile"}>
        {p.logo ? <img src={`/assets/${p.logo}`} alt={p.name} width="240" height="120" /> : <span>{p.name}</span>}
      </Link>)}</div>
    </section>
    <section className="home-history section-pad">
      <div className="editorial-heading"><span className="eyebrow">Our history</span><h2>Past connections.</h2><p>Selected previous<br />client relationships.</p></div>
      <div className="client-logo-grid history-logo-grid">{history.map(p => <Link key={p.slug} href={`/work/${p.slug}/`} className={`client-logo-tile ${["q-center", "bekdash"].includes(p.slug) ? "logo-on-charcoal" : ""}`}>
        {p.logo ? <img src={`/assets/${p.logo}`} alt={p.name} width="240" height="120" /> : <span>{p.name}</span>}
      </Link>)}</div>
    </section>
    <section className="featured-identities section-pad" id="selected-work">
      <div className="editorial-heading"><span className="eyebrow">02 / A closer look</span><h2>Familiar faces.</h2><p>Meet a few of the brands<br />in our company.</p></div>
      <div className="feature-list">{featured.map((p,i) => <article className="feature-row" key={p.slug}>
        <div className="feature-meta"><span className="eyebrow">0{i+1} / Client spotlight</span><h3>{p.name}</h3><Link href={`/work/${p.slug}/`} className="text-link">Meet {p.name} <span>↗</span></Link><span className="feature-footnote">Futurize / Our clients</span></div>
        <Link href={`/work/${p.slug}/`} className="feature-visual" aria-label={`Meet ${p.name}`}><ClientIdentity project={p} large /></Link>
      </article>)}</div>
    </section>
    <Services />
    <section className="approach-section section-pad">
      <div className="editorial-heading"><span className="eyebrow">04 / The Futurize approach</span><h2>Why Futurize?</h2><p>A shared ambition.<br />A different way forward.</p></div>
      <div className="approach-grid">
        <article className="approach-card approach-image"><span className="eyebrow">01 / A clear direction</span><h3>Strategy<br />comes first.</h3><p>We start with your business, your audience and where you want to go.</p></article>
        <article className="approach-card approach-connected"><span className="eyebrow">02 / Together from the start</span><div className="approach-symbol" aria-hidden="true">F<span>+</span>YOU</div><h3>One connected team.</h3><p>Marketing, design, technology and production, working together.</p></article>
        <article className="approach-card approach-tall"><span className="eyebrow">03 / The bigger picture</span><div className="approach-orbit"><Graphic kind="orbit" /></div><h3>Different skills.<br />Shared ambition.</h3><p>We bring the right perspectives around the same table.</p></article>
        <article className="approach-card approach-yellow"><span className="eyebrow">Made in Palestine.</span><h3>Independent<br />thinking.<br />Open horizons.</h3><span className="approach-location">Ramallah ↗</span></article>
        <article className="approach-card approach-future"><span className="eyebrow">04 / Looking ahead</span><h3>Built for<br />what’s next.</h3><p>Long-term relationships. Thoughtful next steps.</p></article>
        <Link href="/contact/" className="approach-card approach-talk"><span className="eyebrow">Your next chapter</span><h3>Let’s talk.</h3><span aria-hidden="true">↗</span></Link>
      </div>
    </section>
    <ContactBand />
  </>;
}
