import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import VideoGrid from "@/components/VideoGrid";
import { visibleVideos as videos } from "@/data/videos";

export const metadata: Metadata = { title: "Video" };

export default function Page() {
  return (
    <div className="wrap">
      <PageHead title="Video" count={videos.length} note="Commercials · Music Videos · Films" />
      <VideoGrid items={videos} />
    </div>
  );
}
