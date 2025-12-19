"use client";
import { motion } from "framer-motion";
import { Check, MessageCircle, Star } from "lucide-react";

export default function Pricing() {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "56975496553";

    const whatsappLink = (message: string) =>
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="relative pt-32 pb-12 overflow-hidden bg-[#EBE9E4]" id="oferta">

            {/* 1. TEXTURA Y FONDO (Sin cambios) */}
            <div className="absolute inset-0 z-0 bg-noise opacity-40 pointer-events-none mix-blend-soft-light" />
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                    <path d="M-50,400 C300,300 600,800 900,700 S1500,200 1600,100" fill="none" stroke="#881337" strokeWidth="1" className="mix-blend-multiply" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* ENCABEZADO */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-[#881337] text-[10px] font-bold tracking-[0.3em] uppercase border-b border-[#881337] pb-1 inline-block">
                        Lanzamiento Exclusivo 2025
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
                        Elige tu Experiencia Caudal
                    </h2>
                    <p className="text-slate-600 font-serif italic text-lg max-w-xl mx-auto">
                        "Adquiere nuestro Cabernet Franc Icono directamente de la bodega, sin intermediarios."
                    </p>
                </div>

                {/* GRILLA DE PRECIOS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">

                    {/* OPCIÓN 1: BOTELLA INDIVIDUAL */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#EBE9E4] p-8 rounded-sm border border-[#1a1a1a]/10 shadow-lg relative flex flex-col h-full"
                    >
                        <h3 className="text-xl font-serif text-[#1a1a1a] mb-2">Explorador</h3>
                        <p className="text-xs text-[#881337] mb-6 uppercase tracking-widest font-bold">1 Botella</p>

                        <div className="mb-4">
                            <span className="text-4xl font-serif text-[#1a1a1a]">$12.000</span>
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed border-t border-slate-200 pt-4">
                            Ideal para conocer la esencia de nuestro Cabernet Franc.
                        </p>

                        <a
                            href={whatsappLink("Hola, quiero comprar 1 botella de Caudal a $12.000.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Comprar 1 Botella
                        </a>
                    </motion.div>

                    {/* OPCIÓN 2: CAJA DE 6 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#EBE9E4] p-8 rounded-sm border border-[#1a1a1a]/10 shadow-lg relative flex flex-col h-full"
                    >
                        <h3 className="text-xl font-serif text-[#1a1a1a] mb-2">Conocedor</h3>
                        <p className="text-xs text-[#881337] mb-6 uppercase tracking-widest font-bold">Caja de 6</p>

                        <div className="mb-1">
                            <span className="text-5xl font-serif text-[#1a1a1a]">$60.000</span>
                        </div>
                        <p className="text-emerald-700 text-xs font-bold uppercase tracking-wide mb-6">
                            Queda en $10.000 c/u
                        </p>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed border-t border-slate-200 pt-4">
                            La medida perfecta para compartir en situaciones especiales.
                        </p>

                        <ul className="space-y-3 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Ahorras $12.000</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Envío</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Reserva</span>
                            </li>
                        </ul>

                        <a
                            href={whatsappLink("Hola, quiero reservar una Caja de 6 Caudal a $60.000.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Pedir Caja de 6
                        </a>
                    </motion.div>

                    {/* OPCIÓN 3: COLECCIONISTA (2 CAJAS) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#EBE9E4] p-8 rounded-sm border-2 border-[#881337] shadow-2xl relative flex flex-col h-full transform md:-translate-y-4 z-10"
                    >
                        {/* Badge de Mejor Valor */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#881337] text-white px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm shadow-md whitespace-nowrap flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" /> Mejor Valor
                        </div>

                        <h3 className="text-2xl font-serif text-[#1a1a1a] mb-2">Coleccionista</h3>
                        <p className="text-xs text-[#881337] mb-6 uppercase tracking-widest font-bold">2 Cajas (12 vinos)</p>

                        <div className="mb-1">
                            <span className="text-5xl font-serif text-[#1a1a1a]">$108.000</span>
                        </div>
                        <p className="text-emerald-700 text-xs font-bold uppercase tracking-wide mb-6">
                            Queda en $9.000 c/u
                        </p>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed border-t border-[#881337]/20 pt-4">
                            Para guardar, regalar y disfrutar todo el año.
                        </p>

                        <ul className="space-y-3 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-sm text-[#1a1a1a] font-medium">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Ahorras $36.000</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#1a1a1a]">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Almacenado</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#1a1a1a]">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Envío prioritario</span>
                            </li>
                        </ul>

                        <a
                            href={whatsappLink("Hola, me interesa la oferta Coleccionista de 2 Cajas a $108.000.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#881337] text-white py-4 px-6 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-[#6d0f2b] transition-colors flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Pedir Oferta Mayorista
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
