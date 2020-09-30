import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../utils/Url";

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [data, setData] = useState({ hits: [] });
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}`).then((response) => {
      setProducts(response.data.return);
      setData(response.data.return);
      setLoading(false);
    });
    return () => {};
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading, featured, data }}>
      {children}
    </ProductContext.Provider>
  );
}
