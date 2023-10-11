import React from "react";
import { useParams, Link } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Product A</h1>
      <p>{params.productId}</p>
      <Link to={".."} relative='path'>Go Back</Link>
    </>
  );
};
