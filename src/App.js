import logo from './logo.svg';
import './App.css';
import Navigate from './Navigate';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Pages from './pages/Pages'

function App() {
  return (
    <BrowserRouter>
    <Navigate/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/pages' element = {<Pages/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
