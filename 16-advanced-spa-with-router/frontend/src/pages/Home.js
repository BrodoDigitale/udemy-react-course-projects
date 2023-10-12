import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {

  return (
    <>
      <h1>This is my homepage</h1>
      <p>
        Go to <Link to="/events">Events</Link>
      </p>
    </>
  );
};
