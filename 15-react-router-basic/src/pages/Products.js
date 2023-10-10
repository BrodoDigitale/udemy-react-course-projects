import React from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "product1" },
  { id: "p2", title: "product2" },
  { id: "p3", title: "product3" },
];
export const Products = () => {
  return (
    <>
      <h1>This is my Products</h1>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`${product.title}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
