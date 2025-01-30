
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import { Categories } from "./pages/Categories";
import Cart from "./pages/Cart";
import More from "./pages/More";
import Footer from "./components/Footer";




export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Outlet />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/more" element={<More/>} />
      </Routes>
      <Footer/>
    </div>
  );
}