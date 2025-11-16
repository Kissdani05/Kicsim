'use client';

import { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const toggleMenu = useCallback(() => {
    const nav = document.querySelector('.nav-links');
    nav?.classList.toggle('active');
  }, []);

  const bookingHref = useMemo(() => ({ pathname, query: { foglalas: '1' } }), [pathname]);

  return (
    <header>
      <nav>
        <Link href="/" className="logo" onClick={() => document.querySelector('.nav-links')?.classList.remove('active')}>KICSIM</Link>
        <ul className="nav-links" onClick={() => document.querySelector('.nav-links')?.classList.remove('active')}>
          <li><Link href="/">Főoldal</Link></li>
          <li><Link href="/galeria">Galéria</Link></li>
          <li><Link href="/latnivalok">Látnivalók</Link></li>
          <li><Link href="/gyik">GYIK</Link></li>
          <li><Link href="/kapcsolat">Kapcsolat</Link></li>
          <li><Link href={bookingHref} scroll={false} className="booking-link">Foglalás</Link></li>
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
