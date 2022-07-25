import React from "react";
import { Pagination } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Nav.Link
            key={x + 1}
            href={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </Nav.Link>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
