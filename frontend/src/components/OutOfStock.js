import React, { useState } from "react";
import Switch from "./Switch";

const OutOfStock = ({ stockFilter, setStockFilter }) => {
  const [value, setValue] = useState(true);
  const handleSwitchToggle = () => {
    setValue(!value);
    //no-lone-blocks
    value === true ? setStockFilter(0) : setStockFilter(-1);
  };
  return (
    <div className="d-flex flex-row justify-content-between align-items-center">
      <span>Disponibile</span>
      <Switch isOn={value} handleToggle={handleSwitchToggle} />
    </div>
  );
};

export default OutOfStock;
