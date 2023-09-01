
import './App.css'
import Nav from './Components/Nav';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Categories from './Pages/Categories';
import Home from './Pages/Home';
import ProductMom from './Pages/ProductMom';
import Course from './Pages/Course';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';

function App() {


  return (
    
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/product' element={<ProductMom/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
