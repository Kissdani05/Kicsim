export default function Footer() {
  return (
    <footer id="kapcsolat">
      <div className="footer-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.1143665124214!2d19.80504207658895!3d47.90924756702921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474043cfe24ed2f9%3A0xb12addfee7c95f35!2zUMOhc3p0w7MsIENzYWxvZ8OhbnkgdS4gNCwgMzA4Mg!5e1!3m2!1sen!2shu!4v1771350385374!5m2!1sen!2shu" loading="lazy" allowFullScreen style={{border:0}} />
      </div>
      <div className="footer-content">
        <div className="footer-section"><h3>KICSIM VENDÉGHÁZ</h3><p>Kérdésed van? Vedd fel velünk bátran a kapcsolatot!</p><div className="footer-social"><a href="#" aria-label="Instagram"><i className="fab fa-instagram"/></a><a href="#" aria-label="Facebook"><i className="fab fa-facebook"/></a><a href="#" aria-label="Email"><i className="fas fa-envelope"/></a></div></div>
        <div className="footer-section"><h3>Gyors linkek</h3><ul className="footer-links"><li><a href="/">Főoldal</a></li><li><a href="/latnivalok">Látnivalók</a></li><li><a href="/gyik">GYIK</a></li><li><a href="/kapcsolat">Kapcsolat</a></li></ul></div>
        <div className="footer-section"><h3>Információ</h3><ul className="footer-links"><li><a href="#">Házirend</a></li><li><a href="/gyik">Gyakori Kérdések</a></li><li><a href="#">Lemondási feltételek</a></li><li><a href="#">Adatvédelem</a></li><li><a href="#">Impresszum</a></li></ul></div>
        <div className="footer-section"><h3>Kapcsolat</h3><ul className="contact-info-footer"><li><i className="fas fa-map-marker-alt"/> 3082 Pásztó-Mátrakeresztes, Csalogány u. 4.</li><li><i className="fas fa-envelope"/> info@kicsimvendeghaz.hu</li><li><i className="fas fa-phone"/> +36 30 123 4567</li><li><i className="fas fa-clock"/> 9:00 - 20:00</li><li><i className="fas fa-id-card"/> NTAK szám: 1111111111</li></ul></div>
      </div>
      <div className="footer-bottom"><p>&copy; 2024 Kicsim Vendégház. Minden jog fenntartva.</p><ul className="footer-bottom-links"><li><a href="#">Felhasználási feltételek</a></li><li><a href="#">Süti beállítások</a></li></ul></div>
    </footer>
  );
}
