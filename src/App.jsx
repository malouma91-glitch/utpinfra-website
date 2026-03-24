import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WieZijnWij from './pages/WieZijnWij'
import Diensten from './pages/Diensten'
import Referenties from './pages/Referenties'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wie-zijn-wij" element={<WieZijnWij />} />
          <Route path="diensten" element={<Diensten />} />
          <Route path="referenties" element={<Referenties />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
