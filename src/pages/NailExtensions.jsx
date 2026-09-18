import SEO from "../components/SEO";
import { BOOKING_URL } from "../siteConfig";

export default function NailExtensionsPage() {
  return (
    <>
      <SEO title="Нарощення нігтів у Львові — нарощення, корекція, зняття | London Beauty Hub" description="Нарощення нігтів, корекція нарощених нігтів і зняття у Львові на Героїв УПА, 73А. Ціни, тривалість, онлайн-запис до майстра." />
  <main>
    <section className="service-hero service-hero-cover extensions">
      <div className="service-hero-bg" aria-hidden="true">
        <img src="/assets/nails-burgundy.webp" alt="" />
      </div>
      <div className="service-hero-shade"></div>
      <div className="service-bg-word" aria-hidden="true">NAILS</div>
      <div className="service-hero-copy reveal">
        <span className="eyebrow">Львів · Франківський район · Нігтьовий сервіс</span>
        <h1>Нарощення нігтів у Львові</h1>
        <p>Нарощення форми та довжини, планова корекція раз на кілька тижнів і акуратне зняття без пропилів по власній пластині.</p>
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
          <h2>Актуальні ціни на нарощення нігтів</h2>
        </div>
        <div className="reveal gold-rule" style={{"--delay": "100ms"}}></div>
      </div>
      <div className="price-list">
        <div className="reveal price-row" style={{"--delay": "0ms"}}>
          <span className="price-num">01</span>
          <h3>Зняття нарощених нігтів</h3>
          <span className="duration">60 хв</span>
          <strong>450 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "40ms"}}>
          <span className="price-num">02</span>
          <h3>Корекція нігтів (чистка + покриття)</h3>
          <span className="duration">120 хв</span>
          <strong>1 600 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "80ms"}}>
          <span className="price-num">03</span>
          <h3>Корекція нарощених нігтів</h3>
          <span className="duration">120 хв</span>
          <strong>1 600 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "120ms"}}>
          <span className="price-num">04</span>
          <h3>Нарощування нігтів</h3>
          <span className="duration">135 хв</span>
          <strong>1 800 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "160ms"}}>
          <span className="price-num">05</span>
          <h3>Дизайн нігтів (французький, втирка, індивідуальний, іграшки)</h3>
          <span className="duration">30–60 хв</span>
          <strong>від 250 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
      </div>
    </section>
    <section className="section service-gallery" id="works">
      <div className="section-head split">
        <div className="reveal">
          <span className="eyebrow">Роботи наших майстрів</span>
          <h2>Форми і дизайни</h2>
        </div>
        <div className="reveal">
          <p className="section-intro">Галерея реальних робіт: форми, довжина і дизайни нарощених нігтів.</p>
        </div>
      </div>
      <div className="service-gallery-grid">
        <div className="reveal sg sg-1" style={{"--delay": "0ms"}}>
          <img src="/assets/nails-burgundy.webp" alt="" />
        </div>
        <div className="reveal sg sg-2" style={{"--delay": "90ms"}}>
          <img src="/assets/nails-red-phone.webp" alt="" />
        </div>
        <div className="reveal sg sg-3" style={{"--delay": "180ms"}}>
          <img src="/assets/nails-color.webp" alt="" />
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
          <p className="lead-copy">Нарощення — це спосіб отримати довжину і форму, яких немає у власного нігтя, або вирівняти пластину після пошкодження. Майстер підбирає форму під вашу руку, а не універсальну, і тримає товщину так, щоб ніготь не виглядав важким.</p>
        </div>
      </div>
      <div className="about-subblock">
        <div className="reveal">
          <h3>Що входить у напрям</h3>
        </div>
        <div>
          <div className="reveal about-row" style={{"--delay": "0ms"}}>
            <span>01</span>
            <p>Нарощування нігтів: побудова форми та довжини</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "45ms"}}>
            <span>02</span>
            <p>Корекція нарощених нігтів: планове оновлення відрослої зони</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "90ms"}}>
            <span>03</span>
            <p>Зняття нарощених нігтів, коли ви вирішили повернутись до свого</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "135ms"}}>
            <span>04</span>
            <p>Дизайн: французький, втирка, індивідуальні варіанти</p>
          </div>
        </div>
      </div>
      <div className="about-subblock prose-subblock">
        <div className="reveal">
          <h3>Коли приходити на корекцію</h3>
        </div>
        <div className="reveal">
          <p>Орієнтир — зазвичай кожні три-чотири тижні, але точний інтервал залежить від швидкості росту нігтя. Майстер назве вашу цифру після першого нарощення.</p>
        </div>
      </div>
      <div className="about-subblock prose-subblock">
        <div className="reveal">
          <h3>Якщо хочете зняти</h3>
        </div>
        <div className="reveal">
          <p>Знімаємо окремою послугою, з мінімальним втручанням у власну пластину. Після зняття можна одразу зробити зміцнення, щоб ніготь не ламався.</p>
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
              Скільки тримається нарощення?
              <b>+</b>
            </summary>
            <p>До планової корекції — зазвичай це кілька тижнів. Точний строк залежить від швидкості росту нігтя і від того, наскільки навантажені руки в побуті.</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "60ms"}}>
          <span>02</span>
          <details>
            <summary>
              Чи можна зняти нарощені нігті, зроблені в іншому місці?
              <b>+</b>
            </summary>
            <p>Так, у прайсі є окрема позиція «Зняття нарощених нігтів».</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "120ms"}}>
          <span>03</span>
          <details>
            <summary>
              Чи псує нарощення власний ніготь?
              <b>+</b>
            </summary>
            <p>Головне тут — техніка зняття і коректна товщина матеріалу. Ми знімаємо апаратно, без агресивного пропилу, а після зняття можемо зробити зміцнення.</p>
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
        <h2>Оберіть зручний час для нарощення нігтів</h2>
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
