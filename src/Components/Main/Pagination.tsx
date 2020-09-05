/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLists = styled.ul`
  display: flex;
`;

const PageNumber = styled.li``;

// const PageButton = styled.button`
//   cursor: pointer;
//   font-size: 2rem;
//   color: ${props => props.theme.uiColorOrange};
//   margin: 0 0.3rem;
//   padding: 0;
//   border: none;
//   background: none;
// `;

function Pagination({
  postPerPage,
  totalPosts,
  paginate,
  match,
  currentPage,
  query
}) {

  const pageNumbers = [] as any;
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Wrapper>
      <PageLists>
        {pageNumbers.map(number => (
          <PageNumber key={number}>
            <Link
              to={`${match.url}?page=${number}`}
              onClick={() => paginate(number)}
            >
              {number}
            </Link>
          </PageNumber>
        ))}
      </PageLists>
    </Wrapper>
  );
}
export default Pagination;