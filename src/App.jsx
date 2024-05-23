import { Route, Routes } from "react-router-dom"
import Header from "./components/pages/Header/Header"
import Home from "./components/Routes/Home/Home"



const App = () => {
  return(
    <>

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>ABOUT</h1>} />
          <Route path="/services" element={<h1>SERVICES</h1>} />
          <Route path="/shop" element={<h1>SHOP</h1>} />
          <Route path="/blog" element={<h1>BLOG</h1>} />
          <Route path="/contacts" element={<h1>CONTACTS</h1>} />
        </Routes>
      </main>
      {/* Rutas a las paginas disponibles */}
    </>
  )
}

export default App
