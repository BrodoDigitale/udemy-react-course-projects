import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/products");
    }
    return (
      <>
        <h1>This is my homepage</h1>
        <p>
          Go to <Link to="/products">products page</Link>
        </p>
        <button onClick={navigateHandler}>Go to Products!</button>
      </>
    );
}