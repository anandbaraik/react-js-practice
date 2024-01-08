import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
const Home = (): JSX.Element => {
  const products = useProducts();
  const trendingProducts = products?.slice(0, 6);
  return (
    <div>
      <h1>Home</h1>
      <h2>Trending Products 🔥</h2>
      <div className="product_list">
        {trendingProducts?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </div>
      <div className="text-center">
        <Link to={"/products"}>
          <button className="cursor-pointer">Check all products</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
