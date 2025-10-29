import { Route, Routes } from 'react-router-dom'
import Footer from './componensts/Footer'
import Navbar from './componensts/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Projects from './pages/Projects'


function App() {


  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
