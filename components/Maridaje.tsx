"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Maridaje() {
    const pairings = [
        {
            title: "Brochetas de Pato",
            subtitle: "La Armonía Perfecta",
            description: "La grasa del pato exige estructura, mientras que la salsa de frutos rojos crea un puente directo con los aromas a frambuesa y frutilla del Caudal.",
            image: "/images/maridaje-pato.png",
            category: "Salado",
            bg: "bg-stone-900"
        },
        {
            title: "Almejas & Huepos",
            subtitle: "Frescura de Costa",
            description: "El yodo y la mineralidad de los mariscos encuentran su par en la columna vertebral de granito del vino. Un maridaje que celebra el origen.",
            image: "/images/maridaje-mar.png", // Usando la imagen generada de almejas
            category: "Salado",
            bg: "bg-slate-900"
        },
        {
            title: "Croqueta de Hongos",
            subtitle: "Profundidad Terrosa",
            description: "«La tierra llama a la tierra». Las notas a grafito y bosque del Cabernet Franc se entrelazan con el sabor umami de los hongos silvestres.",
            image: "/images/maridaje-pato.png", // Placeholder temporal (reusando pato por estilo oscuro)
            category: "Salado",
            bg: "bg-neutral-900"
        },
        {
            title: "Pimiento Rostizado",
            subtitle: "Dulzor Ahumado",
            description: "El fuego realza el dulzor del pimiento, haciendo eco a la fruta roja madura del vino, mientras la acidez limpia la riqueza del aceite de oliva.",
            image: "/images/maridaje-pato.png", // Placeholder
            category: "Salado",
            bg: "bg-red-950"
        },
        {
            title: "Peras al Vino Tinto",
            subtitle: "Espejo de Sabor",
            description: "Un maridaje por concordancia absoluta. El postre contiene la esencia misma del vino, verificando en boca lo que la nariz prometió.",
            image: "/images/maridaje-pato.png", // Placeholder
            category: "Dulce",
            bg: "bg-rose-950"
        }
    ];

    return (
        <section className="relative bg-[#EBE9E4] py-24 overflow-hidden" id="maridaje">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-[#881337] text-[10px] font-bold tracking-[0.3em] uppercase border-b border-[#881337] pb-1 inline-block mb-4">
                        Experiencia Gastronómica
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a]">
                        Armonías <span className="italic text-[#881337]">Caudal</span>
                    </h2>
                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto font-serif italic text-lg">
                        "El vino no está completo hasta que se comparte en la mesa. Hemos diseñado estos maridajes para resaltar la versatilidad de nuestro Cabernet Franc."
                    </p>
                </div>

                {/* Grid Visual */}
                <div className="space-y-32">
                    {pairings.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center group`}
                        >
                            {/* Imagen */}
                            <div className="w-full md:w-1/2 relative aspect-[4/3] shadow-2xl overflow-hidden rounded-sm">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Overlay sutil para atmósfera */}
                                <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                            </div>

                            {/* Texto */}
                            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                                <div className="inline-block px-3 py-1 bg-[#881337]/10 text-[#881337] text-[10px] font-bold tracking-widest uppercase rounded-full">
                                    {item.category}
                                </div>

                                <h3 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight">
                                    {item.title}
                                </h3>

                                <p className="text-[#881337] font-sans font-bold tracking-wider text-sm uppercase">
                                    — {item.subtitle}
                                </p>

                                <div className="h-px w-20 bg-[#1a1a1a]/10 mx-auto md:mx-0" />

                                <p className="text-slate-600 text-lg leading-relaxed font-serif">
                                    "{item.description}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
