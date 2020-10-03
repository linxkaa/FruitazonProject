import React, { useEffect } from "react";
import Header from "../Components/Header";
import Featured from "../Components/Featured";
import { ProductContext } from "../context/product";
import Loading from "../Components/Loading";
import loadjs from "loadjs";
import ErrorPage from "../Components/Error";

export default function Homepage() {
  const { loading, error, errorMsg } = React.useContext(ProductContext);
  // console.log(products);
  // console.log(loading);
  useEffect(() => {
    loadjs("../assets/js/main.js", function () {
      loadjs("../assets/js/main.js");
    });
  });

  if (loading) {
    return <Loading />;
  } else if (error) {
    console.log(error);
    if (error !== "") {
      return <ErrorPage error={errorMsg}></ErrorPage>;
    } else {
      return <Loading />;
    }
  } else if (!loading && !error) {
    return (
      <div>
        <Header />
        <Featured />
      </div>
    );
  }
}
