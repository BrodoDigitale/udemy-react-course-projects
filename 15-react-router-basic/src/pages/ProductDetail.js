import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Product A</h1>
      <p>{params.productId}</p>
    </>
  );
};
