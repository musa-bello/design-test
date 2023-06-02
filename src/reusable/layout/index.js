import styled, { css } from "styled-components";
import { colors, screenSize } from "../../utils/constants";

export const CloseContainer = styled.div`
  position: relative;
  top: -3rem;
  right: -3rem;
`;
export const Checkout = styled.div`
  & .checkout-container {
    display: grid;
    height: 550px;
    width: 100%;
    grid-template-columns: 1fr;
    align-items: end;
    position: absolute;
    bottom: 0;
    background: ${colors.primaryGrey};
    border-radius: 20px;
    @media (max-width: ${screenSize.tablet}) {
    position: relative;
    margin-top: 5rem;
  }

    & .checkout-data {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 1rem 1.5rem;
      font-size: 1rem;

      color: ${colors.secondaryText};
      position: relative;
      top: 5rem;
      & .product-details {
        display: flex;
        align-items: center;
        justify-content: end;
        color: ${colors.primaryText};
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 0.8rem;
        img {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 5px;
        }
      }
    }
    & .checkout-total {
      padding: 1rem 1.5rem;
      margin-top:-3rem;
      p {
        font-size: 1rem;
        margin: 5px 0;
        color: ${colors.secondaryText};
      }
      }

      & .amount {
        display: flex;
        justify-content: space-between;
        img {
          height: 2rem;
        }
        & .lead {
          color: ${colors.primaryText};
          font-weight: 600;
          font-size: 2rem;
        }
        & .cent {
          color: ${colors.primaryText};
        }
        p {
          margin: 0;
          margin-bottom: 1rem;
        }
      }
    }
    & .checkout-divider {
      position: relative;
      bottom: 0;
      height: 2rem;
      border-bottom: 2px dashed #ccc;
        & .left-side {
        height: 2rem;
        width: 2rem;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        left: -10px;
        top: 12px;
      }
      & .right-side {
        height: 2rem;
        width: 2rem;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        right: -10px;
        top: 12px;
      }
    }
  }
`;

export const CreditCard = styled.div`
  position: absolute;
  z-index: 5;
  & .credit-card {
    & .blue-tag {
      position: relative;
      height: 2.2rem;
      width: 4rem;
      margin: -1.8rem auto 0px;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      background: linear-gradient(
        rgb(32 103 244) 30%,
        rgb(228 235 248) 30%,
        rgb(255 255 255 / 33%) 100%
      );
      /* & ::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1rem;
        background: linear-gradient(
          rgb(32 103 244) 30%,
          rgb(228 235 248) 30%,
          rgb(255 255 255 / 33%) 100%
        );
        top: 10px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
      } */
    }
    width: 250px;

    position: relative;
    left: 2.5vw;

    /* top: -10px; */
    display: flex;

    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(
      180deg,
      rgba(254, 254, 254, 1) 50%,
      rgba(252, 252, 252, 1) 100%
    );
    padding: 1.5rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    overflow: hidden;
    @media (max-width: ${screenSize.tablet}) {
      width: 55vw;
      left: 13vw;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
    & .wifi-logo {
      width: 2rem;
      height: 2rem;
    }
    & .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* margin: 2rem 0; */
      z-index: 2;
    }

    & .card-body {
      z-index: 2;
      margin: 4rem 0px 2rem;
      padding: 1rem 0 0;
      /* align-self: center; */
      & .card-name {
        /* padding: 10px 0; */
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 1rem;
        /* color: ${colors.primaryGrey}; */
      }
      & .card-number {
        & .hidden-number {
          display: inline-block;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          margin-right: 5px;
          background: black;
        }
        & .displayed-number {
          margin-left: 10px;
          font-weight: 600;
          font-size: 1rem;
        }
      }
    }

    & .card-footer {
      z-index: 2;
      & .expiry-date {
        font-weight: 500;
        font-size: 1rem;
      }
    }

    & .card-rings {
      span {
        display: inline-block;
        position: absolute;
        z-index: 1;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        border: 1px solid #e3e9ec;
      }

      & .first-ring {
        top: 4rem;
        left: -1.5rem;
      }
      & .second-ring {
        top: 8rem;
        left: 0.3rem;
        width: 500px;
        height: 500px;
      }
      & .third-ring {
        top: 12rem;
        left: 5rem;
        width: 400px;
        height: 400px;
      }
    }
  }
`;

export const Divider = styled.span`
  align-self: center;

  text-align: center;
  font-weight: 200;
  font-size: 1.5rem;
  margin: 0 1rem;
`;
export const Grid = styled.div`
  display: grid;
  grid-gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.desktop};
  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${(props) => props.justifyContent};
    `}
  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${(props) => props.alignItems};
    `}

  @media (max-width: ${screenSize.tablet}) {
    grid-template-columns: ${(props) => props.tablet};
  }
  @media (max-width: ${screenSize.mobile}) {
    grid-template-columns: ${(props) => props.mobile};
  }
`;

export const Box = styled.div`
  ${(props) =>
    props.pad &&
    css`
      padding: ${(props) => props.pad};
    `}
  ${(props) =>
    props.display &&
    css`
      display: ${(props) => props.display};
    `}
  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${(props) => props.justifyContent};
    `}
    ${(props) =>
    props.alignItems &&
    css`
      align-items: ${(props) => props.alignItems};
    `}
`;

export const Container = styled.div`
  max-width: ${screenSize.desktop};
  background: #fff;
  padding: 3rem;
  margin: 5rem auto;
  @media (max-width: ${screenSize.mobile}) {
    padding: 3rem 2rem;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & .brand-logo {
    /* display: block; */
    height: 3rem;
    width: 3rem;
    background: ${colors.primaryBlue};
    border-radius: 50%;
    img {
      width: 1.5rem;
      width: 1.5rem;
      margin: 12px;
    }
  }
  & h1 {
    font-size: 1.6rem;
    color: ${colors.primaryText};
    /* font-weight: 700; */
    & .light-text {
      font-weight: 500;
      color: grey;
    }
  }
`;

export const TimerSection = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  @media (max-width: ${screenSize.mobile}) {
    display: none;
  }
  & .timer-box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 2rem;
    background: ${colors.secondaryBlue};
    color: #fff;
    margin: 0 2px;
    border-radius: 5px;
  }
  & .timer-divider {
    color: #202023;
    /* font-size: 1rem; */
  }
`;
export const InputLabel = styled.div`
  h2 {
    margin: 10px 0;
  }
  & .title {
    font-size: 1.3rem;
    color: ${colors.primaryText};
    @media (max-width: ${screenSize.mobile}) {
      font-size: 1.1rem;
    }
  }
  & .description {
    color: ${colors.secondaryText};
  }
`;
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 20px 10px;
  text-align: center;
  border-radius: 10px;
  background: ${(props) => (props.color ? props.color : colors.primaryBlue)};
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
  ${(props) =>
    props.pale &&
    css`
      background: none;
      color: ${(props) =>
        props.textColor ? props.textColor : colors.primaryBlue};
    `}
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;

export const CardInput = styled.div`
  position: relative;
  & img {
    height: 2rem;
    width: 2rem;
  }
  & .left-icon {
    position: absolute;
    left: 0;
    top: 50%;
    
    transform: translate(50%, -50%); */
  }
  & .right-icon {
    position: absolute;
    right: 0;
    top: 50%;
    
    transform: translate(-50%, -50%); */
  }

  & input {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem 4rem;
    border: 2px solid ${colors.primaryGrey};
    border-radius: 10px;
    font-size: 1.2rem;
    &:focus {
      color:${colors.primaryBlue};
      outline: none;
      border: 2px solid ${colors.primaryBlue};
      background: #edf2fe;
      box-shadow: none;
    }
    
    @media (max-width: ${screenSize.mobile}) { 
        padding: 1rem 3.5rem;
    &::placeholder {
     font-size: 1rem;
    }
    
  }
  }
  & .text-center {
    text-align: center;
    padding-left: 0;
    padding-right: 0;
  }
  & .text-left {
    text-align: left;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
