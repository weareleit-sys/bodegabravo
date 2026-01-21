"use client";

import Image from "next/image";
import { MoveRight, ArrowDown } from "lucide-react"; // Cambié Phone por ArrowDown para indicar scroll
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import CabernetFranc from "@/components/CabernetFranc";
import Historia from "@/components/Historia";
import Vina from "@/components/Vina";
import Maridaje from "@/components/Maridaje";
import VintageToast from "@/components/VintageToast";
import RedLinesBackground from "@/components/RedLinesBackground";
import AgeGate from "@/components/AgeGate";
import Footer from "@/components/Footer";

export default function Home() {

  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#EBE9E4] bg-noise relative overflow-x-hidden selection:bg-[#881337] selection:text-white">
      <AgeGate />
      <Navbar />
      <RedLinesBackground />

      {/* MARCA DE AGUA */}
      <div className="flex fixed right-[-20px] md:right-0 top-0 h-screen items-center z-0 pointer-events-none select-none">
        <h1 className="text-[120px] md:text-[180px] leading-none font-serif text-[#881337] opacity-[0.04] md:opacity-[0.06] whitespace-nowrap -rotate-90 origin-center tracking-tighter mix-blend-multiply">
          CAUDAL
        </h1>
      </div>

      {/* HERO SECTION */}
      <section id="hero" className="relative z-10 min-h-[75vh] md:min-h-[95vh] flex flex-col items-center justify-center pt-16 md:pt-24 pb-4 md:pb-12 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 relative z-10">

          {/* TEXTO DE VENTA */}
          <div className="flex-1 order-2 md:order-1 text-center md:text-left space-y-4 md:space-y-6">
            <div className="inline-block bg-stone-200/80 backdrop-blur-sm text-stone-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-1 md:mb-2 border border-stone-300">
              Edición limitada cosecha 2023
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-tight drop-shadow-sm">
              CAUDAL
            </h1>

            <p className="text-lg md:text-xl text-slate-700 max-w-md mx-auto md:mx-0 font-light">
              La máxima expresión del Cabernet Franc. <br />
              <span className="italic text-slate-500">Valle del Maule, Chile.</span>
            </p>

            {/* CTA PRINCIPAL - SCROLL TO PRICING */}
            <div className="pt-4 md:pt-8 pb-2">
              <a
                href="#oferta"
                onClick={scrollToPricing}
                className="group w-full md:w-auto bg-[#881337] hover:bg-rose-950 text-white text-lg font-medium py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span>OFERTAS VERANO</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <p className="text-xs text-slate-500 mt-2 md:mt-3 text-center md:text-left">
                *Desde $9.000 la botella comprando por caja.
              </p>
            </div>
          </div>

          {/* IMAGEN HERO PRODUCTO */}
          <div className="w-full md:flex-1 order-1 md:order-2 relative flex justify-center items-center p-4 md:p-0">
            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] md:max-w-[600px]">
              <Image
                src="/images/optimized/caudal-hero-summer.png"
                alt="Botella Caudal Cabernet Franc"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENTES */}
      <Pricing />
      <VintageToast />
      <CabernetFranc />
      <div id="bodega"><Historia /></div>
      <div id="vina"><Vina /></div>
      <div id="maridaje"><Maridaje /></div>
      <Footer />
    </main>
  );
}
