'use client';

import { motion } from 'framer-motion';
import { MapPin, Mountain, Waves, Droplets } from 'lucide-react';
import Image from 'next/image';

export default function Vina() {
    const features = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Valle del Maule",
            desc: "Ubicado al poniente de Linares, en el histórico Fundo Los Nogales."
        },
        {
            icon: <Waves className="w-6 h-6" />, // Icono de Olas/Ríos
            title: "Entre Dos Ríos",
            desc: "Situado en la junta de los ríos Ancoa y Achibueno, aportando carácter único."
        },
        {
            icon: <Mountain className="w-6 h-6" />,
            title: "Suelo Arenoso",
            desc: "Terrenos apaisados de excelente drenaje, ideales para parras de alta calidad."
        },
        {
            icon: <Droplets className="w-6 h-6" />,
            title: "Historia Viva",
            desc: "Cavas y bodegas construidas en 1887, preservando la tradición."
        }
    ];

    return (
        <section id="vina" className="relative py-24 bg-slate-900 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/optimized/terroir-bg.webp"
                    alt="Viñedos Bodega Bravo Maule"
                    fill
                    className="object-cover opacity-30"
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#EBE9E4] tracking-[0.2em] uppercase text-sm font-bold">
                            El Origen del Nombre
                        </span>
                        <h2 className="mt-2 text-4xl md:text-5xl font-serif leading-tight">
                            La Fuerza del <br />
                            <span className="text-red-400">Caudal</span>
                        </h2>

                        <div className="mt-6 space-y-4 text-slate-300 font-sans leading-relaxed">
                            <p>
                                El nombre <strong>CAUDAL</strong> rinde homenaje a la fuerza y calidad de las aguas que irrumpen
                                y riegan nuestros suelos en el encuentro de los ríos <strong>Ancoa y Achibueno</strong>.
                            </p>
                            <p>
                                Es una celebración a las extraordinarias cosechas que estos terrenos privilegiados nos brindan,
                                custodiados por el magnífico telón de fondo de los Andes.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-red-500/50 transition-colors"
                            >
                                <div className="text-red-400 mb-3">{feature.icon}</div>
                                <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-300">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
