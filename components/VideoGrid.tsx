"use client";

import { useEffect, useState } from "react";
import type { Video } from "@/data/videos";
import Reveal from "./Reveal";
import thumbs from "@/data/videoThumbs.json";

const localThumbs = thumbs as Record<string, "lb" | "wide">;
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const thumbOf = (id: string) => (localThumbs[id] ? `${base}/videos/${id}.jpg` : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`);

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
        {items.map((v, i) => {
          const thumb = (
            <span className={`vthumb${localThumbs[v.id] === "wide" ? " is-wide" : ""}`}>
              <img src={thumbOf(v.id)} alt="" loading={i < 6 ? "eager" : "lazy"} decoding="async" />
              {!v.hidden && <span className="vplay" aria-hidden="true" />}
            </span>
          );
          const delay = { transitionDelay: `${(i % 3) * 70}ms` };
          return v.hidden ? (
            <div key={v.id} className="vcard is-static rv" style={delay}>
              {thumb}
              <span className="vtitle">{v.title}</span>
            </div>
          ) : (
            <button key={v.id} className="vcard rv" style={delay} onClick={() => setActive(v)}>
              {thumb}
              <span className="vtitle">{v.title}</span>
            </button>
          );
        })}
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
            <p className="lb-caption">
              {active.title}
              <a href={`https://www.youtube.com/watch?v=${active.id}`} target="_blank" rel="noopener noreferrer" className="lb-yt">
                Watch on YouTube ↗
              </a>
            </p>
          </div>
          <button className="lb-close" aria-label="閉じる" onClick={() => setActive(null)}>Close</button>
        </div>
      )}
    </>
  );
}
