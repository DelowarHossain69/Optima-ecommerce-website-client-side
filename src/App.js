import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/LoginAndRegister/Login";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import Register from './components/pages/LoginAndRegister/Register';
import ProductDetails from './components/pages/ProductDetails/ProductDetails';
import AllProducts from './components/pages/AllProducts/AllProducts';
import Dashboard from './components/pages/Dashboard/Dashboard';
import AddToCard from './components/pages/ProductDetails/AddToCard';
import PaymentDetails from "./components/pages/Payment/PaymentDetails";
import { useState } from 'react';
import RequireAuth from "./components/shared/Required/RequireAuth";


function App() {
  // share product info for payment
  const [paymentInfo, setPaymentInfo] = useState({});
  const sharePaymentInfo = info => {
    setPaymentInfo(info);
  }

  // share product info for (Add to card)
  const [cardInfo, setCardInfo] = useState({});
  const shareCardInfo = (quantity) => {
    setCardInfo(quantity);
  }

  return (
    <main className="bg-[#fff6f667]">
      <div className="max-w-6xl mx-auto">
        <Navbar getCardInfo={cardInfo}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stored" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/addToCard" element={
          <AddToCard 
            sharePaymentInfo={sharePaymentInfo} 
            shareCardInfo={shareCardInfo}
          />} />

          <Route path="/productDetails/:id" element={
          <ProductDetails 
            sharePaymentInfo={sharePaymentInfo}
            shareCardInfo={shareCardInfo}
           />}/>

          <Route path="/paymentDetails" element={
            <RequireAuth>
                <PaymentDetails paymentInfo={paymentInfo}/> 
            </RequireAuth>
          }/>

          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
        </Routes>

        <Footer />
      </div>
    </main>
  );
}

export default App;
