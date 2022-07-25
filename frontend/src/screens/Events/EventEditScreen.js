import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { listEventDetails, updateEvent } from "../../actions/eventActions";
import { EVENT_UPDATE_RESET } from "../../constants/eventConstants";

const EventEditScreen = ({ match, history }) => {
  const eventId = match.params.id;

  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const eventDetails = useSelector((state) => state.eventDetails);
  const { loading, error, event } = eventDetails;

  const eventUpdate = useSelector((state) => state.eventUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = eventUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: EVENT_UPDATE_RESET });
      history.push("/admin/eventlist");
    } else {
      if (!event.title || event._id !== eventId) {
        dispatch(listEventDetails(eventId));
      } else {
        setTitle(event.title);
        setDay(event.day);
        setMonth(event.month);
        setAddress(event.address);
        setImage(event.image);
      }
    }
  }, [dispatch, history, eventId, event, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateEvent({
        _id: eventId,
        title,
        day,
        month,
        image,
        address,
      })
    );
  };

  return (
    <>
      <Link to="/admin/eventlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="day">
              <Form.Label>Day</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Day"
                value={day}
                maxlength="2"
                onChange={(e) => setDay(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="month">
              <Form.Label>Month</Form.Label>
              <span>&nbsp;(Massimo 3 caratteri: GIU, AGO)</span>
              <Form.Control
                type="text"
                placeholder="Enter Month"
                value={month}
                maxlength="3"
                onChange={(e) => setMonth(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <span>&nbsp;(Non cambiare nome immagine)</span>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.Control
                type="file"
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.Control>
              {uploading && <Loader />}
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default EventEditScreen;
