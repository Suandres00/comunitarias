import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const cargarProductos = () => {
    fetch('http://localhost:3001/api/productos')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    cargarProductos()
  }, [])

  const [productoABorrar, setProductoABorrar] = useState(null)

  const pedirConfirmacion = (producto) => {
    setProductoABorrar(producto)
  }

  const cancelarBorrado = () => {
    setProductoABorrar(null)
  }

  const confirmarBorrado = () => {
    fetch(`http://localhost:3001/api/productos/${productoABorrar.id}`, {
      method: 'DELETE',
    }).then(() => {
      setProductoABorrar(null)
      cargarProductos()
    })
  }

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin')
    navigate('/admin/login')
  }

  if (loading) {
    return (
      <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-lg text-center">
        <p className="font-body-lg text-body-lg text-secondary">Cargando productos...</p>
      </main>
    )
  }

  return (
    <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-section-gap-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <h1 className="font-display-md sm:font-display-lg text-display-md sm:text-display-lg text-primary">
          Panel de Administración
        </h1>
        <button
          onClick={handleLogout}
          className="font-body-md text-body-md text-secondary underline self-start sm:self-auto"
        >
          Cerrar sesión
        </button>
      </div>

      <Link
        to="/admin/nuevo"
        className="inline-block mb-8 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-3 px-6 industrial-shadow technical-border"
      >
        + Agregar producto
      </Link>

      <div className="flex flex-col gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex flex-col sm:flex-row sm:items-center gap-4 bg-surface-container-low technical-border p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={p.img}
                alt={p.title}
                className="w-20 h-20 object-cover technical-border flex-shrink-0"
              />
              <div className="flex-1 sm:hidden">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">{p.code}</span>
                <h3 className="font-headline-md text-headline-md text-primary">{p.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  ${p.price.toLocaleString('es-AR')}
                  {!p.disponible && (
                    <span className="ml-2 text-red-600 font-label-md text-label-md uppercase">Agotado</span>
                  )}
                </p>
              </div>
            </div>

            <div className="hidden sm:block flex-1">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">{p.code}</span>
              <h3 className="font-headline-md text-headline-md text-primary">{p.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                ${p.price.toLocaleString('es-AR')}
                {!p.disponible && (
                  <span className="ml-2 text-red-600 font-label-md text-label-md uppercase">Agotado</span>
                )}
              </p>
            </div>

            <div className="flex gap-4 sm:gap-4">
              <Link
                to={`/admin/editar/${p.id}`}
                className="font-label-md text-label-md uppercase tracking-widest underline"
              >
                Editar
              </Link>
              <button
                onClick={() => pedirConfirmacion(p)}
                className="font-label-md text-label-md uppercase tracking-widest text-red-600 underline"
              >
                Borrar
              </button>
            </div>
          </div>
        ))}
      </div>
      {productoABorrar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-8 max-w-sm text-center technical-border industrial-shadow">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              ¿Borrar producto?
            </h2>
            <p className="font-body-md text-body-md text-secondary mb-6">
              Estás por borrar <strong>{productoABorrar.title}</strong>. Esta acción no se puede deshacer.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={confirmarBorrado}
                className="bg-red-600 text-white font-label-md text-label-md uppercase tracking-widest py-3 px-6 industrial-shadow technical-border"
              >
                Sí, borrar
              </button>
              <button
                onClick={cancelarBorrado}
                className="font-label-md text-label-md uppercase tracking-widest underline"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default AdminPanel