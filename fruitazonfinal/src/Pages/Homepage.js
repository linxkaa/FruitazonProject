import React, { useEffect } from "react";
import Header from "../Components/Header";
import Featured from "../Components/Featured";
import { ProductContext } from "../context/product";
import Loading from "../Components/Loading";
import loadjs from "loadjs";

export default function Homepage() {
  const { loading } = React.useContext(ProductContext);
  // console.log(products);
  // console.log(loading);
  useEffect(() => {
    loadjs("../assets/js/main.js", function () {
      loadjs("../assets/js/main.js");
    });
  });

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
