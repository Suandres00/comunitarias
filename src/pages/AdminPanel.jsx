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

  const handleDelete = (id) => {
    const confirmar = window.confirm('¿Seguro que querés borrar este producto? Esta acción no se puede deshacer.')
    if (!confirmar) return

    fetch(`http://localhost:3001/api/productos/${id}`, {
      method: 'DELETE',
    }).then(() => {
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
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-display-lg text-display-lg text-primary">Panel de Administración</h1>
        <button
          onClick={handleLogout}
          className="font-body-md text-body-md text-secondary underline"
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
            className="flex items-center gap-4 bg-surface-container-low technical-border p-4"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-20 h-20 object-cover technical-border"
            />
            <div className="flex-1">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">{p.code}</span>
              <h3 className="font-headline-md text-headline-md text-primary">{p.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">${p.price.toLocaleString('es-AR')}</p>
            </div>
            <Link
              to={`/admin/editar/${p.id}`}
              className="font-label-md text-label-md uppercase tracking-widest underline"
            >
              Editar
            </Link>
            <button
              onClick={() => handleDelete(p.id)}
              className="font-label-md text-label-md uppercase tracking-widest text-red-600 underline"
            >
              Borrar
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default AdminPanel