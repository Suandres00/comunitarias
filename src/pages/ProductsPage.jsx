import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // En Strapi v5 usamos populate=* para traer los medios (imágenes)
    fetch('http://localhost:1337/api/productos?populate=*')
      .then((res) => res.json())
      .then((response) => {
        // En Strapi v5 los datos vienen directo en response.data
        setProducts(response.data || [])
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al cargar productos desde Strapi:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-lg text-center">
        <p className="font-headline-md text-primary">Cargando productos...</p>
      </main>
    )
  }

  return (
    <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-lg">
      <section className="mb-20 text-center md:text-left">
        <div className="bg-surface-container-high py-16 px-8 industrial-shadow technical-border">
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Productos</h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            Nuestros productos están hechos con la mejor madera plástica del mercado. Soluciones duraderas,
            sustentables y de alta precisión para arquitectura moderna.
          </p>
        </div>     
      </section>

      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {products.map((item) => {
          // Obtener la URL de la imagen en Strapi v5
          const getImageUrl = () => {
            // Strapi v5 directo: item.imagen.url
            if (item.imagen?.url) return `http://localhost:1337${item.imagen.url}`
            // Por si la imagen fue un array (Multiple media)
            if (Array.isArray(item.imagen) && item.imagen[0]?.url) return `http://localhost:1337${item.imagen[0].url}`
            // Fallback por si la estructura v4 quedó en caché
            if (item.attributes?.imagen?.data?.attributes?.url) return `http://localhost:1337${item.attributes.imagen.data.attributes.url}`
            
            return 'https://via.placeholder.com/600'
          }

          const imageUrl = getImageUrl()

          return (
            <Link to={`/productos/${item.id}`} key={item.id} className="group cursor-pointer">
              <div className="aspect-square bg-surface-container-low overflow-hidden technical-border transition-all group-hover:industrial-shadow mb-6 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={imageUrl}
                  alt={item.nombre || 'Producto'}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                  {item.codigo}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary">
                  {item.nombre}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.descripcion}
                </p>
              </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}

export default ProductsPage