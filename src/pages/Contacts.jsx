import SEO from "../components/SEO";
import { BOOKING_URL } from "../siteConfig";

export default function ContactsPage() {
  return (
    <>
      <SEO title="Контакти London Beauty Hub у Львові — адреса, графік, запис" description="London Beauty Hub у Львові: вул. Героїв УПА, 73А. Графік 10:00–20:00 щодня, телефон, Instagram, Facebook, Telegram, WhatsApp, Viber, карта та онлайн-запис." />
  <main>
    <section className="contact-hero contact-hero-cover">
      <div className="contact-cover-media" aria-hidden="true">
        <img src="/assets/location.webp" alt="London Beauty Hub" />
      </div>
      <div className="contact-cover-shade"></div>
      <div className="contact-bg-word" aria-hidden="true">LONDON</div>
      <div className="reveal contact-copy">
        <span className="eyebrow">Контакти</span>
        <h1>London Beauty Hub у Львові</h1>
        <p>вул. Героїв УПА, 73А. Працюємо щодня з 10:00 до 20:00.</p>
        <div className="hero-actions">
          <a className="btn" href="https://www.google.com/maps?q=London+Beauty+Hub" target="_blank" rel="noopener">Прокласти маршрут</a>
          <a className="text-link" href={BOOKING_URL} target="_blank" rel="noopener">Записатися онлайн ↗</a>
        </div>
      </div>
      <svg className="editorial-cover-line contact-cover-line" viewBox="0 0 720 300" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength="1" d="M10,265 C210,55 500,30 710,120"></path>
      </svg>
    </section>
    <section className="section contacts-grid">
      <div className="reveal">
        <h2>Контактна інформація</h2>
      </div>
      <div className="contact-list">
        <div className="reveal contact-row" style={{"--delay": "0ms"}}>
          <span>Адреса</span>
          <p>Львів, вул. Героїв УПА, 73А (Франківський район)</p>
        </div>
        <div className="reveal contact-row" style={{"--delay": "40ms"}}>
          <span>Телефон</span>
          <a href="tel:+380731781600" target="_blank" rel="noopener">073 178 16 00 ↗</a>
        </div>
        <div className="reveal contact-row" style={{"--delay": "80ms"}}>
          <span>Графік</span>
          <p>Щодня, 10:00–20:00</p>
        </div>
        <div className="reveal contact-row" style={{"--delay": "120ms"}}>
          <span>Instagram</span>
          <a href="https://www.instagram.com/londonbeautyhub" target="_blank" rel="noopener">@londonbeautyhub ↗</a>
        </div>
        <div className="reveal contact-row" style={{"--delay": "160ms"}}>
          <span>Facebook</span>
          <a href="https://www.facebook.com/londonbeautyhub.ua" target="_blank" rel="noopener">londonbeautyhub.ua ↗</a>
        </div>
        <div className="reveal contact-row" style={{"--delay": "200ms"}}>
          <span>Telegram</span>
          <a href="https://t.me/london_beautyhub" target="_blank" rel="noopener">@london_beautyhub ↗</a>
        </div>
        <div className="reveal contact-row" style={{"--delay": "240ms"}}>
          <span>WhatsApp</span>
          <a href="https://wa.me/380731781600" target="_blank" rel="noopener">073 178 16 00 ↗</a>
        </div>
        <div className="reveal contact-row" style={{"--delay": "280ms"}}>
          <span>Viber</span>
          <a href="viber://chat?number=%2B380731781600" target="_blank" rel="noopener">073 178 16 00 ↗</a>
        </div>
        <div className="reveal contact-row" style={{"--delay": "320ms"}}>
          <span>Онлайн-запис (Altegio)</span>
          <a href={BOOKING_URL} target="_blank" rel="noopener">https://n1454260.alteg.io/company/1382362/personal/select-services?api_key=be59li6cd69qanbk6n1e ↗</a>
        </div>
      </div>
    </section>
    <section className="section map-section">
      <div className="reveal map-copy">
        <h2>Як нас знайти</h2>
        <a className="text-link" href="https://www.google.com/maps?q=London+Beauty+Hub" target="_blank" rel="noopener">Прокласти маршрут ↗</a>
      </div>
      <div className="reveal map-embed" style={{"--delay": "100ms"}}>
        <iframe title="Google Maps — London Beauty Hub" src="https://www.google.com/maps?q=London+Beauty+Hub&ftid=0x473ae752f1fedecb:0x8e35568528cb72c9&ll=49.828923,23.9932241&z=17&hl=uk&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
    <section className="section space-section">
      <div className="section-head">
        <div className="reveal">
          <h2>London Beauty Hub зсередини</h2>
        </div>
      </div>
      <div className="space-grid">
        <div className="reveal">
          <img src="/assets/location.webp" alt="Фасад" />
        </div>
        <div className="reveal" style={{"--delay": "100ms"}}>
          <img src="/assets/salon-reception.webp" alt="Вхід" />
        </div>
        <div className="reveal" style={{"--delay": "200ms"}}>
          <img src="/assets/salon-room.webp" alt="Інтер’єр" />
        </div>
      </div>
    </section>
    <section className="final-cta">
      <div className="final-cta-orbits ellipse-draw-group" aria-hidden="true">
        <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
          <ellipse pathLength="1" cx="500" cy="300" rx="450" ry="190" transform="rotate(-8 500 300)"></ellipse>
          <ellipse pathLength="1" cx="500" cy="300" rx="365" ry="230" transform="rotate(18 500 300)"></ellipse>
          <ellipse pathLength="1" cx="500" cy="300" rx="285" ry="145" transform="rotate(42 500 300)"></ellipse>
        </svg>
      </div>
      <div className="reveal final-cta-inner">
        <h2>До зустрічі у London Beauty Hub</h2>
        <p>Оберіть зручний час для візиту або напишіть нам, якщо потрібна допомога з вибором послуги.</p>
        <div>
          <a className="btn" href={BOOKING_URL} target="_blank" rel="noopener">Записатися онлайн</a>
          <a className="text-link" href="https://t.me/london_beautyhub">Написати нам ↗</a>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
