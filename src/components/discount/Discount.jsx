import React from "react";
import Dcard from "./Dcard";
import Logo from "../assets/images/gift.png";
const Discount = () => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src={Logo} />
              <h2>Big Discounts</h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  );
};

export default Discount;
