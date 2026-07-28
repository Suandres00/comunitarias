import { Link, useNavigate } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="mt-20">
      <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute inset-0 blueprint-border rotate-45 transform translate-x-10 translate-y-10"></div>
            <div className="absolute inset-0 blueprint-border -rotate-12 transform -translate-x-10"></div>
          </div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-8">
          <h1 className="font-display-lg text-display-lg md:text-[80px] mb-6 tracking-tight">Karú Mapú</h1>
          <p className="font-headline-md text-headline-md text-secondary mb-12 max-w-2xl mx-auto">
            Transformamos residuos plásticos en soluciones que vuelven al territorio.
          </p>
          <button className="inline-block bg-primary text-on-primary px-12 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-all">
            Contactar
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>

      <section className="py-section-gap-lg max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5">
            <h2 className="font-headline-xl text-headline-xl mb-8">Sobre Nosotros</h2>
            <p className="font-body-lg text-body-lg text-secondary mb-10 leading-relaxed">
              Somos una empresa pampeana dedicada a la transformación de plásticos de un solo uso en madera
              sintética de alta durabilidad. Nuestro compromiso es con el impacto ambiental real, ofreciendo una
              alternativa robusta, eterna y de bajo mantenimiento para la arquitectura moderna.
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX5hDqAYl7biUZIldfP4Vd2raGqt52HNIbZdWyIgCNEYBaFhC6_BePJFUAvIxGwNZ6GwvSgDOjpwZDXY3r5oKDHn8OpZULGmjbdHJHbQpw70_Oe-xUNwkUThTTo6uD1NUprI1MIaDXJzVK3IKGUxzz-T5pPV-XwKmCqsNsNEa3NKk6QCVJf0-9AcP5um0do6lNEdSofPHqLIZ8mPcW4C-pq4OryqQOL6liofcLhvkqFoi73lyzKt9TNGfUTayDprZFoNxrh38kKA"
                alt="Arquitectura Madera Plástica"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap-lg bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline-xl text-headline-xl mb-4">Algunos de nuestros productos</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group cursor-pointer" onClick={() => navigate('/productos')}>
              <div className="bg-primary aspect-square overflow-hidden mb-6 flex items-center justify-center p-12">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqwO7G1aamvOd0aBCzTIAEj5EH_ow3W7hPFXxqJxlsIxrlPZQy5cp5QFEbEBEHECo-aEF-MBU2Er-uVw26-mLb9a-Mb_-4ZxP85hYUfjPHDSbrLqCNrZHGyMNg3uet7siTeoNdVBSZ0sZ_C-88znX8_OFbdxwEjsffeuezHCAcZEyBFQKqPs9DZ9E3oxUe_mt4UmvS2ymjgUDJkc_9iJTY_pNss-vb6gpR9qakhdH1vjqHPRpVP-vXTdUuPdYhZkYKxvAeCOM3PA"
                  alt="Juego Jardín"
                />
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Juego Jardin Exterior</h3>
              <p className="font-label-md text-label-md text-secondary uppercase tracking-tighter">Código: JGE-01</p>
            </div>
            <div className="group cursor-pointer" onClick={() => navigate('/productos')}>
              <div className="bg-primary aspect-square overflow-hidden mb-6 flex items-center justify-center p-12">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAycqf4bJY75_7yRdObMiVWrWivrubkkLCLlFPO6VwEr_3tW_4iVoxgzPMYia2yaTIbmknAQLt-XCJ8XDTeKtH4FBSRUobcmDX91zGXgzhzCfHqvNcm2yDOBPHkKanwA401a-AFsuc-XZHr9m9dzk9iVG2L34-0zFw5NsOBF_dZcm8D1i5htQOWwG60dQ7_6UG2EIhpGy2-6SRAF5XA_Lf3lzzfAHEsPUTfMmL6AQWRoRU2gACWMkyeBpVdo0Xurq2IH-rRRP7c2g"
                  alt="Mesa Ratona"
                />
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Mesa Ratona de madera plástica y hierro</h3>
              <p className="font-label-md text-label-md text-secondary uppercase tracking-tighter">Código: MRH-45</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-on-primary py-section-gap-lg">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div className="bg-surface-container-lowest/10 p-1 border border-on-primary/20 aspect-square">
                <img
                  className="w-full h-full object-cover grayscale brightness-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEaYJ0tE5HH-9gxPeIXgpzbsnKYAX7tRRRFdck3tZts291POJvdTY8a6fLp_KmUTOGgq2wLEmDIFjMRl3bI3HaCVwLStrKtyxwb8br4cBZ54NcSvTWO3f8rZnHZm2OBf358vaIryBoKASnGvTwORjAO0GUkLrWXne23XRB3XMS0y7eQt_Pc6RIX0w_qtHf6FFMStHLPbLYGNhQeISyRqukTxd_iHHRkngmV02pE-leahd7jr0i5dYSACtRJRRVFhQWwfeoLHUavw"
                  alt="Construcción"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:offset-1 order-1 md:order-2 mb-12 md:mb-0">
              <h2 className="font-headline-xl text-headline-xl mb-8">Realizamos productos a medida</h2>
              <p className="font-body-lg text-body-lg mb-10 opacity-80 leading-relaxed">
                Contanos tu proyecto y lo hacemos realidad. Desde fachadas comerciales hasta mobiliario urbano
                específico, adaptamos las propiedades de nuestra madera plástica a tus necesidades técnicas y
                estéticas.
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
      {/* Idea Banner */}
      <section className="py-20 px-8">
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

      {/* Social Media Section */}
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
