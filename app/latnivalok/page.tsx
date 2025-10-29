'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function LatnivalokPage() {
  useEffect(() => {
    document.querySelectorAll('section').forEach((s) => s.classList.add('visible'));
  }, []);
  return (
    <main>
      <section className="attractions-bg" id="latnivalok">
        <div className="section-header">
          <div className="section-badge">Programok</div>
          <h2 className="section-title">Látnivalók & Programok</h2>
          <p className="section-subtitle">Kirándulás, kilátók, termálfürdők és helyi gasztronómia a közelben</p>
        </div>
        <div className="attractions-grid">
          <div className="attraction-card"><Image src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800" alt="Túrázás" width={800} height={280} style={{ width: '100%', height: 280, objectFit: 'cover' }} /><div className="attraction-card-content"><h3>Túraútvonalak</h3><p>Számtalan jelzett turistaút indul a közelből. Fedezzétek fel a Mátra varázslatos tájait.</p></div></div>
          <div className="attraction-card"><Image src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800" alt="Kilátó" width={800} height={280} style={{ width: '100%', height: 280, objectFit: 'cover' }} /><div className="attraction-card-content"><h3>Kilátók</h3><p>Csodálatos napfelkelték és napnyugták várnak rátok.</p></div></div>
          <div className="attraction-card"><Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800" alt="Termálfürdő" width={800} height={280} style={{ width: '100%', height: 280, objectFit: 'cover' }} /><div className="attraction-card-content"><h3>Termálfürdő</h3><p>Relaxáljatok és töltődjetek fel a gyógyvízben.</p></div></div>
          <div className="attraction-card"><Image src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800" alt="Éttermek" width={800} height={280} style={{ width: '100%', height: 280, objectFit: 'cover' }} /><div className="attraction-card-content"><h3>Helyi éttermek</h3><p>Kóstoljátok meg a helyi specialitásokat a környék kiváló éttermeiben.</p></div></div>
        </div>
      </section>
    </main>
  );
}
