import React from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "../context/product";
import { useHistory } from "react-router-dom";
import Loading from "../Components/Loading";
export default function SingleProductPage() {
  const { id } = useParams();
  const history = useHistory();

  const { products } = React.useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />;
  } else {
    return (
      <>
        <section className="col-lg-10 mx-auto">
          <div className="row">
            <img src={product.img} width="400" height="400" alt="haha" />
            <div className="col-lg-8 text-justify d-flex flex-column">
              <div className="text-center font-weight-bold my-auto ">
                {product.title}
              </div>
              <div className="desc my-auto">{product.description}</div>
              <div className="button-spp mb-auto mt-2  text-center">
                <button
                  type="button"
                  className="site-btn"
                  onClick={() => {
                    history.push("/cart");
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
