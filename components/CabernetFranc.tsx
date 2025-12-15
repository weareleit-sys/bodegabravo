"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CabernetFranc() {
    return (
        <section className="py-24 bg-[#EBE9E4] relative overflow-hidden" id="cepa">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        <span className="text-[#881337] text-[10px] font-bold tracking-[0.3em] uppercase border-b border-[#881337] pb-1 inline-block">
                            Nuestra Esencia
                        </span>
                    </motion.div>

                    {/* Título */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-12"
                    >
                        Cepa Cabernet Franc
                    </motion.h2>

                    {/* Contenido en 2 Columnas (Desktop) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center">

                        {/* Columna texto Origen */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-serif text-[#881337] italic">
                                "Fresco y Elegante"
                            </h3>
                            <p className="text-slate-700 leading-relaxed font-sans">
                                Su historia comienza en el <strong>siglo XVII</strong>, cuando el Cardenal Richelieu envió esquejes al Valle del Loira y Burdeos. Desde entonces, ha sido reconocida por sus cualidades únicas, estableciéndose como el padre genético del Cabernet Sauvignon y el Merlot.
                            </p>
                        </motion.div>

                        {/* Columna texto Chile/Perfil */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-serif text-[#881337] italic">
                                Renacimiento en Chile
                            </h3>
                            <p className="text-slate-700 leading-relaxed font-sans">
                                En Chile, encontró un segundo hogar. Hoy, esta cepa brilla con luz propia gracias a su perfil complejo y armónico. En el Valle del Maule, nos regala vinos de <strong>color rojo rubí</strong>, con notas vibrantes a <strong>frambuesa, frutilla y tabaco</strong>.
                            </p>
                        </motion.div>

                    </div>

                    {/* Recomendación Final */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-16 bg-white/50 backdrop-blur-sm p-8 rounded-sm border border-[#881337]/10 inline-block"
                    >
                        <p className="text-[#1a1a1a] font-serif italic text-lg">
                            "Bodega Bravo recomienda beber el Cabernet Franc <span className="text-[#881337]">frío</span>, para resaltar sus sabores y disfrutar de su frescura."
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
