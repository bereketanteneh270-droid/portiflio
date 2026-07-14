import type { Metadata } from 'next';
import './globals.css';
import LoadingScreen from '@/components/layout/LoadingScreen';
import CustomCursor from '@/components/layout/CustomCursor';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Bereket Anteneh | Graphic Designer & Brand Strategist',
  description:
    'Premium graphic designer and brand strategist based in Addis Ababa, Ethiopia. Specializing in brand identity, logo design, packaging, and creative direction.',
  keywords: [
    'graphic designer',
    'brand identity',
    'logo design',
    'packaging design',
    'Ethiopia',
    'Addis Ababa',
    'creative director',
    'brand strategy',
  ],
  authors: [{ name: 'Bereket Anteneh' }],
  creator: 'Bereket Anteneh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bereketanteneh.com',
    title: 'Bereket Anteneh | Graphic Designer & Brand Strategist',
    description:
      'Premium graphic designer and brand strategist based in Addis Ababa, Ethiopia. Creating brands that people remember.',
    siteName: 'Bereket Anteneh Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bereket Anteneh — Graphic Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bereket Anteneh | Graphic Designer',
    description: 'Creating brands that people remember.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta name="theme-color" content="#050505" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Bereket Anteneh',
              jobTitle: 'Graphic Designer & Brand Strategist',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Addis Ababa',
                addressCountry: 'ET',
              },
              email: 'bereketanteneh270@gmail.com',
              url: 'https://bereketanteneh.com',
              sameAs: [
                'https://instagram.com/@mr_23',
                'https://linkedin.com/in/bereketanteneh270',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#050505] text-white min-h-screen overflow-x-hidden">
        <LoadingScreen />
        <CustomCursor />
        <WhatsAppButton />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
