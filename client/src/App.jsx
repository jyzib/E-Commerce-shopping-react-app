import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import './App.css'
import Home from './component/home/home'
import Navbar from './component/navbar'
import Product from './component/product/product'
import Products from './component/products/products'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>} >
       <Route index element={<Home/>} />
       <Route path='products/:id' element={<Products/>} />
       <Route path='product/:id' element={<Product/>} />
      </Route>
    </Routes>
    
    </BrowserRouter>
   
    </>
  )
}

export default App
