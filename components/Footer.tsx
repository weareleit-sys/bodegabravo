import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#EBE9E4] border-t border-[#881337]/10 pt-16 pb-8 relative overflow-hidden">
            {/* Ruido de fondo */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Columna 1: Marca y Redes Sociales */}
                    <div className="text-center md:text-left space-y-6">
                        <div>
                            <h3 className="text-2xl font-serif text-[#881337] font-bold">BODEGA BRAVO</h3>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 mt-2">
                                Historia, tradición y familia. <br /> Desde 1887.
                            </p>
                        </div>

                        {/* ICONOS DE REDES SOCIALES */}
                        <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                            {/* Instagram */}
                            <a href="https://www.instagram.com/bodegabravo1887?igsh=MWw1Z3B3bmUweHoxMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-[#881337] hover:scale-110 transition-transform bg-white/50 p-2 rounded-full border border-[#881337]/20" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>

                            {/* Facebook */}
                            <a href="https://www.facebook.com/share/1ZzZJ9TF1y/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-[#881337] hover:scale-110 transition-transform bg-white/50 p-2 rounded-full border border-[#881337]/20" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>

                            {/* TikTok */}
                            <a href="https://www.tiktok.com/@bodega.bravo.1887?_r=1&_d=f0ki715m8hl1j2&sec_uid=MS4wLjABAAAAERO5hC9ysNRjHVaVOM5gfKUXfo45lLtfTnOKJH7bPyiGetyU9Mmz5zLAS1XVSAAe&share_author_id=7580360183882761238&sharer_language=es&source=h5_m&u_code=f0ki73bdemihhj&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=6A5D015E-63C1-47A8-A56E-B6EA3665BBBA&user_id=7580360183882761238&sec_user_id=MS4wLjABAAAAERO5hC9ysNRjHVaVOM5gfKUXfo45lLtfTnOKJH7bPyiGetyU9Mmz5zLAS1XVSAAe&social_share_type=4&ug_btm=b0,b0&utm_campaign=client_share&share_app_id=1233" target="_blank" rel="noopener noreferrer" className="text-[#881337] hover:scale-110 transition-transform bg-white/50 p-2 rounded-full border border-[#881337]/20" aria-label="TikTok">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                            </a>

                            {/* X (Twitter) */}
                            <a href="https://x.com/bodegabravo1887?s=21" target="_blank" rel="noopener noreferrer" className="text-[#881337] hover:scale-110 transition-transform bg-white/50 p-2 rounded-full border border-[#881337]/20" aria-label="X (Twitter)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Contacto */}
                    <div className="text-center md:text-left space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-center md:justify-start gap-2 text-slate-700 text-sm">
                                <MapPin className="w-4 h-4 text-[#881337]" />
                                <span className="font-medium">Valle del Maule, Chile</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 text-slate-700 text-sm">
                                <Mail className="w-4 h-4 text-[#881337]" />
                                <a href="mailto:contacto@bodegabravo.cl" className="hover:text-[#881337] transition-colors">
                                    contacto@bodegabravo.cl
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Navegación */}
                    <div className="text-center md:text-right space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Menu</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="#hero" className="hover:text-[#881337]">Inicio</Link></li>
                            <li><Link href="#historia" className="hover:text-[#881337]">Historia</Link></li>
                            <li><Link href="#vina" className="hover:text-[#881337]">La Viña</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Línea Legal */}
                <div className="border-t border-slate-300 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-wider">
                    <p>© 2024 Bodega Bravo. Todos los derechos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="" className="hover:text-[#881337]">Términos y Condiciones</Link>
                        <Link href="" className="hover:text-[#881337]">Política de Privacidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}