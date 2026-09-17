import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setCargando(true)
    setError('')

    fetch('http://localhost:3001/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem('isAdmin', 'true')
          navigate('/admin')
        } else {
          setError('Contraseña incorrecta')
          setCargando(false)
        }
      })
      .catch(() => {
        setError('No se pudo conectar con el servidor')
        setCargando(false)
      })
  }

  return (
    <main className="max-w-[480px] mx-auto px-8 pt-28 pb-section-gap-lg">
      <div className="bg-surface-container-high py-12 px-8 industrial-shadow technical-border">
        <h1 className="font-display-md text-display-md text-primary mb-6 text-center">
          Panel de Administración
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-outline-variant px-4 py-3 font-body-md text-body-md"
            autoFocus
          />
          {error && <p className="text-red-600 font-body-md text-body-md">{error}</p>}
          <button
            type="submit"
            disabled={cargando}
            className="bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-3 px-8 industrial-shadow technical-border"
          >
            {cargando ? 'Verificando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default AdminLogin