import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WieZijnWij from './pages/WieZijnWij'
import Diensten from './pages/Diensten'
import Referenties from './pages/Referenties'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wie-zijn-wij" element={<WieZijnWij />} />
          <Route path="diensten" element={<Diensten />} />
          <Route path="referenties" element={<Referenties />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
