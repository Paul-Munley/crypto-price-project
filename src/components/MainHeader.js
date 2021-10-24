import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={classes.header}>
      <nav>
        <h1>
          <NavLink to="/" className={classes.navLink}>
            Crypto Price
          </NavLink>
        </h1>
      </nav>
    </div>
  );
};

export default MainHeader;
