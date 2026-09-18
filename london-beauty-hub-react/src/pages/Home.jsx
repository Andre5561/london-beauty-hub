import SEO from "../components/SEO";
import { BOOKING_URL } from "../siteConfig";

export default function HomePage() {
  return (
    <>
      <SEO title="London Beauty Hub — б’юті-простір у Львові: манікюр, педикюр, брови" description="Салон краси у Львові на вул. Героїв УПА, 73А. Манікюр, педикюр, нарощення нігтів, брови, дизайн і зміцнення. Онлайн-запис і повний прайс на сайті." />
  <main>
    <section className="home-hero home-hero-full">
      <div className="home-hero-media" aria-hidden="true">
        <img src="/assets/hero-face.webp" alt="London Beauty Hub" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-bg-word" aria-hidden="true">LONDON</div>
      <div className="home-hero-copy reveal">
        <span className="eyebrow">Львів · Франківський район · вул. Героїв УПА, 73А</span>
        <h1>
          Сучасний{" "}
          <em>б’юті-простір</em>
          : нігті та брови
        </h1>
        <p>Манікюр і педикюр, нарощення нігтів та брови. Оберіть послугу і час онлайн, без дзвінків і очікування у директі.</p>
        <div className="hero-actions">
          <a className="btn" href={BOOKING_URL} target="_blank" rel="noopener">Записатися онлайн</a>
          <a className="text-link" href="/galereya/">Переглянути роботи ↗</a>
        </div>
      </div>
      <div className="hero-ornament one" aria-hidden="true"></div>
      <div className="hero-ornament two" aria-hidden="true"></div>
      <svg className="home-hero-line" viewBox="0 0 900 360" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength="1" d="M10,315 C180,90 540,20 890,115"></path>
      </svg>
    </section>
    <div className="marquee">
      <div className="marquee-track">
        <div>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1-4.4-4.3 6.1-.9Z"></path>
              </svg>
            </i>
            5.0 ★ Google
          </span>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <path d="M12 3 5.5 5.5v5.7c0 4.2 2.6 7.6 6.5 9.8 3.9-2.2 6.5-5.6 6.5-9.8V5.5L12 3Z"></path>
                <path d="m9.2 12 1.8 1.8 3.8-4"></path>
              </svg>
            </i>
            Стерилізація інструментів
          </span>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </i>
            Кварцування приміщення
          </span>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <ellipse cx="8" cy="7" rx="2" ry="2.7"></ellipse>
                <ellipse cx="16" cy="7" rx="2" ry="2.7"></ellipse>
                <ellipse cx="5.5" cy="11.5" rx="1.7" ry="2.2"></ellipse>
                <ellipse cx="18.5" cy="11.5" rx="1.7" ry="2.2"></ellipse>
                <path d="M7.7 17.2c0-2.5 2-4.5 4.3-4.5s4.3 2 4.3 4.5c0 1.8-1.3 3-3.1 2.4-.8-.3-1.6-.3-2.4 0-1.8.6-3.1-.6-3.1-2.4Z"></path>
              </svg>
            </i>
            Pet-friendly
          </span>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3.5 12h17M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21M12 3C9.5 5.5 8.2 8.5 8.2 12s1.3 6.5 3.8 9"></path>
              </svg>
            </i>
            UA / EN
          </span>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <rect x="4" y="5.5" width="16" height="14" rx="2"></rect>
                <path d="M8 3v5M16 3v5M4 10h16"></path>
              </svg>
            </i>
            Онлайн-запис
          </span>
        </div>
        <div aria-hidden="true">
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1-4.4-4.3 6.1-.9Z"></path>
              </svg>
            </i>
            5.0 ★ Google
          </span>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <path d="M12 3 5.5 5.5v5.7c0 4.2 2.6 7.6 6.5 9.8 3.9-2.2 6.5-5.6 6.5-9.8V5.5L12 3Z"></path>
                <path d="m9.2 12 1.8 1.8 3.8-4"></path>
              </svg>
            </i>
            Стерилізація інструментів
          </span>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </i>
            Кварцування приміщення
          </span>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <ellipse cx="8" cy="7" rx="2" ry="2.7"></ellipse>
                <ellipse cx="16" cy="7" rx="2" ry="2.7"></ellipse>
                <ellipse cx="5.5" cy="11.5" rx="1.7" ry="2.2"></ellipse>
                <ellipse cx="18.5" cy="11.5" rx="1.7" ry="2.2"></ellipse>
                <path d="M7.7 17.2c0-2.5 2-4.5 4.3-4.5s4.3 2 4.3 4.5c0 1.8-1.3 3-3.1 2.4-.8-.3-1.6-.3-2.4 0-1.8.6-3.1-.6-3.1-2.4Z"></path>
              </svg>
            </i>
            Pet-friendly
          </span>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3.5 12h17M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21M12 3C9.5 5.5 8.2 8.5 8.2 12s1.3 6.5 3.8 9"></path>
              </svg>
            </i>
            UA / EN
          </span>
          <span className="trust-item">
            <i>
              <svg viewBox="0 0 24 24">
                <rect x="4" y="5.5" width="16" height="14" rx="2"></rect>
                <path d="M8 3v5M16 3v5M4 10h16"></path>
              </svg>
            </i>
            Онлайн-запис
          </span>
        </div>
      </div>
    </div>
    <section className="section services-editorial">
      <div className="section-head split">
        <div className="reveal">
          <span className="eyebrow">Послуги</span>
          <h2>Оберіть послугу</h2>
        </div>
        <div className="reveal">
          <p className="section-intro">На кожній сторінці — актуальні ціни, тривалість, приклади робіт і онлайн-запис.</p>
        </div>
      </div>
      <div className="services-list">
        <article className="reveal service-editorial-item" style={{"--delay": "0ms"}}>
          <div className="service-photo">
            <img src="/assets/nails-blue.webp" alt="Манікюр" />
            <span className="service-photo-index">01</span>
          </div>
          <div className="service-copy">
            <div>
              <span className="service-index">01</span>
              <h3>Манікюр</h3>
              <p>Комбінований манікюр, гель-лак, зміцнення, дизайн.</p>
            </div>
            <div className="service-tail">
              <strong>від 650 ₴</strong>
              <a href="/manikur/">Детальніше ↗</a>
            </div>
          </div>
        </article>
        <article className="reveal service-editorial-item" style={{"--delay": "70ms"}}>
          <div className="service-photo">
            <img src="/assets/pedicure-pink.webp" alt="Педикюр" />
            <span className="service-photo-index">02</span>
          </div>
          <div className="service-copy">
            <div>
              <span className="service-index">02</span>
              <h3>Педикюр</h3>
              <p>Гігієнічний і комбінований, з покриттям та без.</p>
            </div>
            <div className="service-tail">
              <strong>від 750 ₴</strong>
              <a href="/pedykur/">Детальніше ↗</a>
            </div>
          </div>
        </article>
        <article className="reveal service-editorial-item" style={{"--delay": "140ms"}}>
          <div className="service-photo">
            <img src="/assets/nails-burgundy.webp" alt="Нарощення нігтів" />
            <span className="service-photo-index">03</span>
          </div>
          <div className="service-copy">
            <div>
              <span className="service-index">03</span>
              <h3>Нарощення нігтів</h3>
              <p>Форма і довжина, планова корекція, зняття.</p>
            </div>
            <div className="service-tail">
              <strong>від 1 600 ₴</strong>
              <a href="/naroshchennya-nigtiv/">Детальніше ↗</a>
            </div>
          </div>
        </article>
        <article className="reveal service-editorial-item" style={{"--delay": "210ms"}}>
          <div className="service-photo">
            <img src="/assets/brows-process.webp" alt="Брови" />
            <span className="service-photo-index">04</span>
          </div>
          <div className="service-copy">
            <div>
              <span className="service-index">04</span>
              <h3>Брови</h3>
              <p>Корекція, фарбування, ламінування і комплекси.</p>
            </div>
            <div className="service-tail">
              <strong>від 400 ₴</strong>
              <a href="/brovy/">Детальніше ↗</a>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section className="section gallery-preview" id="works">
      <div className="section-head split">
        <div className="reveal">
          <span className="eyebrow">Роботи</span>
          <h2>Подивіться результат до запису</h2>
        </div>
        <div className="reveal">
          <p className="section-intro">Реальні роботи наших майстрів: манікюр, педикюр, нарощення нігтів і брови.</p>
        </div>
      </div>
      <div className="gallery-collage">
        <div className="reveal gallery-tile tile-1">
          <img src="/assets/hero-main.webp" alt="Манікюр" />
        </div>
        <div className="reveal gallery-tile tile-2" style={{"--delay": "80ms"}}>
          <img src="/assets/nails-burgundy.webp" alt="Нарощення нігтів" />
        </div>
        <div className="reveal gallery-tile tile-3" style={{"--delay": "160ms"}}>
          <img src="/assets/brows-result.webp" alt="Брови" />
        </div>
        <div className="reveal gallery-tile tile-4" style={{"--delay": "240ms"}}>
          <img src="/assets/pedicure-pink.webp" alt="Педикюр" />
        </div>
      </div>
      <div className="reveal gallery-link-wrap">
        <a className="btn btn-ghost" href="/galereya/">Переглянути галерею</a>
      </div>
    </section>
    <section className="section reviews-section">
      <div className="section-head split">
        <div className="reveal">
          <span className="eyebrow">Відгуки</span>
          <h2>Що кажуть наші гості</h2>
        </div>
        <div className="reveal">
          <p className="section-intro">Реальні відгуки про візити до London Beauty Hub.</p>
        </div>
      </div>
      <div className="reviews-graphic ellipse-draw-group" aria-hidden="true">
        <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
          <ellipse pathLength="1" cx="590" cy="295" rx="470" ry="220" transform="rotate(15 590 295)"></ellipse>
          <ellipse pathLength="1" cx="635" cy="310" rx="405" ry="175" transform="rotate(-13 635 310)"></ellipse>
        </svg>
      </div>
      <div className="reviews-grid">
        <div className="reveal review-slot" style={{"--delay": "0ms"}}>
          <div className="review-medallion">
            <span>★</span>
          </div>
          <div className="review-skeleton" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div className="reveal review-slot" style={{"--delay": "80ms"}}>
          <div className="review-medallion">
            <span>★</span>
          </div>
          <div className="review-skeleton" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div className="reveal review-slot" style={{"--delay": "160ms"}}>
          <div className="review-medallion">
            <span>★</span>
          </div>
          <div className="review-skeleton" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
      <div className="reveal reviews-action">
        <a className="text-link" href="https://www.google.com/maps?q=London+Beauty+Hub" target="_blank" rel="noopener">Дивитися всі відгуки в Google ↗</a>
      </div>
    </section>
    <section className="section cleanliness">
      <div className="section-head split">
        <div className="reveal">
          <span className="eyebrow">Безпека</span>
          <h2>Наш стандарт чистоти</h2>
        </div>
        <div className="reveal">
          <p className="section-intro">Турбота про вас починається ще до процедури.</p>
        </div>
      </div>
      <div className="clean-photo-grid">
        <article className="reveal clean-photo-item" style={{"--delay": "0ms"}}>
          <div className="clean-photo">
            <img src="/assets/process.webp" alt="" />
            <span className="clean-corner"></span>
          </div>
          <div className="clean-copy">
            <span>01 · Інструменти</span>
            <div className="clean-line"></div>
            <p>Багаторазові інструменти проходять усі необхідні етапи очищення та стерилізації.</p>
          </div>
        </article>
        <article className="reveal clean-photo-item" style={{"--delay": "100ms"}}>
          <div className="clean-photo">
            <img src="/assets/salon-room.webp" alt="" />
            <span className="clean-corner"></span>
          </div>
          <div className="clean-copy">
            <span>02 · Кварцування</span>
            <div className="clean-line"></div>
            <p>Кварцування приміщення проводимо щодня.</p>
          </div>
        </article>
        <article className="reveal clean-photo-item" style={{"--delay": "200ms"}}>
          <div className="clean-photo">
            <img src="/assets/salon-chair.webp" alt="" />
            <span className="clean-corner"></span>
          </div>
          <div className="clean-copy">
            <span>03 · Робоче місце</span>
            <div className="clean-line"></div>
            <p>Перед кожною процедурою готуємо чисте робоче місце та використовуємо одноразові матеріали там, де це передбачено процедурою.</p>
          </div>
        </article>
      </div>
    </section>
    <section className="section why-section">
      <div className="section-head">
        <div className="reveal">
          <h2>Чому обирають London Beauty Hub</h2>
        </div>
      </div>
      <div className="organic-grid">
        <div className="reveal organic-item organic-a" style={{"--delay": "0ms"}}>
          <div className="organic-media">
            <img src="/assets/nails-blue.webp" alt="" />
            <div className="organic-shade"></div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path pathLength="1" d="M50,4 C80,2 97,20 96,50 C96,80 78,98 49,98 C20,98 3,80 4,49 C5,19 21,4 50,4 Z"></path>
            </svg>
            <div className="organic-copy">
              <span>01</span>
              <h3>Актуальні ціни</h3>
              <p>Вартість і тривалість послуг можна переглянути до запису.</p>
            </div>
          </div>
        </div>
        <div className="reveal organic-item organic-b" style={{"--delay": "100ms"}}>
          <div className="organic-media">
            <img src="/assets/nails-phone-pink.webp" alt="" />
            <div className="organic-shade"></div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path pathLength="1" d="M50,4 C80,2 97,20 96,50 C96,80 78,98 49,98 C20,98 3,80 4,49 C5,19 21,4 50,4 Z"></path>
            </svg>
            <div className="organic-copy">
              <span>02</span>
              <h3>Зручний запис</h3>
              <p>Оберіть послугу, майстра та вільний час онлайн — запис займає менше хвилини і одразу потрапляє в графік.</p>
            </div>
          </div>
        </div>
        <div className="reveal organic-item organic-c" style={{"--delay": "200ms"}}>
          <div className="organic-media">
            <img src="/assets/brows-process.webp" alt="" />
            <div className="organic-shade"></div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path pathLength="1" d="M50,4 C80,2 97,20 96,50 C96,80 78,98 49,98 C20,98 3,80 4,49 C5,19 21,4 50,4 Z"></path>
            </svg>
            <div className="organic-copy">
              <span>03</span>
              <h3>UA / EN сервіс</h3>
              <p>Комфортно спілкуємося українською та англійською.</p>
            </div>
          </div>
        </div>
        <div className="reveal organic-item organic-d" style={{"--delay": "300ms"}}>
          <div className="organic-media">
            <img src="/assets/salon-mirror.webp" alt="" />
            <div className="organic-shade"></div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path pathLength="1" d="M50,4 C80,2 97,20 96,50 C96,80 78,98 49,98 C20,98 3,80 4,49 C5,19 21,4 50,4 Z"></path>
            </svg>
            <div className="organic-copy">
              <span>04</span>
              <h3>Pet-friendly</h3>
              <p>Можна прийти на процедуру разом з улюбленцем.</p>
            </div>
            <span className="organic-paw">
              <svg viewBox="0 0 24 24">
                <ellipse cx="8" cy="7" rx="2" ry="2.7"></ellipse>
                <ellipse cx="16" cy="7" rx="2" ry="2.7"></ellipse>
                <ellipse cx="5.5" cy="11.5" rx="1.7" ry="2.2"></ellipse>
                <ellipse cx="18.5" cy="11.5" rx="1.7" ry="2.2"></ellipse>
                <path d="M7.7 17.2c0-2.5 2-4.5 4.3-4.5s4.3 2 4.3 4.5c0 1.8-1.3 3-3.1 2.4-.8-.3-1.6-.3-2.4 0-1.8.6-3.1-.6-3.1-2.4Z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="reveal organic-item organic-e" style={{"--delay": "400ms"}}>
          <div className="organic-media">
            <img src="/assets/location.webp" alt="" />
            <div className="organic-shade"></div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path pathLength="1" d="M50,4 C80,2 97,20 96,50 C96,80 78,98 49,98 C20,98 3,80 4,49 C5,19 21,4 50,4 Z"></path>
            </svg>
            <div className="organic-copy">
              <span>05</span>
              <h3>Локація</h3>
              <p>Львів, Франківський район, вул. Героїв УПА, 73А.</p>
            </div>
          </div>
        </div>
        <div className="reveal organic-item organic-f" style={{"--delay": "500ms"}}>
          <div className="organic-media">
            <img src="/assets/salon-reception.webp" alt="" />
            <div className="organic-shade"></div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path pathLength="1" d="M50,4 C80,2 97,20 96,50 C96,80 78,98 49,98 C20,98 3,80 4,49 C5,19 21,4 50,4 Z"></path>
            </svg>
            <div className="organic-copy">
              <span>06</span>
              <h3>Зв’язок</h3>
              <p>Instagram, Facebook, Telegram, WhatsApp, Viber та телефон — оберіть зручний спосіб написати нам.</p>
            </div>
          </div>
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
        <h2>Записатись у London Beauty Hub</h2>
        <p>Оберіть послугу, майстра і зручний час. Запис займає менше хвилини і одразу потрапляє в наш графік.</p>
        <div>
          <a className="btn" href={BOOKING_URL} target="_blank" rel="noopener">Записатися онлайн</a>
          <a className="text-link" href="tel:+380731781600">073 178 16 00 ↗</a>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
