import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../types/product.type";

type ProductProviderType = {
  children: React.ReactNode;
};

type ProductContextType = ProductType[];

const ProductContext = createContext<ProductContextType>([]);

export const ProductProvider: FC<ProductProviderType> = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const { products } = await response.json();
      setProducts(products);
    } catch (error) {
      console.error("Something went wrong while fetching products - ", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be inside the ProductProvider");
  }
  return context;
};
