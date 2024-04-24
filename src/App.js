import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Meals from "./components/pages/Meals";
import Cart from "./components/pages/Cart";
import AboutUs from "./components/pages/AboutUs";
import Gallery from "./components/pages/Gallery";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/meals' element={<Meals/>}/>
        <Route  path="/meals/:id" element={<Meals/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
