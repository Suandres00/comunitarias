import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="w-full py-20 bg-[#2E5B88] border-t border-outline-variant">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-8 max-w-[1280px] mx-auto">
      <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
        <span className="font-headline-md text-headline-md font-bold text-primary">Karú Mapú</span>
        <p className="font-label-md text-label-md text-primary uppercase font-bold">Madera Plástica Pampeana</p>
        <p className="font-body-md text-body-md text-primary max-w-xs">
          Transformamos ideas en proyectos con impacto ambiental real. Soluciones duraderas para el mundo de hoy.
        </p>
      </div>
      <div className="col-span-6 md:col-span-2 flex flex-col gap-4">
        <p className="font-label-md text-label-md text-primary font-bold">Links</p>
        <nav className="flex flex-col gap-2">
          <Link className="font-body-md text-body-md text-primary hover:underline" to="/">
            Inicio
          </Link>
          <Link className="font-body-md text-body-md text-primary hover:underline" to="/nosotros">
            Sobre Nosotros
          </Link>
          <Link className="font-body-md text-body-md text-primary hover:underline" to="/productos">
            Productos
          </Link>
          <Link className="font-body-md text-body-md text-primary hover:underline" to="/servicios">
            Servicios
          </Link>
        </nav>
      </div>

      <div className="col-span-12 border-t border-outline-variant pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-md text-body-md text-primary">
          © 2026 Karú Mapú. Madera Plástica Pampeana. Transformamos ideas en proyectos con impacto ambiental real.
        </p>
        <div className="flex gap-6">
          <span className="font-label-md text-label-md text-primary">Argentina</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
