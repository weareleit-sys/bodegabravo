"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Bloquear scroll cuando el menú está abierto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-[#EBE9E4]/80 backdrop-blur-md border-b border-stone-200/50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="/" className="text-2xl font-serif font-bold text-slate-900 tracking-tighter z-50">
                        BODEGA BRAVO
                    </Link>

                    {/* LINKS DE ESCRITORIO */}
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 tracking-wide">
                        <Link href="#historia" className="hover:text-[#881337] transition-colors">HISTORIA</Link>
                        <Link href="#vina" className="hover:text-[#881337] transition-colors">VIÑA</Link>
                        <Link href="#maridaje" className="hover:text-[#881337] transition-colors">MARIDAJE</Link>
                        <Link href="#oferta" className="hover:text-[#881337] transition-colors">OFERTAS</Link>
                    </div>

                    {/* BOTÓN TIENDA (Desktop) */}
                    <Link
                        href="#oferta"
                        className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md text-xs font-bold hover:bg-slate-800 transition-colors"
                    >
                        <ShoppingBag className="w-4 h-4" />
                        <span>COMPRAR CAUDAL</span>
                    </Link>

                    {/* HAMBURGER BUTTON (Mobile) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden z-50 p-2 text-slate-900 hover:text-[#881337] transition-colors"
                        aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>
            </nav>

            {/* MOBILE MENU - Moved outside nav to avoid containing block issue */}
            <div
                className={`fixed inset-0 bg-[#EBE9E4] z-40 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center pt-24 h-full space-y-6 px-8 overflow-y-auto">
                    <Link
                        href="#historia"
                        onClick={handleLinkClick}
                        className="text-3xl font-serif text-slate-900 hover:text-[#881337] transition-colors"
                    >
                        HISTORIA
                    </Link>
                    <Link
                        href="#vina"
                        onClick={handleLinkClick}
                        className="text-3xl font-serif text-slate-900 hover:text-[#881337] transition-colors"
                    >
                        VIÑA
                    </Link>
                    <Link
                        href="#maridaje"
                        onClick={handleLinkClick}
                        className="text-3xl font-serif text-slate-900 hover:text-[#881337] transition-colors"
                    >
                        MARIDAJE
                    </Link>
                    <Link
                        href="#oferta"
                        onClick={handleLinkClick}
                        className="text-3xl font-serif text-slate-900 hover:text-[#881337] transition-colors"
                    >
                        OFERTAS
                    </Link>

                    {/* CTA Mobile */}
                    <Link
                        href="#oferta"
                        onClick={handleLinkClick}
                        className="mt-8 flex items-center gap-3 bg-[#881337] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#6d0f2b] transition-colors shadow-xl"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        COMPRAR CAUDAL
                    </Link>
                </div>
            </div>
        </>
    );
}
