import React, { useEffect, useState } from "react";
import url from "../utils/Url";
import axios from "axios";
import { ProductContext } from "../context/product";
import ProductCard from "../Pages/ProductCard";

export default function Featured({ cartDataa }) {
  const { products, data } = React.useContext(ProductContext);

  return (
    <>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
            </div>
          </div>
          <div className="row featured__filter text-center ">
            {data.map((item) => {
              if (item.featured == true)
                return (
                  <ProductCard
                    key={item.id}
                    {...item}
                    product={item}
                    cartDataa={cartDataa}
                  />
                );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
