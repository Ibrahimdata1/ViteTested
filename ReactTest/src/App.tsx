import {useState} from 'react'
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
  const [cartItem,setCartItem] = useState<any[]>([])

  const onAdd = (item:any) => {
    const exist = cartItem.find((e)=>e.id === item.id)
    if(exist){
      const newCartItems = cartItem.map((e)=>
      e.id === item.id ? {...exist,qty:exist.qty + 1} : e);
      setCartItem(newCartItems)
    }else{
      const newCartItems = [...cartItem,{...item,qty:1}];
      setCartItem(newCartItems)
    }
  }
  const onRemove = (item:any) =>{
    const exist = cartItem.find((e) => e.id === item.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((e) => e.id !== item.id));
    } else {
      setCartItem(
        cartItem.map((e) =>
          e.id === item.id ? { ...exist, qty: exist.qty - 1 } : e
        )
      );
    }
  }
  return (
    
    <BrowserRouter>
      <Nav cartItemLength={cartItem.length} cartItem={cartItem} setCartItem={setCartItem} onAdd={onAdd} onRemove={onRemove} />
        <Routes>
          <Route path='/' element={<Home onAdd={onAdd} onRemove={onRemove} cartItem={cartItem} setCartItem={setCartItem} />}/>
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
