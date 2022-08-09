import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
const Bottone = ({ filterItem, item, setItem, menuItems, product }) => {
  useEffect(() => {
    setItem(product);
  }, []);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-center">
        <>
          {!show && (
            <button onClick={() => setShow((prev) => !prev)}>Click</button>
          )}
          {/* {show && <div>This is your component</div>} */}
        </>
        {show && (
          <div>
            {menuItems.map((Val, id) => {
              return (
                <Button variant="dark" onClick={() => filterItem(Val)} key={id}>
                  {Val}
                </Button>
              );
            })}
            <Button variant="dark" onClick={() => setItem(product)}>
              Tutto
            </Button>
            <button onClick={() => setShow((prev) => !prev)}>Click</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Bottone;
