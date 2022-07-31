import React, { useEffect } from "react";
// import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listFotos, deleteFoto, createFoto } from "../actions/fotoActions";
import { FOTO_CREATE_RESET } from "../constants/fotoConstants";
import Card from "../components/Card";

const FotoListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const fotoList = useSelector((state) => state.fotoList);
  const { loading, error, fotos, page, pages } = fotoList;

  const fotoDelete = useSelector((state) => state.fotoDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = fotoDelete;

  const fotoCreate = useSelector((state) => state.fotoCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    foto: createdFoto,
  } = fotoCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: FOTO_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/fotos/${createdFoto._id}/edit`);
    } else {
      dispatch(listFotos("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdFoto,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteFoto(id));
    }
  };

  const createFotoHandler = () => {
    dispatch(createFoto());
  };

  return (
    <main>
      <Row className="align-items-center">
        <Col>
          <h1>Photos</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" variant="dark" onClick={createFotoHandler}>
            <i className="fas fa-plus"></i> Create Foto
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
        <>
          <div
            className="cardContainer"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {fotos.map((foto) => (
              <Card product={foto} deleteHandler={deleteHandler} />
              // <tr key={foto._id}>
              //   {/* <td>{foto._id}</td> */}
              //   <td>{foto.title}</td>
              //   <td>{foto.day}</td>
              //   <td>{foto.month}</td>
              //   <td>{foto.year}</td>
              //   <td>{foto.address}</td>
              //   {/* <td>{foto.link}</td>
              //     <td>{foto.image}</td> */}
              //   <td>
              //     <Nav.Link href={`/admin/fotos/${foto._id}/edit`}>
              //       <Button variant="light" className="btn-sm">
              //         <i className="fas fa-edit"></i>
              //       </Button>
              //     </Nav.Link>
              //     &nbsp; &nbsp;
              //     <Button
              //       variant="danger"
              //       className="btn-sm"
              //       onClick={() => deleteHandler(foto._id)}
              //     >
              //       <i className="fas fa-trash"></i>
              //     </Button>
              //   </td>
              // </tr>
            ))}
          </div>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </main>
  );
};

export default FotoListScreen;
