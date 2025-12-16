// @ts-nocheck
"use client";
import { motion } from "framer-motion";

// Variantes de animación para los trazos (Efecto dibujo a mano)
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { delay: 0.2, type: "spring", duration: 1.5, bounce: 0 },
            opacity: { delay: 0.2, duration: 0.01 }
        }
    }
};

export default function NotasCata() {
    return (
        <section className="relative py-32 bg-[#EBE9E4] overflow-hidden">

            {/* 1. MARCA DE AGUA GIGANTE (SUTILEZA) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] pointer-events-none opacity-[0.03]">
                <span className="font-serif text-[20vw] text-[#881337] whitespace-nowrap leading-none select-none">
                    SENSORIAL
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* ENCABEZADO */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <span className="text-[#881337] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        Ficha Técnica
                    </span>
                    <h2 className="text-5xl md:text-6xl font-serif text-[#1a1a1a] mb-6">
                        Perfil Sensorial
                    </h2>
                    <p className="text-xl text-slate-600 font-serif italic">
                        "Un vino que no grita; susurra. Busca expresar el paisaje del Maule sin maquillar la fruta."
                    </p>
                </div>

                {/* GRILLA ORGÁNICA (SIN CAJAS) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">

                    {/* --- 1. VISTA (OJO ABSTRACTO) --- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center group"
                    >
                        <div className="h-32 flex items-center justify-center mb-6">
                            <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-[#881337] fill-none stroke-[1.5px] overflow-visible">
                                {/* Párpado superior */}
                                <motion.path variants={draw} d="M10,50 Q50,10 90,50" />
                                {/* Párpado inferior */}
                                <motion.path variants={draw} d="M15,55 Q50,85 85,55" />
                                {/* Iris (círculo imperfecto) */}
                                <motion.path variants={draw} d="M40,50 A10,10 0 1,1 60,50 A10,10 0 1,1 40,50" />
                                {/* Brillo */}
                                <motion.path variants={draw} d="M55,45 L56,46" strokeWidth="3" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4 group-hover:text-[#881337] transition-colors">
                            A la Vista
                        </h3>
                        <div className="w-12 h-[1px] bg-[#881337]/30 mx-auto mb-6"></div>
                        <p className="text-slate-600 leading-relaxed font-sans px-4">
                            Color <strong className="text-[#881337] font-medium">rojo rubí vibrante</strong> con ribetes violáceos. Lágrima lenta que denota su estructura elegante y glicérica.
                        </p>
                    </motion.div>

                    {/* --- 2. NARIZ (SILUETA ABSTRACTA) --- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center group"
                    >
                        <div className="h-32 flex items-center justify-center mb-6">
                            <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-[#881337] fill-none stroke-[1.5px] overflow-visible">
                                {/* Perfil Nariz */}
                                <motion.path variants={draw} d="M30,20 C30,20 60,30 60,60 C60,80 40,80 35,75" />
                                {/* Aroma (ondas) */}
                                <motion.path variants={draw} d="M70,40 Q80,30 80,20" />
                                <motion.path variants={draw} d="M75,55 Q90,45 90,35" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4 group-hover:text-[#881337] transition-colors">
                            En Nariz
                        </h3>
                        <div className="w-12 h-[1px] bg-[#881337]/30 mx-auto mb-6"></div>
                        <ul className="text-slate-600 leading-relaxed font-sans space-y-2 px-4">
                            <li><span className="text-[#881337]">•</span> Frambuesa fresca y frutilla ácida.</li>
                            <li><span className="text-[#881337]">•</span> Notas de grafito y hierbas de secano.</li>
                            <li><span className="text-[#881337]">•</span> Fondo sutil de tabaco rubio.</li>
                        </ul>
                    </motion.div>

                    {/* --- 3. BOCA (FLUIDO/COPA) --- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center group"
                    >
                        <div className="h-32 flex items-center justify-center mb-6">
                            <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-[#881337] fill-none stroke-[1.5px] overflow-visible">
                                {/* Copa Abstracta */}
                                <motion.path variants={draw} d="M30,30 Q30,70 50,70 Q70,70 70,30" />
                                {/* Tallo */}
                                <motion.path variants={draw} d="M50,70 L50,90" />
                                {/* Base */}
                                <motion.path variants={draw} d="M35,90 L65,90" />
                                {/* Líquido */}
                                <motion.path variants={draw} d="M35,45 Q50,55 65,45" strokeDasharray="2 2" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4 group-hover:text-[#881337] transition-colors">
                            En Boca
                        </h3>
                        <div className="w-12 h-[1px] bg-[#881337]/30 mx-auto mb-6"></div>
                        <p className="text-slate-600 leading-relaxed font-sans px-4">
                            Tensión vibrante. Taninos de tiza que aportan agarre sin secar. Acidez natural jugosa que lo hace <strong className="text-[#1a1a1a] font-medium">largo y vertical</strong>.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
