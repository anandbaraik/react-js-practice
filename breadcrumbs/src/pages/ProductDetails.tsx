import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
const ProductDetails = (): JSX.Element => {
  const { id } = useParams();
  const products = useProducts();
  const product = products?.find((product) => product?.id === +id);
  return (
    <div>
      <h1>Product details</h1>
      <div className="product_details">
        <img src={product?.thumbnail} alt={product?.title} />
        <div className="product_details-info">
          <h3>
            {product?.title} (<small>$ {product?.price}</small>)
          </h3>
          <p>
            Rating : {product?.rating} ⭐ | Brand : {product?.brand} | Category
            : {product?.category}
          </p>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
