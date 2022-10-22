// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import WishList from './pages/wishList';
import Home from './pages/home';
import About from './pages/about';
import Admin from './pages/admin';
import Cart from './pages/cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalContext from './state/globalContext';

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
      <div className="cat-container">
        <NavBar />

        <AnimatePresence mode='wait'>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/wish" element={<WishList />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </AnimatePresence>
        
        
        <Footer />
      </div>         

      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
 