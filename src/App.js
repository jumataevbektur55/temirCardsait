import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer/Index';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
      <Footer/>
       </div>
  );
}

export default App;
