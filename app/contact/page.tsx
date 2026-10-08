import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <div className="wrap contact">
      <div className="contact-img">
        <img src="/photos/graphic/graphic-033.jpg" alt="" />
      </div>
      <div className="contact-body">
        <p className="eyebrow">Contact</p>
        <h1 className="contact-title">
          Hi there —<br />
          <em>let&rsquo;s work together.</em>
        </h1>
        <p className="contact-lede">
          Feel free to e-mail me for bookings, availability or any questions. Thank you.
        </p>
        <a className="contact-mail" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
    </div>
  );
}
