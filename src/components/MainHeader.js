import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={classes.header}>
      <nav>
        <h1>Crypto Price</h1>
        <div>
          <button className="btn">Favorites</button>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
