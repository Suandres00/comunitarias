import { Navigate } from 'react-router-dom'
import { useIdleLogout } from '../hooks/useIdleLogout'

const RequireAdmin = ({ children }) => {
  const isAdmin = sessionStorage.getItem('isAdmin') === 'true'
  const { mostrarAviso, seguirConectado } = useIdleLogout()

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  return (
    <>
      {children}
      {mostrarAviso && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-sm text-center technical-border industrial-shadow">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              ¿Seguís ahí?
            </h2>
            <p className="font-body-md text-body-md text-secondary mb-6">
              Tu sesión está por cerrarse por inactividad.
            </p>
            <button
              onClick={seguirConectado}
              className="bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-3 px-8 industrial-shadow technical-border"
            >
              Seguir conectado
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default RequireAdmin