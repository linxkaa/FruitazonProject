import React, { Component } from "react";
import Navbar from "./widgets/Navbar";
import Footer from "./widgets/Footer";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />

        {/* about_area_start */}
        <div className="about_area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="about_thumb2">
                  <div className="img_1">
                    <img src={require("../assets/img/about/1.png")}/>
                  </div>
                  <div className="img_2">
                    <img src={require("../assets/img/about/2.png")}/>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 offset-lg-1 col-md-6">
                <div className="about_info">
                  <div className="section_title mb-20px">
                    <span>About Us</span>
                    <h3>Best Fruits in your City</h3>
                  </div>
                  <p>Eating more fruit is an excellent way to improve overall health and reduce the risk of disease. Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Fruits come in all shapes and sizes, and different fruits have different health benefits. For the best results, add a variety of fruits to the diet. By eating fruit, a person is providing their body with key vitamins, antioxidants, and dietary fiber. This can have significant benefits for heart health, digestion, weight management, and skin health. People can enjoy a wide variety of fruits to improve their health and lower the risk of inflammation, heart disease, cancer, obesity, and diabetes. At Real Foods we take pride in ensuring all of our Fruits and Vegetables are sent the same day that they arrive with us, this ensures the greatest freshness to you. All orders are sent with a 24 hour courier and should arrive the next day unless you live in an area that does qualify for 24 hour service. We cannot send orders containing fresh fruit and vegetables to overseas destinations.</p>
                  <div className="img_thumb">
                    <img src={require("../assets/img/about/jessica-signature.png")}/>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
        {/* about_area_end */}

        {/* gallery_start */}
        <div className="gallery_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section_title mb-70 text-center">
                  <span>Gallery Image</span>
                  <h3>Our Fruits and Vegetables</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="single_gallery big_img">
            <a className="popup-image" href={require("../assets/img/about/gallery1.png")}>
            </a>
            <img src={require("../assets/img/about/gallery1.png")} alt="" />
          </div>
          <div className="single_gallery small_img">
            <a className="popup-image" href={require("../assets/img/about/gallery2.png")}>
            </a>
            <img src={require("../assets/img/about/gallery2.png")} alt="" />
          </div>
          <div className="single_gallery small_img">
            <a className="popup-image" href={require("../assets/img/about/gallery3.png")}>
            </a>
            <img src={require("../assets/img/about/gallery3.png")} alt="" />
          </div>
          <div className="single_gallery small_img">
            <a className="popup-image" href={require("../assets/img/about/gallery4.png")}>
            </a>
            <img src={require("../assets/img/about/gallery4.png")} alt="" />
          </div>
          <div className="single_gallery small_img">
            <a className="popup-image" href={require("../assets/img/about/gallery5.png")}>
            </a>
            <img src={require("../assets/img/about/gallery5.png")} alt="" />
          </div>
          <div className="single_gallery big_img">
            <a className="popup-image" href={require("../assets/img/about/gallery6.png")}>
            </a>
            <img src={require("../assets/img/about/gallery6.png")} alt="" />
          </div>
        </div>
        {/* gallery_end */}

        {/* testimonial_area_start  */}
        <div className="testimonial_area ">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section_title mb-60 text-center">
                  <span>Testimonials</span>
                  <h3>Happy Customers</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="testmonial_active owl-carousel">
                  <div className="single_carousel">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="single_testmonial text-center">
                          <p>Thank you for the early delivery today, it made a great difference to the running of our day. We really appreciate the lovely quality and service we receive from you all!</p>
                          <div className="testmonial_author">
                            <div className="thumb">
                              <img src={require("../assets/img/about/testimonial1.png")} alt="" />
                            </div>
                            <h4>Kristiana Chouhan</h4>
                            <div className="stars">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_carousel">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="single_testmonial text-center">
                          <p>Thank you for supplying us beautiful and fresh fruits with special pricing. A few comments that we received, fruits are fresh and delicious.</p>
                          <div className="testmonial_author">
                            <div className="thumb">
                              <img src={require("../assets/img/about/testimonial2.png")} alt="" />
                            </div>
                            <h4>Arafath Hossain</h4>
                            <div className="stars">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_carousel">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="single_testmonial text-center">
                          <p>Produce is outstanding. Other than picking ourselves, have not seen better. Thanks for everything.</p>
                          <div className="testmonial_author">
                            <div className="thumb">
                              <img src={require("../assets/img/about/testimonial3.png")} alt="" />
                            </div>
                            <h4>A.H Shemanto</h4>
                            <div className="stars">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial_area_ned  */}

        <Footer />
      </div>
    );
  }
}

export default About;