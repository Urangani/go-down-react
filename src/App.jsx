import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import AboutPage from './pages/AboutPage/AboutPage';
import OurStores from './pages/OurStores/OurStores';
import Contact from './pages/Contact/Contact';
import Users from './pages/Admin/Users/Users';
import Addresses from './pages/Admin/Addresses/Addresses';
import Categories from './pages/Admin/Categories/Categories';
import Products from './pages/Admin/Products/Products';
import Orders from './pages/Admin/Orders/Orders';
import OrderItems from './pages/Admin/OrderItems/OrderItems';
import Payments from './pages/Admin/Payments/Payments';
import InventoryLogs from './pages/Admin/InventoryLogs/InventoryLogs';
import Suppliers from './pages/Admin/Suppliers/Suppliers';
import ProductReviews from './pages/Admin/ProductReviews/ProductReviews';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-stores" element={<OurStores />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/addresses" element={<Addresses />} />
            <Route path="/admin/categories" element={<Categories />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/order-items" element={<OrderItems />} />
            <Route path="/admin/payments" element={<Payments />} />
            <Route path="/admin/inventory-logs" element={<InventoryLogs />} />
            <Route path="/admin/suppliers" element={<Suppliers />} />
            <Route path="/admin/product-reviews" element={<ProductReviews />} />
          </Routes>
          <Footer />
        </div>

      </Router>
    </CartProvider>
  );
}

export default App;
