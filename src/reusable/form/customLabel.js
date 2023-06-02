import React from "react";
import { InputLabel } from "../layout";

const CustomLabel = ({ title, description }) => {
  return (
    <InputLabel>
      <h2 className="title">{title}</h2>
      <span className="description">{description}</span>
    </InputLabel>
  );
};

export default CustomLabel;
