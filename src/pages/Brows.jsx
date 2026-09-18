import SEO from "../components/SEO";
import { BOOKING_URL } from "../siteConfig";

export default function BrowsPage() {
  return (
    <>
      <SEO title="Брови у Львові: корекція, ламінування, фарбування — London Beauty Hub" description="Корекція брів, ламінування і довготривала укладка, фарбування у Львові на Героїв УПА, 73А. Ціни на комплекси, тривалість, онлайн-запис." />
  <main>
    <section className="service-hero service-hero-cover brows">
      <div className="service-hero-bg" aria-hidden="true">
        <img src="/assets/brows-process.webp" alt="" />
      </div>
      <div className="service-hero-shade"></div>
      <div className="service-bg-word" aria-hidden="true">BROWS</div>
      <div className="service-hero-copy reveal">
        <span className="eyebrow">London Beauty Hub</span>
        <h1>Брови у Львові: корекція, фарбування та ламінування</h1>
        <p>Підбираємо форму й відтінок під риси обличчя та бажаний результат — від акуратної корекції до ламінування. Комплекси зібрані так, щоб за один візит отримати і форму, і колір, і напрямок волосків.</p>
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
          <h2>Актуальні ціни на брови</h2>
        </div>
        <div className="reveal gold-rule" style={{"--delay": "100ms"}}></div>
      </div>
      <div className="price-list">
        <div className="reveal price-row" style={{"--delay": "0ms"}}>
          <span className="price-num">01</span>
          <h3>Депіляція будь-якої зони</h3>
          <span className="duration">15 хв</span>
          <strong>200 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "40ms"}}>
          <span className="price-num">02</span>
          <h3>Корекція брів</h3>
          <span className="duration">20 хв</span>
          <strong>400 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "80ms"}}>
          <span className="price-num">03</span>
          <h3>Фарбування брів</h3>
          <span className="duration">30 хв</span>
          <strong>400 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "120ms"}}>
          <span className="price-num">04</span>
          <h3>Ламінування / довготривала укладка брів</h3>
          <span className="duration">35 хв</span>
          <strong>600 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "160ms"}}>
          <span className="price-num">05</span>
          <h3>Фарбування + корекція</h3>
          <span className="duration">40 хв</span>
          <strong>750 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "200ms"}}>
          <span className="price-num">06</span>
          <h3>Ламінування / довготривала укладка + корекція</h3>
          <span className="duration">50 хв</span>
          <strong>800 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "240ms"}}>
          <span className="price-num">07</span>
          <h3>Ламінування / довготривала укладка + фарбування</h3>
          <span className="duration">40 хв</span>
          <strong>850 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "260ms"}}>
          <span className="price-num">08</span>
          <h3>Ламінування / довготривала укладка + корекція + фарбування</h3>
          <span className="duration">60 хв</span>
          <strong>1 000 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
      </div>
    </section>
    <section className="section service-gallery" id="works">
      <div className="section-head split">
        <div className="reveal">
          <span className="eyebrow">Роботи наших майстрів</span>
          <h2>Подивіться роботи до запису</h2>
        </div>
        <div className="reveal">
          <p className="section-intro">Реальні приклади корекції, фарбування та ламінування брів.</p>
        </div>
      </div>
      <div className="service-gallery-grid">
        <div className="reveal sg sg-1" style={{"--delay": "0ms"}}>
          <img src="/assets/brows-result.webp" alt="" />
        </div>
        <div className="reveal sg sg-2" style={{"--delay": "90ms"}}>
          <img src="/assets/brows-process-close.webp" alt="" />
        </div>
        <div className="reveal sg sg-3" style={{"--delay": "180ms"}}>
          <img src="/assets/brows-redhead.webp" alt="" />
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
          <p className="lead-copy">Форма брів будується від вашого обличчя: майстер дивиться на посадку ока, лінію надбрів’я і густоту волосків, і вже від цього прибирає зайве. Це важливіше за трафарети, бо однакова форма на різних обличчях працює по-різному.</p>
        </div>
      </div>
      <div className="about-subblock">
        <div className="reveal">
          <h3>Що можна зробити</h3>
        </div>
        <div>
          <div className="reveal about-row" style={{"--delay": "0ms"}}>
            <span>01</span>
            <p>Корекція брів: форма без зайвого</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "45ms"}}>
            <span>02</span>
            <p>Фарбування брів або фарбування разом з корекцією</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "90ms"}}>
            <span>03</span>
            <p>Ламінування та довготривала укладка: волоски лягають у потрібному напрямку</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "135ms"}}>
            <span>04</span>
            <p>Комплекси: ламінування з корекцією, з фарбуванням, або все разом</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "180ms"}}>
            <span>05</span>
            <p>Депіляція будь-якої зони обличчя</p>
          </div>
        </div>
      </div>
      <div className="about-subblock prose-subblock">
        <div className="reveal">
          <h3>Який комплекс обрати</h3>
        </div>
        <div className="reveal">
          <p>Якщо брови просто відросли, вистачить корекції. Якщо волоски світлі або є прогалини, додайте фарбування. Ламінування має сенс, коли волоски стирчать або ростуть у різні боки. Усі комбінації — окремі позиції у прайсі, з тривалістю кожної.</p>
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
              Що краще обрати — корекцію, фарбування чи ламінування?
              <b>+</b>
            </summary>
            <p>Корекція працює з формою, фарбування додає відтінок і виразність, а ламінування задає напрямок волоскам. Послуги можна поєднувати залежно від бажаного результату.</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "60ms"}}>
          <span>02</span>
          <details>
            <summary>
              Чим ламінування відрізняється від довготривалої укладки?
              <b>+</b>
            </summary>
            <p>У прайсі це одна позиція: суть однакова — волоски фіксуються у заданому напрямку, тому й ціна одна.</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "120ms"}}>
          <span>03</span>
          <details>
            <summary>
              Скільки тримається результат фарбування чи ламінування?
              <b>+</b>
            </summary>
            <p>Стійкість індивідуальна і залежить від типу шкіри, особливостей волосків та домашнього догляду. Майстер підкаже орієнтир після процедури.</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "180ms"}}>
          <span>04</span>
          <details>
            <summary>
              Як записатися на брови?
              <b>+</b>
            </summary>
            <p>Натисніть «Записатися онлайн», оберіть потрібну послугу, майстра та зручний час.</p>
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
        <h2>Оберіть зручний час для брів</h2>
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
