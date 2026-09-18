import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BOOKING_URL } from "../siteConfig";

const nav = [
  ["/manikur/", "Манікюр"],
  ["/naroshchennya-nigtiv/", "Нарощення"],
  ["/pedykur/", "Педикюр"],
  ["/brovy/", "Брови"],
  ["/tsiny/", "Ціни"],
  ["/galereya/", "Галерея"],
  ["/kontakty/", "Контакти"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <Link className="brand" to="/" aria-label="London Beauty Hub — Головна">
          <img src="/assets/logo-gold.png" alt="London Beauty Hub" />
        </Link>

        <nav className="desktop-nav">
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "active" : "")}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <span className="lang">UA <i></i> EN</span>
          <a className="btn btn-small" href={BOOKING_URL} target="_blank" rel="noopener">Записатися</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Меню">
            <span></span><span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <img src="/assets/logo-gold.png" alt="London Beauty Hub" />
            <button onClick={() => setMenuOpen(false)} aria-label="Закрити меню">×</button>
          </div>
          <nav>
            {nav.map(([to, label], index) => (
              <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu-foot">
            <span>Львів · Героїв УПА, 73А</span>
            <a href="tel:+380731781600">073 178 16 00</a>
          </div>
        </div>
      </div>
    </>
  );
}
