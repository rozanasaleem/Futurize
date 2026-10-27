import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-intro">
      <span className="eyebrow">404 / A different direction</span>
      <h1>
        LET’S GO
        <br />
        BACK<span className="yellow-dot">.</span>
      </h1>
      <Link href="/work/" className="text-link">
        Explore the work ↗
      </Link>
    </section>
  );
}
