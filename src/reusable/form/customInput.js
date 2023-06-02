import React from "react";
import { CardInput } from "../layout";

const CustomInput = ({
  imageLeft,
  imageRight,
  className,
  style,
  type,
  placeholder,
  ...props
}) => {
  return (
    <CardInput style={style}>
      {imageLeft && <img src={imageLeft} alt="" className="left-icon" />}
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        {...props}
      />
      {imageRight && <img src={imageRight} alt="" className="right-icon" />}
    </CardInput>
  );
};

export default CustomInput;
