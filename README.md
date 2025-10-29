# Kicsim Vendégház – Next.js (TypeScript)

Ez a mappa egy Next.js 14 (App Router) + TypeScript projekt. Az eredeti `index.html` érintetlenül megmaradt referencia célokra.

## Fejlesztés indítása

1) Telepítés

```bash
npm install
```

2) Fejlesztői szerver

```bash
npm run dev
```

Alapértelmezett URL: http://localhost:3000

## Struktúra

- `app/layout.tsx` – globális layout + FontAwesome CDN link
- `app/page.tsx` – az átköltöztetett kezdőoldal tartalom, React/TSX-ben
- `components/NavBar.tsx` – kliens oldali navigációs sáv
- `app/globals.css` – a teljes oldal stílusai (az eredeti témához igazítva)
- `next.config.js` – unsplash képek engedélyezése
- `tsconfig.json` – TS beállítások

## Megjegyzések

- A képeket egyszerűség kedvéért standard `<img>`-gel használjuk. Ha szeretnéd `next/image`-re váltani, be tudom vezetni.
- A FontAwesome ikonok CDN-ről érkeznek; átállítható lokális vagy npm csomagra is.
- A szekciók megjelenése IntersectionObserver-rel történik (scroll reveal), és a GYIK akkordion JS kliensoldali.