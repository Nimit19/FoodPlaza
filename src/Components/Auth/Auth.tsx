import { Link, useNavigate, useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/slices/authSlice";

import classes from "./Auth.module.css"; // Corrected import statement
import Button from "../../UI/Button";
import { toast } from "react-toastify";

const Auth: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const confirmPasswordChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const emailChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!password.trim() || !passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }
    if (!isLogin && !confirmPassword) {
      toast.error("Please confirm your password");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    dispatch(setCredentials({ userData, userToken: "dummyToken" }));
    navigate("/");
  };

  return (
    <div className={classes.authentication}>
      <div
        className={`${classes["auth-container"]} ${
          isLogin ? "" : classes.active
        }`}
        id="container"
      >
        <div
          className={`${classes["form-container"]} ${
            isLogin ? classes["sign-in"] : classes["sign-up"]
          }`}
        >
          <form onSubmit={submitHandler}>
            <p className={classes["form-title"]}>
              {isLogin ? "Sign In" : "Create Account"}
            </p>
            <div className={classes["social-icons"]}>
              <a href="https://google.com" className={classes.icon}>
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="https://google.com" className={classes.icon}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://google.com" className={classes.icon}>
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://google.com" className={classes.icon}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>

            <input
              type="email"
              placeholder="Email"
              onChange={emailChangeHandle}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={passwordChangeHandle}
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={confirmPasswordChangeHandler}
              />
            )}

            {isLogin && <a href="/">Forget Your Password?</a>}

            <Button type="submit">{isLogin ? "Sign In" : "Sign Up"}</Button>
          </form>
        </div>
        <div className={classes["toggle-container"]}>
          <div className={classes.toggle}>
            <div
              className={`${classes["toggle-panel"]} ${
                isLogin ? classes["toggle-left"] : classes["toggle-right"]
              }`}
            >
              <p className={classes["toggle-panel__title"]}>
                {isLogin ? "Welcome Back!" : "Hello, Friend!"}
              </p>
              <p className={classes["toggle-panel__description"]}>
                {isLogin
                  ? "Enter your personal details to use all of site features"
                  : "Register with your personal details to use all of site features"}
              </p>
              <button className={classes.hidden}>
                {isLogin ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div
              className={`${classes["toggle-panel"]} ${
                isLogin ? classes["toggle-right"] : classes["toggle-left"]
              }`}
            >
              <p className={classes["toggle-panel__title"]}>
                {isLogin ? "Hello, Friend!" : "Welcome Back!"}
              </p>
              <p className={classes["toggle-panel__description"]}>
                {isLogin
                  ? "Register with your personal details to use all of site features"
                  : "Enter your personal details to use all of site features"}
              </p>
              <Link
                className={classes.hidden}
                to={`?mode=${isLogin ? "signup" : "login"}`}
              >
                {isLogin ? "Create new user" : "Login"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
