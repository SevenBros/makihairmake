"use client";

import { useEffect, useState } from "react";
import type { Video } from "@/data/videos";
import Reveal from "./Reveal";
import thumbs from "@/data/videoThumbs.json";

const localThumbs = thumbs as Record<string, "lb" | "wide">;
const thumbOf = (id: string) => (localThumbs[id] ? `/videos/${id}.jpg` : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`);

export default function VideoGrid({ items }: { items: Video[] }) {
  const [active, setActive] = useState<Video | null>(null);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <Reveal />
      <div className="vgrid">
        {items.map((v, i) => (
          <button key={v.id} className="vcard rv" style={{ transitionDelay: `${(i % 3) * 70}ms` }} onClick={() => setActive(v)}>
            <span className={`vthumb${localThumbs[v.id] === "wide" ? " is-wide" : ""}`}>
              <img src={thumbOf(v.id)} alt="" loading={i < 6 ? "eager" : "lazy"} decoding="async" />
              <span className="vplay" aria-hidden="true" />
            </span>
            <span className="vtitle">{v.title}</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="lb lb-video" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <div className="lb-frame" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0&playsinline=1`}
              title={active.title}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
            <p className="lb-caption">{active.title}</p>
          </div>
          <button className="lb-close" aria-label="閉じる" onClick={() => setActive(null)}>Close</button>
        </div>
      )}
    </>
  );
}
