import Image from "next/image";
import { Mountain, CloudSun, Wind } from "lucide-react";

export default function Vina() {
    return (
        <section id="vina" className="relative py-24 md:py-32 overflow-hidden">

            {/* 1. FONDO INMERSIVO (Drone Shot) */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/terroir-bg.jpg" // Tu foto de dron
                    alt="Viñedos Bodega Bravo - Valle del Maule"
                    fill
                    className="object-cover"
                    quality={80}
                />
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply z-10" />
            </div>

            {/* 2. CONTENIDO */}
            <div className="relative z-20 container mx-auto px-4 text-center">

                <span className="text-amber-100/80 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                    El Origen
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">
                    Valle del Maule
                </h2>

                {/* Grid de Datos Técnicos MAULE */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

                    {/* Card 1: Suelo Maule */}
                    <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                        <Mountain className="w-8 h-8 text-amber-100 mx-auto mb-4" />
                        <h3 className="text-xl font-serif text-white mb-2">Arcilla y Granito</h3>
                        <p className="text-slate-300 text-sm font-light">
                            Suelos antiguos que retienen la humedad necesaria para cultivar sin riego excesivo. Profundidad y carácter.
                        </p>
                    </div>

                    {/* Card 2: Clima Maule */}
                    <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                        <CloudSun className="w-8 h-8 text-amber-100 mx-auto mb-4" />
                        <h3 className="text-xl font-serif text-white mb-2">Tradición de Secano</h3>
                        <p className="text-slate-300 text-sm font-light">
                            Veranos cálidos e influencia costera que permiten una maduración lenta, entregando fruta roja vibrante.
                        </p>
                    </div>

                    {/* Card 3: Viento/Patrimonio */}
                    <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                        <Wind className="w-8 h-8 text-amber-100 mx-auto mb-4" />
                        <h3 className="text-xl font-serif text-white mb-2">Patrimonio Vivo</h3>
                        <p className="text-slate-300 text-sm font-light">
                            Respetamos los ciclos naturales de la viña. Mínima intervención para que el Maule hable en la copa.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}