import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ProductsPage = () => {
  const section1Ref = useScrollReveal()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/productos')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError('No se pudieron cargar los productos')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-lg text-center">
        <p className="font-body-lg text-body-lg text-secondary">Cargando productos...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-lg text-center">
        <p className="font-body-lg text-body-lg text-secondary">{error}</p>
      </main>
    )
  }

  return (
    <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-lg">
      <section
        ref={section1Ref}
        className="reveal-hidden-left mb-24 flex flex-col items-center text-center">
        <div className="bg-white border border-outline-variant p-12 md:p-20 max-w-4xl technical-shadow-heavy">
          <h1 className="font-display-lg text-display-lg mb-6 text-primary">Productos</h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            Nuestros productos están hechos con la mejor madera plástica del mercado. Soluciones duraderas,
            sustentables y de alta precisión para arquitectura moderna.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {products.map((p) => (
          <Link to={`/productos/${p.id}`} key={p.id} className="group cursor-pointer">
            <div className="aspect-square bg-surface-container-low overflow-hidden technical-border transition-all group-hover:industrial-shadow mb-6 flex items-center justify-center">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={p.img}
                alt={p.title}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">{p.code}</span>
              <h3 className="font-headline-md text-headline-md text-primary">{p.title}</h3>
              <p className="line-clamp-3 font-body-md text-body-md text-on-surface-variant">{p.desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default ProductsPage