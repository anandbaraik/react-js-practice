import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Breadcrumb from "./components/Breadcrumb";
export default function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-center">🛒An2d Store</h1>
        <Breadcrumb />
        <hr />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/products"} element={<ProductList />} />
          <Route path={"/products/:id"} element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
