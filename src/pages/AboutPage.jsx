import { useScrollReveal } from '../hooks/useScrollReveal';



const AboutPage = () => {
  // Declarás una ref por cada sección a animar
  const section1Ref = useScrollReveal();
  const section2Ref = useScrollReveal();
  const section3Ref = useScrollReveal();
  return (
    <main className="mt-20">
      <section 
      ref={section1Ref}
      className="reveal-hidden-left py-20 md:py-32 px-8 max-w-[1280px] mx-auto text-center bg-surface-container-lowest">
        <h1 className="font-display-lg text-display-lg md:text-[80px] mb-8">Un poco de nosotros</h1>
        <p className="max-w-2xl mx-auto font-body-lg text-body-lg text-secondary leading-relaxed">
          Somos un equipo apasionado por la transformación sostenible. En Karú Mapú, combinamos la ingeniería
          industrial con la responsabilidad ambiental para crear soluciones duraderas que protegen nuestro planeta.
        </p>
      </section>
      <section className="py-20 md:py-section-gap-lg px-8 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 mb-12 md:mb-0">
            <h2 className="font-headline-xl text-headline-xl mb-6">Nuestra historia</h2>
            <div className="space-y-4 text-secondary font-body-md leading-relaxed">
              <p>
                Fundada en el corazón de la Pampa, Karú Mapú nació de la necesidad de gestionar los residuos
                plásticos locales.
              </p>
              <p>
                Hoy, procesamos toneladas de polímeros recuperados, convirtiéndolos en materiales constructivos de
                alta resistencia que superan a la madera tradicional.
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] bg-surface-container-high blueprint-border flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://www.aeuroweb.com/wp-content/uploads/2024/11/La-importancia-de-fotos-en-pagina-web-1030x539.jpg"
                alt="Nuestra Historia"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1280px] mx-auto px-8">
          
            <div ref={section2Ref} className="reveal-hidden-left bg-surface-container-low p-10 rounded-lg text-center flex flex-col items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-4xl mb-6 text-primary">eco</span>
              <h3 className="font-headline-lg text-headline-lg mb-4">Misión</h3>
              <p className="text-secondary max-w-sm">Transformar el desperdicio plástico en infraestructura eterna.</p>
            </div>
            <div ref={section3Ref} className="reveal-hidden-right bg-primary text-on-primary p-10 rounded-lg text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-4xl mb-6">visibility</span>
              <h3 className="font-headline-lg text-headline-lg mb-4">Visión</h3>
              <p className="opacity-80 max-w-sm">Ser el referente regional en arquitectura sustentable residuo cero.</p>
            </div>
          
        </div>
      </section>
    </main>
  )
}

export default AboutPage
