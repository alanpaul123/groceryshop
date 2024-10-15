import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import AllProduct from "./pages/AllProduct";
import Billing from "./pages/Billing";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id/view" element={<ProductDetails />}></Route>
        <Route path="/allProduct" element={<AllProduct />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        {/* <Route path="/allProduct/:id/view" element={<ProductDetails />}></Route> */}
        <Route path="/billing" element={<Billing />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
