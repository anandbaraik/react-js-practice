import { Link } from "react-router-dom";
import { ProductType } from "../types/product.type";
const ProductCard = ({ product }: { product: ProductType }): JSX.Element => {
  return (
    <div className="product_card" key={product?.id}>
      <Link to={`/products/${product.id}`}>
        <img src={product?.thumbnail} alt={product?.title} />
        <h3>{product?.title}</h3>
        <p> Price : $ {product?.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
