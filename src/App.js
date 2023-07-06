import './App.css';
import Home from "./Components/Home"
import Service from './Components/Service'
import Artwork from './Components/Artwork';
import Header from './Components/Header';
import Experience from './Components/Experience';
import PhotoGallery from './Components/PhotoGallery';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home> }></Route>
        <Route path="/experience/" element={<Experience></Experience> }></Route>
        <Route path="/projects/" element={<Service></Service> }></Route>
        <Route path="/artworks/" element={<Artwork></Artwork> }></Route>
        <Route path="/photos/" element={<PhotoGallery></PhotoGallery> }></Route>
      </Routes>
    </div>
  );
}

export default App;
