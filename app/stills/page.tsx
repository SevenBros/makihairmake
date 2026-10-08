import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHead from "@/components/PageHead";
import { photos } from "@/data/photos";

export const metadata: Metadata = { title: "Stills" };

export default function Page() {
  return (
    <div className="wrap">
      <PageHead title="Stills" count={photos.graphic.length} note="Advertising · Editorial · Beauty" />
      <Gallery items={photos.graphic} label="Stills" />
    </div>
  );
}
