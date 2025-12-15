"use client";
import { motion } from "framer-motion";

// --- ICONOS SKETCH (Sin cambios) ---
const SketchEye = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#881337] stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10,50 C30,20 70,20 90,50 C70,80 30,80 10,50 Z" />
        <circle cx="50" cy="50" r="15" />
    </svg>
);

const SketchNose = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#881337] stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60,20 C40,20 35,40 35,60 C35,75 45,85 65,85" />
        <path d="M25,65 C30,68 35,68" strokeWidth="1" opacity="0.5" />
    </svg>
);

const SketchMouth = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#881337] stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20,50 C35,40 65,40 80,50 C65,65 35,65 20,50 Z" />
        <path d="M15,50 L85,50" opacity="0.3" />
    </svg>
);

export default function NotasCata() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#EBE9E4]">

            {/* 1. TEXTURA DE RUIDO GLOBAL */}
            <div className="absolute inset-0 z-0 bg-noise opacity-40 pointer-events-none mix-blend-soft-light" />

            {/* 2. RAÍCES ABSTRACTAS (SVG Vectorial) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <svg
                    className="absolute w-full h-full"
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Raíz Principal - Diagonal Ascendente */}
                    <path
                        d="M-50,800 C300,700 600,300 900,400 S1500,100 1600,50"
                        fill="none"
                        stroke="#881337"
                        strokeWidth="1.5"
                        className="mix-blend-multiply"
                    />
                    {/* Raíz Secundaria - Entrelazado */}
                    <path
                        d="M1400,900 C1100,700 800,800 500,500 S100,200 -100,150"
                        fill="none"
                        stroke="#881337"
                        strokeWidth="1"
                        strokeDasharray="20,10"
                        className="mix-blend-multiply opacity-50"
                    />
                </svg>
            </div>

            {/* 3. CAUDAL VERTICAL (Columna Fantasma) */}
            <div className="absolute right-0 top-0 h-full flex items-center justify-center z-0 pointer-events-none opacity-[0.05]">
                <span className="text-[150px] md:text-[200px] font-serif font-bold text-[#881337] whitespace-nowrap -rotate-90 origin-center tracking-tighter select-none">
                    CAUDAL
                </span>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* ENCABEZADO */}
                <div className="text-center mb-20 space-y-4">
                    <span className="text-[#881337] text-[10px] font-bold tracking-[0.3em] uppercase border-b border-[#881337] pb-1 inline-block">
                        Nota de Cata
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
                        Perfil Sensorial
                    </h2>
                    <p className="text-slate-600 font-serif italic text-lg max-w-lg mx-auto">
                        "Un vino que busca expresar el paisaje, no maquillar la fruta."
                    </p>
                </div>

                {/* GRILLA DE SENTIDOS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* VISTA */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#EBE9E4] p-8 rounded-sm border border-[#881337]/20 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                    >
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-20 h-20 rounded-full border border-[#881337]/30 flex items-center justify-center bg-[#EBE9E4]">
                                <SketchEye />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-[#1a1a1a]">A la Vista</h3>
                                <div className="w-8 h-px bg-[#881337]/30 mx-auto" />
                                <p className="text-slate-700 text-sm leading-relaxed font-light">
                                    Color <strong className="font-medium text-[#881337]">rojo rubí brillante</strong>. Un perfil tenue y transparente que denota su elegancia clásica.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* NARIZ */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#EBE9E4] p-8 rounded-sm border border-[#881337]/20 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                    >
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-20 h-20 rounded-full border border-[#881337]/30 flex items-center justify-center bg-[#EBE9E4]">
                                <SketchNose />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-[#1a1a1a]">En Nariz</h3>
                                <div className="w-8 h-px bg-[#881337]/30 mx-auto" />
                                <ul className="text-slate-700 text-sm space-y-3 font-light text-left w-full px-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#881337] mt-1 text-[10px]">●</span>
                                        <span><strong>Frutas:</strong> Claridad de frambuesa fresca y frutilla ácida.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#881337] mt-1 text-[10px]">●</span>
                                        <span><strong>Matices:</strong> Notas de grafito, tabaco y hierbas de secano.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* BOCA */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#EBE9E4] p-8 rounded-sm border border-[#881337]/20 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                    >
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-20 h-20 rounded-full border border-[#881337]/30 flex items-center justify-center bg-[#EBE9E4]">
                                <SketchMouth />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-[#1a1a1a]">En Boca</h3>
                                <div className="w-8 h-px bg-[#881337]/30 mx-auto" />
                                <p className="text-slate-700 text-sm leading-relaxed font-light">
                                    Tensión vibrante. Taninos de tiza y una acidez natural que lo hace jugoso y largo. Un vino vertical.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
