import { Link, useRouteLoaderData } from "react-router-dom";
import { ReactComponent as CartLogo } from "../../assets/svgs/cart-logo.svg";
import userImage from "../../assets/png/user.png";
import classes from "./MainNavbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartFoodsData, userProfileVisibility } from "../../store";
import User from "../User/User";
import { toggleUserProfile } from "../../store/slices/uiSlice";
import UserInfo from "../User/UserInfo";

const MainNavbar = () => {
  const { totalQuantity } = useSelector(cartFoodsData);

  const token = useRouteLoaderData("root") as string | null;

  const isUserProfileVisible = useSelector(userProfileVisibility);
  const dispatch = useDispatch();

  const toggleUserProfileHandler = () => {
    dispatch(toggleUserProfile());
  };

  return (
    <>
      {" "}
      <nav className={classes.nav}>
        <div className={classes.navbar}>
          <div className={classes.logo}>
            <Link to="/">
              <p>Noodletown</p>
            </Link>
          </div>
          <div className={classes["nav-menu"]}>
            <p>
              <Link to="/menu">Menu</Link>
            </p>

            {token && (
              <div className={classes.cart}>
                <Link to="/cart">
                  <CartLogo className={classes["cart-icon"]} />

                  <div className={classes["cart-value"]}>
                    <p>{totalQuantity}</p>
                  </div>
                </Link>
              </div>
            )}

            <div className={classes["user-details"]}>
              <img onClick={toggleUserProfileHandler} src={userImage} alt="" />
            </div>
          </div>
        </div>
      </nav>
      {isUserProfileVisible && (token ? <UserInfo /> : <User />)}
    </>
  );
};

export default MainNavbar;
