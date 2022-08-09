import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Switch from "./Switch";

const OutOfStock = ({ stockFilter, setStockFilter }) => {
  const [value, setValue] = useState(true);
  const handleSwitchToggle = () => {
    setValue(!value);
    {
      value === true ? setStockFilter(0) : setStockFilter(-1);
    }
  };
  return (
    <div>
      {" "}
      <Switch isOn={value} handleToggle={handleSwitchToggle} />
    </div>
  );
};

export default OutOfStock;
