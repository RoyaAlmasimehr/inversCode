
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage';
import CartPage from './pages/cart/CartPage';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';
import Navbar from './components/navbar/Navbar';

function App() {


  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about'  element= {<AboutPage />}/>
      </Routes>
    </>
  );
}

export default App
