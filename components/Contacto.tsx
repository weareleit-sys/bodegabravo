"use client";

import { motion } from "framer-motion";

export default function Contacto() {
    return (
        <section id="contacto" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Elemento decorativo de fondo */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-caudal-red/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif mb-4"
                    >
                        Conversemos
                    </motion.h2>
                    <p className="text-slate-400 font-sans">
                        ¿Interesado en distribuir Caudal o visitar la bodega?
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full bg-slate-800 border border-slate-700 p-4 text-white focus:outline-none focus:border-caudal-red transition-colors placeholder-slate-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-slate-800 border border-slate-700 p-4 text-white focus:outline-none focus:border-caudal-red transition-colors placeholder-slate-500"
                        />
                    </div>
                    <textarea
                        rows={4}
                        placeholder="Mensaje"
                        className="w-full bg-slate-800 border border-slate-700 p-4 text-white focus:outline-none focus:border-caudal-red transition-colors placeholder-slate-500"
                    />
                    <div className="text-center">
                        <button
                            type="button"
                            className="px-12 py-4 bg-caudal-cream text-slate-900 font-bold tracking-widest hover:bg-white transition-colors uppercase text-sm"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </motion.form>

                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-sans">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <p>Mendoza, Argentina</p>
                        <p>+54 9 261 123 4567</p>
                    </div>
                    <div className="flex gap-6 uppercase tracking-wider text-xs font-bold">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-slate-700 font-sans">
                    &copy; {new Date().getFullYear()} Bodega Bravo. Beber con moderación.
                </div>
            </div>
        </section>
    );
}
