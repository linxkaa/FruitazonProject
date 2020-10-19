import React, { Component, useContext } from "react";
import { ProductContext } from "../context/product";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loading from "../Components/Loading";
import ErrorPage from "../Components/Error";
var loadjs = require("loadjs");

class Shop extends Component {
  // useEffect(() => {
  // }, []);
  state = {
    products: [],
    error: false,
    loading: true,
    errorMsg: "",
  };

  componentWillMount = () => {
    axios
      .get("http://localhost:3002/products/select")
      .then((response) => {
        this.setState({
          products: response.data.return,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({ error: true, loading: false, errorMsg: err.message });
      });
  };
  filteredProductByCat = (id) => {
    axios
      .post(`http://localhost:3002/products/filteredbycat`, {
        id: id,
      })
      .then((response) => {
        this.setState({ products: response.data.return, loading: false });
      })
      .catch(function (err) {
        this.setState({ error: true, loading: false, merrorMsg: err.message });
      });
  };
  filteredproduct = (name) => {
    axios
      .get(
        `http://localhost:3002/products/filteredproduct?search=${name.search.value}`
      )
      .then((response) => {
        this.setState({
          products: response.data.return,
          loading: false,
        });
      })
      .catch(function (err) {
        console.log(err);

        this.setState({ error: true, loading: false, errorMsg: err.message });
      });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else if (this.state.error) {
      return <ErrorPage error={this.state.errorMsg}></ErrorPage>;
    } else {
      return (
        <>
          <section className="hero mt-3">
            <div className="container">
              <div className="col-lg-12">
                <div className="hero__search">
                  <div className="hero__search__form">
                    <form>
                      <input
                        type="text"
                        placeholder="What do you need?"
                        ref="search"
                      />
                      <button
                        type="button"
                        className="site-btn"
                        onClick={() => this.filteredproduct(this.refs)}
                      >
                        SEARCH
                      </button>
                    </form>
                  </div>
                  <div className="hero__search__phone">
                    <div className="hero__search__phone__icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="hero__search__phone__text">
                      <h5>+62 811123567</h5>
                      <span>support 24/7 time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="product spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-5">
                  <div className="sidebar">
                    <div className="sidebar__item">
                      <h4>Categories</h4>
                      <ul>
                        <li>
                          <button
                            className="pb-3"
                            onClick={() => this.filteredProductByCat(1)}
                          >
                            Vegetables
                          </button>
                        </li>

                        <li>
                          <button onClick={() => this.filteredProductByCat(2)}>
                            Fresh Fruits
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-9 col-md-7 ">
                  <div class="row">
                    {this.state.products.map((item) => {
                      return (
                        <ProductCard
                          key={item.id}
                          {...item}
                          product={item}
                          cartData={this.props.handlerCartData}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
  }
}

export default Shop;
