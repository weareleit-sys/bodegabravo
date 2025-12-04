import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair'
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-lato'
});

export const metadata: Metadata = {
  title: "Caudal | Cabernet Franc Icono - Bodega Bravo",
  description: "Venta Especial de Lanzamiento. Edición Limitada de 500 botellas del Valle del Maipo. Envío directo.",
  openGraph: {
    title: "Caudal - El Icono de Bodega Bravo",
    description: "Solo 500 botellas. Accede al precio de lanzamiento exclusivo aquí.",
    url: "https://bodegabravo.cl",
    siteName: "Bodega Bravo",
    images: [
      {
        url: "/images/terroir-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Viñedos Bodega Bravo",
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
      <body className={`${playfair.variable} ${lato.variable} bg-[#EBE9E4] text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
