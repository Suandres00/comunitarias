import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-KARUMAPU.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false)

  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    // Barra flotante tipo pastilla: el header no captura clics fuera del nav
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 pointer-events-none">
      <nav className="pointer-events-auto max-w-[1900px] mx-auto flex justify-between items-center h-[85px] px-8 sm:px-12 rounded-full bg-navcolor/85   backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.35)] border border-outline-variant/40">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Karú Mapú Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            className={`font-label-md text-body-lg uppercase font-bold text-fontcolor transition-colors ${isActive('/') ? 'border-b-2 border-fontcolor' : ''
              }`}
            to="/"
          >
            Inicio
          </Link>
          <Link
            className={`font-label-md text-body-lg uppercase font-bold text-fontcolor transition-colors ${isActive('/nosotros') ? 'border-b-2 border-fontcolor' : ''
              }`}
            to="/nosotros"
          >
            Sobre Nosotros
          </Link>

          {/* Submenú Desktop */}
          <div className="relative group">
            <Link
              className={`font-label-md text-body-lg uppercase font-bold text-fontcolor transition-colors flex items-center gap-1 ${isActive('/productos') || isActive('/productos-a-medida')
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
            className={`font-label-md text-body-lg uppercase font-bold text-fontcolor transition-colors ${isActive('/servicios') ? 'border-b-2 border-fontcolor' : ''
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
            className="inline-flex items-center rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase font-bold tracking-widest py-2.5 px-6 hover:opacity-90 transition-opacity"
          >
            Contacto
          </a>
        </div>

        {/* Botón Hamburguesa Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-fontcolor focus:outline-none p-2 rounded-full"
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Menú Desplegable Mobile (tarjeta flotante adaptada a la pastilla) */}
      {isOpen && (
        <div className="pointer-events-auto md:hidden max-w-[1500px] mx-auto mt-2 rounded-3xl bg-navcolor/90 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.35)] border border-outline-variant/40 px-4 py-4 flex flex-col gap-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`font-label-md text-label-md uppercase font-bold text-fontcolor py-3 px-4 rounded-full ${isActive('/') ? 'font-bold border-b-2 border-primary' : ''
              }`}
          >
            Inicio
          </Link>
          <Link
            to="/nosotros"
            onClick={() => setIsOpen(false)}
            className={`font-label-md text-label-md uppercase font-bold text-fontcolor py-3 px-4 rounded-full ${isActive('/nosotros') ? 'font-bold border-b-2 border-primary' : ''
              }`}
          >
            Sobre Nosotros
          </Link>

          {/* Acordeón Productos Mobile */}
          <div className="flex flex-col">
            <button
              onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
              className="flex justify-between items-center font-label-md text-label-md uppercase font-bold text-fontcolor py-3 px-4 w-full text-left"
            >
              <span>Productos</span>
              <span className="material-symbols-outlined text-[18px]">
                {mobileSubmenuOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            {mobileSubmenuOpen && (
              <div className="flex flex-col pl-4 gap-1 py-1 border-l-2 border-primary/20 my-1 ml-4">
                <Link
                  to="/productos"
                  onClick={() => setIsOpen(false)}
                  className="font-label-md text-sm uppercase font-bold text-fontcolor py-2.5 px-3 rounded-full"
                >
                  Todos los productos
                </Link>
                <Link
                  to="/productos-a-medida"
                  onClick={() => setIsOpen(false)}
                  className="font-label-md text-sm uppercase font-bold text-fontcolor py-2.5 px-3 rounded-full"
                >
                  A medida
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/servicios"
            onClick={() => setIsOpen(false)}
            className={`font-label-md text-label-md uppercase font-bold text-fontcolor py-3 px-4 rounded-full ${isActive('/servicios') ? 'font-bold border-b-2 border-primary' : ''
              }`}
          >
            Servicios
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
