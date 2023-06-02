import React from "react";
import {
  Box,
  BrandSection,
  TimerSection,
  Grid,
  InputLabel,
  Button,
  Divider,
} from "../reusable/layout";
import { BiPencil } from "react-icons/bi";
import BrandLogo from "../assets/creditCard.png";
import PlainMasterCard from "../assets/mastercardPlain.png";
import Verified from "../assets/verified.png";
import Dots from "../assets/dots.png";
import CustomInput from "../reusable/form/customInput";
import CustomLabel from "../reusable/form/customLabel";

const CardDetailSection = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pad="1rem 0"
      >
        <BrandSection>
          <div className="brand-logo">
            <img src={BrandLogo} alt="" />
          </div>
          <h1>
            AceCoin<span className="light-text">Pay</span>
          </h1>
        </BrandSection>
        <TimerSection>
          <span className="timer-box">0</span>
          <span className="timer-box">1</span>

          <span className="timer-divider"> : </span>
          <span className="timer-box">1</span>
          <span className="timer-box">9</span>
        </TimerSection>
      </Box>
      <Box pad="2rem 0">
        <Box>
          <Grid desktop="1fr 1fr">
            <CustomLabel
              title="Card Number"
              description="Enter the 16-digit card number on the card"
            />
            <Box display="flex" justifyContent="end" alignItems="center">
              <Button pale>
                <BiPencil size="1.4rem" style={{ marginRight: "10px" }} />
                Edit
              </Button>
            </Box>
          </Grid>
          <Grid>
            <Box pad="1.5rem 0">
              <CustomInput
                imageLeft={PlainMasterCard}
                imageRight={Verified}
                type="number"
                placeholder="2412  -  7512  -  3412  -  3456"
              />
            </Box>
          </Grid>
        </Box>
        <Box pad="0.5rem 0">
          <Grid desktop="1fr 1fr" alignItems="center">
            <CustomLabel
              title="CVV Number"
              description="Enter the 3 or 4 digit number on the card"
            />
            <CustomInput
              type="text"
              placeholder="327"
              imageRight={Dots}
              className="text-center"
            />
          </Grid>
        </Box>
        <Box pad="1.5rem 0 0">
          <Grid desktop="1fr 1fr" alignItems="center">
            <CustomLabel
              title="Expiry Date"
              description="Enter the expiration date of the card"
            />
            <Box display="flex" alignItems="center">
              <CustomInput type="number" className="text-center" />
              <Divider>/</Divider>
              <CustomInput type="number" className="text-center" />
            </Box>
          </Grid>
        </Box>
        <Box pad="1.5rem 0 0">
          <Grid desktop="1fr 1fr" alignItems="center">
            <CustomLabel
              title="Password"
              description="Enter your Dynamic password"
            />
            <CustomInput
              type="password"
              className="text-left"
              imageRight={Dots}
              style={{ alignSelf: "end" }}
            />
          </Grid>
        </Box>
      </Box>
      <Button block>Pay now</Button>
    </div>
  );
};

export default CardDetailSection;
