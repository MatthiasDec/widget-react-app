import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "../Components/Navbar/Navbar";
import { Home } from "../Pages/Home/Home";
import { About } from '../Pages/About/About'
import { NotFound } from '../Pages/NotFound/NotFound'
import './App.css';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
