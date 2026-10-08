import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name}` },
  description: "Maki Hayashi — makeup and hair artist for advertising, commercials, music videos, and editorial.",
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: "Makeup and hair for advertising, commercials, music videos and editorial.",
    url: site.url,
    siteName: site.name,
    images: ["/photos/graphic/graphic-030.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f4f0eb" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
