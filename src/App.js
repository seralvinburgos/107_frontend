// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import WishList from './pages/wishList';
import Home from './pages/home';
import About from './pages/about';
import Admin from './pages/admin';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="cat-container">
      <NavBar />

      <Routes> 
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/wish" element={<WishList />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </div>         

    </BrowserRouter>
  );
}

export default App;
 