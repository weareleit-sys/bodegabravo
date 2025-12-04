import Navbar from "@/components/Navbar";
import Historia from "@/components/Historia"; // Reutilizamos tu componente, ¡eficiencia!

export default function HistoriaPage() {
    return (
        <main className="min-h-screen bg-[#EBE9E4]">
            <Navbar />
            <div className="pt-20"> {/* Padding para que el Navbar no tape el contenido */}
                <Historia />
            </div>

            {/* Footer simple para cerrar la página */}
            <footer className="py-12 text-center text-slate-500 text-sm">
                <p>&copy; 2024 Bodega Bravo. Tradición Familiar.</p>
            </footer>
        </main>
    );
}
