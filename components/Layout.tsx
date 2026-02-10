import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileCallBar } from './MobileCallBar';
import { CookieConsent } from './CookieConsent';
import { StickyCallButton } from './StickyCallButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-900 text-cream font-sans antialiased selection:bg-gold-500 selection:text-charcoal-900 pb-16 md:pb-0">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <MobileCallBar />
      <StickyCallButton />
      <CookieConsent />
    </div>
  );
};