import './App.css'
import Header from "./components/Header/Header"
import Home from './Pages/Home/Home.jsx'
import Leadership from './Pages/Leadership/Leadership'
import Tracks from './Pages/Tracks/Tracks'
import Events from './Pages/Events/Events';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leadership" element={<Leadership />} />
          <Route path="/Tracks" element={<Tracks />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
