import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="search-navbar">
      <Form.Control
        // type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Cerca Prodotti"
        // className="mr-sm-2 ml-sm-5"
        type="search"
        className="me-2"
        aria-label="Search"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Cerca
      </Button>
    </Form>
  );
};

export default SearchBox;
