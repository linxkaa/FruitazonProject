import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../utils/Url";

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}`).then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
    return () => {};
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
