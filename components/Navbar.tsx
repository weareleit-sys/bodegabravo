import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#EBE9E4]/80 backdrop-blur-md border-b border-stone-200/50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="text-2xl font-serif font-bold text-slate-900 tracking-tighter">
                    BODEGA BRAVO
                </Link>

                {/* LINKS DE ESCRITORIO (Ocultos en móvil muy pequeño) */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 tracking-wide">
                    <Link href="#historia" className="hover:text-[#9F1239] transition-colors">HISTORIA</Link>
                    <Link href="#vina" className="hover:text-[#9F1239] transition-colors">VIÑA</Link>
                    <Link href="#maridaje" className="hover:text-[#9F1239] transition-colors">MARIDAJE</Link>
                </div>

                {/* BOTÓN TIENDA (CTA Secundario) */}
                <Link
                    href="#hero" // Te lleva al precio
                    className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                    <ShoppingBag className="w-4 h-4" />
                    <span className="hidden sm:inline">COMPRAR CAUDAL</span>
                    <span className="sm:hidden">COMPRAR</span>
                </Link>

            </div>
        </nav>
    );
}
