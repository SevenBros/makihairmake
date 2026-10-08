import Link from "next/link";
import Reveal from "@/components/Reveal";
import { photos } from "@/data/photos";

// Top image (fixed)
const heroImage = "/photos/graphic/graphic-003.jpg";

const sections = [
  { href: "/graphics", label: "Graphics", cover: photos.graphic[1].thumb, pos: "50% 20%", zoom: 1.12 },
  { href: "/motion", label: "Motion", cover: photos.mh[11].thumb, pos: "50% 50%" },
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
        <img src={heroImage} alt="Maki Hayashi — makeup and hair" />
      </div>

      <Reveal />
      <section className="index">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="index-card rv">
            <span className="index-img">
              <img src={s.cover} alt="" loading="lazy" style={{ objectPosition: s.pos, scale: "zoom" in s ? String(s.zoom) : undefined }} />
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
