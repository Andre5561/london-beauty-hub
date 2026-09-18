# London Beauty Hub — React/Vite handoff

Це **нова React + Vite версія** дизайну London Beauty Hub, перенесена з учорашньої статичної V4.1. Оригінальна папка V4.1 не змінювалась.

## Запуск

```bash
npm install
npm run dev
```

Vite покаже локальну адресу, зазвичай `http://localhost:5173`.

## Структура

- `src/pages/` — окремі сторінки сайту
- `src/components/` — Header, Footer, SEO, layout, sticky booking
- `src/hooks/useSiteInteractions.js` — reveal/ellipse анімації, FAQ, gallery filter
- `src/styles/site.css` — візуальна система V4.1
- `public/assets/` — усі фото та логотипи
- `src/siteConfig.js` — спільний URL Altegio та телефон

## Маршрути

- `/`
- `/manikur/`
- `/naroshchennya-nigtiv/`
- `/pedykur/`
- `/brovy/`
- `/tsiny/`
- `/galereya/`
- `/kontakty/`

## Важливо для розробника

Візуал, тексти, структура сторінок, мобільна адаптація та анімації перенесені з V4.1. Ця папка призначена саме як читабельний frontend-handoff: сторінки можна відкривати у VS Code, компоненти — змінювати окремо, а стилі та assets зібрані в зрозумілу структуру.

Для production-хостингу з `BrowserRouter` сервер має віддавати `index.html` для frontend-маршрутів (SPA fallback).
