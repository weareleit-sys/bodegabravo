import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bodegabravo.cl'),
  title: "Caudal | Cabernet Franc Icono - Valle del Maule",
  description: "Venta exclusiva de lanzamiento. Vino de autor del Fundo Los Nogales (1887). Oferta especial por cajas con envío directo.",
  keywords: ["Vino Caudal", "Cabernet Franc Chile", "Vino Valle del Maule", "Bodega Bravo", "Vino de Autor", "Oferta Vinos"],
  openGraph: {
    title: "🍷 Lanzamiento Exclusivo: Caudal Cabernet Franc",
    description: "La máxima expresión del Maule. Aprovecha los precios de lanzamiento por caja. Envío a todo Chile.",
    url: "https://bodegabravo.cl",
    siteName: "Bodega Bravo",
    images: [
      {
        url: "/images/optimized/terroir-bg.webp",
        width: 1200,
        height: 630,
        alt: "Viñedos Bodega Bravo - Valle del Maule",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Caudal Cabernet Franc 2024",
              "description": "Vino icono de Bodega Bravo. 100% Cabernet Franc del Valle del Maule, Chile. Edición limitada de 500 botellas.",
              "brand": {
                "@type": "Brand",
                "name": "Bodega Bravo"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "CLP",
                "lowPrice": "9000",
                "highPrice": "12000",
                "availability": "https://schema.org/InStock",
                "offerCount": "3"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "24"
              },
              "image": "https://bodegabravo.cl/images/optimized/hero-bottle.webp",
              "category": "Vino Tinto"
            })
          }}
        />

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-WN49F28ZVX"} />
      </body>
    </html>
  );
}
