import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHead from "@/components/PageHead";
import { photos } from "@/data/photos";

export const metadata: Metadata = { title: "Product Styling" };

export default function Page() {
  return (
    <div className="wrap">
      <PageHead title="Product Styling" count={photos.product.length} note="Cosmetics · Fragrance · Skincare" />
      <Gallery items={photos.product} label="Product Styling" />
    </div>
  );
}
