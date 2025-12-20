"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Maridaje() {
    const savoryPairings = [
        {
            title: "Croqueta de Hongos",
            subtitle: "Con Alioli de Hierbas",
            match: "Notas Terrosas y Herbales",
            description: "El perfil fúngico y profundo de los hongos silvestres resuena con las notas de grafito y suelo húmedo del Cabernet Franc. Una conexión directa con la tierra.",
            image: "/images/maridaje-croqueta.png",
            category: "Armonía Salada",
            bg: "bg-stone-950"
        },
        {
            title: "Pimiento Rostizado",
            subtitle: "Compota de Tomate y Albahaca",
            match: "Notas Herbales y Terrosas",
            description: "El dulzor ahumado del pimiento asado y la frescura de la albahaca realzan la fruta roja vibrante del vino, creando un contrapunto delicioso.",
            image: "/images/maridaje-pimiento.png",
            category: "Armonía Salada",
            bg: "bg-red-950"
        },
        {
            title: "Queso de Oveja",
            subtitle: "Con Cerezas Frescas",
            match: "Notas Frutales y Minerales",
            description: "La estructura grasa y la salinidad del queso de oveja limpian el paladar, mientras las cerezas hacen eco de la fruta fresca del vino.",
            image: "/images/maridaje-queso.png",
            category: "Armonía Salada",
            bg: "bg-slate-900"
        },
        {
            title: "Camarones al Ajillo",
            subtitle: "Con Aceite de Tomillo",
            match: "Notas Herbales",
            description: "El tomillo actúa como un puente aromático directo con las hierbas de secano presentes en la nariz del vino, uniendo mar y tierra.",
            image: "/images/maridaje-camarones.png",
            category: "Armonía Salada",
            bg: "bg-amber-950"
        },
        {
            title: "Almejas con Pebre",
            subtitle: "De Ulte y Piure",
            match: "Notas Minerales y Frescas",
            description: "La mineralidad yodada de la costa maulina se enfrenta a la estructura de granito del vino. Un maridaje de texturas y frescor.",
            image: "/images/maridaje-almejas.png",
            category: "Armonía Salada",
            bg: "bg-cyan-950"
        },
        {
            title: "Huepos Ahumados",
            subtitle: "Salsa de Ají Amarillo",
            match: "Notas Ahumadas y Tostadas",
            description: "El picor suave y el carácter ahumado del ají conversan con las sutiles notas de tabaco y guarda del vino.",
            image: "/images/maridaje-huepos.png",
            category: "Armonía Salada",
            bg: "bg-orange-950"
        },
        {
            title: "Brochetas de Pato",
            subtitle: "Reducción de Frutos Rojos",
            match: "Frutales Intensas y Especiadas",
            description: "La armonía perfecta. La grasa del pato exige taninos, y la salsa de berries es un espejo de los aromas de frambuesa y frutilla del Caudal.",
            image: "/images/maridaje-pato.png", // Perfect match image
            category: "Armonía Salada",
            bg: "bg-rose-950"
        },
        {
            title: "Albóndigas Glaseadas",
            subtitle: "Vino Especiado",
            match: "Notas Especiadas",
            description: "La sazón de la carne (pimienta, clavo) potencia el lado especiado característico de la cepa. Un abrazo de sabores cálidos.",
            image: "/images/maridaje-albondigas.png",
            category: "Armonía Salada",
            bg: "bg-red-900"
        },
    ];

    const sweetPairings = [
        {
            title: "Peras al Vino",
            subtitle: "Espuma de Mascarpone",
            match: "Frutales y Ácidas",
            description: "Maridaje por concordancia. El postre contiene la esencia misma del vino, extendiendo la experiencia en una dimensión dulce y elegante.",
            image: "/images/maridaje-peras.png",
            category: "Armonía Dulce",
            bg: "bg-purple-950"
        },
        {
            title: "Pavlova de Duraznos",
            subtitle: "Miel de Ulmo",
            match: "Frutales y Especiadas",
            description: "La acidez del durazno y la complejidad floral de la miel de ulmo bailan con la frescura y verticalidad del vino.",
            image: "/images/maridaje-pavlova.png",
            category: "Armonía Dulce",
            bg: "bg-pink-950"
        }
    ];

    const PairingCard = ({ item, index }: { item: any, index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center group`}
        >
            {/* Imagen */}
            <div className="w-full md:w-1/2 relative aspect-[4/3] shadow-2xl overflow-hidden rounded-sm bg-gray-200">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />

                {/* Etiqueta de Match en Imagen */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                    <div className="backdrop-blur-md bg-black/40 py-2 px-4 rounded-sm border border-white/20">
                        <span className="text-[10px] uppercase tracking-widest block mb-1 text-white/70">Conexión</span>
                        <span className="font-serif italic text-lg">{item.match}</span>
                    </div>
                </div>
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-[#881337]/10 text-[#881337] text-[10px] font-bold tracking-widest uppercase rounded-full">
                    {item.category}
                </div>

                <div>
                    <h3 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-none mb-2">
                        {item.title}
                    </h3>
                    <p className="text-[#881337] font-serif italic text-xl">
                        {item.subtitle}
                    </p>
                </div>

                <div className="h-px w-20 bg-[#1a1a1a]/10 mx-auto md:mx-0" />

                <p className="text-slate-600 text-lg leading-relaxed font-sans font-light">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );

    return (
        <section className="relative bg-[#EBE9E4] py-24 overflow-hidden" id="maridaje">
            {/* Background Design - Matching Caudal Box */}

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            {/* Vertical CAUDAL Text - Like the box */}
            <div className="absolute right-10 top-1/4 -translate-y-1/2 rotate-90 origin-center pointer-events-none select-none">
                <h1 className="text-[200px] md:text-[280px] leading-none font-serif text-[#1a1a1a] opacity-[0.03] whitespace-nowrap tracking-tighter">
                    CAUDAL
                </h1>
            </div>

            {/* Chaotic Diagonal Red Lines - Throughout ENTIRE section */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.12] md:opacity-[0.18] pointer-events-none"
                viewBox="0 0 1200 1600"
                preserveAspectRatio="none"
            >
                {/* Random diagonal lines at different angles and positions */}
                <g>
                    {[...Array(25)].map((_, i) => {
                        const y = (i * 70) + (Math.random() * 30 - 15);
                        const rotation = -45 + (Math.random() * 15);
                        const weight = i % 4 === 0 ? "2.5" : i % 2 === 0 ? "1.5" : "1";
                        return (
                            <line
                                key={i}
                                x1="-200"
                                y1={y}
                                x2="1400"
                                y2={y}
                                stroke="#881337"
                                strokeWidth={weight}
                                transform={`rotate(${rotation} 600 800)`}
                                opacity={0.7}
                            />
                        );
                    })}
                </g>
            </svg>

            {/* Dark gradient vignette */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#881337]/15 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header Principal */}
                <div className="text-center mb-24">
                    <span className="text-[#881337] text-[10px] font-bold tracking-[0.3em] uppercase border-b border-[#881337] pb-1 inline-block mb-4">
                        Menú Degustación
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a]">
                        Maridaje
                    </h2>
                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto font-serif italic text-lg">
                        "Menú recomendado para degustar Caudal"
                    </p>
                </div>

                {/* SECCIÓN SALADOS */}
                <div className="mb-32">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <div className="h-px w-12 bg-[#881337]/30"></div>
                        <h3 className="text-2xl font-serif italic text-[#1a1a1a]">Maridajes Gastronómicos Salados</h3>
                        <div className="h-px w-12 bg-[#881337]/30"></div>
                    </div>
                    <div className="space-y-32">
                        {savoryPairings.map((item, index) => (
                            <PairingCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>

                {/* SECCIÓN DULCES */}
                <div>
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <div className="h-px w-12 bg-[#881337]/30"></div>
                        <h3 className="text-2xl font-serif italic text-[#1a1a1a]">Maridajes Gastronómicos Dulces</h3>
                        <div className="h-px w-12 bg-[#881337]/30"></div>
                    </div>
                    <div className="space-y-32">
                        {sweetPairings.map((item, index) => (
                            <PairingCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
