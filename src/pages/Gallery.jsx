import SEO from "../components/SEO";
import { BOOKING_URL } from "../siteConfig";

export default function GalleryPage() {
  return (
    <>
      <SEO title="Галерея робіт — манікюр, педикюр, брови | London Beauty Hub" description="Реальні роботи майстрів London Beauty Hub у Львові: манікюр, педикюр і брови. Перегляньте галерею та запишіться онлайн." />
  <main>
    <section className="simple-hero gallery-hero editorial-cover">
      <div className="editorial-cover-media" aria-hidden="true">
        <img src="/assets/nails-phone-pink.webp" alt="" />
      </div>
      <div className="editorial-cover-shade"></div>
      <div className="simple-hero-word" aria-hidden="true">GALLERY</div>
      <div className="reveal">
        <span className="eyebrow">Галерея</span>
        <h1>Роботи наших майстрів</h1>
        <p>Перегляньте манікюр, педикюр, нарощення нігтів і брови до запису.</p>
        <a className="btn" href={BOOKING_URL} target="_blank" rel="noopener">Записатися онлайн</a>
      </div>
      <svg className="editorial-cover-line" viewBox="0 0 720 300" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength="1" d="M10,265 C210,55 500,30 710,120"></path>
      </svg>
    </section>
    <section className="section full-gallery">
      <div className="gallery-filter">
        <button className="active" data-filter="all">Усі роботи</button>
        <button data-filter="manikur">Манікюр</button>
        <button data-filter="ped">Педикюр</button>
        <button data-filter="nar">Нарощення нігтів</button>
        <button data-filter="brows">Брови</button>
      </div>
      <div className="masonry">
        <div className="reveal masonry-item m-1" data-category="manikur" style={{"--delay": "0ms"}}>
          <img src="/assets/hero-main.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-2" data-category="manikur" style={{"--delay": "60ms"}}>
          <img src="/assets/nails-blue.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-3" data-category="manikur" style={{"--delay": "120ms"}}>
          <img src="/assets/nails-blue-mirror.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-4" data-category="manikur" style={{"--delay": "180ms"}}>
          <img src="/assets/nails-phone-pink.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-5" data-category="nar" style={{"--delay": "240ms"}}>
          <img src="/assets/nails-burgundy.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-1" data-category="nar" style={{"--delay": "0ms"}}>
          <img src="/assets/nails-red-phone.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-2" data-category="nar" style={{"--delay": "60ms"}}>
          <img src="/assets/nails-color.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-3" data-category="ped" style={{"--delay": "120ms"}}>
          <img src="/assets/pedicure-pink.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-4" data-category="ped" style={{"--delay": "180ms"}}>
          <img src="/assets/pedicure.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-5" data-category="ped" style={{"--delay": "240ms"}}>
          <img src="/assets/pedicure-detail.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-1" data-category="brows" style={{"--delay": "0ms"}}>
          <img src="/assets/brows-result.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-2" data-category="brows" style={{"--delay": "60ms"}}>
          <img src="/assets/brows-result-2.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-3" data-category="brows" style={{"--delay": "120ms"}}>
          <img src="/assets/brows-process.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-4" data-category="brows" style={{"--delay": "180ms"}}>
          <img src="/assets/brows-process-close.webp" alt="" />
        </div>
        <div className="reveal masonry-item m-5" data-category="brows" style={{"--delay": "240ms"}}>
          <img src="/assets/brows-redhead.webp" alt="" />
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
        <h2>Знайшли свій наступний образ?</h2>
        <p>Оберіть послугу та зручний час онлайн.</p>
        <div>
          <a className="btn" href={BOOKING_URL} target="_blank" rel="noopener">Записатися онлайн</a>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
