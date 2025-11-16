'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    // Reveal sections on scroll
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' } as const;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, observerOptions);
    document.querySelectorAll('section').forEach((sec) => observer.observe(sec));

    // FAQ accordion
    const q = Array.from(document.querySelectorAll('.faq-question')) as HTMLElement[];
    const click = (el: HTMLElement) => {
      const item = el.parentElement as HTMLElement;
      const active = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'));
      if (!active) item.classList.add('active');
    };
    q.forEach((el) => el.addEventListener('click', () => click(el)));

    return () => {
      q.forEach((el) => el.removeEventListener('click', () => click(el)));
      observer.disconnect();
    };
  }, []);

  const openBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set('foglalas', '1');
    router.replace(url.toString(), { scroll: false });
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero visible" id="home">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <a className="btn hero-cta-floating" href="#foglalas" onClick={openBooking}>Foglalás</a>
        <div className="hero-content">
          <h1>KICSIM</h1>
          <p className="hero-subtitle">Romantikus menedék a Mátra szívében</p>
          <p className="hero-description">
            Ahol az erdő csendje találkozik a modern kényelemmel. Egy hely, ahol csak ti ketten és a természet vagytok.
          </p>
        </div>
      </section>

      {/* RÓLUNK - Miért a Kicsim? */}
      <section id="rolunk" className="about-bg">
        <div className="section-header">
          <div className="section-badge">Miért a Kicsim?</div>
          <h2 className="section-title">Modern Nyugalom az Erdő Ölelésében</h2>
          <p className="section-subtitle">Ahol a kényelem találkozik a természettel, és minden részlet a ti pihenésetekért lett megtervezve</p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <Image src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200" alt="Kicsim Vendégház" fill priority sizes="(max-width: 1200px) 100vw, 1200px" style={{ objectFit: 'cover' }} />
          </div>
          <div className="about-text">
            <h3>Egy hely, ahol megállhat az idő</h3>
            <p>A Kicsim vendégház nem csak egy szállás – egy élmény. Az erdő szélén megbújva, ahol a madarak éneke ébreszt, és a természet nyugalma körülölel.</p>
            <p>Prémium felszereltségünk és a természet közelsége tökéletes harmóniát teremt. A jakuzziból az erdőre nézhettek, a szaunában feltöltődhettek, majd a teraszon élvezhettek egy pohár bort a csillagos ég alatt.</p>
            <p>Legyen szó romantikus hétvégéről, évfordulóról vagy egy jól megérdemelt pihenésről – a Kicsim garantálja, hogy felejthetetlen élményekkel térjetek haza.</p>
            <div className="about-stats">
              <div className="stat-item"><div className="stat-number">100%</div><div className="stat-label">Privát terület</div></div>
              <div className="stat-item"><div className="stat-number">2 fő</div><div className="stat-label">Maximum</div></div>
              <div className="stat-item"><div className="stat-number">5★</div><div className="stat-label">Értékelés</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* HELYSZÍN */}
      <section id="hol">
        <div className="section-header">
          <div className="section-badge">Helyszín</div>
          <h2 className="section-title">Hol található?</h2>
          <p className="section-subtitle">A Mátra szívében, az erdő szélén – nyugodt, privát környezetben</p>
        </div>
        <div className="location-content">
          <div className="location-text">
            <p>Vendégházunk a Mátra szívében található, az erdő szélén, tökéletes helyen a természet szerelmeseinek. A csendes, privát környezet ideális a kikapcsolódáshoz és feltöltődéshez.</p>
            <p>A közeli városok könnyen megközelíthetők, mégis elég távol vannak ahhoz, hogy a nyugalom és a természet varázsa körülvehessen benneteket. Az erdei ösvények közvetlenül a házból indulnak, így a reggeli séták és túrák részévé válhatnak a mindennapi rutinnak.</p>
            <p>A pontos címet a foglalás megerősítése után küldjük el, hogy biztosítsuk vendégeink nyugalmát és privát szféráját.</p>
          </div>
          <div className="location-image">
            <Image src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200" alt="Mátrai erdő" width={1200} height={450} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Galéria külön oldalon (/galeria) */}

      {/* FELSZERELTSÉG */}
      <section id="felszereltseg">
        <div className="section-header">
          <div className="section-badge">Szolgáltatások</div>
          <h2 className="section-title">Felszereltség & Szolgáltatások</h2>
          <p className="section-subtitle">Minden, amire a gondtalan kikapcsolódáshoz szükségetek lehet</p>
        </div>
        <div className="amenities-grid">
          {[
            { icon: 'fa-hot-tub', title: 'Jakuzzi', desc: 'Relaxáljatok a meleg vízben az erdő csendjében', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200' },
            { icon: 'fa-fire', title: 'Szauna', desc: 'Teljes feltöltődés a finn szaunában', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200' },
            { icon: 'fa-utensils', title: 'Felszerelt konyha', desc: 'Minden eszköz a főzéshez és sütéshez', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200' },
            { icon: 'fa-wifi-slash', title: 'Digitális detox', desc: 'Nincs wifi - csak ti ketten és a természet', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200' },
            { icon: 'fa-snowflake', title: 'Klíma & Fűtés', desc: 'Tökéletes hőmérséklet egész évben', img: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=1200' },
            { icon: 'fa-campground', title: 'Bográcsozás', desc: 'Kültéri tűzrakó hely bográccsal', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200' },
            { icon: 'fa-coffee', title: 'Kávégép', desc: 'Indítsátok a napot friss kávéval', img: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=1200' },
            { icon: 'fa-bed', title: 'Kényelmes ágy', desc: 'Prémium matrac és ágyneműk', img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?w=1200' },
          ].map((a, i) => (
            <div key={i} className="amenity-card flip">
              <div className="amenity-card-inner">
                <div className="amenity-front">
                  <i className={`fas ${a.icon}`}></i>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
                <div className="amenity-back">
                  <Image src={a.img} alt={a.title} fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A Látnivalók, GYIK és Kapcsolat külön oldalakon érhetők el */}

      {/* Lightbox a galéria oldalon */}

      {/* Footer a közös layoutban */}
    </main>
  );
}
