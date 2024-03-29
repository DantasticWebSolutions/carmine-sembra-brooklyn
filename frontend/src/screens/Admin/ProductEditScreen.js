import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import {
  listProductDetails,
  updateProduct,
} from "../../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../../constants/productConstants";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [countInStockXS, setCountInStockXS] = useState(0);
  const [countInStockS, setCountInStockS] = useState(0);
  const [countInStockM, setCountInStockM] = useState(0);
  const [countInStockL, setCountInStockL] = useState(0);
  const [countInStockXL, setCountInStockXL] = useState(0);
  const [description, setDescription] = useState("");

  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setImage2(product.image2);
        setImage3(product.image3);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setCountInStockXS(product.countInStockXS);
        setCountInStockS(product.countInStockS);
        setCountInStockM(product.countInStockM);
        setCountInStockL(product.countInStockL);
        setCountInStockXL(product.countInStockXL);
        setDescription(product.description);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    setImage(e);
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

  const uploadFileHandler2 = async (e) => {
    setImage2(e);
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

      setImage2(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const uploadFileHandler3 = async (e) => {
    setImage3(e);
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

      setImage3(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        image2,
        image3,
        brand,
        category,
        description,
        countInStock,
        countInStockXS,
        countInStockS,
        countInStockM,
        countInStockL,
        countInStockXL,
      })
    );
  };

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
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
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                style={{ textTransform: "capitalize" }}
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {product.image ? (
              <img
                src={product.image}
                alt="First"
                style={{ width: "150px", height: "150px", margin: "20px 0" }}
              />
            ) : (
              ""
            )}
            <Form.Group
            // controlId="image"
            >
              <Form.Label>Choose Image</Form.Label>
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
                // custom
                onChange={uploadFileHandler}
              ></Form.Control>

              {uploading && <Loader />}
            </Form.Group>
            {product.image2 ? (
              <img
                src={product.image2}
                alt="Second"
                style={{ width: "150px", height: "150px", margin: "20px 0" }}
              />
            ) : (
              ""
            )}
            <Form.Group>
              <Form.Label>Choose Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image2}
                onChange={(e) => setImage2(e.target.value)}
              ></Form.Control>
              <Form.Control
                type="file"
                id="image-file2"
                label="Choose File"
                // custom
                onChange={uploadFileHandler2}
              ></Form.Control>

              {uploading && <Loader />}
            </Form.Group>
            {product.image3 ? (
              <img
                src={product.image3}
                alt="Third"
                style={{ width: "150px", height: "150px", margin: "20px 0" }}
              />
            ) : (
              ""
            )}
            <Form.Group>
              <Form.Label>Choose Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image3}
                onChange={(e) => setImage3(e.target.value)}
              ></Form.Control>
              <Form.Control
                type="file"
                id="image-file3"
                label="Choose File"
                // custom
                onChange={uploadFileHandler3}
              ></Form.Control>

              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="countInStockXS">
              <Form.Label>Count In Stock XS</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock XS"
                value={countInStockXS}
                onChange={(e) => setCountInStockXS(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="countInStockS">
              <Form.Label>Count In Stock S</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock S"
                value={countInStockS}
                onChange={(e) => setCountInStockS(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="countInStockM">
              <Form.Label>Count In Stock M </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock M"
                value={countInStockM}
                onChange={(e) => setCountInStockM(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="countInStockL">
              <Form.Label>Count In Stock L </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock L"
                value={countInStockL}
                onChange={(e) => setCountInStockL(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="countInStockXL">
              <Form.Label>Count In Stock XL </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock XL"
                value={countInStockXL}
                onChange={(e) => setCountInStockXL(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="dark" className="my-3">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
