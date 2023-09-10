import { useState, useEffect, createContext } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Pages/Categories";
import Home from "./Pages/Home";
import ProductMom from "./Pages/ProductMom";
import Course from "./Pages/Course";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import VideoPage from "./Pages/VideoPage";
import { SliderData } from "./data/SliderData";



function App() {
  const [cartItem, setCartItem] = useState<any[]>([]);
  const [mainImage, setMainImage] = useState<any[]>([]);

  const onAdd = (item: any) => {
    const exist = cartItem.find((e) => e.id === item.id);
    if (exist) {
      const newCartItems = cartItem.map((e) =>
        e.id === item.id ? { ...exist, qty: exist.qty + 1 } : e
      );
      setCartItem(newCartItems);
      localStorage.setItem("cartItem", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItem, { ...item, qty: 1 }];
      setCartItem(newCartItems);
      localStorage.setItem("cartItem", JSON.stringify(newCartItems));
    }
  };
  const onAddImg = (item: any) => {
    const exist = mainImage.find((e) => e.id === item.id);
    if (exist) {
      const newCartItems = mainImage.map((e) =>
        e.id === item.id ? { ...exist, qty: exist.qty + 1 } : e
      );
      setMainImage(newCartItems);
      localStorage.setItem("cartItem", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...mainImage, { ...item, qty: 1 }];
      setMainImage(newCartItems);
      localStorage.setItem("cartItem", JSON.stringify(newCartItems));
    }
  };
  const onRemove = (item: any) => {
    const exist = cartItem.find((e) => e.id === item.id);
    if (exist.qty === 1) {
      const newCartItems = cartItem.filter((e) => e.id !== item.id);
      setCartItem(newCartItems);
      localStorage.setItem("cartItem", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItem.map((e) =>
        e.id === item.id ? { ...exist, qty: exist.qty - 1 } : e
      );
      setCartItem(newCartItems);
      localStorage.setItem("cartItem", JSON.stringify(newCartItems));
    }
  };
  useEffect(() => {
    setCartItem(
      localStorage.getItem("cartItem")
        ? JSON.parse(localStorage.getItem("cartItem")!)
        : []
    );
  }, []);

  return (
    <BrowserRouter>
      <Nav
        cartItemLength={cartItem.length}
        cartItem={cartItem}
        setCartItem={setCartItem}
        onAdd={onAdd}
        onRemove={onRemove}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
            onAddImg={onAddImg}
              onAdd={onAdd}
              onRemove={onRemove}
              cartItem={cartItem}
              setCartItem={setCartItem}
              setMainImage={setMainImage}
              mainImage={mainImage}
              sliderData={SliderData}
            />
          }
        />
        <Route path="/course" element={<Course />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<ProductMom />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout mainImage={mainImage}/>} />
        <Route path="/videopage" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
