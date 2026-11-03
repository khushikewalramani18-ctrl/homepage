import AppNavbar from './components/AppNavbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <AppNavbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  )
}
