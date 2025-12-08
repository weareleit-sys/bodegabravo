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
        <GoogleAnalytics gaId="G-WN49F28ZVX" />
      </body>
    </html>
  );
}
