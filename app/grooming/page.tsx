import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHead from "@/components/PageHead";
import { photos } from "@/data/photos";

export const metadata: Metadata = { title: "Grooming" };

export default function Page() {
  return (
    <div className="wrap">
      <PageHead title="Grooming" count={photos.mh.length} note="Talent · Athletes · Artists" />
      <Gallery items={photos.mh} label="Grooming" />
    </div>
  );
}
