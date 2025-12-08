import Image from "next/image";

export default function Historia() {
    return (
        <section id="historia" className="py-24 bg-[#EBE9E4] text-slate-900">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* 1. IMAGEN (Lado Izquierdo en Desktop) */}
                    <div className="w-full md:w-1/2 relative">
                        {/* Marco decorativo */}
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-[#9F1239]/20 z-0 hidden md:block rounded-lg"></div>

                        <div className="relative h-[400px] md:h-[500px] w-full z-10 shadow-xl rounded-lg overflow-hidden">
                            <Image
                                src="/images/optimized/family-detail.webp"
                                alt="Detalle de manos trabajando en la viña - Familia Bravo"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* 2. TEXTO (Lado Derecho) */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-[#9F1239] font-bold tracking-widest text-xs uppercase">
                            Desde 1980
                        </span>

                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                            Un legado que fluye como el río.
                        </h2>

                        <div className="space-y-4 text-slate-700 text-lg font-light leading-relaxed">
                            <p>
                                Todo comenzó con una hectárea y una convicción: el Valle del Maipo tenía secretos que solo el tiempo revelaría.
                            </p>
                            <p>
                                <strong>Bodega Bravo</strong> no es una corporación. Es la mesa de domingo de nuestra familia extendida hacia la tuya. Cada botella de <span className="italic font-serif text-[#9F1239]">Caudal</span> lleva el pulso de tres generaciones que decidieron apostar por la calidad sobre la cantidad.
                            </p>
                            <p>
                                No hacemos vino para concursos. Hacemos el vino que queremos beber con nuestros amigos.
                            </p>
                        </div>

                        {/* Firma o Cierre visual */}
                        <div className="pt-4 mt-8 border-t border-slate-300">
                            <p className="font-serif text-xl italic text-slate-600">
                                "El vino se hace en la viña, no en la bodega."
                            </p>
                            <p className="text-sm text-slate-500 mt-2">— Alberto Bravo, Fundador.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
