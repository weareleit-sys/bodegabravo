"use client";

import { motion } from "framer-motion";
import { Utensils, Flame, Wheat } from "lucide-react";

const pairings = [
    {
        icon: <Flame size={40} strokeWidth={1} />,
        title: "Fuego & Brasas",
        desc: "El carácter ahumado del Cabernet Franc se eleva con cortes magros a la parrilla, como un ojo de bife o entraña jugosa."
    },
    {
        icon: <Utensils size={40} strokeWidth={1} />,
        title: "Alta Cocina",
        desc: "Ideal para acompañar pastas con salsas de hongos silvestres, trufa negra o reducciones de vino tinto."
    },
    {
        icon: <Wheat size={40} strokeWidth={1} />,
        title: "Quesos Curados",
        desc: "La acidez equilibrada limpia el paladar, haciéndolo el compañero perfecto para quesos de pasta dura y maduración larga."
    }
];

export default function Maridaje() {
    return (
        <section id="maridajes" className="py-24 bg-caudal-cream border-t border-stone-200">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-caudal-red font-bold tracking-[0.2em] text-xs uppercase">Gastronomía</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-3">El Arte del Maridaje</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pairings.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group p-8 border border-stone-300 hover:border-caudal-red/50 bg-white transition-all duration-500 hover:shadow-xl"
                        >
                            <div className="mb-6 text-slate-800 group-hover:text-caudal-red transition-colors duration-300 flex justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-serif text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 font-sans leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
