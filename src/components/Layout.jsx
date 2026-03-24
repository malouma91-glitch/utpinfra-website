import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Footer from './Footer'
import ChatBot from './ChatBot'
import WhatsAppButton from './WhatsAppButton'
import BackToTop from './BackToTop'
import CookieBanner from './CookieBanner'
import PageLoader from './PageLoader'

function Layout() {
  return (
    <>
      <PageLoader />
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ChatBot />
        <WhatsAppButton />
        <BackToTop />
        <CookieBanner />
      </div>
    </>
  )
}

export default Layout
