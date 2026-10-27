import type { Metadata } from "next";
import { Navbar, Footer, Reveal } from "@/components/Site";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Futurize® — Building Brands. Growing Business.",
    template: "%s — Futurize®",
  },
  description:
    "Strategy, creativity, and experiences that move brands forward. Futurize is a marketing and business development agency in Palestine.",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/futurize-icon-v1.svg", type: "image/svg+xml" },
      { url: "/futurize-icon-v1.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/futurize-icon-v1.png",
    apple: [{ url: "/futurize-apple-touch-v1.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/futurize-pinned-tab-v1.svg", color: "#ffe35b" }],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
