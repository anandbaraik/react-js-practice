import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products`);
      const { products } = await response.json();
      setTrendingProducts(products.slice(0, 6));
    };
    fetchProducts();
  }, []);
  console.log(trendingProducts);
  return (
    <div>
      <h1>Home</h1>
      <h2>Trending Products 🔥</h2>
      <div className="product_list">
        {trendingProducts?.map((product) => {
          return (
            <div className="product_card" key={product?.id}>
              <Link to={`products/${product.id}`}>
                <img src={product?.thumbnail} alt={product?.title} />
                <h3>{product?.title}</h3>
                <h4>${product?.price}</h4>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to={"/products"}>
        <button>View all products</button>
      </Link>
    </div>
  );
};

export default Home;
