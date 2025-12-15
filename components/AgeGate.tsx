"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeGate() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verificar si ya confirmó antes
        const isVerified = localStorage.getItem("age-verified");
        if (!isVerified) {
            setIsVisible(true);
            // Bloquear scroll del body
            document.body.style.overflow = "hidden";
        }
    }, []);

    const handleConfirm = () => {
        localStorage.setItem("age-verified", "true");
        setIsVisible(false);
        // Reactivar scroll
        document.body.style.overflow = "unset";
    };

    const handleDeny = () => {
        window.location.href = "https://google.com";
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-[#EBE9E4] flex flex-col items-center justify-center p-4"
                >
                    {/* Fondo de ruido sutil para mantener consistencia */}
                    <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

                    <div className="relative z-10 max-w-md w-full text-center space-y-8">
                        {/* Logo o Título */}
                        <div>
                            <h1 className="text-4xl font-serif text-[#881337] tracking-tight mb-2">
                                BODEGA BRAVO
                            </h1>
                            <p className="text-slate-500 text-xs tracking-[0.2em] uppercase">
                                VALLE DEL MAULE
                            </p>
                        </div>

                        {/* Pregunta */}
                        <div className="space-y-4">
                            <p className="text-slate-800 font-serif text-xl">
                                ¿Eres mayor de edad legal para beber alcohol?
                            </p>
                            <p className="text-slate-500 text-sm font-light">
                                Debes tener 18 años o más para ingresar a este sitio.
                            </p>
                        </div>

                        {/* Botones */}
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={handleConfirm}
                                className="w-full bg-[#881337] text-white py-4 px-8 rounded text-sm font-bold tracking-widest uppercase hover:bg-[#6d0f2b] transition-colors shadow-lg"
                            >
                                SÍ, TENGO 18+
                            </button>
                            <button
                                onClick={handleDeny}
                                className="w-full text-slate-500 text-xs uppercase tracking-widest hover:text-[#881337] transition-colors py-2"
                            >
                                NO, SOY MENOR
                            </button>
                        </div>

                        <p className="text-[10px] text-slate-400 mt-8">
                            Bebe con moderación. Prohibida su venta a menores.
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}