const ServicesPage = () => (
  <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-md">
    <section className="mb-24 flex flex-col items-center text-center">
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
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwkUEuUvzf6n8M3sHhKiXtqU9toE_3ew32ZHqJlrrpoFn-yhlCu240bo6lJ3-mzkrkOIws6dIw-yA-pHzpmhpW4gOOHdF4NxxkEibx0HmyIdNUati4vMxH4eRZiz4ozyA4Pla7KLvMwFiFrcnAGak0QivuRZ5Uid31VGwfreZKgcGSGItWazLMfHP8rXmg8xaQWX0M90a4ouoU1Yyigz8YuX9HWDQ4OWKiMnL84w5yiXOGuw_l6cqsT9AktYYZGcKj6vkmkYjjRw"
              alt="Instalación"
            />
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <span className="font-label-md text-label-md text-outline uppercase mb-2 block tracking-widest">
            01 / Construcción
          </span>
          <h2 className="font-headline-xl text-headline-xl mb-4 text-primary">Instalación Profesional</h2>
          <p className="font-body-md text-body-md text-secondary mb-8 leading-relaxed">
            Equipo especializado para colocación de decks y pérgolas bajo normas de ingeniería precisas.
          </p>
        </div>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center group">
        <div className="md:col-span-5">
          <span className="font-label-md text-label-md text-outline uppercase mb-2 block tracking-widest">
            02 / Diseño
          </span>
          <h2 className="font-headline-xl text-headline-xl mb-4 text-primary">Proyectos a Medida</h2>
          <p className="font-body-md text-body-md text-secondary mb-8 leading-relaxed">
            Desarrollamos soluciones personalizadas partiendo de tus ideas o planos arquitectónicos.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7 relative">
          <div className="absolute inset-0 bg-surface-container -translate-x-6 -translate-y-6 -z-10 border border-outline-variant"></div>
          <div className="aspect-[16/10] bg-surface-variant overflow-hidden border border-primary">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6OQaif1h0CuVQWtgSAnibm38lFP1db1A12k7mir9VpTc_kDTdSDpe4CLCQmfKMC-vRVNOCwTal6qnpeF14gG99OYc7l8IPx85GHr7jAmgBW9fbbJKiI041IfwXgOOt-OOESJO1JUtYzfHxWnFas4XqBOdxfcIW91W1o_n6fszMtJ4cv5lnkv4KYRA3Ik6zW4nFxdyorVT0QGgFiGw8Ol4Vgw9cviP1gY-opULX3jDdfu2SvreQKOa1WHqoqona754-qWSrhlDMQ"
              alt="Diseño"
            />
          </div>
        </div>
      </article>
    </div>
  </main>
)

export default ServicesPage
