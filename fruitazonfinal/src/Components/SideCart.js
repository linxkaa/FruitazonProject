import React from "react";
import styled from "styled-components";

export default function SideCart() {
  return (
    <CartWrapper>
      <div>
        <div
          className="modal fade"
          id="cartModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="exampleModalScrollableTitle">
                  Your Shopping Cart
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table table-image">
                  <thead>
                    <tr>
                      <th scope="col" />
                      <th scope="col">Product</th>

                      <th scope="col">Qty</th>
                      <th scope="col">Total</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-25">
                        <img
                          src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/12/2/80540977/80540977_27566c81-1ec0-417d-ae94-3f71d18731f8_1024_1024"
                          className="img-fluid img-thumbnail"
                          alt="Sheep"
                        />
                      </td>
                      <td>Pisang Cavendish</td>

                      <td className="qty">2</td>
                      <td>Rp30.000</td>
                      <td>
                        <a href="#" className="btn btn-danger btn-sm">
                          <i className="fa fa-times" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex justify-content-end">
                  <h5>
                    Total: <span className="price text-success">Rp30.000</span>
                  </h5>
                </div>
              </div>
              <div className="modal-footer border-top-0 d-flex justify-content-between">
                <button
                  type="button"
                  className="site-btn-2"
                  data-dismiss="modal"
                >
                  Open Cart
                </button>
                <button type="button" className="site-btn">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  .container {
    padding: 2rem 0rem;
  }

  .table-image {
    thead {
      td,
      th {
        border: 0;
        color: #666;
        font-size: 0.8rem;
      }
    }

    td,
    th {
      vertical-align: middle;
      text-align: center;

      &.qty {
        max-width: 2rem;
      }
    }
  }

  .price {
    margin-left: 1rem;
  }

  .modal-footer {
    padding-top: 0rem;
  }
`;
