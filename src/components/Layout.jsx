import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Footer from './Footer'
import ChatBot from './ChatBot'
import WhatsAppButton from './WhatsAppButton'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ChatBot />
      <WhatsAppButton />
    </div>
  )
}

export default Layout
