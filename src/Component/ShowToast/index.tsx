import { Flip, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (message, type) => {
  const style: ToastOptions = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    // transition: Bounce,
  };

  let toastElement;
  switch (type) {
    case "success":
      toastElement = toast.success(message, style);
      break;
    case "error":
      console.log(message, style);

      return toast.error(message, style);

    case "info":
      toastElement = toast.info(message, style);
      break;
    default:
      toastElement = toast(message, style);
      break;
  }

  return toastElement;
};

export { showToast };
