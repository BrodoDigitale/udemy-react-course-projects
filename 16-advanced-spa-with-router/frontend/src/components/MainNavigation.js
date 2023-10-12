import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

export const MainNavigation = () => {
  const activeLinkClasses = (isActive) => (isActive ? classes.active : "");
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({ isActive }) => activeLinkClasses(isActive)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => activeLinkClasses(isActive)} to="/events">
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
