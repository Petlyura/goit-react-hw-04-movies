import React from "react";
// import styled from "styled-components";
import PropTypes from "prop-types";

// const List = styled.li`
//   margin-bottom: 20px;
// `;

// const Review = styled.p`
//   font-size: 16px;
//   margin-bottom: 5px;
// `;

// const Author = styled.span`
//   font-size: 16px;

//   & strong {
//     font-weight: 700;
//   }
// `;

const ReviewListItem = ({ review, author }) => {
  return (
    <li>
      <p>{review}</p>
      <span>
        <strong>Author:</strong> {author}
      </span>
    </li>
  );
};

ReviewListItem.propTypes = {
  review: PropTypes.string,
  author: PropTypes.string,
};

export default ReviewListItem;
