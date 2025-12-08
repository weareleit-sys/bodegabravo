'use client';

import { motion } from 'framer-motion';
import { Check, MessageCircle, Star } from 'lucide-react';

export default function Pricing() {
    // Configuración de WhatsApp
    const phone = "56992344819"; // Tu número real

    const tiers = [
        {
            name: "Explorador",
            quantity: "1 Botella",
            price: "$12.000",
            pricePerUnit: null,
            description: "Ideal para conocer la esencia de nuestro Cabernet Franc.",
            features: ["Presentación en caja individual", "Notas de cata incluidas"],
            cta: "Comprar 1 Botella",
            highlight: false,
            message: "Hola! Me interesa comprar 1 botella de Caudal a $12.000."
        },
        {
            name: "Conocedor",
            quantity: "Caja de 6",
            price: "$60.000",
            pricePerUnit: "$10.000 c/u",
            description: "La medida perfecta para compartir en familia.",
            features: ["Ahorras $12.000", "Envío prioritario", "Ficha técnica digital"],
            cta: "Pedir Caja de 6",
            highlight: false,
            message: "Hola! Quiero aprovechar la oferta de 1 Caja (6 vinos) a $60.000."
        },
        {
            name: "Coleccionista",
            quantity: "2 Cajas (12 vinos)",
            price: "$108.000",
            pricePerUnit: "$9.000 c/u",
            description: "Para guardar, regalar y disfrutar todo el año.",
            features: ["Mejor precio del mercado", "Ahorras $36.000", "Asesoría de guarda directa"],
            cta: "Pedir Oferta Mayorista",
            highlight: true, // Esto hace que se destaque visualmente
            message: "Hola! Quiero la oferta mayorista de 2 Cajas a $9.000 por botella."
        }
    ];

    const getWhatsAppLink = (msg: string) => {
        return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    };

    return (
        <section id="oferta" className="py-24 relative overflow-hidden">
            {/* Fondo sutil */}
            <div className="absolute inset-0 bg-[#EBE9E4] opacity-50 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#881337] font-bold tracking-widest uppercase text-sm"
                    >
                        Lanzamiento Exclusivo 2024
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-4xl md:text-5xl font-serif text-slate-900"
                    >
                        Elige tu experiencia Caudal
                    </motion.h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-sans">
                        Adquiere nuestro Cabernet Franc directamente de la bodega, sin intermediarios.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 ${tier.highlight
                                    ? 'bg-white border-[#881337] shadow-2xl scale-105 z-10'
                                    : 'bg-white/60 border-stone-200 shadow-lg hover:border-[#881337]/30'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#881337] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                                    <Star size={14} fill="currentColor" /> MEJOR VALOR
                                </div>
                            )}

                            <h3 className="text-xl font-serif text-slate-900">{tier.name}</h3>
                            <p className="text-[#881337] font-bold mt-1">{tier.quantity}</p>

                            <div className="mt-4 flex items-baseline gap-2">
                                <span className="text-4xl font-serif font-bold text-slate-900">{tier.price}</span>
                            </div>
                            {tier.pricePerUnit && (
                                <p className="text-sm text-emerald-700 font-bold font-sans mt-1">
                                    Queda en {tier.pricePerUnit}
                                </p>
                            )}

                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {tier.description}
                            </p>

                            <ul className="mt-6 space-y-3">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check size={18} className="text-[#881337] shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={getWhatsAppLink(tier.message)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-8 w-full block text-center py-3 px-6 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${tier.highlight
                                        ? 'bg-[#881337] text-white hover:bg-[#6d0f2b] shadow-lg hover:shadow-xl'
                                        : 'bg-slate-900 text-white hover:bg-slate-800'
                                    }`}
                            >
                                <MessageCircle size={18} />
                                {tier.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
