import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import NavBar from '@/components/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export const metadata: Metadata = {
  title: 'Kicsim Vendégház - Romantikus Pihenés a Mátrában',
  description: 'Romantikus menedék a Mátra szívében – Kicsim Vendégház',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head></head>
      <body>
        <NavBar />
        <Suspense fallback={null}>
          <BookingModal />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
