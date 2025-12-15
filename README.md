# 🍷 Bodega Bravo - Venta Fase 3 (Lanzamiento 2025)

> **Contexto para IA:** Este documento sirve como "Biblia del Proyecto" para entender el estado actual, la estética y la lógica de negocio de la aplicación.

## 📌 Visión del Proyecto: "Lujo Silencioso"
Bodega Bravo es un sitio de venta directa para una viña patrimonial (1887) del **Valle del Maule**. No es un e-commerce tradicional; es una experiencia de "Digital Heritage".

### Principios de Diseño
1.  **Lujo Silencioso**: Evitamos colores saturados de venta (como el verde "oferta"). Usamos una paleta restringida: `Cream (#EBE9E4)`, `Caudal Red (#881337)` y `Charcoal (#1a1a1a)`.
2.  **Estética "Postal Enmarcada"**: Las fotos de paisaje o producto no se recortan torpemente; se presentan con bordes claros y sombras realistas, evocando una fotografía física sobre una mesa.
3.  **Texturas Orgánicas**:
    *   **Ruido**: Todo el sitio tiene una capa de ruido (`bg-noise`) para simular papel de alta calidad.
    *   **Raíces Abstractas**: Fondos SVG vectoriales con trazos de pluma (`SVG Paths`) que guían el ojo, reemplazando formas geométricas aburridas.

## 🛠 Tech Stack (Actualizado)
-   **Core**: Next.js 16.0.10 (App Router + Turbopack).
-   **Estilos**: Tailwind CSS v4 (Configurado en `globals.css` con variables CSS nativas).
-   **Animación**: Framer Motion (para entradas suaves y hover effects).
-   **Iconos**: Lucide React.
-   **Fuentes**: Serif (Playfair Display) para títulos, Sans (Lato) para lectura.

## 📂 Componentes Clave & Lógica

### 1. `Hero.tsx` (La Vitrina)
-   **Diseño**: "Postal Enmarcada". La foto `hero-bottle.png` (paisaje) tiene un marco blanco semitransparente y sombra `drop-shadow-2xl`.
-   **Pricing Logic**: Muestra Precio Lista tachado ($15.000) y Precio Oferta destacado ($9.000).
-   **Disclaimer Legal**: *Texto crítico:* "*Precio Lanzamiento: $9.000 unitario. Valores preferenciales en Cajas.*"
-   **Background**: Curvas maestras SVG en color vino (`mix-blend-multiply`).

### 2. `Pricing.tsx` (La Estrategia de Venta)
Diseñado para guiar al usuario a la Caja de 6 (Ticket Medio Alto).
-   **Sin Verde**: Los ahorros se muestran en gris o rojo, nunca verde (baja el valor percibido).
-   **Jerarquía de Botones**:
    -   **1 Botella**: Botón Outline (Borde Negro) - *Baja prioridad*.
    -   **Caja de 6 (Hero Product)**: Botón Sólido Rojo (`#881337`) - *Máxima prioridad*. Muestra precio total ($50.000) y ahorro explícito.
    -   **Mayorista**: Botón Outline - *Nicho*.
-   **Logística**: Promesa de "Coordinación Directa" en lugar de "Envío 24h" (para manejar expectativas).

### 3. `NotasCata.tsx` & `Maridaje.tsx`
-   Uso de **Iconos Sketch**: SVGs personalizados dibujados a mano (Ojo, Nariz, Boca, Fuego, Tenedor) en lugar de iconos genéricos.
-   Animaciones `whileHover` sutiles.

## 📍 Estructura del Proyecto
```bash
/app
  layout.tsx       # Fuentes y Metadata Global
  globals.css      # Definición de @theme y .bg-noise
  page.tsx         # Landing Page (Single Page Application structure)
/components
  Hero.tsx         # Venta Fase 3
  Pricing.tsx      # Tabla de Precios "Lujo Silencioso"
  NotasCata.tsx    # Perfil Sensorial (SVG Sketch)
  Maridaje.tsx     # Gastronomía (SVG Sketch)
  Vina.tsx         # Terroir (Maule)
  Historia.tsx     # Legado 1887
  Footer.tsx       # Redes Sociales Reales
/public
  /images
    hero-bottle.png # Activo crítico (Foto Paisaje/Mesa)
```

## 🚀 Comandos
```bash
# Desarrollo (con Turbopack)
npm run dev

# Limpieza de Caché (si hay fantasmas visuales)
# Windows:
Remove-Item -Recurse -Force .next
# Mac/Linux:
rm -rf .next
```

## 📝 Estado Actual (To-Do para IA)
-   [x] **Fase 3 Completada**: El Hero y Pricing están optimizados para conversión sin perder elegancia.
-   [ ] **Formularios**: Los botones actuales son enlaces a `wa.me` (WhatsApp API). No hay backend de formularios.
-   [ ] **Analytics**: Pendiente integración de GTM/GA4.

---
*Documento generado automáticamente para traspaso de contexto - Diciembre 2025*
