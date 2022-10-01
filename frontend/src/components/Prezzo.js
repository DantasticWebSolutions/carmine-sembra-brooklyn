import React from "react";
const Prezzo = ({ filterPrice, setFilterPrice }) => {
  return (
    <div className="filter-sections py-1 my-2">
      <label style={{ margin: "0 2rem 0 0" }}>{`Prezzo: ${filterPrice}`}</label>
      <div className="filter-section ">
        <input
          style={{ accentColor: "#000", width: "170px" }}
          type="range"
          min="0"
          max="180"
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
          step="10"
        />
      </div>
    </div>
  );
};

export default Prezzo;
