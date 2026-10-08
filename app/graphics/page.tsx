import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHead from "@/components/PageHead";
import { photos } from "@/data/photos";

export const metadata: Metadata = { title: "Graphics" };

export default function Page() {
  return (
    <div className="wrap">
      <PageHead title="Graphics" count={photos.graphic.length} note="Advertising · Editorial · Beauty" />
      <Gallery items={photos.graphic} label="Graphics" />
    </div>
  );
}
