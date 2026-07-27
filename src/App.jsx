import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import CustomProposalPage from './pages/CustomProposalPage'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/productos-a-medida" element={<CustomProposalPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
