import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-KARUMAPU.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false)

  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 w-full z-50 !bg-navcolor border-outline-variant">
      <nav className="flex justify-between items-center h-20 px-8 max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Karú Mapú Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            className={`font-label-md text-body-lg text-fontcolor transition-colors ${isActive('/') ? 'border-b-2 border-fontcolor' : ''
              }`}
            to="/"
          >
            Inicio
          </Link>
          <Link
            className={`font-label-md text-body-lg text-fontcolor transition-colors ${isActive('/nosotros') ? 'border-b-2 border-fontcolor' : ''
              }`}
            to="/nosotros"
          >
            Sobre Nosotros
          </Link>

          {/* Submenú Desktop */}
          <div className="relative group">
            <Link
              className={`font-label-md text-body-lg text-fontcolor transition-colors flex items-center gap-1 ${isActive('/productos') || isActive('/productos-a-medida')
                ? 'border-b-2 border-fontcolor'
                : ''
                }`}
              to="/productos"
            >
              Productos
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </Link>
            <div className="mega-menu absolute left-0 mt-4 w-64 bg-background border border-outline shadow-xl p-4">
              <div className="flex flex-col gap-4">
                <Link
                  to="/productos"
                  className="flex items-center gap-3 p-2 hover:bg-surface-container transition-colors group/item"
                >
                  <span className="material-symbols-outlined">inventory_2</span>
                  <div>
                    <p className="font-label-md text-label-md text-primary">Todos los productos</p>
                    <p className="text-[12px] text-secondary">Catálogo completo</p>
                  </div>
                </Link>
                <Link
                  to="/productos-a-medida"
                  className="flex items-center gap-3 p-2 hover:bg-surface-container transition-colors group/item"
                >
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
            className={`font-label-md text-body-lg text-fontcolor transition-colors ${isActive('/servicios') ? 'border-b-2 border-fontcolor' : ''
              }`}
            to="/servicios"
          >
            Servicios
          </Link>
        </div>

        {/* Botón Contacto Desktop */}
        <div className="hidden md:block">
          <a
            href="https://api.whatsapp.com/send?phone=542954217616"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary text-white px-4 py-2 transition-transform duration-300 hover:scale-105 active:scale-95">
              Contacto
            </button>
          </a>
        </div>

        {/* Botón Hamburguesa Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary focus:outline-none p-2"
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Menú Desplegable Mobile */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-outline-variant px-8 pt-4 pb-6 flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`font-label-md text-label-md text-primary py-2 ${isActive('/') ? 'font-bold border-b-2 border-primary' : ''
              }`}
          >
            Inicio
          </Link>
          <Link
            to="/nosotros"
            onClick={() => setIsOpen(false)}
            className={`font-label-md text-label-md text-primary py-2 ${isActive('/nosotros') ? 'font-bold border-b-2 border-primary' : ''
              }`}
          >
            Sobre Nosotros
          </Link>

          {/* Acordeón Productos Mobile */}
          <div className="flex flex-col">
            <button
              onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
              className="flex justify-between items-center font-label-md text-label-md text-primary py-2 w-full text-left"
            >
              <span>Productos</span>
              <span className="material-symbols-outlined text-[18px]">
                {mobileSubmenuOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            {mobileSubmenuOpen && (
              <div className="flex flex-col pl-4 gap-2 py-2 border-l-2 border-primary/20 my-1">
                <Link
                  to="/productos"
                  onClick={() => setIsOpen(false)}
                  className="font-label-md text-sm text-primary py-1"
                >
                  Todos los productos
                </Link>
                <Link
                  to="/productos-a-medida"
                  onClick={() => setIsOpen(false)}
                  className="font-label-md text-sm text-primary py-1"
                >
                  A medida
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/servicios"
            onClick={() => setIsOpen(false)}
            className={`font-label-md text-label-md text-primary py-2 ${isActive('/servicios') ? 'font-bold border-b-2 border-primary' : ''
              }`}
          >
            Servicios
          </Link>

          <a
            href="https://api.whatsapp.com/send?phone=542954217616"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-on-primary text-center py-3 font-label-md text-label-md mt-2 block"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar