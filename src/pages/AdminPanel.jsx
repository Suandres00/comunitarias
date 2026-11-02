import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { adminFetch, API_URL } from '../api'

const AdminPanel = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [aviso, setAviso] = useState('')
  const [guardadoDe, setGuardadoDe] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const cargarProductos = () => {
    adminFetch(`${API_URL}/api/productos`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        if (err.message === 'Sesión expirada') return
        setError('No se pudieron cargar los productos')
        setLoading(false)
      })
  }

  useEffect(() => {
    cargarProductos()
  }, [])

  // Aviso al volver de crear/editar un producto
  useEffect(() => {
    if (location.state?.guardado) {
      setGuardadoDe(location.state.guardado)
      const t = setTimeout(() => setGuardadoDe(''), 4000)
      window.history.replaceState({}, '')
      return () => clearTimeout(t)
    }
  }, [location.state])

  const mostrarAviso = (texto) => {
    setAviso(texto)
    setTimeout(() => setAviso(''), 3000)
  }

  const [productoABorrar, setProductoABorrar] = useState(null)

  const confirmarBorrado = () => {
    adminFetch(`${API_URL}/api/productos/${productoABorrar.id}`, {
      method: 'DELETE',
    })
      .catch((err) => {
        if (err.message === 'Sesión expirada') return
        setError('No se pudo borrar el producto')
      })
      .then(() => {
        setProductoABorrar(null)
        mostrarAviso('Producto borrado ✓')
        cargarProductos()
      })
  }

  // Cambia disponibilidad rápido (agotado ↔ disponible) sin salir de la lista
  const toggleDisponible = (producto) => {
    adminFetch(`${API_URL}/api/productos/${producto.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ disponible: !producto.disponible }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al actualizar')
        return res.json()
      })
      .then((actualizado) => {
        setProducts((prev) =>
          prev.map((p) => (p.id === actualizado.id ? actualizado : p))
        )
      })
      .catch((err) => {
        if (err.message === 'Sesión expirada') return
        setError('No se pudo actualizar el producto')
        setTimeout(() => setError(null), 4000)
      })
  }

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  // filtro de búsqueda local sobre la lista ya cargada
  const productosFiltrados = products.filter((p) => {
    const t = busqueda.trim().toLowerCase()
    if (!t) return true
    return (
      p.title.toLowerCase().includes(t) ||
      p.code.toLowerCase().includes(t)
    )
  })

  const disponibles = products.filter((p) => p.disponible).length
  const agotados = products.length - disponibles

  if (loading) {
    return (
      <main className="max-w-[1600px] mx-auto px-8 pt-[146px] pb-section-gap-lg text-center">
        <p className="font-body-lg text-body-lg text-secondary">Cargando productos...</p>
      </main>
    )
  }

  if (error && products.length === 0) {
    return (
      <main className="max-w-[1600px] mx-auto px-8 pt-[146px] pb-section-gap-lg text-center">
        <span className="material-symbols-outlined text-5xl text-secondary mb-4">cloud_off</span>
        <p className="font-body-lg text-body-lg text-secondary mb-6">{error}</p>
        <button
          onClick={() => {
            setError(null)
            setLoading(true)
            cargarProductos()
          }}
          className="bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-3 px-8 rounded-full industrial-shadow technical-border"
        >
          Reintentar
        </button>
      </main>
    )
  }

  return (
    <main className="max-w-[1600px] mx-auto px-4 sm:px-8 pt-[146px] pb-section-gap-lg">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display-md sm:font-display-lg text-display-md sm:text-display-lg text-primary">
            Panel de Administración
          </h1>
          <p className="font-body-md text-body-md text-secondary mt-1">
            Gestioná el catálogo, la disponibilidad y los precios
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full border border-outline-variant px-5 py-2.5 font-label-md text-label-md uppercase tracking-widest text-secondary hover:bg-primary/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">logout</span>
          Cerrar sesión
        </button>
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-3 gap-4 mb-10 max-w-3xl">
        <div className="bg-surface-container-low rounded-2xl technical-border p-5">
          <span className="material-symbols-outlined text-3xl text-primary mb-2">inventory_2</span>
          <p className="font-display-md text-display-md text-primary leading-none">{products.length}</p>
          <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-2">Total</p>
        </div>
        <div className="bg-surface-container-low rounded-2xl technical-border p-5">
          <span className="material-symbols-outlined text-3xl text-green-700 mb-2">check_circle</span>
          <p className="font-display-md text-display-md text-primary leading-none">{disponibles}</p>
          <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-2">Disponibles</p>
        </div>
        <div className="bg-surface-container-low rounded-2xl technical-border p-5">
          <span className="material-symbols-outlined text-3xl text-red-600 mb-2">block</span>
          <p className="font-display-md text-display-md text-primary leading-none">{agotados}</p>
          <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-2">Agotados</p>
        </div>
      </div>

      {/* Buscador + alta */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-xl">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar por nombre o código..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full border border-outline-variant rounded-full pl-12 pr-4 py-3 font-body-md text-body-md bg-white focus:outline-none focus:border-primary"
          />
        </div>
        <Link
          to="/admin/nuevo"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-3 px-6 industrial-shadow technical-border hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          Agregar producto
        </Link>
      </div>

      {/* Lista de productos */}
      {productosFiltrados.length > 0 ? (
        <div className="flex flex-col gap-3">
          {productosFiltrados.map((p) => (
            <div
              key={p.id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 bg-surface-container-low rounded-2xl technical-border p-4 hover:industrial-shadow transition-shadow"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-20 h-20 rounded-xl object-cover technical-border flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">{p.code}</span>
                  <span
                    className={`font-label-sm text-label-sm uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                      p.disponible
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {p.disponible ? 'Disponible' : 'Agotado'}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary truncate">{p.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  ${p.price.toLocaleString('es-AR')}
                </p>
              </div>

              {/* Disponibilidad: switch rápido */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={p.disponible}
                  onChange={() => toggleDisponible(p)}
                  className="w-5 h-5 cursor-pointer"
                  aria-label={`Marcar ${p.title} como ${p.disponible ? 'agotado' : 'disponible'}`}
                />
                <Link
                  to={`/admin/editar/${p.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full font-label-md text-label-md uppercase tracking-widest text-primary hover:bg-primary/10 px-3 py-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  Editar
                </Link>
                <button
                  onClick={() => setProductoABorrar(p)}
                  className="inline-flex items-center gap-1.5 rounded-full font-label-md text-label-md uppercase tracking-widest text-red-600 hover:bg-red-50 px-3 py-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                  Borrar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-surface-container-low rounded-2xl technical-border text-center py-16 px-8">
          <span className="material-symbols-outlined text-5xl text-secondary mb-4 block">search_off</span>
          <p className="font-body-lg text-body-lg text-secondary mb-6">
            {products.length === 0
              ? 'Todavía no hay productos cargados.'
              : 'No hay productos que coincidan con la búsqueda.'}
          </p>
          {products.length > 0 && (
            <button
              onClick={() => setBusqueda('')}
              className="font-label-md text-label-md uppercase tracking-widest underline text-secondary"
            >
              Limpiar búsqueda
            </button>
          )}
        </div>
      )}

      {/* Modal de confirmación de borrado */}
      {productoABorrar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-xl">
            <span className="material-symbols-outlined text-5xl text-red-600 mb-4 block">warning</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              ¿Borrar producto?
            </h2>
            <p className="font-body-md text-body-md text-secondary mb-6">
              Estás por borrar <strong className="text-primary">{productoABorrar.title}</strong>. Esta acción no se
              puede deshacer.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={confirmarBorrado}
                className="rounded-full bg-red-600 text-white font-label-md text-label-md uppercase tracking-widest py-3 px-6 hover:bg-red-700 transition-colors"
              >
                Sí, borrar
              </button>
              <button
                onClick={() => setProductoABorrar(null)}
                className="rounded-full font-label-md text-label-md uppercase tracking-widest underline py-3 px-6 text-secondary"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notificaciones flotantes */}
      {(aviso || guardadoDe || (error && products.length > 0)) && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-md">
          {aviso && (
            <div className="bg-green-600 text-white rounded-full px-6 py-3 shadow-lg font-body-md text-body-md text-center flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              {aviso}
            </div>
          )}
          {guardadoDe && (
            <div className="bg-green-600 text-white rounded-full px-6 py-3 shadow-lg font-body-md text-body-md text-center flex items-center justify-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              {guardadoDe}
            </div>
          )}
          {error && products.length > 0 && (
            <div className="bg-red-600 text-white rounded-full px-6 py-3 shadow-lg font-body-md text-body-md text-center flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">error</span>
              {error}
            </div>
          )}
        </div>
      )}
    </main>
  )
}

export default AdminPanel
