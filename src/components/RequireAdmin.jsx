import { Navigate } from 'react-router-dom'

const RequireAdmin = ({ children }) => {
  const isAdmin = sessionStorage.getItem('isAdmin') === 'true'

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default RequireAdmin