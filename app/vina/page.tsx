import Navbar from "@/components/Navbar";
import Vina from "@/components/Vina";

export default function VinaPage() {
    return (
        <main className="min-h-screen bg-[#EBE9E4]">
            <Navbar />
            <div className="pt-20">
                <Vina />
            </div>
            <footer className="py-12 text-center text-slate-500 text-sm">
                <p>&copy; 2024 Bodega Bravo. Mendoza, Argentina.</p>
            </footer>
        </main>
    );
}
