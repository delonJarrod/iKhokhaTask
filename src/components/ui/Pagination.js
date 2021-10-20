import React from "react";
import { Nav } from "react-bootstrap";

function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Nav>
  );
}

export default Pagination;
