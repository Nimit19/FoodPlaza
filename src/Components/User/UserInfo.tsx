import React from "react";

import classes from "./UserInfo.module.css";
import CardModal from "../../UI/CardModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserProfile } from "../../store/slices/uiSlice";
import { Link } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";
import { userInfo } from "../../store";
const UserInfo = () => {
  const dispatch = useDispatch();

  const toggleUserProfileHandler = () => {
    dispatch(toggleUserProfile());
  };

  const userDetails = useSelector(userInfo);

  return (
    <CardModal onCloseCard={toggleUserProfileHandler}>
      <div className={classes["user-info"]}>
        <p>Hello</p>
        <p>{userDetails.email}</p>
        <div className={classes["auth-btn"]}>
          <Link
            to="/auth?mode=login"
            onClick={() => {
              dispatch(logout());
              toggleUserProfileHandler();
            }}
          >
            Logout
          </Link>
        </div>
      </div>
    </CardModal>
  );
};

export default UserInfo;
