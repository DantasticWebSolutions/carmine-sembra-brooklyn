import React from "react";
const Prezzo = ({ filterPrice, setFilterPrice }) => {
  return (
    <div className="filter-sections p-3 m-2">
      <label className="">Prezzo</label>
      <div className="filter-section">
        <input
          className="w-75"
          type="range"
          min="0"
          max="180"
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
          step="10"
        />
        <span className="ml-2">{filterPrice}</span>
      </div>
    </div>
  );
};

export default Prezzo;
