import React, { useEffect } from "react";
// import { LinkContainer } from "react-router-bootstrap";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
import Card from "../components/Card";

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <main>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button
            className="my-3"
            variant="dark"
            onClick={createProductHandler}
          >
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div
          className="cardContainer"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {products.map((product) => (
            <Card product={product} deleteHandler={deleteHandler} />
            // <div className="card m-2 cardDisplay" key={product._id}>
            //   <div class="card-body">
            //     <Link
            //       to={`/product/${product._id}`}
            //       style={{ minHeight: "50%" }}
            //     >
            //       <img
            //         className="card-img"
            //         style={{ maxWidth: "300px", maxHeight: "255px" }}
            //         src={product.image}
            //       />
            //     </Link>
            //     <div className="card-title card-header w-100 text-center">
            //       {product.name}
            //     </div>
            //     <h2>{product.price}€</h2>
            //     <div>{product.category}</div>
            //     <span>{product.brand}</span>
            //     {/* <span>{product.size}</span> */}
            //     <div className="d-flex flex-row justify-content-center my-2">
            //       <Nav.Link
            //         href={`/admin/product/${product._id}/edit`}
            //         className="m-1 mr-2"
            //       >
            //         <Button variant="light" className="btn-sm py-1 px-2">
            //           <span>Modifica</span>
            //           <i className="fas fa-edit ml-2"></i>
            //         </Button>
            //       </Nav.Link>
            //       <Button
            //         variant="danger"
            //         className="btn-sm m-1 py-1 px-2"
            //         onClick={() => deleteHandler(product._id)}
            //       >
            //         <span>Elimina</span>
            //         <i className="fas fa-trash ml-2"></i>
            //       </Button>
            //     </div>
            //   </div>
            // </div>
          ))}

          <Paginate pages={pages} page={page} isAdmin={true} />
        </div>
      )}
    </main>
  );
};

export default ProductListScreen;
