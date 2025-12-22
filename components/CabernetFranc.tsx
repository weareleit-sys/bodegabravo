"use client";
import { motion } from "framer-motion";

export default function CabernetFranc() {
    return (
        <section className="relative pt-12 pb-32 bg-[#EBE9E4] overflow-hidden text-[#1a1a1a] scroll-mt-24" id="historia">

            {/* 1. TEXTURA RUIDO (Profundidad) */}
            <div className="absolute inset-0 z-0 bg-noise opacity-40 pointer-events-none mix-blend-soft-light" />

            {/* 2. VECTORES DE FONDO (Raíces Abstractas) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
                <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                    <path
                        d="M-100,500 C200,700 600,100 1200,200 S1600,0 1700,-50"
                        fill="none"
                        stroke="#881337"
                        strokeWidth="1.5"
                        className="mix-blend-multiply"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">

                {/* Header Editorial */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block border-b border-[#881337] pb-1 mb-4"
                    >
                        <span className="text-[#881337] text-[10px] font-bold tracking-[0.3em] uppercase">
                            Nuestra Esencia
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif text-[#1a1a1a]"
                    >
                        <span className="italic">Cepa</span> Cabernet Franc
                    </motion.h2>
                </div>

                {/* Layout Editorial 2 Columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

                    {/* Columna 1: Origen con Letra Capital */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="font-sans text-lg text-slate-800 leading-relaxed relative">
                            {/* Drop Cap "S" */}
                            <span className="float-left text-7xl font-serif text-[#881337] leading-[0.8] mr-3 mt-[-4px]">
                                S
                            </span>
                            u historia comienza en el <strong>siglo XVII</strong>, cuando el Cardenal Richelieu envió esquejes al Valle del Loira y Burdeos. Desde entonces, ha sido reconocida por sus cualidades únicas, estableciéndose como el padre genético del Cabernet Sauvignon y el Merlot.
                        </p>
                    </motion.div>

                    {/* Columna 2: Chile & Perfil */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-sans text-lg text-slate-800 leading-relaxed space-y-6"
                    >
                        <p>
                            En Chile, encontró un segundo hogar. Hoy, esta cepa brilla con luz propia gracias a su perfil complejo y armónico. En el Valle del Maule, nos regala vinos de <strong>color rojo rubí</strong>, con notas vibrantes a <strong>frambuesa, frutilla y tabaco</strong>.
                        </p>
                    </motion.div>
                </div>

                {/* Separador Sutil */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-px w-full max-w-xs mx-auto bg-[#881337]/20 my-16"
                />

                {/* Recomendación Final Integrada */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <p className="font-serif italic text-2xl text-slate-700">
                        "Recomendamos beberlo <span className="text-[#881337]">frío</span> para resaltar su frescura."
                    </p>
                    <p className="mt-4 text-xs font-bold tracking-widest uppercase text-slate-400">
                        — Sugerencia del Enólogo
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
