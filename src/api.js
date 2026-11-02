// Helper para las llamadas del panel de administración.
// Manda el token de sesión y, si el servidor lo rechaza (sesión
// inválida o expirada), cierra la sesión y redirige al login.

// URL base de la API. En producción se define con VITE_API_URL
// en el build (ej: https://api.tudominio.com). Por defecto apunta a local.
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const getAdminToken = () => sessionStorage.getItem('adminToken')

export const cerrarSesion = () => {
  sessionStorage.removeItem('adminToken')
  window.location.replace('/admin/login')
}

export const adminFetch = (url, options = {}) => {
  const token = getAdminToken()
  const headers = {
    ...(options.headers || {}),
    Authorization: token ? `Bearer ${token}` : '',
  }
  if (options.body && typeof options.body === 'string') {
    headers['Content-Type'] = 'application/json'
  }

  return fetch(url, { ...options, headers }).then((res) => {
    if (res.status === 401) {
      cerrarSesion()
      throw new Error('Sesión expirada')
    }
    return res
  })
}
