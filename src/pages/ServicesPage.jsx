import { useScrollReveal } from "../hooks/useScrollReveal"


const ServicesPage = () => {
  const section1Ref = useScrollReveal();
  return (
    <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-md">
      <section
        ref={section1Ref}
        className="reveal-hidden-left mb-24 flex flex-col items-center text-center">
        <div className="bg-white border border-outline-variant p-12 md:p-20 max-w-4xl technical-shadow-heavy">
          <h1 className="font-display-lg text-display-lg mb-6 text-primary">Nuestros Servicios</h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            Asesoramiento integral y ejecución de proyectos a medida con materiales de impacto ambiental positivo.
          </p>
        </div>
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
