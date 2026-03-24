import { useEffect } from 'react'
import Loader     from './components/Loader'
import Cursor     from './components/Cursor'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Marquee    from './components/Marquee'
import About      from './components/About'
import Experience from './components/Experience'
import Brands     from './components/Brands'
import Gallery    from './components/Gallery'
import Skills     from './components/Skills'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.08 }
    )
    // observe after mount
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    }, 100)
    return () => { clearTimeout(timer); obs.disconnect() }
  }, [])

  return (
    <>
      <Loader />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Brands />
        <Gallery />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
