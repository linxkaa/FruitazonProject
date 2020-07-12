import React, { Component } from "react";
import ProductPage from "./widgets/ProductCard";

class Homepage extends Component {
  render() {
    return (
      <div>
        <div>
          <header>
            <h2>
              Fruitazon <span className="title-menu" />
              <span class="ti-menu"></span>
            </h2>
            <nav>
              <form action="{value.toString()}" className="search">
                <input type="search" placeholder="Search item..." />
                <button>
                  <span className="span ti-search" />
                </button>
              </form>
              <a href="#">Cart</a>
              <a href="#">Sign up / Login</a>
            </nav>
          </header>
          <section id="caroussel" data-flickity='{ "wrapAround": true }'>
            <div className="carousell-item crsl">
              <div className="carousell-info">
                <h1>Apa itu Fruitazon?</h1>
                <p>
                  Fruitazon adalah E-commerce yang bergerak dibidang
                  agricultural. Fruitazon menyediakan produk buah dan sayur
                  tersegar yang siap diantarkan kerumah anda dalam hari yang
                  sama. Garansi 100% uang kembali jika buah yang diterima dalam
                  keadaan tidak baik. Yuk, tunggu apa lagi? Join Fruitazon
                  sekarang untuk membeli produknya.
                </p>
              </div>
              <div className="carousell-img">
                <img
                  src={require("../assets/images/banner-1.png")}
                  alt=""
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <div className="carousell-item">
              <h1 className="card-info">Apa kata mereka?</h1>
              <div className="card-carousell">
                <div className="card">
                  <div className="container">
                    <h3>Addison Rae</h3>
                    <div className="carousell-img">
                      <img
                        src={require("../assets/images/person-1.jpg")}
                        alt=""
                        width={300}
                        height={370}
                      />
                    </div>
                    <p>
                      "Fruitazon merupakan salah satu tempat terfavorit aku
                      untuk beli buah! Pengantarannya sangat cepat, dan adminnya
                      responsive."
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="container">
                    <h3>Jordan Tucker</h3>
                    <div className="carousell-img">
                      <img
                        src={require("../assets/images/person-2.jpg")}
                        alt=""
                        width={300}
                        height={370}
                      />
                    </div>
                    <p>
                      "Fruitazon terbaik! Buah dan sayur yang gue beli disini
                      gapernah mengecewakan, selalu segar dan enak!"
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="container">
                    <h3>Kendall Jenner</h3>
                    <div className="carousell-img">
                      <img
                        src={require("../assets/images/person-3.jpg")}
                        alt=""
                        width={300}
                        height={370}
                      />
                    </div>
                    <p>
                      "Sejauh ini Fruitazon emang gaada tandingan, awalnya ragu
                      karna jaraknya jauh banget dari rumah aku. tapi ternyata
                      pas dateng bener-bener puas!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousell-item crsl">
              <div className="sistematika-carousell">
                <h1>Sistematika Pemesanan</h1>
                <p>
                  Fruitazon adalah E-commerce yang bergerak dibidang
                  agricultural. Fruitazon menyediakan produk buah dan sayur
                  tersegar yang siap diantarkan kerumah anda dalam hari yang
                  sama. Garansi 100% uang kembali jika buah yang diterima dalam
                  keadaan tidak baik. Yuk, tunggu apa lagi? Join Fruitazon
                  sekarang untuk membeli produknya.
                </p>
              </div>
              <div className="carousell-img">
                <img src="" alt="" width={500} height={300} />
              </div>
            </div>
          </section>
        </div>
        <ProductPage />
      </div>
    );
  }
}

export default Homepage;
