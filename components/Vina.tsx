import Image from "next/image";
import { Mountain, CloudSun, Wind } from "lucide-react";

export default function Vina() {
    return (
        <section id="vina" className="relative py-24 md:py-32 overflow-hidden">

            {/* 1. FONDO INMERSIVO (Drone Shot) */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/terroir-bg.jpg" // Tu foto de dron
                    alt="Viñedos Bodega Bravo - Valle del Maipo"
                    fill
                    className="object-cover"
                    quality={80}
                />
                {/* Overlay oscuro para legibilidad: Gradiente sutil */}
                <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply z-10" />
            </div>

            {/* 2. CONTENIDO (Flotando sobre la imagen) */}
            <div className="relative z-20 container mx-auto px-4 text-center">

                <span className="text-amber-100/80 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                    El Origen
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">
                    Valle del Maipo
                </h2>

                {/* Grid de Datos Técnicos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

                    {/* Card 1: Suelo */}
                    <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                        <Mountain className="w-8 h-8 text-amber-100 mx-auto mb-4" />
                        <h3 className="text-xl font-serif text-white mb-2">Suelo Aluvial</h3>
                        <p className="text-slate-300 text-sm font-light">
                            Piedra de río y arcilla profunda. Drenaje natural que estresa la vid para concentrar sabor.
                        </p>
                    </div>

                    {/* Card 2: Clima */}
                    <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                        <CloudSun className="w-8 h-8 text-amber-100 mx-auto mb-4" />
                        <h3 className="text-xl font-serif text-white mb-2">Amplitud Térmica</h3>
                        <p className="text-slate-300 text-sm font-light">
                            Días calurosos y noches frías. La clave para la acidez vibrante de nuestro Cabernet Franc.
                        </p>
                    </div>

                    {/* Card 3: Viento */}
                    <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                        <Wind className="w-8 h-8 text-amber-100 mx-auto mb-4" />
                        <h3 className="text-xl font-serif text-white mb-2">Vientos Andinos</h3>
                        <p className="text-slate-300 text-sm font-light">
                            Brisas que bajan de la cordillera, manteniendo la sanidad natural de la uva sin químicos.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
