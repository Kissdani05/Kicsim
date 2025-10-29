'use client';
import { useEffect } from 'react';

export default function KapcsolatPage() {
  useEffect(() => {
    document.querySelectorAll('section').forEach((s) => s.classList.add('visible'));
  }, []);

  return (
    <main>
      <section id="kapcsolat">
        <div className="section-header">
          <div className="section-badge">Elérhetőség</div>
          <h2 className="section-title">Kapcsolat</h2>
          <p className="section-subtitle">Írj nekünk bátran – hamarosan válaszolunk</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item"><i className="fas fa-map-marker-alt"></i><div><h3>Cím</h3><p>Mátra, Magyarország<br/>(pontos cím foglalás után)</p></div></div>
            <div className="contact-item"><i className="fas fa-envelope"></i><div><h3>Email</h3><p>info@kicsimvendeghaz.hu</p></div></div>
            <div className="contact-item"><i className="fas fa-phone"></i><div><h3>Telefon</h3><p>+36 30 123 4567</p></div></div>
          </div>
          <form className="booking-form" id="foglalas" onSubmit={(e) => { e.preventDefault(); alert('Köszönjük az üzenetet! Hamarosan jelentkezünk.'); (e.target as HTMLFormElement).reset(); }}>
            <div className="form-group"><label>Név</label><input type="text" placeholder="Az Ön neve" required /></div>
            <div className="form-group"><label>Email cím</label><input type="email" placeholder="email@pelda.hu" required /></div>
            <div className="form-group"><label>Üzenet</label><textarea placeholder="Írja ide kérdéseit vagy megjegyzéseit..." required /></div>
            <button type="submit" className="btn-submit">Üzenet küldése</button>
          </form>
        </div>
      </section>
    </main>
  );
}
