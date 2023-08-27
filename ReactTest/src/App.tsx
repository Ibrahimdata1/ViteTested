import Content from './Pages/Content';
import './App.css'
import Nav from './Components/Nav';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Course from './Pages/Course';

function App() {


  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/content' element={<Content/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
