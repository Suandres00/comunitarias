import { Link, useNavigate } from 'react-router-dom'
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { products } from '../data/products';

const HomePage = () => {
  const navigate = useNavigate()

  // 1. Declarás las referencias para cada sección
  const aboutSectionRef = useScrollReveal()
  const customSectionRef = useScrollReveal()
  const bannerSectionRef = useScrollReveal()
  const productLeftRef = useScrollReveal()
  const productRightRef = useScrollReveal()

  return (
    <div className="mt-20 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute inset-0 blueprint-border rotate-45 transform translate-x-10 translate-y-10"></div>
            <div className="absolute inset-0 blueprint-border -rotate-12 transform -translate-x-10"></div>
          </div>
        </div>
        <div className="texto-animado relative z-10 text-center max-w-4xl px-8">
          <h1 className="font-display-lg text-display-lg md:text-[80px] mb-6 tracking-tight">Karú Mapú</h1>
          <p className="texto-animado font-headline-md text-headline-md text-secondary mb-12 max-w-2xl mx-auto">
            Transformamos residuos plásticos en soluciones que vuelven al territorio | Madera Plástica Pampeana.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=542954217616"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-block bg-primary text-on-primary px-12 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-all">
              Contactar
            </button>
          </a>

        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>

      {/* Sobre Nosotros: ENTRA DESDE LA IZQUIERDA */}
      <section
        ref={aboutSectionRef}
        className="reveal-hidden-left py-section-gap-lg max-w-[1280px] mx-auto px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5">
            <h2 className="font-headline-xl text-headline-xl mb-8">Sobre Nosotros</h2>
            <p className="font-body-lg text-body-lg text-secondary mb-10 leading-relaxed">
              <p>En Fundación Karú Mapú creemos que los residuos pueden transformarse en nuevas oportunidades. Por eso desarrollamos productos fabricados íntegramente con plástico reciclado, combinando diseño, funcionalidad y compromiso con el ambiente.</p>
              <p>Trabajamos impulsando la economía circular, promoviendo el reciclaje y generando soluciones duraderas para espacios públicos, empresas, instituciones y hogares.</p>
              <p>Nuestro objetivo es demostrar que es posible construir un futuro más sostenible a través de productos resistentes, de bajo mantenimiento y con un impacto ambiental positivo.</p>
            </p>
            <Link
              to="/nosotros"
              className="inline-block border border-primary px-8 py-3 font-label-md text-label-md hover:bg-surface-container transition-colors"
            >
              Conocenos más
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="bg-surface-container aspect-video overflow-hidden border border-outline-variant relative group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://www.aeuroweb.com/wp-content/uploads/2024/11/La-importancia-de-fotos-en-pagina-web-1030x539.jpg"
                alt="Arquitectura Madera Plástica"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-section-gap-lg bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline-xl text-headline-xl mb-4">Nuestros productos</h2>
              <p className="font-body-md text-body-md text-secondary">
                Contamos con los mejores productos hechos en madera plástica pampeana.
              </p>
            </div>
            <Link
              to="/productos"
              className="hidden md:flex items-center gap-2 font-label-md text-label-md border-b border-primary pb-1 hover:opacity-70 transition-opacity"
            >
              Ver mas productos
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="w-full overflow-hidden py-4">
            <div className="animate-marquee flex gap-8">
              {/* Duplicamos los productos (...products, ...products) para hacer el loop infinito */}
              {[...products, ...products].map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="w-[300px] md:w-[400px] flex-none group cursor-pointer"
                  onClick={() => navigate('/productos')}
                >
                  <div className="bg-white aspect-square overflow-hidden mb-6 flex items-center justify-center p-6 shadow-sm rounded-lg">
                    <img
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      src={product.img || product.image}
                      alt={product.title || product.name}
                    />
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-1">
                    {product.title || product.name}
                  </h3>
                  <p className="font-label-md text-label-md text-secondary uppercase tracking-tighter">
                    Código: {product.code}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Idea Banner: ENTRA DESDE LA IZQUIERDA */}
      <section
        ref={bannerSectionRef}
        className="reveal-hidden-left py-20 px-8"
      >
        <div className="max-w-[1280px] mx-auto bg-background border border-primary p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-2">
              ¿Tenes una idea para realizar con madera plástica?
            </h2>
            <p className="text-secondary font-body-md">
              Estamos listos para transformar tus planos en realidades tangibles.
            </p>
          </div>
          <Link
            to="/"
            className="bg-primary text-on-primary px-10 py-4 font-label-md text-label-md hover:opacity-90 whitespace-nowrap"
          >
            Contanos por acá!
          </Link>
        </div>
      </section>

      {/* Productos a medida: ENTRA DESDE LA DERECHA */}
      <section
        ref={customSectionRef}
        className="reveal-hidden-right bg-primary text-on-primary py-section-gap-lg"
      >
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div className="bg-surface-container-lowest/10 p-1 border border-on-primary/20 aspect-square">
                <img
                  className="w-full h-full object-cover grayscale brightness-125"
                  src="https://www.aeuroweb.com/wp-content/uploads/2024/11/La-importancia-de-fotos-en-pagina-web-1030x539.jpg"
                  alt="Construcción"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:offset-1 order-1 md:order-2 mb-12 md:mb-0">
              <h2 className="font-headline-xl text-headline-xl mb-8">También desarrollamos proyectos a medida</h2>
              <p className="font-body-lg text-body-lg mb-10  leading-relaxed">
                Cada espacio tiene necesidades diferentes. Por eso, además de nuestra línea de productos, diseñamos y fabricamos soluciones personalizadas en plástico reciclado para municipios, empresas, instituciones, desarrollos urbanísticos y proyectos particulares.
                Trabajamos de manera conjunta con cada cliente para crear mobiliario urbano, equipamiento, estructuras y piezas especiales adaptadas a las dimensiones, usos y características de cada proyecto. Si imaginás una solución sustentable para tu espacio, nosotros podemos hacerla realidad.
              </p>
              <Link
                to="/productos-a-medida"
                className="bg-on-primary text-primary px-10 py-4 font-label-md text-label-md uppercase hover:bg-surface-variant transition-all inline-block"
              >
                Quiero hacerlo a medida
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Redes Sociales */}
      <section className="py-20 text-center">
        <p className="font-label-md text-label-md uppercase tracking-[0.2em] mb-10 text-secondary">
          Nuestras Redes Sociales
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.facebook.com/profile.php?id=61575559944763#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary hover:scale-110 transition-transform"
          >
            <FaFacebook className="w-8 h-8 text-on-primary" />
          </a>
          <a
            href="https://www.instagram.com/karumapulp/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary hover:scale-110 transition-transform"
          >
            <FaInstagram className="w-8 h-8 text-on-primary" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=542954217616"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary hover:scale-110 transition-transform"
          >
            <FaWhatsapp className="w-8 h-8 text-on-primary" />
          </a>
        </div>
      </section>

    </div>
  )
}

export default HomePage