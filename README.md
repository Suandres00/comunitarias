# Karú Mapú — Madera Plástica Pampeana

Proyecto React (Vite + Tailwind CSS) para el sitio de Karú Mapú.

## Estructura del proyecto

```
karu-mapu/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              # Punto de entrada de React
    ├── App.jsx               # Rutas (react-router-dom)
    ├── index.css             # Estilos globales + Tailwind
    ├── data/
    │   └── products.js       # Datos del catálogo de productos
    ├── components/
    │   ├── Navbar.jsx        # Barra de navegación con menú de Productos
    │   ├── Footer.jsx        # Pie de página
    │   └── ScrollToTop.jsx   # Vuelve al inicio del scroll al cambiar de ruta
    └── pages/
        ├── HomePage.jsx           # "/"
        ├── AboutPage.jsx          # "/nosotros"
        ├── ProductsPage.jsx       # "/productos"
        ├── ServicesPage.jsx       # "/servicios"
        └── CustomProposalPage.jsx # "/productos-a-medida"
```

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Esto levanta un servidor de desarrollo (por defecto en `http://localhost:5173`).

Para generar la build de producción:

```bash
npm run build
npm run preview
```

## Notas

- El sistema de colores, tipografías y espaciados personalizados vive en `tailwind.config.js`, tomado 1:1 del diseño original.
- Los estilos utilitarios propios del diseño (bordes técnicos, sombras, mega-menú, inputs tipo blueprint) están en `src/index.css`.
- El routing usa `BrowserRouter` (en vez de `MemoryRouter`) para que las URLs reales del sitio funcionen (`/nosotros`, `/productos`, etc).
- Los productos del catálogo están centralizados en `src/data/products.js` para poder editarlos sin tocar el componente de la página.
