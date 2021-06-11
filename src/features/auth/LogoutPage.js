import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogout } from "./redux";
import { REQUEST_STATUS } from "../../utils";

const LogoutPage = () => {
  const status = useSelector((state) => state.currentUser.status);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (status === REQUEST_STATUS.removed) {
      history.push("/");
    }
    dispatch(userLogout());
  }, [dispatch, status, history]);

  return null;
};

export default LogoutPage;
