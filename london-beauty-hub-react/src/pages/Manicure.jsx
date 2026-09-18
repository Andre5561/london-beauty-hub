import SEO from "../components/SEO";
import { BOOKING_URL } from "../siteConfig";

export default function ManicurePage() {
  return (
    <>
      <SEO title="Манікюр у Львові, Франківський район — London Beauty Hub" description="Манікюр з покриттям гель-лаком, комбінований манікюр, зміцнення та дизайн нігтів у Львові на Героїв УПА, 73А. Ціни, тривалість і онлайн-запис до майстра." />
  <main>
    <section className="service-hero service-hero-cover manicure">
      <div className="service-hero-bg" aria-hidden="true">
        <img src="/assets/nails-blue.webp" alt="" />
      </div>
      <div className="service-hero-shade"></div>
      <div className="service-bg-word" aria-hidden="true">MANICURE</div>
      <div className="service-hero-copy reveal">
        <span className="eyebrow">London Beauty Hub</span>
        <h1>Манікюр у Львові</h1>
        <p>Комбінований і гігієнічний манікюр, покриття гель-лаком, зміцнення, дизайн. Працюємо з власним і нарощеним нігтем, знімаємо старе покриття акуратно, без пропилів по пластині.</p>
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
          <h2>Актуальні ціни на манікюр</h2>
        </div>
        <div className="reveal gold-rule" style={{"--delay": "100ms"}}></div>
      </div>
      <div className="price-list">
        <div className="reveal price-row" style={{"--delay": "0ms"}}>
          <span className="price-num">01</span>
          <h3>Зняття гель-лаку</h3>
          <span className="duration">60 хв</span>
          <strong>150 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "40ms"}}>
          <span className="price-num">02</span>
          <h3>Ремонт нігтя</h3>
          <span className="duration">60 хв</span>
          <strong>200 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "80ms"}}>
          <span className="price-num">03</span>
          <h3>Зміцнення нігтів</h3>
          <span className="duration">30 хв</span>
          <strong>250 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "120ms"}}>
          <span className="price-num">04</span>
          <h3>Комбінований манікюр</h3>
          <span className="duration">60 хв</span>
          <strong>650 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "160ms"}}>
          <span className="price-num">05</span>
          <h3>Комплекс: зняття та гігієнічний манікюр без покриття</h3>
          <span className="duration">90 хв</span>
          <strong>800 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "200ms"}}>
          <span className="price-num">06</span>
          <h3>Гігієнічний манікюр та покриття</h3>
          <span className="duration">90 хв</span>
          <strong>1 000 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "240ms"}}>
          <span className="price-num">07</span>
          <h3>Комплекс: зняття, гігієнічний манікюр, покриття гель-лаком</h3>
          <span className="duration">120 хв</span>
          <strong>1 200 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "260ms"}}>
          <span className="price-num">08</span>
          <h3>Комплекс: зняття, зміцнення, гігієнічний манікюр, покриття гель-лаком</h3>
          <span className="duration">135 хв</span>
          <strong>1 450 ₴</strong>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Записатися ↗</a>
        </div>
        <div className="reveal price-row" style={{"--delay": "260ms"}}>
          <span className="price-num">09</span>
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
          <h2>Манікюр, який можна роздивитися до запису</h2>
        </div>
        <div className="reveal">
          <p className="section-intro">Добірка реальних робіт наших майстрів.</p>
        </div>
      </div>
      <div className="service-gallery-grid">
        <div className="reveal sg sg-1" style={{"--delay": "0ms"}}>
          <img src="/assets/hero-main.webp" alt="" />
        </div>
        <div className="reveal sg sg-2" style={{"--delay": "90ms"}}>
          <img src="/assets/nails-blue-mirror.webp" alt="" />
        </div>
        <div className="reveal sg sg-3" style={{"--delay": "180ms"}}>
          <img src="/assets/nails-phone-pink.webp" alt="" />
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
          <p className="lead-copy">Манікюр у нас починається не з кольору, а з форми та стану нігтя. Майстер дивиться на пластину і кутикулу, обирає техніку обробки і вже потім переходить до покриття. Так виходить рівна основа під гель-лак і акуратний край.</p>
        </div>
      </div>
      <div className="about-subblock">
        <div className="reveal">
          <h3>Що можна зробити</h3>
        </div>
        <div>
          <div className="reveal about-row" style={{"--delay": "0ms"}}>
            <span>01</span>
            <p>Комбінований манікюр: апаратна обробка плюс ручна доробка біля валиків</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "45ms"}}>
            <span>02</span>
            <p>Комплекс зі зняттям старого покриття, гігієнічним манікюром і покриттям гель-лаком</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "90ms"}}>
            <span>03</span>
            <p>Зміцнення нігтів гелем, якщо пластина тонка і ламається</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "135ms"}}>
            <span>04</span>
            <p>Корекція нігтів: чистка та нове покриття</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "180ms"}}>
            <span>05</span>
            <p>Ремонт зламаного нігтя без переробки всієї руки</p>
          </div>
          <div className="reveal about-row" style={{"--delay": "225ms"}}>
            <span>06</span>
            <p>Дизайн: французький манікюр, втирка, індивідуальні малюнки</p>
          </div>
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
              Чи можна прийти з чужим покриттям?
              <b>+</b>
            </summary>
            <p>Так. У прайсі є окрема позиція «Зняття гель-лаку», а також комплекси, де зняття вже входить у вартість. Оберіть комплекс при записі, щоб майстер заклав правильний час.</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "60ms"}}>
          <span>02</span>
          <details>
            <summary>
              Чи робите манікюр без покриття?
              <b>+</b>
            </summary>
            <p>Так, є позиція «Комплекс: зняття та гігієнічний манікюр без покриття». Її ж обирають, коли треба привести нігті до ладу перед відпусткою чи процедурою.</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "120ms"}}>
          <span>03</span>
          <details>
            <summary>
              Що робити, якщо зламався ніготь?
              <b>+</b>
            </summary>
            <p>Є окрема послуга «Ремонт нігтя» — зазвичай це коротший візит, ніж повний комплекс. Зателефонуйте, підкажемо найближче вільне вікно.</p>
          </details>
        </div>
        <div className="reveal faq-item" style={{"--delay": "180ms"}}>
          <span>04</span>
          <details>
            <summary>
              Як записатися?
              <b>+</b>
            </summary>
            <p>Натисніть «Записатися онлайн», оберіть послугу, майстра та зручний час у системі онлайн-запису. Або зателефонуйте на 073 178 16 00.</p>
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
        <h2>Оберіть зручний час для манікюру</h2>
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
