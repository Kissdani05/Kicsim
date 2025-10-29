'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
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

    // Close lightbox with Escape
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    document.addEventListener('keydown', onKey);

    return () => {
      q.forEach((el) => el.removeEventListener('click', () => click(el)));
      observer.disconnect();
      document.removeEventListener('keydown', onKey);
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
        <div className="hero-content">
          <h1>KICSIM</h1>
          <p className="hero-subtitle">Romantikus menedék a Mátra szívében</p>
          <p className="hero-description">
            Ahol az erdő csendje találkozik a modern kényelemmel. Egy hely, ahol csak ti ketten és a természet vagytok.
          </p>
          <div className="hero-buttons">
            <a className="btn" href="#foglalas" onClick={openBooking}>Foglalás most</a>
            <a className="btn btn-secondary" href="#rolunk">Fedezd fel</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span style={{ fontSize: '.9rem', letterSpacing: '1px' }}>GÖRGESS</span>
          <i className="fas fa-chevron-down" />
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
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169253.4263566619!2d19.749999999999996!3d47.86666666666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47401e0d1e8c7f7f%3A0x400c4290c1e1360!2zTcOhdHJh!5e0!3m2!1shu!2shu!4v1234567890123!5m2!1shu!2shu" loading="lazy" allowFullScreen />
          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      <section id="galeria" className="gallery-section">
        <div className="section-header">
          <div className="section-badge">Galéria</div>
          <h2 className="section-title">Tekintsd meg az erdei otthont</h2>
          <p className="section-subtitle">Minden sarok, minden részlet a ti kényelmeteket szolgálja</p>
        </div>
        <div className="gallery-container">
          <div className="gallery-grid">
            <div className="gallery-item large" onClick={() => setLightbox({ src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600', alt: 'Modern nappali' })}>
              <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200" alt="Modern nappali" fill sizes="(max-width: 1600px) 100vw, 1200px" style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay"><h3>Modern Nappali</h3><p>Tágas, napfényes és stílusos</p></div>
            </div>
            <div className="gallery-item" onClick={() => setLightbox({ src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600', alt: 'Jakuzzi' })}>
              <Image src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800" alt="Jakuzzi" fill sizes="(max-width: 1600px) 50vw, 800px" style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay"><h3>Jakuzzi</h3><p>Relaxálj az erdő csendében</p></div>
            </div>
            <div className="gallery-item" onClick={() => setLightbox({ src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600', alt: 'Hálószoba' })}>
              <Image src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800" alt="Hálószoba" fill sizes="(max-width: 1600px) 50vw, 800px" style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay"><h3>Nyugodt Pihenés</h3><p>Prémium ágy és ágyneműk</p></div>
            </div>
            <div className="gallery-item" onClick={() => setLightbox({ src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600', alt: 'Konyha' })}>
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" alt="Konyha" fill sizes="(max-width: 1600px) 50vw, 800px" style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay"><h3>Felszerelt Konyha</h3><p>Minden eszköz a főzéshez</p></div>
            </div>
            <div className="gallery-item" onClick={() => setLightbox({ src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600', alt: 'Terasz' })}>
              <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800" alt="Terasz" fill sizes="(max-width: 1600px) 50vw, 800px" style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay"><h3>Privát Terasz</h3><p>Erdőre néző kilátás</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FELSZERELTSÉG */}
      <section id="felszereltseg">
        <div className="section-header">
          <div className="section-badge">Szolgáltatások</div>
          <h2 className="section-title">Felszereltség & Szolgáltatások</h2>
          <p className="section-subtitle">Minden, amire a gondtalan kikapcsolódáshoz szükségetek lehet</p>
        </div>
        <div className="amenities-grid">
          <div className="amenity-card"><i className="fas fa-hot-tub"></i><h3>Jakuzzi</h3><p>Relaxáljatok a meleg vízben az erdő csendjében</p></div>
          <div className="amenity-card"><i className="fas fa-fire"></i><h3>Szauna</h3><p>Teljes feltöltődés a finn szaunában</p></div>
          <div className="amenity-card"><i className="fas fa-utensils"></i><h3>Felszerelt konyha</h3><p>Minden eszköz a főzéshez és sütéshez</p></div>
          <div className="amenity-card"><i className="fas fa-wifi-slash"></i><h3>Digitális detox</h3><p>Nincs wifi - csak ti ketten és a természet</p></div>
          <div className="amenity-card"><i className="fas fa-snowflake"></i><h3>Klíma & Fűtés</h3><p>Tökéletes hőmérséklet egész évben</p></div>
          <div className="amenity-card"><i className="fas fa-campground"></i><h3>Bográcsozás</h3><p>Kültéri tűzrakó hely bográccsal</p></div>
          <div className="amenity-card"><i className="fas fa-coffee"></i><h3>Kávégép</h3><p>Indítsátok a napot friss kávéval</p></div>
          <div className="amenity-card"><i className="fas fa-bed"></i><h3>Kényelmes ágy</h3><p>Prémium matrac és ágyneműk</p></div>
        </div>
      </section>

      {/* A Látnivalók, GYIK és Kapcsolat külön oldalakon érhetők el */}

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}>
          <button className="lightbox-close" aria-label="Bezárás" onClick={() => setLightbox(null)}><i className="fas fa-times" /></button>
          {/* Use next/image for optimization; use fill within a container */}
          <div className="lightbox-img-wrap">
            <Image src={lightbox.src} alt={lightbox.alt} fill sizes="100vw" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      )}

      {/* Footer a közös layoutban */}
    </main>
  );
}
