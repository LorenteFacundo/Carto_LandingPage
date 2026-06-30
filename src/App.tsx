import Nav from './components/Nav'
import Hero from './components/Hero'
import HowWeWork from './components/HowWeWork'
import Examples from './components/Examples'
import WhyCarto from './components/WhyCarto'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowWeWork />
        <Examples />
        <WhyCarto />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
