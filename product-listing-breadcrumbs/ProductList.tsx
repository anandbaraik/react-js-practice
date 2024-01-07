import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products`);
      const { products } = await response.json();
      setProducts(products);
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Product list</h1>
      <div className="product_list">
        {products?.map((product) => {
          return (
            <div className="product_card" key={product?.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product?.thumbnail} alt={product?.title} />
                <h3>{product?.title}</h3>
                <h4>${product?.price}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
