import SEO from "../components/SEO";
import { BOOKING_URL } from "../siteConfig";

export default function PedicurePage() {
  return (
    <>
      <SEO title="Педикюр у Львові — гігієнічний, з покриттям, чоловічий | London Beauty Hub" description="Гігієнічний та комбінований педикюр, покриття гель-лаком, чоловічий педикюр у Львові на Героїв УПА, 73А. Ціни, тривалість і запис онлайн." />
  <main>
    <section className="service-hero service-hero-cover pedicure">
      <div className="service-hero-bg" aria-hidden="true">
        <img src="/assets/pedicure-pink.webp" alt="" />
      </div>
      <div className="service-hero-shade"></div>
      <div className="service-bg-word" aria-hidden="true">PEDICURE</div>
      <div className="service-hero-copy reveal">
        <span className="eyebrow">London Beauty Hub</span>
        <h1>Педикюр у Львові</h1>
        <p>Гігієнічний педикюр з обробкою стопи, покриття гель-лаком або класичним лаком, чоловічий педикюр. Є частковий варіант, коли треба тільки обробка без покриття.</p>
        <div className="hero-actions">
          <a className="btn" href={BOOKING_URL} target="_blank" rel="noopener">Записатися онлайн</a>
          <a className="text-link" href="#works">Переглянути роботи ↗</a>
        </div>
      </div>
      <svg className="hero-line service-cover-line" viewBox="0 0 720 320" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength="1" d="M5,280 C190,70 470,25 710,115"></path>
      </svg>
    </section>
    <section className="section price-section">
      <div className="section-head price-head">
        <div className="reveal">
          <h2>Актуальні ціни на педикюр</h2>
        </div>
        <div className="reveal gold-rule" style={{"--delay": "100ms"}}></div>
      </div>
      <div className="price-list">
        <div className="reveal price-row" style={{"--delay": "0ms"}}>
          <span className="price-num">01</span>
          <h3>Гігієнічний педикюр частковий</h3>
          <span className="duration">80 хв</span>
          <strong>750 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "40ms"}}>
          <span className="price-num">02</span>
          <h3>Комплекс: зняття та гігієнічний педикюр без покриття</h3>
          <span className="duration">90 хв</span>
          <strong>1 000 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "80ms"}}>
          <span className="price-num">03</span>
          <h3>Чоловічий педикюр частковий</h3>
          <span className="duration">75 хв</span>
          <strong>1 000 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "120ms"}}>
          <span className="price-num">04</span>
          <h3>Гігієнічний педикюр та покриття</h3>
          <span className="duration">—</span>
          <strong>1 000 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "160ms"}}>
          <span className="price-num">05</span>
          <h3>Комплекс: зняття, гігієнічний педикюр, покриття класичним лаком</h3>
          <span className="duration">75 хв</span>
          <strong>1 150 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "200ms"}}>
          <span className="price-num">06</span>
          <h3>Комплекс: зняття, гігієнічний педикюр, покриття гель-лаком</h3>
          <span className="duration">90 хв</span>
          <strong>1 250 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "240ms"}}>
          <span className="price-num">07</span>
          <h3>Чоловічий педикюр</h3>
          <span className="duration">80 хв</span>
          <strong>1 250 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
      </div>
    </section>
    <section className="section service-gallery" id="works">
      <div className="section-head split">
        <div className="reveal">
          <span className="eyebrow">Роботи наших майстрів</span>
          <h2>Подивіться приклади педикюру</h2>
        </div>
        <div className="reveal">
          <p className="section-intro">Реальні роботи наших майстрів.</p>
        </div>
      </div>
      <div className="service-gallery-grid">
        <div className="reveal sg sg-1" style={{"--delay": "0ms"}}>
          <img src="/assets/pedicure-pink.webp" alt="" />
        </div>
        <div className="reveal sg sg-2" style={{"--delay": "90ms"}}>
          <img src="/assets/pedicure.webp" alt="" />
        </div>
        <div className="reveal sg sg-3" style={{"--delay": "180ms"}}>
          <img src="/assets/pedicure-detail.webp" alt="" />
        </div>
      </div>
      <div className="reveal">
        <a className="text-link" href="/galereya/">Переглянути всі роботи ↗</a>
      </div>
    </section>
    <section className="section service-about">
      <div className="about-grid">
        <div className="reveal">
          <h2>Про послугу</h2>
        </div>
        <div className="reveal" style={{"--delay": "80ms"}}>
          <p className="lead-copy">Педикюр у салоні — це не тільки колір на нігтях. Майстер обробляє нігтьову пластину, зону біля валиків і стопу, забирає натоптиші й огрубілу шкіру. Після цього стопа виглядає доглянутою, а покриття лягає рівно.</p>
        </div>
      </div>
      <div className="about-subblock">
        <div className="reveal">
          <h3>Що можна зробити</h3>
        </div>
        <div>
          <div className="reveal about-row" style={{"--delay": "0ms"}}>
            <span>01</span>
            <p>Комплекс: зняття та гігієнічний педикюр без покриття</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "45ms"}}>
            <span>02</span>
            <p>Комплекс зі зняттям і покриттям гель-лаком</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "90ms"}}>
            <span>03</span>
            <p>Комплекс зі зняттям і покриттям класичним лаком</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "135ms"}}>
            <span>04</span>
            <p>Гігієнічний педикюр частковий, коли треба лише обробка</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "180ms"}}>
            <span>05</span>
            <p>Чоловічий педикюр, повний і частковий</p>
          </div>
        </div>
      </div>
      <div className="about-subblock prose-subblock">
        <div className="reveal">
          <h3>Як часто приходити</h3>
        </div>
        <div className="reveal">
          <p>Це залежить від швидкості відростання нігтя і того, як ви носите взуття. Майстер підкаже орієнтир на вашому першому візиті, спираючись на стан стопи, а не на загальні поради.</p>
        </div>
      </div>
    </section>
    <section className="section standard-inline">
      <div className="reveal standard-image">
        <img src="/assets/process.webp" alt="" />
      </div>
      <div className="reveal standard-copy" style={{"--delay": "100ms"}}>
        <h2>Наш стандарт чистоти</h2>
        <p>Багаторазові інструменти проходять усі необхідні етапи очищення та стерилізації. Перед кожною процедурою готуємо чисте робоче місце та використовуємо одноразові матеріали там, де це передбачено процедурою.</p>
      </div>
    </section>
    <section className="section faq-section">
      <div className="section-head">
        <div className="reveal">
          <h2>FAQ — коротко про головне</h2>
        </div>
      </div>
      <div className="faq-list">
        <div className="reveal faq-item" style={{"--delay": "0ms"}}>
          <span>01</span>
          <details>
            <summary>
              Чи можна зробити манікюр і педикюр за один візит?
              <b>+</b>
            </summary>
            <p>Так. При записі оберіть обидві послуги, система сама складе час. Якщо зручніше, зателефонуйте — підберемо вікно у двох майстрів поспіль.</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "60ms"}}>
          <span>02</span>
          <details>
            <summary>
              Робите чоловічий педикюр?
              <b>+</b>
            </summary>
            <p>Так, є повний і частковий варіант — окремими позиціями у прайсі.</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "120ms"}}>
          <span>03</span>
          <details>
            <summary>
              Чи є педикюр без покриття?
              <b>+</b>
            </summary>
            <p>Є: «Комплекс: зняття та гігієнічний педикюр без покриття» або «Гігієнічний педикюр частковий».</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "180ms"}}>
          <span>04</span>
          <details>
            <summary>
              Як записатися на педикюр?
              <b>+</b>
            </summary>
            <p>Натисніть «Записатися онлайн», оберіть послугу, майстра та зручний час.</p>
          </details>
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
        <h2>Оберіть зручний час для педикюру</h2>
        <p>Перегляньте вільні вікна та запишіться онлайн.</p>
        <div>
          <a className="btn" href={BOOKING_URL} target="_blank" rel="noopener">Записатися онлайн</a>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
