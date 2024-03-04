import { redirect, LoaderFunction } from "react-router-dom";
import { toastFunc } from "./toastFunc";

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader: LoaderFunction<any> = async () => {
  const token = getAuthToken();

  if (!token) {
    toastFunc("You need required an account");
    return redirect("/auth?mode=login");
  }

  return null;
};
