import React, { useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { listOrders } from "../../actions/orderActions";
import { MdDoneOutline } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const AdminOrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <main>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div
          // striped
          // bordered
          // hover
          // responsive
          className="cardContainer"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {orders.map((order) => (
            <div className="card m-2 cardDisplay" key={order._id}>
              <div class="card-body">
                <span class="card-title card-header">{order._id}</span>
                <span>{order.user && order.user.name}</span>
                <h5>{order.createdAt.substring(0, 10)}</h5>
                <h2>€{order.totalPrice}</h2>

                {order.isPaid ? (
                  <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                    <span>Pagato: </span>
                    <div>
                      <MdDoneOutline
                        className="mr-2"
                        style={{ color: "green" }}
                      />
                      <span>{order.paidAt.substring(8, 10)}</span>/{/* MONTH */}
                      <span>{order.paidAt.substring(5, 7)}</span>/{/* YEAR */}
                      <span>{order.paidAt.substring(0, 4)}</span>
                    </div>
                  </div>
                ) : (
                  <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                    <span>Pagato: </span>
                    <div>
                      <AiOutlineClose
                        className="mr-1"
                        style={{ color: "red", fontWeight: "800" }}
                      ></AiOutlineClose>
                      <span> Non Pagato</span>
                    </div>
                  </div>
                )}

                {order.isDelivered ? (
                  <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                    <span> Spedito: </span>
                    <div>
                      <MdDoneOutline
                        className="mr-2"
                        style={{ color: "green" }}
                      />
                      {/* DAY */}
                      <span>{order.deliveredAt.substring(8, 10)}</span>/
                      {/* MONTH */}
                      <span>{order.deliveredAt.substring(5, 7)}</span>/
                      {/* YEAR */}
                      <span>{order.deliveredAt.substring(0, 4)}</span>
                      {/* <span>{order.deliveredAt.substring(0, 10)}</span> */}
                    </div>
                  </div>
                ) : (
                  <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                    <span>Spedito: </span>
                    <div>
                      <AiOutlineClose
                        className="mr-1"
                        style={{ color: "red", fontWeight: "800" }}
                      ></AiOutlineClose>
                      <span> Non Spedito</span>
                    </div>
                  </div>
                )}

                <div>
                  <Nav.Link href={`/order/${order._id}`} className="mt-3">
                    <Button class="btn btn-primary" variant="dark">
                      Details
                    </Button>
                  </Nav.Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default AdminOrderListScreen;
