"use client";
import { motion } from "framer-motion";

// Variantes de animación para los trazos (Consistente con NotasCata)
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

// Datos reales del Menú de Lanzamiento
const salados = [
    { plato: "Croqueta de hongos con alioli de hierbas", nota: "Terrosas y herbales" },
    { plato: "Pimiento rostizado con compota tibia de tomate", nota: "Herbales y terrosas" },
    { plato: "Tabla de quesos de oveja vasca con cerezas", nota: "Frutales y minerales" },
    { plato: "Camarones al ajillo con aceite de tomillo", nota: "Herbales" },
    { plato: "Almejas con pebre de ulte y piure", nota: "Minerales y frescas" },
    { plato: "Huepos con salsa ají amarillo ahumado", nota: "Ahumadas y tostadas" },
    { plato: "Brochetas de pato con reducción de frutos rojos", nota: "Frutales intensas y especiadas" },
    { plato: "Albóndigas de carne con glaseado especiado", nota: "Pimienta, clavo, nuez moscada" },
];

const dulces = [
    { plato: "Peras al vino tinto con espuma de mascarpone", nota: "Frutales y ácidas" },
    { plato: "Pavlova con duraznos y crema de vainilla", nota: "Frutales y especiadas" },
];

export default function Maridaje() {
    return (
        <section className="relative py-32 bg-[#EBE9E4] overflow-hidden">

            {/* Fondo sutil (Ruido) */}
            <div className="absolute inset-0 z-0 bg-noise opacity-50 pointer-events-none mix-blend-soft-light" />

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">

                {/* ENCABEZADO */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#881337] text-xs font-bold tracking-[0.4em] uppercase border-b border-[#881337]/30 pb-2 inline-block mb-6"
                    >
                        Experiencia Gastronómica
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-serif text-[#1a1a1a] mb-6"
                    >
                        El Arte del Maridaje
                    </motion.h2>
                    <p className="text-lg text-slate-600 font-serif italic max-w-2xl mx-auto">
                        "Nuestra propuesta para el Gran Lanzamiento. Una selección diseñada para dialogar con la tensión vibrante del Cabernet Franc."
                    </p>
                </div>

                {/* --- SECCIÓN SALADOS --- */}
                <div className="mb-24 relative">
                    {/* Ilustración SVG Abstracta (Plato/Tenedor) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex justify-center mb-10 opacity-80"
                    >
                        <svg width="60" height="60" viewBox="0 0 100 100" className="stroke-[#881337] fill-none stroke-[1.5px] overflow-visible">
                            <motion.path variants={draw} d="M20,50 C20,80 80,80 80,50" /> {/* Plato */}
                            <motion.path variants={draw} d="M40,20 L40,70" /> {/* Tenedor Izq */}
                            <motion.path variants={draw} d="M60,20 L60,70" /> {/* Cuchillo Der */}
                        </svg>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl font-serif text-center text-[#1a1a1a] mb-12 italic"
                    >
                        Armonías Saladas
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {salados.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }} // Más lento y elegante
                                className="flex flex-col items-center text-center group"
                            >
                                <h4 className="font-serif text-lg text-[#1a1a1a] mb-2 leading-tight group-hover:text-[#881337] transition-colors">
                                    {item.plato}
                                </h4>
                                <div className="w-8 h-[1px] bg-[#881337]/20 my-2"></div>
                                <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                                    {item.nota}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- SECCIÓN DULCES --- */}
                <div className="relative pt-12 border-t border-[#881337]/10">
                    {/* Ilustración SVG Abstracta (Postre) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex justify-center mb-10 opacity-80"
                    >
                        <svg width="60" height="60" viewBox="0 0 100 100" className="stroke-[#881337] fill-none stroke-[1.5px] overflow-visible">
                            <motion.circle variants={draw} cx="50" cy="50" r="30" strokeDasharray="4 4" /> {/* Plato Postre */}
                            <motion.path variants={draw} d="M50,35 Q65,35 65,50 Q65,65 50,65 Q35,65 35,50 Q35,35 50,35" /> {/* Fruta/Dulce */}
                            <motion.path variants={draw} d="M50,20 L50,35" /> {/* Tallo */}
                        </svg>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl font-serif text-center text-[#1a1a1a] mb-12 italic"
                    >
                        Final Dulce
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
                        {dulces.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <h4 className="font-serif text-lg text-[#1a1a1a] mb-2 leading-tight group-hover:text-[#881337] transition-colors">
                                    {item.plato}
                                </h4>
                                <div className="w-8 h-[1px] bg-[#881337]/20 my-2"></div>
                                <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                                    {item.nota}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
