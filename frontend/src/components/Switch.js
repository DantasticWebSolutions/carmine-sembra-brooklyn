import React from "react";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={!isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: !isOn && "#000" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;

// 06D6A0
