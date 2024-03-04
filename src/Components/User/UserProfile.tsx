import React from "react";
import UserProfileModal from "./UserProfileModal";

import classes from "./UserProfile.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserProfile } from "../../store/slices/uiSlice";
import { getAuthToken } from "../../util/auth";
import { userInfo } from "../../store";
import { logout } from "../../store/slices/authSlice";

const UserProfile = () => {
  const dispatch = useDispatch();

  const toggleUserProfileHandler = () => {
    dispatch(toggleUserProfile());
  };

  const token = getAuthToken();

  const userDetails = useSelector(userInfo);

  return (
    <UserProfileModal onCloseUserProfile={toggleUserProfileHandler}>
      <div className={classes["user-details"]}>
        <div className={classes["user-info"]}>
          <p> Hello,</p>
          <p>{token ? userDetails.email : "Foodieee"}</p>
        </div>
        <div className={classes["auth-btn"]}>
          {token ? (
            <Link
              to="/auth?mode=login"
              onClick={() => {
                dispatch(logout());
                toggleUserProfileHandler();
              }}
            >
              Logout
            </Link>
          ) : (
            <Link to="/auth?mode=login" onClick={toggleUserProfileHandler}>
              Login
            </Link>
          )}
        </div>
      </div>
    </UserProfileModal>
  );
};

export default UserProfile;
