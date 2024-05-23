import { Route, Routes } from "react-router-dom"
import Header from "./components/pages/Header/Header"

const App = () => {
  return(
    <>

      <Header />

      <main>
        {/* Rutas a las paginas disponibles */}
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/about" element={<h1>ABOUT</h1>} />
          <Route path="/services" element={<h1>SERVICES</h1>} />
          <Route path="/shop" element={<h1>SHOP</h1>} />
          <Route path="/blog" element={<h1>BLOG</h1>} />
          <Route path="/contacts" element={<h1>CONTACTS</h1>} />
        </Routes>
      </main>

     
    </>
  )
}

export default App
