import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../utils/Url";

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [data, setData] = useState({ hits: [] });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}`)
      .then((response) => {
        setProducts(response.data.return);
        setData(response.data.return);
        setLoading(false);
      })
      .catch(function (err) {
        // setLoading(tru);
        setError(true);
        setErrorMsg(err.message);
        setLoading(false);

        // console.log(loading);
        setErrorMsg(err.message);
      });

    return () => {};
  }, []);
  return (
    <ProductContext.Provider
      value={{ products, loading, featured, data, error, errorMsg }}
    >
      {children}
    </ProductContext.Provider>
  );
}
