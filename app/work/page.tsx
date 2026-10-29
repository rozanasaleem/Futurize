import type { Metadata } from "next";
import { WorkArchive, ContactBand } from "@/components/Site";
export const metadata: Metadata = {
  title: "Work",
  description:
    "Meet the brands and organizations connected with Futurize.",
};
export default function Work() {
  return (
    <>
      <section className="page-intro">
        <span className="eyebrow">01 / Our clients</span>
        <h1>
          Good company<span className="yellow-dot">.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            Different brands. Shared ambition.
            <br />Clients, past and present.
          </p>
          <span className="eyebrow">Strategy / Creative / Experiences</span>
        </div>
      </section>
      <section className="archive section-pad">
        <WorkArchive />
      </section>
      <ContactBand />
    </>
  );
}
