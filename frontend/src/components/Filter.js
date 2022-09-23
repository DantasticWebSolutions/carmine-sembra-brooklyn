import React from "react";
import Prezzo from "../components/Prezzo";
import Bottone from "../components/Bottone";
import OutOfStock from "../components/OutOfStock";
const Filter = ({
  setStockFilter,
  stockFilter,
  setFilterPrice,
  filterPrice,
  products,
  item,
  filterItem,
  setItem,
  menuItems,
}) => {
  return (
    <>
      {/* <Button variant="dark" onClick={handleShow}>
        Launch
      </Button>
      <div>{stockFilter}</div>
      <div>{filterPrice}</div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="offcanvasHeight"
        placement="bottom"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body> */}
      <div className="d-flex flex-row ">
        <OutOfStock setStockFilter={setStockFilter} stockFilter={stockFilter} />

        <Prezzo setFilterPrice={setFilterPrice} filterPrice={filterPrice} />
        <Bottone
          product={products}
          item={item}
          filterItem={filterItem}
          setItem={setItem}
          menuItems={menuItems}
        />
      </div>
      {/* </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
};

export default Filter;
