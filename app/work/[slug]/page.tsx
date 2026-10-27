import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { ClientIdentity } from "@/components/Site";
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  return {title: projects.find(p => p.slug === slug)?.name || "Client", description: "Meet the brands and organizations connected with Futurize."};
}
export default async function ClientPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const index = projects.findIndex(p => p.slug === slug);
  if(index < 0) notFound();
  const p = projects[index], next = projects[(index + 1) % projects.length];
  return <>
    <section className="case-intro page-intro"><Link href="/work/" className="eyebrow back-link">← All clients</Link><div className="case-label eyebrow"><span>F / {String(index + 1).padStart(2,"0")}</span><span>{p.group === "history" ? "Previous relationship" : p.group === "events" ? "Event / Experience" : "Selected client"}</span></div><h1>{p.name}<span className="yellow-dot">.</span></h1></section>
    <section className="client-detail section-pad"><ClientIdentity project={p} large /><p className="client-coming-soon">Project story coming soon.</p></section>
    <Link className="next-project section-pad" href={`/work/${next.slug}/`}><span className="eyebrow">Next client / Keep exploring</span><div><h2>{next.name}</h2><span aria-hidden="true">↗</span></div></Link>
  </>;
}
