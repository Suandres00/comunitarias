import { useScrollReveal } from "../hooks/useScrollReveal"


const ServicesPage = () => {
  const section1Ref = useScrollReveal();
  return (
    <main className="max-w-[1600px] mx-auto px-8 pt-[146px] pb-section-gap-md">
      <section
        ref={section1Ref}
        className="reveal-hidden-left mb-40 py-20 md:py-32 px-8 w-full text-center bg-surface-container-lowest">
        <h1 className="font-display-lg text-display-lg md:text-[80px] mb-8 text-primary">Nuestros Servicios</h1>
        <p className="max-w-2xl mx-auto font-body-lg text-body-lg text-secondary leading-relaxed">
          Asesoramiento integral y ejecución de proyectos a medida con materiales de impacto ambiental positivo.
        </p>
      </section>
      <div className="space-y-section-gap-lg">
        <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center group">
          <div className="md:col-span-6 relative">
            <div className="absolute inset-0 bg-surface-container translate-x-6 -translate-y-6 -z-10 border border-outline-variant"></div>
            <div className="aspect-[16/10] bg-surface-variant overflow-hidden border border-primary">
              <img
                className="w-full h-full object-cover"
                src="https://www.aeuroweb.com/wp-content/uploads/2024/11/La-importancia-de-fotos-en-pagina-web-1030x539.jpg"
                alt="Instalación"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <span className="font-label-md text-label-md text-outline uppercase mb-2 block tracking-widest">
              01 / Servicio
            </span>
            <h2 className="font-headline-xl text-headline-xl mb-4 text-primary">Nombre del Servicio 01</h2>
            <p className="font-body-md text-body-md text-secondary mb-8 leading-relaxed">
              Descripcion del servicio......
            </p>
          </div>
        </article>
        <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center group">
          <div className="md:col-span-5">
            <span className="font-label-md text-label-md text-outline uppercase mb-2 block tracking-widest">
              02 / Servicio
            </span>
            <h2 className="font-headline-xl text-headline-xl mb-4 text-primary">Nombre del Servicio 01</h2>
            <p className="font-body-md text-body-md text-secondary mb-8 leading-relaxed">
              Descripcion del servicio......
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 relative">
            <div className="absolute inset-0 bg-surface-container -translate-x-6 -translate-y-6 -z-10 border border-outline-variant"></div>
            <div className="aspect-[16/10] bg-surface-variant overflow-hidden border border-primary">
              <img
                className="w-full h-full object-cover"
                src="https://www.aeuroweb.com/wp-content/uploads/2024/11/La-importancia-de-fotos-en-pagina-web-1030x539.jpg"
                alt="Diseño"
              />
            </div>
          </div>
        </article>
      </div>
    </main>
  )

}
export default ServicesPage
