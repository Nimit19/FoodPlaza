
import classes from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={classes["error-container"]}>
      <div className={classes["error-img"]}>
        <p className={classes["error-no"]}>404</p>
      </div>

      <div className={classes["error-details"]}>
        <div className={classes["error-title"]}>
          <p>Look like you're lost</p>
        </div>

        <div className={classes["error-subtitle"]}>
          <p>The page you are looking for not available!</p>
        </div>

        <div className={classes["error-btn"]}>
          <Link to="/">Go to home</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
