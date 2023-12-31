import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import { AuthContext } from "../../context/auth-context";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLogged && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLogged && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLogged && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
