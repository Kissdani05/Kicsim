'use client';
import { useEffect } from 'react';

export default function FoglalasPage() {
  useEffect(() => {
    // Keep header in scrolled state on booking page
    const header = document.querySelector('header');
    header?.classList.add('scrolled');
    
    return () => {
      // Clean up when leaving the page
      header?.classList.remove('scrolled');
    };
  }, []);

  return (
    <main>
      <section className="visible booking-page-section" style={{ minHeight: '80vh', padding: '8rem 2rem 4rem', background: '#F5F1E8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header">
            <div className="section-badge">Foglalás</div>
            <h1 className="section-title" style={{ marginBottom: '2rem' }}>Foglalás & Árak</h1>
          </div>

          <div className="booking-intro" style={{ maxWidth: '900px', margin: '0 auto 4rem', fontSize: '1.05rem', lineHeight: '1.8', color: '#2C2416' }}>
            <p style={{ marginBottom: '1.5rem', color: '#2C2416' }}>
              A Kicsim vendégház két fő részére került kialakításra. Korlátlanul használhatjátok a privát <strong>jacuzzit és az infraszaunát</strong>. Csak a Tiétek az egész ház az itt tartózkodásotok alatt. A szállásdíj tartalmazza az idegenforgalmi adót és a végtakarítást.
            </p>
            <p style={{ marginBottom: '1.5rem', color: '#2C2416' }}>
              Lehetőségetek van <strong>termelői reggeli bekészítésére és e-bike bérlésére is,</strong> amit foglaláskor ki tudtok választani.
            </p>
            <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: '#2C2416' }}>
              A Kicsim minimum 2 éjszakára foglalható, de <strong>1 éjszakás</strong> foglalásra is van lehetőség, amint betelik a naptár, és "lyukas" nap alakul ki.
            </p>
            <p style={{ marginBottom: '2.5rem', color: '#2C2416' }}>
              A foglalás véglegesítéséhez a szállásdíj teljes összegét szükséges kiegyenlíteni, a fizetésre 48 óra áll rendelkezésre.
            </p>
          </div>

          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto 3rem' }}>
            {[
              { label: 'Vasárnap-Csütörtök', price: '80.000 HUF / éj', icon: 'fa-calendar' },
              { label: 'Péntek-Szombat', price: '90.000 HUF / éj', icon: 'fa-calendar-week' },
              { label: '1 éjszaka', price: '90.000 HUF / éj', icon: 'fa-calendar-day' },
              { label: 'Kiemelt időszakok', price: '110.000 HUF / éj tól', icon: 'fa-calendar-alt' },
            ].map((item, i) => (
              <div key={i} className="pricing-card" style={{
                background: '#2C2416',
                color: '#F5F1E8',
                padding: '2.5rem 2rem',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem', color: '#D4A574' }}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '400', marginBottom: '1.5rem', color: '#F5F1E8' }}>{item.label}</h3>
                <div style={{ borderTop: '1px solid rgba(245,241,232,0.3)', paddingTop: '1.5rem', marginTop: '1rem' }}>
                  <p style={{ fontSize: '1.15rem', fontWeight: '600', color: '#F5F1E8', margin: 0 }}>{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="booking-footer" style={{ maxWidth: '900px', margin: '3rem auto', textAlign: 'center', fontSize: '1.05rem', fontWeight: '600', color: '#2C2416' }}>
            <p style={{ marginBottom: '2rem', color: '#2C2416' }}>
              Érkezés <strong>14:00</strong> órától, távozás <strong>10:00</strong> óráig.
            </p>
            <p style={{ fontSize: '0.95rem', fontWeight: '400', fontStyle: 'italic', color: '#2C2416' }}>
              A foglalást követően a házirendbe és <strong>ÁSZF</strong>-be foglaltakat tudomásul veszem és elfogadom!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
