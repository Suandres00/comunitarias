import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const AdminProductForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const esEdicion = Boolean(id)

  const [formData, setFormData] = useState({
    title: '',
    code: '',
    desc: '',
    price: '',
    img: '',
  })
  const [loading, setLoading] = useState(esEdicion)
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (esEdicion) {
      fetch(`http://localhost:3001/api/productos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData(data)
          setLoading(false)
        })
    }
  }, [id, esEdicion])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setGuardando(true)
    setError(null)

    const url = esEdicion
      ? `http://localhost:3001/api/productos/${id}`
      : 'http://localhost:3001/api/productos'
    const method = esEdicion ? 'PUT' : 'POST'

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al guardar el producto')
        return res.json()
      })
      .then(() => {
        navigate('/admin')
      })
      .catch((err) => {
        setError(err.message)
        setGuardando(false)
      })
  }

  if (loading) {
    return (
      <main className="max-w-[800px] mx-auto px-8 pt-28 pb-section-gap-lg text-center">
        <p className="font-body-lg text-body-lg text-secondary">Cargando producto...</p>
      </main>
    )
  }

  return (
    <main className="max-w-[800px] mx-auto px-8 pt-28 pb-section-gap-lg">
      <h1 className="font-display-lg text-display-lg text-primary mb-8">
        {esEdicion ? 'Editar producto' : 'Nuevo producto'}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md text-secondary uppercase tracking-widest">
            Título
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border border-outline-variant px-4 py-3 font-body-md text-body-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md text-secondary uppercase tracking-widest">
            Código
          </label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            required
            className="border border-outline-variant px-4 py-3 font-body-md text-body-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md text-secondary uppercase tracking-widest">
            Descripción
          </label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
            rows={3}
            className="border border-outline-variant px-4 py-3 font-body-md text-body-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md text-secondary uppercase tracking-widest">
            Precio
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border border-outline-variant px-4 py-3 font-body-md text-body-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md text-secondary uppercase tracking-widest">
            URL de la imagen
          </label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
            className="border border-outline-variant px-4 py-3 font-body-md text-body-md"
          />
        </div>

        {error && <p className="text-red-600 font-body-md text-body-md">{error}</p>}

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            disabled={guardando}
            className="bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-3 px-8 industrial-shadow technical-border"
          >
            {guardando ? 'Guardando...' : 'Guardar'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="font-label-md text-label-md uppercase tracking-widest underline"
          >
            Cancelar
          </button>
        </div>
      </form>
    </main>
  )
}

export default AdminProductForm