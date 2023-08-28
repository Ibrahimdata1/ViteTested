
import './App.css'
import Nav from './Components/Nav';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Course from './Pages/Course';
import Categories from './Pages/Categories';

function App() {


  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/categories' element={<Categories/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
