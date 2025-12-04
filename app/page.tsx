"use client";

import Image from "next/image";
import { MoveRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Historia from "@/components/Historia";
import Vina from "@/components/Vina";
import Maridaje from "@/components/Maridaje";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EBE9E4] overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 pb-12 px-4 md:px-0">

        {/* Contenedor Flex: En móvil columna (vertical), en PC fila (horizontal) */}
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">

          {/* 1. TEXTO DE VENTA (Orden 2 en móvil, 1 en Desktop para balance visual) */}
          <div className="flex-1 order-2 md:order-1 text-center md:text-left space-y-6">

            <div className="inline-block bg-stone-200 text-stone-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
              Edición Limitada 2024
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-tight">
              CAUDAL
            </h1>

            <p className="text-lg md:text-xl text-slate-700 max-w-md mx-auto md:mx-0 font-light">
              La máxima expresión del Cabernet Franc. <br />
              <span className="italic text-slate-500">Valle del Maipo, Chile.</span>
            </p>

            {/* CARD DE PRECIO (Móvil Friendly) */}
            <div id="precios" className="bg-white/60 backdrop-blur-md p-6 rounded-xl border border-stone-200 shadow-lg max-w-sm mx-auto md:mx-0 mt-8">
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-400 line-through text-sm">Lista: $15.000</span>
                <span className="bg-[#9F1239] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                  Oferta -33%
                </span>
              </div>
              <div className="flex items-baseline gap-2 justify-center md:justify-start">
                <span className="text-4xl font-serif text-slate-900 font-bold">$10.000</span>
                <span className="text-sm text-slate-600">/ botella</span>
              </div>
              <p className="text-xs text-rose-700 mt-2 font-medium">
                ⚡ Quedan pocas unidades del lote inicial.
              </p>
            </div>

            {/* CTA PRINCIPAL (WhatsApp) */}
            <div className="pt-4">
              <a
                href="https://wa.me/56992344819?text=Hola,%20me%20interesa%20comprar%20el%20pack%20lanzamiento%20de%20Caudal."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full md:w-auto bg-[#9F1239] hover:bg-rose-900 text-white text-lg font-medium py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                <span>COMPRAR AHORA</span>
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-xs text-slate-500 mt-3 text-center md:text-left">
                *Envío directo a coordinar por chat.
              </p>
            </div>
          </div>

          {/* 2. IMAGEN BOTELLA (Order 1 en móvil para impacto visual inmediato) */}
          <div className="flex-1 order-1 md:order-2 relative flex justify-center">
            {/* Círculo decorativo de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-stone-300 rounded-full blur-3xl opacity-50 z-0"></div>

            <div className="relative w-[280px] h-[420px] md:w-[400px] md:h-[600px] z-10">
              <Image
                src="/images/hero-bottle.png" // Asegúrate que el archivo exista
                alt="Botella Premium Caudal"
                fill
                priority // Prioridad de carga para LCP
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIONES DE CONTENIDO (EL RESPALDO DE MARCA) --- */}

      <div id="historia">
        <Historia />
      </div>

      <div id="vina">
        <Vina />
      </div>

      <div id="maridaje">
        <Maridaje />
      </div>

      {/* Footer Final */}
      <footer className="py-12 bg-slate-900 text-stone-400 text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-2xl text-white mb-6 tracking-widest">BODEGA BRAVO</h3>
          <p className="font-sans text-xs text-slate-600 leading-relaxed mb-4">
            Beber con moderación. Prohibida su venta a menores de 18 años.
          </p>
          <p className="font-sans text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Bodega Bravo.
          </p>
        </div>
      </footer>

    </main>
  );
}
