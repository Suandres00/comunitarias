import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'

const ProductDetailPage = () => {
    const { id } = useParams()
    const product = products.find((p) => p.id === Number(id))

    if (!product) {
        return (
            <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-lg text-center">
                <h1 className="font-display-lg text-display-lg text-primary mb-4">Producto no encontrado</h1>
                <Link to="/productos" className="font-body-md text-body-md text-secondary underline">
                    Volver a Productos
                </Link>
            </main>
        )
    }

    const whatsappMessage = encodeURIComponent(
        `Hola! Quería consultar por el producto ${product.title} (${product.code})`
    )

    return (
        <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-lg">
            <Link to="/productos" className="font-body-md text-body-md text-secondary underline mb-8 inline-block">
                ← Volver a Productos
            </Link>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-6">
                <div className="aspect-square bg-surface-container-low overflow-hidden technical-border industrial-shadow flex items-center justify-center">
                    <img
                        className="w-full h-full object-cover"
                        src={product.img}
                        alt={product.title}
                    />
                </div>

                <div className="flex flex-col gap-4 h-full py-4">
                    <div className="flex flex-col gap-4">
                        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                            {product.code}
                        </span>
                        <h1 className="font-display-lg text-display-lg text-primary">{product.title}</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">{product.desc}</p>
                        <div className="flex flex-col gap-1">
                            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                                Precio
                            </span>
                            <p className="font-display-lg text-display-lg text-primary">
                                ${product.price.toLocaleString('es-AR')}
                            </p>
                        </div>
                    </div>

                    <a
                        href={`https://wa.me/5492954217616?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-4 px-8 industrial-shadow technical-border w-fit"
                    >
                        Consultar por WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}

export default ProductDetailPage