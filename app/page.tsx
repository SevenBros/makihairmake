import Link from "next/link";
import HeroSlides from "@/components/HeroSlides";
import Reveal from "@/components/Reveal";
import { photos } from "@/data/photos";
import { videos } from "@/data/videos";

const g = (n: number) => `/photos/graphic/graphic-${String(n).padStart(3, "0")}.jpg`;
const heroImages = [g(30), g(2), g(6), g(33), g(14), g(3)];

const sections = [
  { href: "/graphic", no: "01", label: "Graphic", count: photos.graphic.length, cover: photos.graphic[29].thumb },
  { href: "/video", no: "02", label: "Video", count: videos.length, cover: `https://i.ytimg.com/vi/${videos[0].id}/hqdefault.jpg` },
  { href: "/product-styling", no: "03", label: "Product Styling", count: photos.product.length, cover: photos.product[12].thumb },
  { href: "/mh", no: "04", label: "MH", count: photos.mh.length, cover: photos.mh[5].thumb },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Portfolio</p>
          <h1 className="hero-name">
            Maki
            <br />
            <em>Hayashi</em>
          </h1>
          <p className="hero-role">Makeup&nbsp;/&nbsp;Hair</p>
          <p className="hero-lede">
            Hair &amp; makeup for advertising, commercials, music videos and editorial.
          </p>
          <Link href="/graphic" className="link-arrow">View work</Link>
        </div>
        <div className="hero-visual">
          <HeroSlides images={heroImages} />
        </div>
      </section>

      <Reveal />
      <section className="index">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="index-card rv">
            <span className="index-img">
              <img src={s.cover} alt="" loading="lazy" />
            </span>
            <span className="index-row">
              <span className="index-no">{s.no}</span>
              <span className="index-label">{s.label}</span>
              <span className="index-count">{s.count}</span>
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
