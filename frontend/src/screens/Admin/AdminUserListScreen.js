import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { listUsers, deleteUser } from "../../actions/userActions";
import Card from "../../components/Card";

const AdminUserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <main>
      <h1>Users</h1>
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
          {users.map((user) => (
            <Card product={user} deleteHandler={deleteHandler} />
            // <div className="card m-2 cardDisplay p-1" key={user._id}>
            //   {/* <td>{user._id}</td> */}
            //   <div class="card-body ">
            //     <span class="card-title card-header w-100 text-center">
            //       {user.name}
            //     </span>
            //     <div>
            //       <a href={`mailto:${user.email}`}>{user.email}</a>
            //     </div>
            //     <div>
            //       <span>Is Admin: </span>
            //       {user.isAdmin ? (
            //         <i className="fas fa-check" style={{ color: "green" }}></i>
            //       ) : (
            //         <i className="fas fa-times" style={{ color: "red" }}></i>
            //       )}
            //     </div>
            //     <div className="d-flex flex-row justify-content-center my-2">
            //       <Nav.Link
            //         className="m-1 mr-2"
            //         href={`/admin/user/${user._id}/edit`}
            //       >
            //         <Button variant="light" className="btn-sm py-1 px-2">
            //           <span>Modifica</span>
            //           <i className="fas fa-edit ml-2"></i>
            //         </Button>
            //       </Nav.Link>
            //       <Button
            //         variant="danger"
            //         className="btn-sm m-1 py-1 px-2"
            //         onClick={() => deleteHandler(user._id)}
            //       >
            //         <span>Elimina</span>
            //         <i className="fas fa-trash ml-2"></i>
            //       </Button>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default AdminUserListScreen;
