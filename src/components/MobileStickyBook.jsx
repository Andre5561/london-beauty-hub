import { BOOKING_URL } from "../siteConfig";

export default function MobileStickyBook() {
  return <a className="mobile-sticky-book" href={BOOKING_URL} target="_blank" rel="noopener">Записатися <span>↗</span></a>;
}
