import { Bounce, toast } from "react-toastify";

// let toastId;
export const toastFunc = (toastContent: string) => {
  toast.dismiss();
  toast.warn(toastContent, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
