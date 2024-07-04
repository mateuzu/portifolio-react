import "./App.css"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Services } from "./components/Services"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
