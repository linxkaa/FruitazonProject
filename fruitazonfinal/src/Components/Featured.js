import React, { useContext } from "react";

import { ProductContext } from "../context/product";
import ProductCard from "../Pages/ProductCard";

export default function Featured() {
  const { products } = React.useContext(ProductContext);

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
            {products.map((item) => {
              if (item.featured === true)
                return <ProductCard key={item.id} {...item} product={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
