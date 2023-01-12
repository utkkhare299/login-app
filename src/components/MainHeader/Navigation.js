import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import classes from "./Navigation.module.css";

// const Navigation = (props) => {
const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {/* {props.isLoggedIn && ( */}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {/* {props.isLoggedIn && ( */}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {/* {props.isLoggedIn && ( */}
        {ctx.isLoggedIn && (
          <li>
            {/* <button onClick={props.onLogout}>Logout</button> */}
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
