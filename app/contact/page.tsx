import type { Metadata } from "next";
import { contacts } from "@/lib/content";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Futurize about your next project. Al Balou, Ramallah, Palestine.",
};
export default function Contact() {
  return (
    <div className="contact-page">
      <section className="page-intro">
        <span className="eyebrow">04 / Start a conversation</span>
        <h1>
          Let’s make
          <br />
          it happen.
          <span className="contact-page-arrow" aria-hidden="true">
            ↗
          </span>
        </h1>
        <div className="intro-bottom">
          <p>
            A new idea. A different direction.
            <br />
            Tell us what you have in mind.
          </p>
          <span className="eyebrow">Al Balou, Ramallah, Palestine</span>
        </div>
      </section>
      <section
        className="contact-people section-pad"
        aria-label="Contact the team"
      >
        {contacts.map((c) => (
          <div className="contact-person" key={c.name}>
            <span className="eyebrow">Talk to {c.name}</span>
            <a className="person-email" href={`mailto:${c.email}`}>
              {c.email}
              <span>↗</span>
            </a>
            <a href={`tel:${c.phone.replace(/ /g, "")}`}>{c.phone}</a>
          </div>
        ))}
        <div className="contact-address">
          <span className="eyebrow">Based in Palestine</span>
          <p>
            Al Balou
            <br />
            Ramallah, Palestine
          </p>
        </div>
      </section>
    </div>
  );
}
