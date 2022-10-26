import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductSwiper from "../components/Shop/ProductSwiper";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import ProductContainer from "../components/Shop/ProductsContainer";
// import ShowColumnOrSingle from "../components/ShowColumnOrSingle";
import Filter from "../components/Filter";
import useCollapse from "react-collapsed";
import { FiFilter } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Shop = ({ match }) => {
  // GET DATA
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  console.log(products);

  // FILTER DATA

  // spread operator will display all the values from our category section of our data while Set will only allow the single value of each kind to be displayed

  const [item, setItem] = useState(products);
  const menuItems = [...new Set(products.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = products.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItem(newItem);
  };

  const [filterPrice, setFilterPrice] = useState(100);
  const [stockFilter, setStockFilter] = useState(-1);

  // COLLAPSE
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <>
      <Meta />
      {/* <ProductSwiper /> */}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <main style={{ marginTop: "1rem" }}>
          <Row>
            <Col md={12}>
              <h1 className="text-center">I nostri Prodotti</h1>
            </Col>
          </Row>
          <Row>
            <div className="collapsible noselect">
              <div className="header" {...getToggleProps()}>
                {isExpanded ? (
                  <div className="d-flex  align-items-center">
                    <span>CHIUDI</span>
                    <GrClose size="1.5em" className="ml-2" />
                  </div>
                ) : (
                  <div className="d-flex align-items-center">
                    <span>FILTRA</span>
                    <FiFilter size="1.5em" className="ml-2" />
                  </div>
                )}
              </div>
              <div {...getCollapseProps()}>
                <div className="content">
                  <Filter
                    setStockFilter={setStockFilter}
                    stockFilter={stockFilter}
                    setFilterPrice={setFilterPrice}
                    filterPrice={filterPrice}
                    products={products}
                    item={item}
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems}
                  />
                </div>
              </div>
            </div>

            {/* <ShowColumnOrSingle /> */}

            <div className="shop-products-container">
              {item
                .filter((prezzo) => prezzo.price <= filterPrice)
                .filter((stock) => stock.countInStock > stockFilter)
                .map((prodotto) => (
                  <div className="shop-product-container" key={prodotto.name}>
                    <div className="shop-product-image">
                      <img src={prodotto.image} alt={prodotto.names} />
                    </div>
                    <div className="shop-product-info">
                      <span>{prodotto.category}</span>
                      <h1>{prodotto.name}</h1>
                      {/* <p>{prodotto.price}</p> */}
                      <p>{prodotto.description}</p>

                      <Link to={`/product/${prodotto._id}`}>
                        {prodotto.countInStock === 0 ? (
                          <button
                            style={{
                              color: "rgb(203, 203, 203)",
                              // fontSize: "0.7rem"
                            }}
                          >
                            Indisponibile
                          </button>
                        ) : (
                          <>
                            {/* <BsBag className="mr-2 ml-2" /> */}
                            <button className="pr-2">Aggiungi</button>
                          </>
                        )}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>

            {/* <ProductContainer
              item={item}
              loading={loading}
              error={error}
              filterPrice={filterPrice}
              stockFilter={stockFilter}
            /> */}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
          {/* <Features /> */}
        </main>
      )}
    </>
  );
};

export default Shop;
