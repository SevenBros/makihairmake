import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <div className="wrap wcontact">
      <h1 className="eyebrow">Contact</h1>
      <p className="wcontact-lede">For bookings, availability or any questions, please get in touch. Thank you.</p>
      <div className="wcontact-lines">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={`tel:+1${site.phone.replace(/-/g, "")}`}>{site.phone}</a>
      </div>
      <div className="wcontact-img">
        <img src="/photos/graphic/graphic-033.jpg" alt="" />
      </div>
    </div>
  );
}
