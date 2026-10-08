import Link from "next/link";
import HeroSlides from "@/components/HeroSlides";
import Reveal from "@/components/Reveal";
import { photos } from "@/data/photos";

const g = (n: number) => `/photos/graphic/graphic-${String(n).padStart(3, "0")}.jpg`;
const heroImages = [g(30), g(2), g(6), g(33), g(14), g(3)];

const sections = [
  { href: "/graphic", label: "Graphic", cover: photos.graphic[1].thumb, pos: "50% 20%" },
  { href: "/video", label: "Video", cover: photos.mh[11].thumb, pos: "50% 50%" },
  { href: "/mh", label: "MH", cover: photos.mh[5].thumb, pos: "50% 50%" },
];

export default function Home() {
  return (
    <>
      <section className="whero">
        <p className="whero-kicker">Maki Hayashi</p>
        <h1 className="whero-title">Makeup / Hair</h1>
        <p className="whero-lede">Advertising, commercials, music videos and editorial.</p>
      </section>

      <div className="wfeature">
        <HeroSlides images={heroImages} />
      </div>

      <Reveal />
      <section className="index">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="index-card rv">
            <span className="index-img">
              <img src={s.cover} alt="" loading="lazy" style={{ objectPosition: s.pos }} />
            </span>
            <span className="index-row">
              <span className="index-label">{s.label}</span>
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
