import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
const Bottone = ({ filterItem, item, setItem, menuItems, product }) => {
  useEffect(() => {
    setItem(product);
  }, [setItem, product]);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-between my-1">
        <>
          {!show && (
            <div className=" w-100 d-flex flex-row justify-content-between align-items-center">
              <span>Fitra per Categoria</span>
              <Button
                variant="outline-dark"
                onClick={() => setShow((prev) => !prev)}
              >
                Categorie
              </Button>
            </div>
          )}
          {/* {show && <div>This is your component</div>} */}
        </>
        {show && (
          <div>
            {menuItems.map((Val, id) => {
              return (
                <Button
                  variant="outline-dark"
                  onClick={() => filterItem(Val)}
                  key={id}
                  className="m-1"
                >
                  {Val}
                </Button>
              );
            })}
            <Button
              className="m-1"
              variant="outline-success"
              onClick={() => setItem(product)}
            >
              Tutto
            </Button>
            <Button
              className="m-1"
              variant="danger"
              onClick={() => setShow((prev) => !prev)}
            >
              Chiudi
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Bottone;
