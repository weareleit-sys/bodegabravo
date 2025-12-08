import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#EBE9E4] border-t border-[#881337]/10 pt-16 pb-8 relative overflow-hidden">
            {/* Ruido de fondo */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Columna 1: Marca */}
                    <div className="text-center md:text-left space-y-4">
                        <h3 className="text-2xl font-serif text-[#881337] font-bold">BODEGA BRAVO</h3>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Vinos de autor con mínima intervención. Respetando el tiempo, el suelo y la historia del Valle del Maipo.
                        </p>
                    </div>

                    {/* Columna 2: Contacto Directo (Lo que da confianza) */}
                    <div className="text-center md:text-left space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-center md:justify-start gap-2 text-slate-700 text-sm">
                                <MapPin className="w-4 h-4 text-[#881337]" />
                                <span>Valle del Maipo, Chile</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 text-slate-700 text-sm">
                                <Mail className="w-4 h-4 text-[#881337]" />
                                <a href="mailto:contacto@bodegabravo.cl" className="hover:text-[#881337] transition-colors">
                                    contacto@bodegabravo.cl
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 text-slate-700 text-sm">
                                <Instagram className="w-4 h-4 text-[#881337]" />
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#881337] transition-colors">
                                    @bodegabravo
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Navegación & Legal */}
                    <div className="text-center md:text-right space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Menu</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="#hero" className="hover:text-[#881337]">Inicio</Link></li>
                            <li><Link href="#historia" className="hover:text-[#881337]">Historia</Link></li>
                            <li><Link href="#vina" className="hover:text-[#881337]">La Viña</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Línea Legal Inferior */}
                <div className="border-t border-slate-300 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-wider">
                    <p>© 2024 Bodega Bravo. Todos los derechos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-[#881337]">Términos y Condiciones</Link>
                        <Link href="#" className="hover:text-[#881337]">Política de Privacidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
