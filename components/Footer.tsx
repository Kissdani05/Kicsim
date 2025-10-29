export default function Footer() {
  return (
    <footer>
      <div className="footer-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169253.4263566619!2d19.749999999999996!3d47.86666666666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47401e0d1e8c7f7f%3A0x400c4290c1e1360!2zTcOhdHJh!5e0!3m2!1shu!2shu!4v1234567890123!5m2!1shu!2shu" loading="lazy" allowFullScreen />
      </div>
      <div className="footer-content">
        <div className="footer-section"><h3>KICSIM VENDÉGHÁZ</h3><p>Romantikus pihenés az erdő szélén. Ahol a természet találkozik a kényelemmel.</p><div className="footer-social"><a href="#" aria-label="Instagram"><i className="fab fa-instagram"/></a><a href="#" aria-label="Facebook"><i className="fab fa-facebook"/></a><a href="#" aria-label="Email"><i className="fas fa-envelope"/></a></div></div>
        <div className="footer-section"><h3>Gyors linkek</h3><ul className="footer-links"><li><a href="/">Főoldal</a></li><li><a href="/latnivalok">Látnivalók</a></li><li><a href="/gyik">GYIK</a></li><li><a href="/kapcsolat">Kapcsolat</a></li></ul></div>
        <div className="footer-section"><h3>Információ</h3><ul className="footer-links"><li><a href="#">Házirend</a></li><li><a href="/gyik">Gyakori Kérdések</a></li><li><a href="#">Lemondási feltételek</a></li><li><a href="#">Adatvédelem</a></li><li><a href="#">Impresszum</a></li></ul></div>
        <div className="footer-section"><h3>Kapcsolat</h3><ul className="contact-info-footer"><li><i className="fas fa-map-marker-alt"/> Mátra, Magyarország</li><li><i className="fas fa-envelope"/> info@kicsimvendeghaz.hu</li><li><i className="fas fa-phone"/> +36 30 123 4567</li><li><i className="fas fa-clock"/> 9:00 - 20:00</li></ul></div>
      </div>
      <div className="footer-bottom"><p>&copy; 2024 Kicsim Vendégház. Minden jog fenntartva.</p><ul className="footer-bottom-links"><li><a href="#">Felhasználási feltételek</a></li><li><a href="#">Süti beállítások</a></li></ul></div>
    </footer>
  );
}
