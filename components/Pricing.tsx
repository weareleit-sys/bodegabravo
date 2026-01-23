"use client";
import { motion } from "framer-motion";
import { Check, MessageCircle, Star, Truck } from "lucide-react";

export default function Pricing() {
    const phoneNumber = "56993330628";

    const whatsappLink = (message: string) =>
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-[#EBE9E4] via-[#f8f0e3] to-[#EBE9E4]" id="oferta">

            {/* TEXTURA DE FONDO */}
            <div className="absolute inset-0 z-0 bg-noise opacity-40 pointer-events-none mix-blend-soft-light" />

            {/* LÍNEAS DECORATIVAS ESTILO VERANO - Onduladas como agua/calor */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                    {/* Líneas cálidas superiores */}
                    <path d="M-50,100 Q200,50 400,100 T800,80 T1200,120 T1600,100" fill="none" stroke="#881337" strokeWidth="1.5" />
                    <path d="M-50,150 Q250,100 500,150 T900,130 T1300,170 T1600,150" fill="none" stroke="#881337" strokeWidth="1" />
                    <path d="M-50,200 Q300,150 600,200 T1000,180 T1400,220 T1600,200" fill="none" stroke="#c2410c" strokeWidth="1" />

                    {/* Líneas onduladas inferiores - más sutiles */}
                    <path d="M-50,700 Q200,650 400,700 T800,680 T1200,720 T1600,700" fill="none" stroke="#881337" strokeWidth="1" />
                    <path d="M-50,750 Q250,700 500,750 T900,730 T1300,770 T1600,750" fill="none" stroke="#c2410c" strokeWidth="0.8" />
                    <path d="M-50,800 Q300,750 600,800 T1000,780 T1400,820 T1600,800" fill="none" stroke="#881337" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Rayos de sol decorativos */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-amber-200/50 via-orange-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-radial from-amber-100/40 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-rose-100/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* ENCABEZADO VERANIEGO */}
                <div className="text-center mb-10 space-y-4">
                    <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg">
                        Ofertas Verano 2026
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
                        El Tinto de Verano
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Nuestro Cabernet Franc <span className="text-amber-700 font-semibold">se toma frío</span>. Descubre una experiencia refrescante para el verano del sur.
                    </p>
                </div>

                {/* BANNER DE DELIVERY */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto mb-12"
                >
                    <div className="bg-gradient-to-r from-[#881337] to-rose-700 text-white px-6 py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 text-center">
                        <Truck className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm md:text-base font-medium">
                            <span className="font-bold">Delivery todos los viernes</span> en Región Metropolitana y Región de la Araucanía
                        </p>
                    </div>
                </motion.div>

                {/* GRILLA DE PRECIOS - 3+ CAJAS EN EL CENTRO */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">

                    {/* OPCIÓN 1: 1 CAJA */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-amber-200/60 shadow-lg relative flex flex-col h-full"
                    >
                        <h3 className="text-xl font-serif text-[#1a1a1a] mb-2">Para Empezar</h3>
                        <p className="text-xs text-[#881337] mb-6 uppercase tracking-widest font-bold">1 Caja (6 vinos)</p>

                        <div className="mb-2">
                            <span className="text-4xl font-serif text-[#1a1a1a]">$60.000</span>
                        </div>
                        <p className="text-emerald-700 text-xs font-bold uppercase tracking-wide mb-2">
                            Queda en $10.000 c/u
                        </p>
                        <p className="text-rose-600 text-sm font-semibold mb-6">
                            Ahorras $12.000
                        </p>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed border-t border-amber-100 pt-4">
                            La medida perfecta para refrescarte este verano.
                        </p>

                        <ul className="space-y-3 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>6 botellas Cabernet Franc</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Ideal para llevar al sur</span>
                            </li>
                        </ul>

                        <a
                            href={whatsappLink("Hola, quiero una Caja de 6 Caudal a $60.000 - Oferta Verano.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Pedir 1 Caja
                        </a>
                    </motion.div>

                    {/* OPCIÓN 2: 3+ CAJAS - MEJOR PRECIO - DESTACADO AL CENTRO */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-white via-amber-50 to-orange-50 p-8 rounded-xl border-2 border-[#881337] shadow-2xl relative flex flex-col h-full transform md:-translate-y-4 z-10"
                    >
                        {/* Badge de Mejor Precio */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#881337] to-rose-600 text-white px-5 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-lg whitespace-nowrap flex items-center gap-1.5">
                            <Star className="w-3 h-3 fill-current" /> Mejor Precio
                        </div>

                        <h3 className="text-2xl font-serif text-[#1a1a1a] mb-2">Mayorista</h3>
                        <p className="text-xs text-[#881337] mb-6 uppercase tracking-widest font-bold">3+ Cajas (18+ vinos)</p>

                        <div className="mb-2">
                            <span className="text-5xl font-serif text-[#1a1a1a]">$50.000</span>
                            <span className="text-slate-500 text-base ml-2">/ caja</span>
                        </div>
                        <p className="text-emerald-700 text-xs font-bold uppercase tracking-wide mb-2">
                            Queda en $8.333 c/u
                        </p>
                        <p className="text-rose-600 text-sm font-semibold mb-6">
                            Ahorras $22.000 por caja
                        </p>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed border-t border-[#881337]/20 pt-4">
                            Para restaurantes, eventos de verano o grupos grandes en Región Metropolitana y Región de la Araucanía.
                        </p>

                        <ul className="space-y-3 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-sm text-[#1a1a1a] font-medium">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>El mejor precio por botella</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#1a1a1a]">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Ideal para eventos y locales</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#1a1a1a]">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Delivery viernes en la zona</span>
                            </li>
                        </ul>

                        <a
                            href={whatsappLink("Hola, me interesa comprar 3 o más Cajas de Caudal a $50.000 c/u - Oferta Mayorista Verano.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gradient-to-r from-[#881337] to-rose-600 text-white py-4 px-6 rounded-lg text-sm font-bold tracking-widest uppercase hover:from-[#6d0f2b] hover:to-rose-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Cotizar Mayorista
                        </a>
                    </motion.div>

                    {/* OPCIÓN 3: 2 CAJAS */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-amber-200/60 shadow-lg relative flex flex-col h-full"
                    >
                        <h3 className="text-xl font-serif text-[#1a1a1a] mb-2">Verano Completo</h3>
                        <p className="text-xs text-[#881337] mb-6 uppercase tracking-widest font-bold">2 Cajas (12 vinos)</p>

                        <div className="mb-2">
                            <span className="text-4xl font-serif text-[#1a1a1a]">$110.000</span>
                        </div>
                        <p className="text-emerald-700 text-xs font-bold uppercase tracking-wide mb-2">
                            Queda en $9.166 c/u
                        </p>
                        <p className="text-amber-600 text-xs font-medium mb-1">
                            $55.000 cada caja
                        </p>
                        <p className="text-rose-600 text-sm font-semibold mb-6">
                            Ahorras $34.000
                        </p>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed border-t border-amber-100 pt-4">
                            Para disfrutar todo el verano con familia y amigos.
                        </p>

                        <ul className="space-y-3 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Ahorras más que con 1 caja</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Envío incluido Zona Sur</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-700">
                                <Check className="w-4 h-4 text-[#881337] mt-0.5" />
                                <span>Perfecto para compartir</span>
                            </li>
                        </ul>

                        <a
                            href={whatsappLink("Hola, me interesa la oferta Verano Completo: 2 Cajas a $110.000.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Pedir 2 Cajas
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
