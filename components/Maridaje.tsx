'use client';

import { motion } from 'framer-motion';
import { Flame, Utensils, Wheat } from 'lucide-react';

export default function Maridaje() {
    const pairings = [
        {
            icon: <Flame className="w-8 h-8" />,
            title: "Carnes a las Brasas",
            desc: "Ideal para cortes magros como entraña o palanca. Su acidez limpia la grasa sin opacar la carne.",
            color: "bg-red-50 text-red-700"
        },
        {
            icon: <Utensils className="w-8 h-8" />,
            title: "Alta Cocina",
            desc: "Perfecto con pastas rellenas de hongos, risotto de setas o platos con trufa negra.",
            color: "bg-orange-50 text-orange-700"
        },
        {
            icon: <Wheat className="w-8 h-8" />,
            title: "Tablas y Quesos",
            desc: "Quesos de pasta dura y maduros. Charcutería fina como jamón serrano y salames artesanales.",
            color: "bg-amber-50 text-amber-700"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Círculo decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EBE9E4] rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#881337] font-bold tracking-widest uppercase text-sm">
                        Gastronomía
                    </span>
                    <h2 className="mt-2 text-4xl md:text-5xl font-serif text-slate-900">
                        El Arte del Maridaje
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Un vino versátil que eleva la experiencia culinaria.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pairings.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl border border-stone-100 shadow-lg hover:shadow-xl hover:border-[#881337]/20 transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.color}`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-[#881337] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
