'use client';

import { useCallback } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const toggleMenu = useCallback(() => {
    const nav = document.querySelector('.nav-links');
    const toggle = document.querySelector('.menu-toggle');
    nav?.classList.toggle('active');
    toggle?.classList.toggle('active');
  }, []);

  const closeMenu = useCallback(() => {
    const nav = document.querySelector('.nav-links');
    const toggle = document.querySelector('.menu-toggle');
    nav?.classList.remove('active');
    toggle?.classList.remove('active');
  }, []);

  return (
    <header>
      <nav>
        <Link href="/" className="logo" onClick={closeMenu}>KICSIM</Link>
        <ul className="nav-links" onClick={closeMenu}>
          <li><Link href="/">Főoldal</Link></li>
          <li><Link href="/#galeria">Galéria</Link></li>
          <li><Link href="/#kapcsolat">Kapcsolat</Link></li>
          <li><Link href="/foglalas" className="booking-link">Foglalás</Link></li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
