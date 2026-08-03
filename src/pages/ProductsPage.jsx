import { Link } from 'react-router-dom'
import { products } from '../data/products'

const ProductsPage = () => {
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
        {products.map((p) => (
          <Link to={`/productos/${p.id}`} key={p.id} className="group cursor-pointer">
            <div className="aspect-square bg-surface-container-low overflow-hidden technical-border transition-all group-hover:industrial-shadow mb-6 flex items-center justify-center">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://www.aeuroweb.com/wp-content/uploads/2024/11/La-importancia-de-fotos-en-pagina-web-1030x539.jpg"
                alt={p.title}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">{p.code}</span>
              <h3 className="font-headline-md text-headline-md text-primary">{p.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{p.desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default ProductsPage