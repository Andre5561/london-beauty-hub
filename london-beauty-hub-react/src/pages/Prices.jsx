import SEO from "../components/SEO";
import { BOOKING_URL } from "../siteConfig";

export default function PricesPage() {
  return (
    <>
      <SEO title="Ціни на манікюр, педикюр та брови у Львові | London Beauty Hub" description="Актуальні ціни на манікюр, педикюр і брови у London Beauty Hub у Львові. Перегляньте вартість, тривалість і одразу запишіться онлайн." />
  <main>
    <section className="simple-hero prices-hero editorial-price-hero">
      <div className="reveal">
        <span className="eyebrow">Ціни</span>
        <h1>Актуальні ціни на послуги</h1>
        <p>Перегляньте вартість і тривалість та одразу оберіть зручний час.</p>
        <a className="btn" href={BOOKING_URL} target="_blank" rel="noopener">Записатися онлайн</a>
      </div>
      <div className="simple-hero-word" aria-hidden="true">PRICE</div>
    </section>
    <nav className="price-nav">
      <a href="#manikur">Манікюр</a>
      <a href="#nar">Нарощення нігтів</a>
      <a href="#ped">Педикюр</a>
      <a href="#brows">Брови</a>
    </nav>
    <section className="section price-section" id="manikur">
      <div className="section-head price-head">
        <div className="reveal">
          <h2>Манікюр</h2>
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
    <section className="section price-section" id="nar">
      <div className="section-head price-head">
        <div className="reveal">
          <h2>Нарощення нігтів</h2>
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
    <section className="section price-section" id="ped">
      <div className="section-head price-head">
        <div className="reveal">
          <h2>Педикюр</h2>
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
    <section className="section price-section" id="brows">
      <div className="section-head price-head">
        <div className="reveal">
          <h2>Брови</h2>
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
    <section className="section help-choice">
      <div className="reveal help-choice-inner">
        <h2>Не впевнені, що обрати?</h2>
        <p>Напишіть нам у зручний месенджер — допоможемо зорієнтуватися у послугах перед записом.</p>
        <div className="help-actions">
          <a className="btn" href={BOOKING_URL} target="_blank" rel="noopener">Записатися онлайн</a>
          <button className="text-link messenger-toggle" type="button">Написати нам ↗</button>
        </div>
        <div className="messengers">
          <a href="https://t.me/london_beautyhub" target="_blank" rel="noopener">Telegram</a>
          <a href="https://wa.me/380731781600" target="_blank" rel="noopener">WhatsApp</a>
          <a href="viber://chat?number=%2B380731781600">Viber</a>
          <a href="https://www.instagram.com/londonbeautyhub" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.facebook.com/londonbeautyhub.ua" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
