import { toast } from "react-toastify";

export const ToastError = (obj = []) => {
  const errors = obj?.error?.data?.errors;
  console.log("<<errors>>", errors);
  if (!errors?.length) {
    for (let key in errors) {
      toast.error(errors[key][0]);
    }
  }
};
