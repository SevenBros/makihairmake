import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHead from "@/components/PageHead";
import { photos } from "@/data/photos";

export const metadata: Metadata = { title: "Graphic" };

export default function Page() {
  return (
    <div className="wrap">
      <PageHead title="Graphic" count={photos.graphic.length} note="Advertising · Editorial · Beauty" />
      <Gallery items={photos.graphic} label="Graphic" />
    </div>
  );
}
