import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
const ProductList = () => {
  const products = useProducts();
  return (
    <div>
      <h1>Product list</h1>
      <div className="product_list">
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
