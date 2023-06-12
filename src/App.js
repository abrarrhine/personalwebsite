import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home"
import Service from './Components/Service'
import Artwork from './Components/Artwork';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Experience from './Components/Experience';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home> }></Route>
        <Route path="/experience" element={<Experience></Experience> }></Route>
        <Route path="/projects" element={<Service></Service> }></Route>
        <Route path="/artworks" element={<Artwork></Artwork> }></Route>
        {/* <Route path="/photos" element={<Photos></Photos> }></Route> */}
      </Routes>
    </div>
  );
}

export default App;
