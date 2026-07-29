import { useState } from 'react'

const CustomProposalPage = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="pt-20">
      {/* Horizontal Feature Section */}
      <section className="bg-primary py-0 relative overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Columna Izquierda con padding top para compensar el Nav */}
          <div className="w-full md:w-1/2 relative bg-surface-container-highest flex items-center justify-center p-12 pt-28">
            <div className="relative w-full aspect-video grayscale group">
              <img
                className="w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkbO0CmfTLexAOA4RQ0Q1cl-WNRqYqnIV_GkDU_2EqYz3x4m1Smr4zjd0MC0DhXSlCYstKMXp5BDrfHAkw4nqCeez72sM6G88aP616BCiuYLVRgIxP1rzzb3nArhzFDZ0EeBBv7TLJkJv8b-IkE85XNZ1oOjGOTGNz5yQSl_zxoJmB5q0aoC42J8H3jHksWW7KvlqLL4VQg0KiIifDCgu35LK1ISeqYsuLlxnHNqQUeDHH1ZB4DG0U0rMZXNbx-o1xIj8MOWfTLw"
                alt="Detalle madera plástica"
              />
            </div>
          </div>

          {/* Columna Derecha con padding top para compensar el Nav */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-12 pt-28 md:p-24 md:pt-32 text-on-primary">
            <h2 className="font-headline-xl text-headline-xl mb-8">
              Hacemos realidad tu proyecto con los mejores materiales
            </h2>
            <p className="font-body-lg text-body-lg text-secondary-fixed-dim leading-relaxed">
              Nuestra madera plástica no es solo un material eco-sustentable; es una solución de ingeniería diseñada para durar décadas sin mantenimiento, soportando climas extremos y cargas estructurales críticas.
            </p>
          </div>
        </div>
      </section>

      <section className="section-gap-md px-8 max-w-[1280px] mx-auto py-20 border-t border-outline-variant">
        <h2 className="font-headline-xl text-headline-xl mb-12">Presenta tu propuesta</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-12">
          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md uppercase tracking-wider">Nombre</label>
            <input
              className="form-input-blueprint py-2 font-body-md border-0 focus:ring-0"
              placeholder="Nombre"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md uppercase tracking-wider">Correo</label>
            <input
              className="form-input-blueprint py-2 font-body-md border-0 focus:ring-0"
              placeholder="email@ejemplo.com"
              type="email"
              required
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="font-label-md text-label-md uppercase tracking-wider">Tu Idea</label>
            <textarea
              className="border border-outline p-4 font-body-md focus:outline-none focus:border-primary bg-transparent"
              placeholder="Describe tu proyecto..."
              rows="6"
              required
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              className={`${submitted ? 'bg-green-700' : 'bg-primary'
                } text-on-primary px-12 py-4 font-label-md uppercase transition-all flex items-center gap-4`}
              type="submit"
            >
              {submitted ? '¡Enviado!' : 'Enviar propuesta'}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>
      </section>

      {/* Casos de Éxito / Productos */}
      <section className="section-gap-lg px-8 max-w-[1280px] mx-auto py-16">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="font-headline-lg text-headline-lg mb-2">Casos de Éxito</h3>
            <p className="font-body-md text-body-md text-secondary">
              Explora algunos de nuestros desarrollos especiales recientes.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter gap-8">
          {/* Producto 1 */}
          <div className="group">
            <div className="aspect-square bg-surface-container relative mb-6 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMty0NTRwxx-DIadwUPY6HLsd9Ht8iRAVrvK3bcnDJVym_2yUWMNNrkm23wM59Zp7iGYsDx7ROabmMUb-azhWW1-aKeP4auNoAQfR2QDB_QUkGKAKqz49ae4VLh_egeke4AvI-WzDfU-jGAmc1Z9a0aW93heNCvqz3ctDm0YF3HSZbz3gHYSigkhvAal_B8L6IvHXYZOVyDtUVztS09VREn_9CStB3lFk7t4ubLNYaW2K2X-gxvNtvKUgGWMgWanfqdBoBmZtuBA"
                alt="Producto 1"
              />
            </div>
            <h4 className="font-headline-md text-headline-md mb-1">Producto 1</h4>
            <p className="font-label-md text-label-md text-secondary uppercase opacity-70">
              Desarrollo Estructural 01
            </p>
            <p className="font-body-md text-body-md text-secondary mt-2">
              Breve descripcion detallando el alcance técnico del proyecto y materiales utilizados.
            </p>
          </div>

          {/* Producto 2 */}
          <div className="group">
            <div className="aspect-square bg-surface-container relative mb-6 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcm4GaunTWtLE1a_LtvXlYS8u9TJR9GyHiCDFZpJllKahb4j509NIOe4SPWxAwQL7VjwIaIu4fz2ngacvbANitQqlpw2SiCyJR_GWUkaYD8kiYGGQh3-X4ekhZPx_YbF8Aso5Ctyb0Ah0sCa2qIcgWbGU1ERuku34Bhk9AHl3lQT99K6G8yZ2DeKYjKemNdppWiAmvLRbaWv45XPghscNCyFEAtu_b1QPW7GRAsjCGpcCM3qRhGNbN9Ir9gYE0i-7lisUi157KCg"
                alt="Producto 2"
              />
            </div>
            <h4 className="font-headline-md text-headline-md mb-1">Producto 2</h4>
            <p className="font-label-md text-label-md text-secondary uppercase opacity-70">
              Perfiles Especiales 02
            </p>
            <p className="font-body-md text-body-md text-secondary mt-2">
              Breve descripcion sobre la versatilidad de nuestros perfiles en aplicaciones no convencionales.
            </p>
          </div>

          {/* Producto 3 */}
          <div className="group">
            <div className="aspect-square bg-surface-container relative mb-6 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-V0Ih-9eeT0KaXicGPgQ6iOyBmTY4YJ-f_A4PHnMGmMT5pAt33x6BuLOb6jEsRkfHboiugPKSnDybxv9m0ZQYi8rev-HUwMBxB0IhvA8pBRzIc_Yf90p4794J6hkuNcMS-tG3HMIiSLEpjz2t4dd7Xc7X59IzfauChR9p3awXIfwYEXvEyuBDp2Nte_iKWH13qQ1NCOhZwqnuRvbRY1LDnAjCb9XTawEFpmqDmmG-GZLNYk6D78R_OfcfFEGgVYYIqedNz3WpcA"
                alt="Producto 3"
              />
            </div>
            <h4 className="font-headline-md text-headline-md mb-1">Producto 3</h4>
            <p className="font-label-md text-label-md text-secondary uppercase opacity-70">
              Infraestructura Urbana 03
            </p>
            <p className="font-body-md text-body-md text-secondary mt-2">
              Breve descripcion sobre cómo transformamos ideas urbanas en realidades tangibles y duraderas.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-gap-md px-8 py-20 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-headline-xl text-headline-xl mb-10">
            Sino tambien escribenos directamente a nuestro WhatsApp
          </h2>
          <a
            className="inline-flex items-center gap-4 border border-primary px-12 py-5 font-label-md text-label-md text-primary hover:bg-primary hover:text-on-primary transition-all group"
            href="https://api.whatsapp.com/send?phone=542954217616"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">chat</span>
            Contactar por WhatsApp
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_outward
            </span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default CustomProposalPage
