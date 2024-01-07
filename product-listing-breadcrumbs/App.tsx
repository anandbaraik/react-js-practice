import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/products"} element={<ProductList />} />
          <Route path={"/products/:id"} element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
