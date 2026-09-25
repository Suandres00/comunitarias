import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TIEMPO_AVISO = 13 * 60 * 1000 // avisa a los 13 minutos
const TIEMPO_CIERRE = 15 * 60 * 1000 // cierra sesión a los 15 minutos

export function useIdleLogout() {
  const navigate = useNavigate()
  const avisoRef = useRef(null)
  const cierreRef = useRef(null)
  const [mostrarAviso, setMostrarAviso] = useState(false)

  useEffect(() => {
    const cerrarSesion = () => {
      sessionStorage.removeItem('isAdmin')
      navigate('/admin/login')
    }

    const mostrarAdvertencia = () => {
      setMostrarAviso(true)
    }

    const reiniciarTimers = () => {
      setMostrarAviso(false)
      clearTimeout(avisoRef.current)
      clearTimeout(cierreRef.current)
      avisoRef.current = setTimeout(mostrarAdvertencia, TIEMPO_AVISO)
      cierreRef.current = setTimeout(cerrarSesion, TIEMPO_CIERRE)
    }

    const eventos = ['mousemove', 'keydown', 'click', 'scroll']

    eventos.forEach((evento) => {
      window.addEventListener(evento, reiniciarTimers)
    })

    reiniciarTimers()

    return () => {
      clearTimeout(avisoRef.current)
      clearTimeout(cierreRef.current)
      eventos.forEach((evento) => {
        window.removeEventListener(evento, reiniciarTimers)
      })
    }
  }, [navigate])

  const seguirConectado = () => {
    setMostrarAviso(false)
    clearTimeout(avisoRef.current)
    clearTimeout(cierreRef.current)
    avisoRef.current = setTimeout(() => setMostrarAviso(true), TIEMPO_AVISO)
    cierreRef.current = setTimeout(() => {
      sessionStorage.removeItem('isAdmin')
      navigate('/admin/login')
    }, TIEMPO_CIERRE)
  }

  return { mostrarAviso, seguirConectado }
}