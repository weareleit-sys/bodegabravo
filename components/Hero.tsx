"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-caudal-cream flex flex-col justify-center items-center md:flex-row">

            {/* 1. FONDO DE LÍNEAS ABSTRACTAS (SVG) */}
            <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0,100 Q30,50 100,0 M-10,100 Q40,40 100,10 M-20,100 Q50,30 100,20"
                        fill="none"
                        stroke="var(--color-caudal-red)"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M0,90 Q40,60 90,0 M0,80 Q50,50 100,5"
                        fill="none"
                        stroke="var(--color-caudal-red)"
                        strokeWidth="0.3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                    />
                </svg>
            </div>

            {/* 2. CONTENIDO TEXTUAL (CENTRAL) */}
            <div className="z-10 text-center px-6 md:text-left md:w-1/2 md:pl-20">
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-caudal-red font-bold tracking-[0.2em] text-sm md:text-base mb-4"
                >
                    RESERVA EL DÍA
                </motion.p>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-tight"
                >
                    Lunes 22 <br />
                    <span className="text-4xl md:text-6xl italic text-slate-700">de Diciembre</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 h-px w-24 bg-caudal-red md:ml-0 mx-auto"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-6 text-lg text-slate-600 max-w-md mx-auto md:mx-0 font-sans"
                >
                    El renacer de una tradición familiar. <br />
                    Presentando nuestro Cabernet Franc Icono.
                </motion.p>
            </div>

            {/* 3. TIPOGRAFÍA VERTICAL GIGANTE (Derecha) */}
            <div className="hidden md:flex md:w-1/2 h-full justify-center items-center relative z-10">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="writing-vertical-rl text-[12rem] lg:text-[15rem] font-serif font-bold text-slate-900 leading-none opacity-10 select-none mix-blend-multiply"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    CAUDAL
                </motion.div>

                {/* Imagen de Botella (Placeholder por ahora) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Aquí luego pondremos la foto de la botella con fondo transparente */}
                    {/* <div className="w-32 h-96 bg-caudal-red/20 backdrop-blur-sm rounded-full"></div> */}
                </div>
            </div>
        </section>
    );
}
