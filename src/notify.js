import { toast } from "react-toastify";

export const notify = (type, desc) => {
  if (type === 1) {
    toast.success(desc, {
      position: toast.POSITION.RIGHT
    });
  } else if (type === 0) {
    toast.error(desc, {
      position: toast.POSITION.RIGHT
    });
  } else if (type === 2) {
    toast.warn(desc, {
      position: toast.POSITION.RIGHT
    });
  }
};
