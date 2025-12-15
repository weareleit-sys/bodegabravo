"use client";
import { motion } from "framer-motion";

// --- ICONOS SKETCH (Sin cambios) ---
const SketchFire = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#881337] stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50,90 C20,90 20,50 50,20 C80,50 80,90 50,90 Z" />
        <path d="M50,90 C35,70 35,50 50,40" opacity="0.5" />
        <path d="M50,90 C65,70 65,60 55,50" opacity="0.5" />
    </svg>
);

const SketchFork = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#881337] stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M35,20 L35,50 C35,60 45,60 45,80 L45,95" />
        <path d="M45,20 L45,50" />
        <path d="M55,20 L55,50 C55,60 45,60 45,80" />
        <path d="M75,20 L75,95" />
        <path d="M75,20 C65,20 65,40 65,60 L75,60" />
    </svg>
);

const SketchCheese = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#881337] stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10,80 L90,80 L90,50 L50,20 L10,50 Z" />
        <circle cx="40" cy="50" r="5" opacity="0.5" />
        <circle cx="60" cy="65" r="8" opacity="0.5" />
        <circle cx="30" cy="70" r="4" opacity="0.5" />
    </svg>
);

export default function Maridaje() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#EBE9E4]">

            {/* 1. TEXTURA DE RUIDO GLOBAL */}
            <div className="absolute inset-0 z-0 bg-noise opacity-40 pointer-events-none mix-blend-soft-light" />

            {/* 2. RAÍCES ABSTRACTAS (SVG Variado) */}
            {/* Curvas invertidas para diferenciar de la sección anterior */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <svg
                    className="absolute w-full h-full"
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Raíz Principal Invertida */}
                    <path
                        d="M-100,200 C200,100 500,400 900,300 S1500,800 1600,850"
                        fill="none"
                        stroke="#881337"
                        strokeWidth="1.5"
                        className="mix-blend-multiply"
                    />
                    {/* Raíz Secundaria Discontinua */}
                    <path
                        d="M100,900 C400,700 700,800 1000,500 S1300,200 1500,100"
                        fill="none"
                        stroke="#881337"
                        strokeWidth="1"
                        strokeDasharray="10,5"
                        className="mix-blend-multiply opacity-50"
                    />
                </svg>
            </div>

            {/* 3. CAUDAL VERTICAL (Continuidad de Marca) */}
            <div className="absolute right-0 top-0 h-full flex items-center justify-center z-0 pointer-events-none opacity-[0.05]">
                <span className="text-[150px] md:text-[200px] font-serif font-bold text-[#881337] whitespace-nowrap -rotate-90 origin-center tracking-tighter select-none">
                    CAUDAL
                </span>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* ENCABEZADO */}
                <div className="text-center mb-20 space-y-4">
                    <span className="text-[#881337] text-[10px] font-bold tracking-[0.3em] uppercase border-b border-[#881337] pb-1 inline-block">
                        Gastronomía
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
                        El Arte del Maridaje
                    </h2>
                    <p className="text-slate-600 font-serif italic text-lg max-w-lg mx-auto">
                        "Un vino versátil que eleva la experiencia culinaria."
                    </p>
                </div>

                {/* GRILLA DE MARIDAJE */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* CARNES */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#EBE9E4] p-8 rounded-sm border border-[#881337]/20 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                    >
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-20 h-20 rounded-full border border-[#881337]/30 flex items-center justify-center bg-[#EBE9E4]">
                                <SketchFire />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-[#1a1a1a]">Carnes a las Brasas</h3>
                                <div className="w-8 h-px bg-[#881337]/30 mx-auto" />
                                <p className="text-slate-700 text-sm leading-relaxed font-light">
                                    Ideal para cortes magros como entraña o palanca. Su acidez limpia la grasa sin opacar la carne.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ALTA COCINA */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#EBE9E4] p-8 rounded-sm border border-[#881337]/20 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                    >
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-20 h-20 rounded-full border border-[#881337]/30 flex items-center justify-center bg-[#EBE9E4]">
                                <SketchFork />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-[#1a1a1a]">Alta Cocina</h3>
                                <div className="w-8 h-px bg-[#881337]/30 mx-auto" />
                                <p className="text-slate-700 text-sm leading-relaxed font-light">
                                    Perfecto con pastas rellenas de hongos, risotto de setas o platos con trufa negra.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* QUESOS */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#EBE9E4] p-8 rounded-sm border border-[#881337]/20 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                    >
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-20 h-20 rounded-full border border-[#881337]/30 flex items-center justify-center bg-[#EBE9E4]">
                                <SketchCheese />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-[#1a1a1a]">Tablas y Quesos</h3>
                                <div className="w-8 h-px bg-[#881337]/30 mx-auto" />
                                <p className="text-slate-700 text-sm leading-relaxed font-light">
                                    Quesos de pasta dura y maduros. Charcutería fina como jamón serrano y salames artesanales.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
