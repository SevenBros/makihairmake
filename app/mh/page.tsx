import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHead from "@/components/PageHead";
import { photos } from "@/data/photos";

export const metadata: Metadata = { title: "MH" };

export default function Page() {
  return (
    <div className="wrap">
      <PageHead title="MH" count={photos.mh.length} />
      <Gallery items={photos.mh} label="MH" />
    </div>
  );
}
