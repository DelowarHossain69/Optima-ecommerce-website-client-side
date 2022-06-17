import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/LoginAndRegister/Login";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import Register from './components/pages/LoginAndRegister/Register';
import ProductDetails from './components/pages/ProductDetails/ProductDetails';
import AllProducts from './components/pages/AllProducts/AllProducts';

function App() {
  return (
    <main className="bg-[#fff6f667]">
      <div className="max-w-6xl mx-auto">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/stored" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </div>
    </main>
  );
}

export default App;
