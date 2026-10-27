import { site, styling } from "@/data/site";

export default function Footer() {
  return (
    <footer className="ftr">
      <a href={`mailto:${site.email}`} className="ftr-mail">{site.email}</a>
      <a href={styling.href} target="_blank" rel="noopener" className="ftr-ext">
        {styling.label} — makistyling.com ↗
      </a>
      <span className="ftr-copy">© {new Date().getFullYear()} {site.name}</span>
    </footer>
  );
}
