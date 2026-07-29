import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-KARUMAPU.svg'

const Navbar = () => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 w-full z-50 !bg-[#235E34]/90 backdrop-blur-md border-b border-outline-variant">
      <nav className="flex justify-between items-center h-20 px-8 max-w-[1280px] mx-auto">
        <Link to="/" className='flex items-center'>
          <img
            src={logo}
            alt="Karú Mapú Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            className={`font-label-md text-label-md text-primary transition-colors ${isActive('/') ? 'border-b-2 border-primary' : ''
              }`}
            to="/"
          >
            Inicio
          </Link>
          <Link
            className={`font-label-md text-label-md text-primary transition-colors ${isActive('/nosotros') ? 'border-b-2 border-primary' : ''
              }`}
            to="/nosotros"
          >
            Sobre Nosotros
          </Link>

          <div className="relative group">
            <Link
              className={`font-label-md text-label-md transition-colors flex items-center gap-1 ${isActive('/productos') || isActive('/productos-a-medida')
                ? 'border-b-2 border-primary' : ''
                }`}
              to="/productos"
            >
              Productos
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </Link>
            <div className="mega-menu absolute left-0 mt-4 w-64 bg-background border border-outline shadow-xl p-4">
              <div className="flex flex-col gap-4">
                <Link to="/productos" className="flex items-center gap-3 p-2 hover:bg-surface-container transition-colors group/item">
                  <span className="material-symbols-outlined">inventory_2</span>
                  <div>
                    <p className="font-label-md text-label-md text-primary">Todos los productos</p>
                    <p className="text-[12px] text-secondary">Catálogo completo</p>
                  </div>
                </Link>
                <Link to="/productos-a-medida" className="flex items-center gap-3 p-2 hover:bg-surface-container transition-colors group/item">
                  <span className="material-symbols-outlined">architecture</span>
                  <div>
                    <p className="font-label-md text-label-md text-primary">A medida</p>
                    <p className="text-[12px] text-secondary">Proyectos especiales</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            className={`font-label-md text-label-md text-primary transition-colors ${isActive('/servicios') ? 'border-b-2 border-primary' : ''
              }`}
            to="/servicios"
          >
            Servicios
          </Link>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 font-label-md text-label-md hover:opacity-80 transition-opacity">
          Contacto
        </button>
      </nav>
    </header>
  )
}

export default Navbar
