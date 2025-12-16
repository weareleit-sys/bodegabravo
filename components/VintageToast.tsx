"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VintageToast() {
    return (
        <section className="relative py-8 bg-[#EBE9E4] overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] p-4 bg-white shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700"
                >
                    {/* Marco tipo foto antigua */}
                    <div className="relative w-full h-full border-4 border-slate-200/50 overflow-hidden sepia-[0.3]">
                        <Image
                            src="/images/vintage-toast-1887.png"
                            alt="Casona histórica Bodega Bravo, 1887"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-[2s]"
                            sizes="(max-width: 768px) 100vw, 80vw"
                        />
                        {/* Efecto de grano/ruido por encima */}
                        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />

                        {/* Viñeta suave */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.4)_120%)] pointer-events-none" />
                    </div>

                    {/* Pie de foto manuscrito */}
                    <div className="absolute -bottom-12 right-4 md:right-8 rotate-[-2deg]">
                        <span className="font-serif italic text-slate-500 text-lg md:text-xl tracking-wide opacity-80" style={{ fontFamily: 'var(--font-serif)' }}>
                            "Bodega Bravo, 1887"
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
