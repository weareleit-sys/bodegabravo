'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Historia() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="relative h-[500px] w-full lg:w-[450px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/optimized/family-detail.webp"
                                alt="Historia Bodega Bravo"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Marco decorativo */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#881337] rounded-2xl -z-10 hidden lg:block"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-6"
                    >
                        <span className="text-[#881337] font-bold tracking-widest uppercase text-sm">
                            Legado Familiar
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                            Desde 1930: <br />
                            La Visión de Raúl Bravo
                        </h2>

                        <div className="text-slate-600 space-y-4 font-sans leading-relaxed text-lg">
                            <p>
                                En 1930, <strong>Don Raúl Bravo Valenzuela</strong>, Enólogo e Ingeniero Agrónomo de la Universidad Católica,
                                asumió el desafío de las bodegas familiares construidas originalmente en 1887.
                            </p>
                            <p>
                                Con visión de futuro, introdujo cepas francesas de Cabernet Franc, renovando la vinicultura de la zona.
                                Hoy, sus descendientes continuamos esa tradición, conservando las parras originales y produciendo
                                vinos que honran más de un siglo de historia.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-stone-200">
                            <p className="font-serif text-2xl text-slate-800 italic">
                                "No hacemos vino para concursos. Hacemos el vino que queremos beber con nuestros amigos."
                            </p>
                            <p className="mt-2 text-sm text-[#881337] font-bold uppercase tracking-wider">
                                — Familia Bravo
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
