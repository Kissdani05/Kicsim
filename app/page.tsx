'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import miertakicsimImage from '@/images/miertakicsim.jpeg';
import jakuzziImage from '@/images/Szol/jakuzziazellazulashoz.jpg';
import infraszaunaImage from '@/images/Szol/pihentető infraszauna.jpg';
import erdeiAlmokImage from '@/images/Szol/erdei álmok.jpg';
import felszereltKonyhaImage from '@/images/Szol/felszerelt konyha.jpg';
import erdeiTurakImage from '@/images/Szol/5. erdei túrák.jpg';

// Galéria képek
import gal1 from '@/images/galerie/Messenger_creation_CE6DA4D1-55D4-476B-8159-9A0C506F1FE4.jpeg';
import gal2 from '@/images/galerie/Messenger_creation_BFEA4F4B-5F0D-4F90-92DD-454484F4F0E5.jpeg';
import gal3 from '@/images/galerie/20260111_075228.jpg';
import gal4 from '@/images/galerie/20251231_110108.jpg';
import gal5 from '@/images/galerie/20260111_082358.jpg';
import gal6 from '@/images/galerie/20250625_161427 (1).jpg';
import gal7 from '@/images/galerie/20260111_082621.jpg';
import gal8 from '@/images/galerie/2. csak a csend.jpg';
import gal9 from '@/images/galerie/20260110_211133.jpg';
import gal10 from '@/images/galerie/20250905_201239 (1).jpg';
import gal11 from '@/images/galerie/20251010_170538.jpg';
import gal12 from '@/images/galerie/20251231_105036.jpg másolata.jpg';
import gal13 from '@/images/galerie/20251231_104928.jpg másolata.jpg';
import gal14 from '@/images/galerie/20260109_135727.jpg';
import gal15 from '@/images/galerie/20250416_100022.jpg';
import gal16 from '@/images/galerie/20260111_075251.jpg';
import gal17 from '@/images/galerie/20250823_172411.jpg';
import gal18 from '@/images/galerie/20250625_160956 (2).jpg';
import gal19 from '@/images/galerie/20251230_144937_02.jpg';
import gal20 from '@/images/galerie/Messenger_creation_9040AEFB-E2E3-4D3C-BA02-05437E073070.jpeg';
import gal21 from '@/images/galerie/heroba2.jpg';
import gal22 from '@/images/galerie/20250905_211733 (1).jpg';
import gal23 from '@/images/galerie/20260109_140101.jpg';
import gal24 from '@/images/galerie/20260111_075118.jpg';
import gal25 from '@/images/galerie/20251231_105128.jpg másolata.jpg';
import gal26 from '@/images/galerie/20251116_134743.jpg másolata.jpg';
import gal27 from '@/images/galerie/galéria nappali2.jpg másolata.jpg';
import gal28 from '@/images/galerie/20250905_201407.jpg';
import gal29 from '@/images/galerie/20251019_122937.jpg';
import gal30 from '@/images/galerie/Messenger_creation_C0B19BBF-764D-4D4C-B197-08AB2943BDA9.jpeg';

export default function Page() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<any>(null);

  const openLightbox = (img: any) => {
    setLightboxImage(img);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

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
      window.removeEventListener('scroll', handleScroll);
      q.forEach((el) => el.removeEventListener('click', () => click(el)));
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="hero visible" id="home">
        <div className="hero-bg">
          <video 
            autoPlay 
            muted 
            playsInline
            preload="auto"
            className="hero-video"
            onEnded={(e) => {
              const video = e.currentTarget;
              video.style.opacity = '0';
              setTimeout(() => {
                video.currentTime = 0;
                video.style.opacity = '1';
                video.play();
              }, 600);
            }}
          >
            <source src="/videos/DJI_0247.MP4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>KICSIM</h1>
          <p className="hero-subtitle">Romantikus menedék a Mátra szívében</p>
          <p className="hero-description">
            Ahol az erdő csendje találkozik a modern kényelemmel. Egy hely, ahol csak ti ketten és a természet vagytok.
          </p>
          <div className="hero-buttons">
            <a className="btn" href="/foglalas">Foglalás</a>
          </div>
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
            <Image 
              src={miertakicsimImage} 
              alt="Kicsim Vendégház" 
              fill 
              priority 
              placeholder="blur"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" 
              style={{ objectFit: 'cover' }} 
            />
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
          <div className="highlight-image" onClick={() => openLightbox(jakuzziImage)} style={{ cursor: 'pointer' }}>
            <Image 
              src={jakuzziImage} 
              alt="Privát jakuzzi" 
              width={600} 
              height={400} 
              placeholder="blur"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }} 
            />
          </div>
        </div>

        <div className="highlight-item highlight-item-right">
          <div className="highlight-image" onClick={() => openLightbox(infraszaunaImage)} style={{ cursor: 'pointer' }}>
            <Image 
              src={infraszaunaImage} 
              alt="Infraszauna" 
              width={600} 
              height={400} 
              placeholder="blur"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }} 
            />
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
          <div className="highlight-image" onClick={() => openLightbox(erdeiAlmokImage)} style={{ cursor: 'pointer' }}>
            <Image 
              src={erdeiAlmokImage} 
              alt="Romantikus szoba" 
              width={600} 
              height={400} 
              placeholder="blur"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }} 
            />
          </div>
        </div>

        <div className="highlight-item highlight-item-right">
          <div className="highlight-image" onClick={() => openLightbox(felszereltKonyhaImage)} style={{ cursor: 'pointer' }}>
            <Image 
              src={felszereltKonyhaImage} 
              alt="Felszerelt konyha" 
              width={600} 
              height={400} 
              placeholder="blur"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }} 
            />
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
          <div className="highlight-image" onClick={() => openLightbox(erdeiTurakImage)} style={{ cursor: 'pointer' }}>
            <Image 
              src={erdeiTurakImage} 
              alt="Erdőközeli túrák" 
              width={600} 
              height={400} 
              placeholder="blur"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }} 
            />
          </div>
        </div>
      </section>

      {/* FELSZERELTSÉG */}
      <section id="felszereltseg" className="equipment-section">
        <div className="section-header">
          <div className="section-badge">Kényelmi extrák</div>
          <h2 className="section-title">Felszereltség</h2>
          <p className="section-subtitle">Minden, amire a gondtalan kikapcsolódáshoz szükségetek lehet</p>
        </div>
        
        <div className="equipment-categories">
          {/* Wellness & Pihenés */}
          <div className="equipment-category">
            <div className="category-header">
              <i className="fas fa-spa"></i>
              <h3>Wellness & Pihenés</h3>
            </div>
            <div className="equipment-items">
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-hot-tub"></i></div>
                <div className="equipment-content">
                  <h4>Jakuzzi</h4>
                  <p>Privát wellness élmény bekészített köntössel</p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-fire"></i></div>
                <div className="equipment-content">
                  <h4>Beltéri infraszauna</h4>
                  <p>Egész évben használható, nyugodt szaunaélmény</p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-bed"></i></div>
                <div className="equipment-content">
                  <h4>Panorámás franciaágy</h4>
                  <p>Ébredés erdőre és hegyre nyíló kilátással</p>
                </div>
              </div>
            </div>
          </div>

          {/* Felszereltség & Kényelem */}
          <div className="equipment-category">
            <div className="category-header">
              <i className="fas fa-home"></i>
              <h3>Felszereltség & Kényelem</h3>
            </div>
            <div className="equipment-items">
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-blender"></i></div>
                <div className="equipment-content">
                  <h4>Felszerelt konyha</h4>
                  <p>Kávégéppel és mosogatógéppel – kávékapszula és tea bekészítéssel</p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-bath"></i></div>
                <div className="equipment-content">
                  <h4>Modern fürdőszoba</h4>
                  <p>Bidével és zuhanykabinnal</p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-couch"></i></div>
                <div className="equipment-content">
                  <h4>Kényelmes nappali</h4>
                  <p>Kétszemélyes ülőgarnitúrával – bekuckózás kettesben</p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-temperature-high"></i></div>
                <div className="equipment-content">
                  <h4>Klíma és padlófűtés</h4>
                  <p>Kellemes hőmérséklet minden évszakban</p>
                </div>
              </div>
            </div>
          </div>

          {/* Szórakozás & Szabadidő */}
          <div className="equipment-category">
            <div className="category-header">
              <i className="fas fa-gamepad"></i>
              <h3>Szórakozás & Szabadidő</h3>
            </div>
            <div className="equipment-items">
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-tv"></i></div>
                <div className="equipment-content">
                  <h4>Szórakozás együtt</h4>
                  <p>TV, Netflix, Wi-Fi, társasjátékok és könyvek</p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-umbrella-beach"></i></div>
                <div className="equipment-content">
                  <h4>Csendes terasz</h4>
                  <p>Lenyűgöző kilátás a közeli hegyre és az erdőre</p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-hiking"></i></div>
                <div className="equipment-content">
                  <h4>Túrázás</h4>
                  <p>Kirándulás, közeli látnivalók – fedezd fel a Mátrát</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exkluzivitás & Biztonság */}
          <div className="equipment-category">
            <div className="category-header">
              <i className="fas fa-crown"></i>
              <h3>Exkluzivitás & Biztonság</h3>
            </div>
            <div className="equipment-items">
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-heart"></i></div>
                <div className="equipment-content">
                  <h4>Csak ketten</h4>
                  <p>Felnőttbarát romantikus elvonulás kettesben, gyermekmentes övezet</p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-ban"></i></div>
                <div className="equipment-content">
                  <h4>Kisállatmentes</h4>
                  <p>Allergiabarát környezet – nyugodt pihenés minden vendégnek</p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-car"></i></div>
                <div className="equipment-content">
                  <h4>Privát parkoló</h4>
                  <p>Biztonságos parkolás közvetlenül a háznál</p>
                </div>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon"><i className="fas fa-key"></i></div>
                <div className="equipment-content">
                  <h4>Önálló érkezés</h4>
                  <p>Rugalmas kulcsszéf – érkezz a saját idődben</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      <section id="galeria" className="gallery-section">
        <div className="section-header">
          <div className="section-badge">Galerie</div>
          <h2 className="section-title">Képgaléria</h2>
          <p className="section-subtitle">Fedezd fel a Kicsim minden szögletét – a jakuzzitól az erdőig</p>
        </div>
        <div className="gallery-container">
          <div className="gallery-grid">
            {[
              { img: gal1, height: 'h-3' },
              { img: gal2, height: 'h-2' },
              { img: gal3, height: 'h-4' },
              { img: gal4, height: 'h-2' },
              { img: gal5, height: 'h-3' },
              { img: gal6, height: 'h-2' },
              { img: gal7, height: 'h-4' },
              { img: gal8, height: 'h-3' },
              { img: gal9, height: 'h-2' },
              { img: gal10, height: 'h-5' },
              { img: gal11, height: 'h-2' },
              { img: gal12, height: 'h-3' },
              { img: gal13, height: 'h-4' },
              { img: gal14, height: 'h-2' },
              { img: gal15, height: 'h-3' },
              { img: gal16, height: 'h-2' },
              { img: gal17, height: 'h-4' },
              { img: gal18, height: 'h-3' },
              { img: gal19, height: 'h-2' },
              { img: gal20, height: 'h-5' },
              { img: gal21, height: 'h-3' },
              { img: gal22, height: 'h-2' },
              { img: gal23, height: 'h-4' },
              { img: gal24, height: 'h-2' },
              { img: gal25, height: 'h-3' },
              { img: gal26, height: 'h-2' },
              { img: gal27, height: 'h-4' },
              { img: gal28, height: 'h-3' },
              { img: gal29, height: 'h-2' },
              { img: gal30, height: 'h-3' },
            ].map((item, i) => (
              <div key={i} className={`gallery-item ${item.height}`} onClick={() => openLightbox(item.img)} style={{ cursor: 'pointer' }}>
                <Image 
                  src={item.img} 
                  alt={`Kicsim Galéria ${i + 1}`} 
                  fill 
                  placeholder="blur"
                  quality={80}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }} 
                />
                <div className="gallery-overlay">
                  <h3>Kicsim Vendégház</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SZOLGÁLTATÁSOK */}
      <section id="szolgaltatasok">
        <div className="section-header">
          <div className="section-badge">Extra lehetőségek</div>
          <h2 className="section-title">Szolgáltatások</h2>
          <p className="section-subtitle">Kényelmi pluszok az élményetekhez</p>
        </div>
        <div className="amenities-grid">
          {[
            { 
              icon: 'fas fa-coffee',
              title: 'Reggeli kosár', 
              desc: 'Friss pékáru, helyi termékek – bekészítve az első reggeli meglepetéshez',
              image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80'
            },
            { 
              icon: 'fas fa-utensils',
              title: 'Étkezési lehetőségek', 
              desc: 'Ajánlásaink a közeli éttermekről és kiszállítási opciókról',
              image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80'
            },
            { 
              icon: 'fas fa-bicycle',
              title: 'E-bike bérlés', 
              desc: 'Fedezd fel a Mátrát elektromos kerékpárral – kérésre helyben elérhető',
              image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80'
            },
          ].map((a, i) => (
            <div key={i} className="amenity-card flip">
              <div className="amenity-card-inner">
                <div className="amenity-front">
                  <i className={a.icon}></i>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
                <div className="amenity-back">
                  <Image src={a.image} alt={a.title} fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A Látnivalók, GYIK és Kapcsolat külön oldalakon érhetők el */}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={lightboxImage} 
              alt="Kicsim Nagyított kép" 
              width={1400} 
              height={1000} 
              quality={90}
              placeholder="blur"
              sizes="85vw"
              style={{ objectFit: 'contain', width: '100%', height: '100%' }} 
            />
          </div>
        </div>
      )}

      {/* Footer a közös layoutban */}
    </main>
  );
}
