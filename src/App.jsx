import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import CustomProposalPage from './pages/CustomProposalPage'
import WhatsAppButton from './components/WhatsAppButton'

const App = () => {
  return (
    <div className="[zoom:0.93]"> {/* Reduce todo al 93% */}
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
      {/* Botón flotante disponible en toda la web */}
      <WhatsAppButton />
    </BrowserRouter>
    </div>
  )
}

export default App
