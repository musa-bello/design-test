import React from "react";
import { CreditCard, Box, Checkout } from "../reusable/layout";
import Chip from "../assets/chip.png";
import Wifi from "../assets/wifi.png";
import MasterCardLogo from "../assets/mastercardLabel.png";
import Scroll from "../assets/scroll.png";
import { checkoutData } from "../mockData/checkoutData";

const CheckoutSection = () => {
  return (
    <div style={{ position: "relative" }}>
      <CreditCard className="credit-card-wrapper">
        <div className="credit-card">
          <div className="blue-tag">
            <div className="glass"></div>
          </div>
          <div className="card-header">
            <img src={Chip} alt="" />
            <img src={Wifi} alt="" className="wifi-logo" />
          </div>
          <div className="card-body">
            <div className="card-details">
              <div className="card-name">Jonathan Michael</div>
              <div className="card-number">
                <span className="hidden-number"></span>
                <span className="hidden-number"></span>
                <span className="hidden-number"></span>
                <span className="hidden-number"></span>
                <span className="displayed-number">3456</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Box display="flex" justifyContent="space-between">
              <p className="expiry-date">09/20</p>
              <img src={MasterCardLogo} alt="" className="card-logo" />
            </Box>
          </div>
          <div className="card-rings">
            <span className="first-ring"></span>
            <span className="second-ring"></span>
            <span className="third-ring"></span>
          </div>
        </div>
      </CreditCard>
      <Checkout className="wrapper">
        <div className="checkout-container">
          <div className="spacer" />
          <div className="checkout-data">
            {checkoutData.map((data, index) => (
              <>
                <div className="product-name" key={index}>
                  {data.title}
                </div>
                <div className="product-details">
                  {data.icon && <img src={data.icon} alt="" />}
                  <span className="title">{data.description}</span>
                </div>
              </>
            ))}
          </div>
          <div className="checkout-divider">
            <span className="left-side"></span>
            <span className="right-side"></span>
          </div>
          <div className="checkout-total">
            <p>You have to pay</p>
            <div className="amount">
              <p>
                <span className="lead">549</span>
                <span className="cent">.99</span>
                <span> USD</span>
              </p>
              <img src={Scroll} alt="" />
            </div>
          </div>
        </div>
      </Checkout>
    </div>
  );
};

export default CheckoutSection;
