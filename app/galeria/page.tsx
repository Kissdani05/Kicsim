'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type LightboxState = { index: number; images: { src: string; alt: string }[] } | null;

export default function GaleriaPage() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    document.querySelectorAll('section').forEach((s) => s.classList.add('visible'));
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') setLightbox((lb) => lb && ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }));
      if (e.key === 'ArrowRight') setLightbox((lb) => lb && ({ ...lb, index: (lb.index + 1) % lb.images.length }));
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const groups: { cover: { src: string; alt: string }; images: { src: string; alt: string }[]; title: string; subtitle: string; large?: boolean }[] = [
    {
      title: 'Modern Nappali', subtitle: 'Tágas, napfényes és stílusos', large: true,
      cover: { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200', alt: 'Modern nappali' },
      images: [
        { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600', alt: 'Modern nappali' },
        { src: 'https://images.unsplash.com/photo-1600585154512-52715326b683?w=1600', alt: 'Nappali részlet' },
        { src: 'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?w=1600', alt: 'Kandalló' },
      ],
    },
    {
      title: 'Jakuzzi', subtitle: 'Relaxálj az erdő csendében',
      cover: { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800', alt: 'Jakuzzi' },
      images: [
        { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600', alt: 'Jakuzzi' },
        { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600', alt: 'Kültéri jakuzzi' },
      ],
    },
    {
      title: 'Nyugodt Pihenés', subtitle: 'Prémium ágy és ágyneműk',
      cover: { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', alt: 'Hálószoba' },
      images: [
        { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600', alt: 'Hálószoba' },
        { src: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?w=1600', alt: 'Hálószoba részlet' },
      ],
    },
    {
      title: 'Felszerelt Konyha', subtitle: 'Minden eszköz a főzéshez',
      cover: { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', alt: 'Konyha' },
      images: [
        { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600', alt: 'Konyha' },
        { src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600', alt: 'Konyha részlet' },
      ],
    },
    {
      title: 'Privát Terasz', subtitle: 'Erdőre néző kilátás',
      cover: { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800', alt: 'Terasz' },
      images: [
        { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600', alt: 'Terasz' },
        { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600', alt: 'Kilátás' },
      ],
    },
  ];

  return (
    <main>
      <section className="gallery-section">
        <div className="section-header">
          <div className="section-badge">Galéria</div>
          <h2 className="section-title">Tekintsd meg az erdei otthont</h2>
          <p className="section-subtitle">Minden sarok, minden részlet a ti kényelmeteket szolgálja</p>
        </div>
        <div className="gallery-container">
          <div className="gallery-grid">
            {groups.map((g, i) => (
              <div key={i} className={`gallery-item ${g.large ? 'large' : ''}`} onClick={() => setLightbox({ index: 0, images: g.images })}>
                <Image src={g.cover.src} alt={g.cover.alt} fill sizes={g.large ? '(max-width: 1600px) 100vw, 1200px' : '(max-width: 1600px) 50vw, 800px'} style={{ objectFit: 'cover' }} />
                <div className="gallery-overlay"><h3>{g.title}</h3><p>{g.subtitle}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}>
          <button className="lightbox-close" aria-label="Bezárás" onClick={() => setLightbox(null)}><i className="fas fa-times" /></button>
          <button className="lightbox-nav prev" aria-label="Előző" onClick={(e) => { e.stopPropagation(); setLightbox((lb) => lb && ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length })); }}><i className="fas fa-chevron-left" /></button>
          <button className="lightbox-nav next" aria-label="Következő" onClick={(e) => { e.stopPropagation(); setLightbox((lb) => lb && ({ ...lb, index: (lb.index + 1) % lb.images.length })); }}><i className="fas fa-chevron-right" /></button>
          <div className="lightbox-img-wrap">
            <Image src={lightbox.images[lightbox.index].src} alt={lightbox.images[lightbox.index].alt} fill sizes="100vw" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </main>
  );
}
