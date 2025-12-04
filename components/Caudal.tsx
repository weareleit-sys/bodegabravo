"use client";

import { motion } from "framer-motion";

export default function Caudal() {
    return (
        <section id="caudal" className="py-24 md:py-32 bg-white relative">

            {/* 1. MARCA DE AGUA (En contenedor aislado para no romper el Sticky) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -right-10 md:top-0 md:right-0 opacity-[0.03]">
                    <span className="text-[20rem] md:text-[30rem] font-serif font-bold leading-none text-slate-900">
                        C
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

                {/* COLUMNA 1: LA BOTELLA (Sticky) */}
                {/* 'self-start' es clave para que el sticky tenga espacio para recorrer */}
                <div className="md:sticky md:top-28 self-start flex justify-center order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative w-full max-w-[300px] aspect-[1/3] flex flex-col items-center"
                    >
                        {/* Botella Placeholder - Forma oscura elegante */}
                        <div className="w-24 md:w-32 h-[400px] md:h-[550px] bg-slate-900 rounded-t-3xl rounded-b-lg shadow-2xl relative overflow-hidden">
                            {/* Brillo en la botella */}
                            <div className="absolute top-0 left-4 w-2 h-full bg-white/10 blur-md"></div>

                            {/* Etiqueta */}
                            <div className="absolute top-[25%] left-0 w-full h-32 bg-caudal-cream flex items-center justify-center shadow-inner">
                                <div className="border-t border-b border-caudal-red w-full h-24 flex items-center justify-center">
                                    <span className="font-serif font-bold text-slate-900 tracking-[0.3em] text-lg writing-vertical-rl rotate-180">
                                        CAUDAL
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Sombra base */}
                        <div className="w-32 h-4 bg-black/20 blur-xl rounded-[100%] mt-[-10px] z-[-1]"></div>
                    </motion.div>
                </div>

                {/* COLUMNA 2: LA EXPERIENCIA (Scrollable) */}
                <div className="flex flex-col justify-center order-2 pt-10 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-caudal-red font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-3 block">
                            Partida Limitada • 2024
                        </span>
                        <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-1 leading-none">
                            CAUDAL
                        </h2>
                        <p className="text-2xl md:text-3xl font-serif text-slate-400 italic mb-10">
                            Cabernet Franc
                        </p>

                        {/* Separador */}
                        <div className="w-16 h-1 bg-caudal-red mb-10"></div>

                        <div className="space-y-8 font-sans text-slate-600 leading-relaxed text-lg">
                            <p>
                                La máxima expresión de Bodega Bravo. Un vino que nace de la paciencia, seleccionando manualmente los racimos de nuestra parcela más antigua para lograr una estructura compleja y un espíritu inolvidable.
                            </p>

                            <div className="bg-stone-50 p-8 border border-stone-100 rounded-sm">
                                <h4 className="font-serif font-bold text-slate-900 text-xl mb-4">Notas de Cata</h4>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="text-caudal-red font-bold">Nariz:</span>
                                        <span>Frutos negros maduros, pimiento asado y grafito.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-caudal-red font-bold">Boca:</span>
                                        <span>Entrada sedosa, taninos de tiza y final persistente.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-caudal-red font-bold">Maridaje:</span>
                                        <span>Carnes a las brasas, cordero o quesos curados.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-6 text-sm pt-4">
                                <div className="border-l-2 border-slate-200 pl-4">
                                    <span className="block text-slate-400 uppercase text-xs tracking-wider mb-1">Alcohol</span>
                                    <span className="font-bold text-slate-900 text-lg">14.5% Vol.</span>
                                </div>
                                <div className="border-l-2 border-slate-200 pl-4">
                                    <span className="block text-slate-400 uppercase text-xs tracking-wider mb-1">Crianza</span>
                                    <span className="font-bold text-slate-900 text-lg">12 Meses</span>
                                </div>
                            </div>
                        </div>

                        {/* CALL TO ACTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-12"
                        >
                            <button className="group w-full md:w-auto px-12 py-5 bg-caudal-red text-white font-bold tracking-[0.2em] hover:bg-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
                                <span>RESERVAR PARTIDA</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <p className="mt-4 text-xs text-center md:text-left text-slate-400 font-medium">
                                * Disponibilidad exclusiva para lanzamiento: 500 botellas.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
