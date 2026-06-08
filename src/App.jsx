import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Auth from './Pages/Auth.jsx';
import Checkout from './Pages/Checkout.jsx';
import Navbar from './components/Navbar.jsx';
import AuthProvider from './context/AuthContext.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
