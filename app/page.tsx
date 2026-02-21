'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import miertakicsimImage from '@/images/miertakicsim.jpeg';

export default function Page() {
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

  return (
    <main>
      {/* HERO */}
      <section className="hero visible" id="home">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <a className="btn hero-cta-floating" href="/foglalas">Foglalás</a>
        <div className="hero-content">
          <h1>KICSIM</h1>
          <p className="hero-subtitle">Romantikus menedék a Mátra szívében</p>
          <p className="hero-description">
            Ahol az erdő csendje találkozik a modern kényelemmel. Egy hely, ahol csak ti ketten és a természet vagytok.
          </p>
        </div>
      </section>

      {/* RÓLUNK - Miért a Kicsim? & Hol található? */}
      <section id="rolunk" className="about-bg">
        <div className="section-header">
          <div className="section-badge">Miért a Kicsim?</div>
          <h2 className="section-title">Vendégházunk a Mátra Szívében</h2>
          <p className="section-subtitle">A festői szépségű Mátrakeresztesen, az erdő szélén – ahol a nyugalom találkozik a luxussal</p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <Image src={miertakicsimImage} alt="Kicsim Vendégház" fill priority sizes="(max-width: 1200px) 100vw, 1200px" style={{ objectFit: 'cover' }} />
          </div>
          <div className="about-text">
            <h3>Vendégházunk a festői szépségű Mátrakeresztesen...</h3>
            <p>Vendégházunk a festői szépségű Mátrakeresztesen, az erdő szélén bújik meg, ahol az erdei nyugalom az első perctől elvarázsol. Fedezzétek fel az erdő csendjét, és engedjétek, hogy a természet elcsendesítse a rohanó világ zaját és néhány napig csak egymásra figyeljetek – a Kicsim egy felnőttbarát romantikus erdei vendégház, ahol mindez könnyedén megvalósulhat. A jakuzzi és a szauna gondoskodik a teljes feltöltődésről, a teljesen felszerelt konyha és igény esetén a reggeli bekészítés pedig otthonossá teszi a tartózkodást. A környék fantasztikus lehetőséget kínál túrázásra és a Mátra felfedezésére, így a természet és a romantika tökéletes harmóniáját élhetitek át.</p>
            <div className="about-stats">
              <div className="stat-item"><div className="stat-number">100%</div><div className="stat-label">Privát terület</div></div>
              <div className="stat-item"><div className="stat-number">2 fő</div><div className="stat-label">Maximum</div></div>
              <div className="stat-item"><div className="stat-number">5★</div><div className="stat-label">Értékelés</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* KIEMELT SZOLGÁLTATÁSOK */}
      <section id="kiemelt" className="highlights-section">
        <div className="section-header">
          <div className="section-badge">Kiemelt Szolgáltatások</div>
          <h2 className="section-title">Az Élmény Magja</h2>
          <p className="section-subtitle">Fedezd fel azokat az exclusív szolgáltatásokat, amelyek az ön pihenését tökéletessé teszik</p>
        </div>

        <div className="highlight-item highlight-item-left">
          <div className="highlight-text">
            <div className="highlight-accent"></div>
            <h3><i className="fas fa-hot-tub"></i> Privát Jakuzzi Luxus</h3>
            <p>Merüljetek el kettesben a privát jakuzziban, élvezzétek a privát wellnesst a Mátra fái alatt. A meleg víz és a csend garantálja a teljes ellazulást és romantikus hangulatot.</p>
          </div>
          <div className="highlight-image">
            <Image src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80" alt="Privát jakuzzi" width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div className="highlight-item highlight-item-right">
          <div className="highlight-image">
            <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" alt="Infraszauna" width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
          </div>
          <div className="highlight-text">
            <div className="highlight-accent"></div>
            <h3><i className="fas fa-fire"></i> Infraszauna – Wellness Kiválóság</h3>
            <p>Beltéri infraszaunánk egész évben elérhető, hogy a hűvösebb napokon is meleg és nyugodt környezetben lazíthassatok. Tökéletes módja a test és a lélek feltöltődésének, miközben a párotokkal kettesben élvezitek a csendet.</p>
          </div>
        </div>

        <div className="highlight-item highlight-item-left">
          <div className="highlight-text">
            <div className="highlight-accent"></div>
            <h3><i className="fas fa-bed"></i> Romantikus Erdei Idill</h3>
            <p>Panorámás franciaágyaink és felnőttbarát környezetünk garantálja a zavartalan romantikát. A Kicsim a tökéletes hely a párok romantikus, zavartalan elvonulásához.</p>
          </div>
          <div className="highlight-image">
            <Image src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?w=800&q=80" alt="Romantikus szoba" width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div className="highlight-item highlight-item-right">
          <div className="highlight-image">
            <Image src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80" alt="Felszerelt konyha" width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
          </div>
          <div className="highlight-text">
            <div className="highlight-accent"></div>
            <h3><i className="fas fa-utensils"></i> Gourmet Konyha</h3>
            <p>Főzzetek kényelmesen és élvezzétek az együtt töltött időt a teljesen felszerelt konyhában, amely kávégéppel és mosogatógéppel is rendelkezik.</p>
          </div>
        </div>

        <div className="highlight-item highlight-item-left">
          <div className="highlight-text">
            <div className="highlight-accent"></div>
            <h3><i className="fas fa-hiking"></i> Erdőkalandok</h3>
            <p>A Kicsim vendégháza közvetlenül a Mátra festői erdei és hegyi útvonalai mellett található, így könnyedén fedezhetitek fel a természet szépségeit. Túrázzatok együtt, élvezzétek a kilátást és a friss levegőt, miközben új élményeket szereztek kettesben.</p>
          </div>
          <div className="highlight-image">
            <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Erdőközeli túrák" width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* FELSZERELTSÉG */}
      <section id="felszereltseg">
        <div className="section-header">
          <h2 className="section-title">Felszereltség</h2>
          <p className="section-subtitle">Minden, amire a gondtalan kikapcsolódáshoz szükségetek lehet</p>
        </div>
        <div className="amenities-grid">
          {[
            { title: 'Csak ketten', desc: 'Felnőttbarát romantikus elvonulás kettesben, gyermekmentes övezet' },
            { title: 'Jakuzzi', desc: 'Privát wellness élmény bekészített köntössel' },
            { title: 'Beltéri infraszauna', desc: 'Egész évben használható, nyugodt szaunaélmény' },
            { title: 'Panorámás franciaágy', desc: 'Ébredés erdőre és hegyre nyíló kilátással' },
            { title: 'Felszerelt konyha', desc: 'Kávégéppel és mosogatógéppel – kávékapszula és tea bekészítéssel' },
            { title: 'Modern fürdőszoba', desc: 'Bidével és zuhanykabinnal' },
            { title: 'Kényelmes nappali', desc: 'Kétszemélyes ülőgarnitúrával – bekuckózás kettesben' },
            { title: 'Kisállatmentes', desc: 'Allergiabarát környezet – nyugodt pihenés minden vendégnek' },
            { title: 'Klíma és padlófűtés', desc: 'Kellemes hőmérséklet minden évszakban' },
            { title: 'Szórakozás együtt', desc: 'TV, Netflix, Wi-Fi, társasjátékok és könyvek' },
            { title: 'Privát parkoló', desc: 'Biztonságos parkolás közvetlenül a háznál' },
            { title: 'Önálló érkezés', desc: 'Rugalmas kulcsszéf – érkezz a saját idődben' },
            { title: 'Csendes terasz', desc: 'Lenyűgöző kilátás a közeli hegyre és az erdőre' },
            { title: 'Túrázás', desc: 'Kirándulás, közeli látnivalók – fedezd fel a Mátrát' },
          ].map((a, i) => (
            <div key={i} className="amenity-card">
              <div className="amenity-front">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALÉRIA */}
      <section id="galeria" className="gallery-section">
        <div className="section-header">
          <div className="section-badge">Galerie</div>
          <h2 className="section-title">Képalória</h2>
          <p className="section-subtitle">Fedezd fel a Kicsim minden szögletét – a jakuzzitól az erdőig</p>
        </div>
        <div className="gallery-container">
          <div className="gallery-grid">
            <div className="gallery-item h-3">
              <Image src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80" alt="Jakuzzi" fill style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay">
                <h3>Privát Jakuzzi</h3>
                <p>Éjszakás relaxáció</p>
              </div>
            </div>
            <div className="gallery-item h-2">
              <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80" alt="Szauna" fill style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay">
                <h3>Infraszauna</h3>
                <p>Wellness élmény</p>
              </div>
            </div>
            <div className="gallery-item h-4">
              <Image src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?w=600&q=80" alt="Hálószoba" fill style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay">
                <h3>Romantikus Szoba</h3>
                <p>Panoráma az erdőre</p>
              </div>
            </div>
            <div className="gallery-item h-1">
              <Image src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80" alt="Konyha" fill style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay">
                <h3>Modern Konyha</h3>
                <p>Gourmet felszerelés</p>
              </div>
            </div>
            <div className="gallery-item h-5">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Terasz" fill style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay">
                <h3>Terasz</h3>
                <p>Természet közelségben</p>
              </div>
            </div>
            <div className="gallery-item h-2">
              <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Erdő" fill style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay">
                <h3>Erdőkaland</h3>
                <p>Túrázás a Mátrában</p>
              </div>
            </div>
            <div className="gallery-item h-3">
              <Image src="https://images.unsplash.com/photo-1570129477492-45ac003caf56?w=600&q=80" alt="Nappali" fill style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay">
                <h3>Nappali</h3>
                <p>Kényelmes közös tér</p>
              </div>
            </div>
            <div className="gallery-item h-4">
              <Image src="https://images.unsplash.com/photo-1517457373614-b7152f800a81?w=600&q=80" alt="Fürdőszoba" fill style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay">
                <h3>Fürdőszoba</h3>
                <p>Premium felszereltség</p>
              </div>
            </div>
            <div className="gallery-item h-2">
              <Image src="https://images.unsplash.com/photo-1538371846014-2e475007f435?w=600&q=80" alt="Kívülről" fill style={{ objectFit: 'cover' }} />
              <div className="gallery-overlay">
                <h3>Külső Nézet</h3>
                <p>Architectura a természetben</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SZOLGÁLTATÁSOK */}
      <section id="szolgaltatasok">
        <div className="section-header">
          <h2 className="section-title">Szolgáltatások</h2>
          <p className="section-subtitle">Kényelmi pluszok az élményetekhez</p>
        </div>
        <div className="amenities-grid">
          {[
            { title: 'Reggeli kosár', desc: 'Friss pékáru, helyi termékek – bekészítve az első reggeli meglepetéshez' },
            { title: 'Étkezési lehetőségek', desc: 'Ajánlásaink a közeli éttermekről és kiszállítási opciókról' },
            { title: 'E-bike bérlés', desc: 'Fedezd fel a Mátrát elektromos kerékpárral – kérésre helyben elérhető' },
          ].map((a, i) => (
            <div key={i} className="amenity-card">
              <div className="amenity-front">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
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
