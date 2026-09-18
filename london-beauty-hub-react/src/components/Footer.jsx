export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line reveal gold-rule"></div>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo-gold.png" alt="London Beauty Hub" />
          <p>Сучасний б’юті-простір у Франківському районі Львова: манікюр, педикюр, нарощення нігтів і брови.</p>
        </div>
        <div>
          <p className="footer-kicker">Адреса</p>
          <p>вул. Героїв УПА, 73А, Львів</p>
          <p className="footer-kicker footer-kicker-gap">Графік</p>
          <p>Щодня, 10:00–20:00</p>
          <p>UA / EN</p>
        </div>
        <div>
          <p className="footer-kicker">Телефон</p>
          <a href="tel:+380731781600">073 178 16 00</a>
          <p className="footer-kicker footer-kicker-gap">Соцмережі / месенджери</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/londonbeautyhub" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com/londonbeautyhub.ua" target="_blank" rel="noopener">Facebook</a>
            <a href="https://t.me/london_beautyhub" target="_blank" rel="noopener">Telegram</a>
            <a href="https://wa.me/380731781600" target="_blank" rel="noopener">WhatsApp</a>
            <a href="viber://chat?number=%2B380731781600">Viber</a>
          </div>
        </div>
        <div className="footer-orbit ellipse-draw-group" aria-hidden="true">
          <svg viewBox="0 0 220 180" preserveAspectRatio="none">
            <ellipse pathLength="1" cx="122" cy="62" rx="88" ry="34" transform="rotate(17 122 62)"></ellipse>
            <ellipse pathLength="1" cx="112" cy="112" rx="62" ry="46" transform="rotate(-22 112 112)"></ellipse>
          </svg>
        </div>
      </div>
      <div className="footer-bottom"><span>© London Beauty Hub</span><span>UA / EN</span></div>
    </footer>
  );
}
