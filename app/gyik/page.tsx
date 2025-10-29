'use client';
import { useEffect, useState } from 'react';

export default function GyikPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.querySelectorAll('section').forEach((s) => s.classList.add('visible'));
  }, []);

  const faqs = [
    { q: 'Hol tudunk parkolni?', a: 'Privát parkoló közvetlenül a bejárat mellett. Fedett parkoló elérhető.' },
    { q: 'Van térerő vagy wifi?', a: 'Szándékosan nincs wifi – a teljes digitális kikapcsolódásért. Több szolgáltatónál térerő elérhető.' },
    { q: 'Hozhatunk kisállatot?', a: 'Jelenleg nem kisállatbarát, hogy allergiamentes környezetet biztosítsunk.' },
  ];

  return (
    <main>
      <section id="gyik">
        <div className="section-header">
          <div className="section-badge">Információ</div>
          <h2 className="section-title">Gyakori kérdések</h2>
          <p className="section-subtitle">A leggyakrabban felmerülő kérdések rövid, átlátható válaszokkal</p>
        </div>
        <div className="faq-container">
          {faqs.map((item, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                <h3>{item.q}</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
