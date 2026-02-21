import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import NavBar from '@/components/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export const metadata: Metadata = {
  title: 'Romantikus erdei vendégház Mátrában | Jakuzzi, panoráma, wellness',
  description: 'Fedezzétek fel a Mátra varázsát egymással kettesben! Romantikus vendégház privát jakuzzival, panorámával és természetközeli nyugalommal – foglalj most!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#A1765F" />
      </head>
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
