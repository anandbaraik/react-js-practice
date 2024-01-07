import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchproduct = async () => {
      const response = await fetch(`https://dummyjson.com/product/${id}`);
      const productDetails = await response.json();
      setProduct(productDetails);
    };
    fetchproduct();
  }, []);
  console.log(product);
  return (
    <div>
      <h1>Product details</h1>
      <div className="product_details">
        <div className="product_details-img">
          <img src={product?.thumbnail} alt={product?.title} />
        </div>
        <div className="product_details-info">
          <h3>{product?.title}</h3>
          <h4>${product?.price}</h4>
          <p>{product?.description}</p>
          <p>Rating : {product?.rating}</p>
          <p>Brand : {product?.brand}</p>
          <p>Category : {product?.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
