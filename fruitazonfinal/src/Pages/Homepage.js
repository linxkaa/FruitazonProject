import React, { useContext } from "react";
import Header from "../Components/Header";
import Featured from "../Components/Featured";
import { ProductContext } from "../context/product";
import Loading from "../Components/Loading";

export default function Homepage() {
  const { loading, products } = React.useContext(ProductContext);
  // console.log(products);
  // console.log(loading);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <Header />
        <Featured />
      </div>
    );
  }
}
