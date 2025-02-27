import "./index.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Program from "./components/program/Program"
import Gallery from "./components/gallery/Gallery"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Program />
        <Gallery />
    </>
  )
}

export default App
