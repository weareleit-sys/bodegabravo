"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#EBE9E4] flex flex-col justify-center items-center md:flex-row pt-20 md:pt-0">

            {/* 1. TEXTURA DE RUIDO GLOBAL */}
            <div className="absolute inset-0 z-0 bg-noise opacity-40 pointer-events-none mix-blend-soft-light" />

            {/* 2. RAÍCES ABSTRACTAS DE FONDO */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                    <path
                        d="M-100,600 C200,800 600,200 1200,300 S1600,100 1700,50"
                        fill="none"
                        stroke="#881337"
                        strokeWidth="1.5"
                        className="mix-blend-multiply"
                    />
                    <path
                        d="M-50,800 C300,900 700,600 1000,800"
                        fill="none"
                        stroke="#881337"
                        strokeWidth="1"
                        strokeDasharray="10,10"
                        className="mix-blend-multiply opacity-50"
                    />
                </svg>
            </div>

            {/* 3. CONTENEDOR PRINCIPAL */}
            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-0">

                {/* COLUMNA IZQUIERDA: VENTA & TEXTO */}
                <div className="w-full md:w-1/2 text-center md:text-left pt-8 md:pt-0 z-20">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-4"
                    >
                        <span className="border border-[#881337] text-[#881337] px-3 py-1 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase rounded-sm bg-[#EBE9E4]/50 backdrop-blur-sm">
                            Edición Limitada 2025
                        </span>
                    </motion.div>

                    {/* Título */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-serif text-[#1a1a1a] leading-[0.9] mb-4"
                    >
                        CAUDAL
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl font-serif text-slate-600 italic mb-8"
                    >
                        Cabernet Franc Icono <span className="text-[#881337] mx-2">•</span> Valle del Maule
                    </motion.p>

                    {/* SECCIÓN DE PRECIO & CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-white/60 backdrop-blur-md p-6 rounded-sm border border-[#881337]/10 inline-block md:min-w-[400px] shadow-sm"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-4">
                            <div className="text-center md:text-left">
                                <p className="text-slate-400 text-sm line-through decoration-[#881337]/50 mb-1">
                                    Precio Lista: $18.000
                                </p>
                                <p className="text-4xl md:text-5xl font-serif text-[#881337]">
                                    $12.000
                                </p>
                            </div>

                            <Link
                                href="#comprar"
                                className="bg-[#881337] text-white py-4 px-8 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-[#6d0f2b] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 whitespace-nowrap"
                            >
                                Ver Ofertas <ArrowDown className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* --- TEXTO CORREGIDO --- */}
                        <p className="text-[10px] md:text-xs text-slate-600 border-t border-[#881337]/10 pt-3 italic font-medium">
                            *Precio Lanzamiento: $12.000. Valores preferenciales en Cajas.
                        </p>
                    </motion.div>
                </div>

                {/* COLUMNA DERECHA: FOTO HERO */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative flex items-center justify-center">

                    {/* Marca de Agua Vertical */}
                    <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.05] z-0">
                        <span className="text-[120px] md:text-[200px] font-serif font-bold text-[#881337] whitespace-nowrap -rotate-90 block tracking-tighter select-none">
                            1887
                        </span>
                    </div>

                    {/* IMAGEN DE LA BOTELLA */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative z-10 w-full h-full flex items-center justify-center p-8"
                    >
                        {/* 
                           AJUSTE FOTOGRÁFICO:
                           Como la foto tiene fondo (paisaje), le damos estilo de "Postal/Cuadro" 
                           en lugar de intentar borrar el fondo.
                        */}
                        <div className="relative w-full max-w-[400px] aspect-[3/4] shadow-2xl rounded-sm overflow-hidden border-4 border-white/50">
                            <Image
                                src="/images/hero-bottle.png" // Asegúrate que es PNG o JPG
                                alt="Caudal en el Viñedo"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Brillo sutil sobre la foto */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#881337]/20 to-transparent mix-blend-overlay" />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
