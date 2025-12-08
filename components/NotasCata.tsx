'use client';

import { motion } from 'framer-motion';

export default function NotasCata() {
    return (
        <section className="py-24 bg-[#EBE9E4] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#881337] font-bold tracking-widest uppercase text-sm">
                        En Copa
                    </span>
                    <h2 className="mt-2 text-4xl md:text-5xl font-serif text-slate-900">
                        Perfil Sensorial
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* VISTA */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-[#881337]"
                    >
                        <div className="h-16 w-16 bg-[#881337] rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
                            👁️
                        </div>
                        <h3 className="text-xl font-serif text-center mb-4">A la Vista</h3>
                        <p className="text-slate-600 text-center text-sm leading-relaxed">
                            Rojo rubí brillante. Menos intenso que un Cabernet Sauvignon, pero con una vivacidad que denota su acidez natural y frescura.
                        </p>
                    </motion.div>

                    {/* NARIZ */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-[#881337]"
                    >
                        <div className="h-16 w-16 bg-[#881337] rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
                            👃
                        </div>
                        <h3 className="text-xl font-serif text-center mb-4">En Nariz</h3>
                        <ul className="text-slate-600 text-sm space-y-2 text-center">
                            <li><strong>Primarios:</strong> Frutas rojas, pimiento rojo asado, violetas.</li>
                            <li><strong>Terciarios:</strong> Notas elegantes de cuero, tabaco, grafito y tierra húmeda.</li>
                        </ul>
                    </motion.div>

                    {/* BOCA */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-[#881337]"
                    >
                        <div className="h-16 w-16 bg-[#881337] rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
                            👄
                        </div>
                        <h3 className="text-xl font-serif text-center mb-4">En Boca</h3>
                        <p className="text-slate-600 text-center text-sm leading-relaxed">
                            Cuerpo medio con taninos suaves y finos. Acidez natural alta que lo hace jugoso. Final elegante con un dejo mineral o salino propio del Maule.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
