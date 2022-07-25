import React, { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { listMyOrders } from "../actions/orderActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import { MdDoneOutline } from "react-icons/md";

const CustomersOrdersScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  return (
    <div style={{ overflow: "scroll" }}>
      {" "}
      <Col md={12} className="d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center">
          <h2 className="mt-5" style={{ textAlign: "center" }}>
            My Orders
          </h2>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant="danger">{errorOrders}</Message>
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
              {/* <th scope="col">ID</th>
                  <th scope="col">DATE</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col">PAID</th>
                  <th scope="col">DELIVERED</th>
                  <th scope="col"></th> */}

              {orders.map((order) => (
                <div
                  className="card m-2"
                  style={{ flex: "0 1 30%" }}
                  key={order._id}
                >
                  <div class="card-body">
                    <h5 class="card-title card-header">{order._id}</h5>
                    <h2>{order.totalPrice}€</h2>
                    <h5>{order.createdAt.substring(0, 10)}</h5>
                    <div>
                      {order.isPaid ? (
                        <div>
                          <MdDoneOutline
                            className="mr-2"
                            style={{ color: "green" }}
                          />
                          <span>{order.paidAt.substring(0, 10)}</span>
                        </div>
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </div>
                    <div>
                      {order.isDelivered ? (
                        <div>
                          <MdDoneOutline
                            className="mr-2"
                            style={{ color: "green" }}
                          />
                          <span>{order.deliveredAt.substring(0, 10)}</span>
                        </div>
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </div>
                    <td>
                      <Nav.Link href={`/order/${order._id}`}>
                        {/* <Button className="btn-sm" variant="light"> */}
                        <Button class="btn btn-primary" variant="dark">
                          Details
                        </Button>
                        {/* </Button> */}
                      </Nav.Link>
                    </td>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Col>
    </div>
  );
};

export default CustomersOrdersScreen;
