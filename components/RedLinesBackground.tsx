"use client";

export default function RedLinesBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-60">
            <svg
                className="absolute w-full h-full"
                viewBox="0 0 1440 900"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Línea 1: Raíz principal - Cruza de izquierda abajo a derecha arriba */}
                <path
                    d="M-100,900 C200,800 400,200 600,400 S1000,100 1600,0"
                    fill="none"
                    stroke="#881337"
                    strokeWidth="1.5"
                    className="opacity-40"
                />

                {/* Línea 2: Sarmiento secundario - Caos central */}
                <path
                    d="M1400,900 C1000,600 800,800 600,500 S200,200 -100,300"
                    fill="none"
                    stroke="#881337"
                    strokeWidth="1"
                    strokeDasharray="10,20" // Efecto trazo roto
                    className="opacity-30"
                />

                {/* Línea 3: Detalle fino superior */}
                <path
                    d="M0,100 C300,50 500,200 900,100 S1300,300 1500,200"
                    fill="none"
                    stroke="#881337"
                    strokeWidth="0.5"
                    className="opacity-30"
                />

                {/* Mancha orgánica (simulando gota de vino o mancha de papel) */}
                <circle cx="80%" cy="20%" r="300" fill="#881337" className="opacity-[0.03] blur-3xl" />
            </svg>
        </div>
    );
}
