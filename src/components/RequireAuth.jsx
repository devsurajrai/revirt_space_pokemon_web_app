import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectAuth } from "../redux/slices/authSlice";

const RequiresAuth = ({ children }) => {
  const isLoggedIn = useSelector(selectAuth);
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};

export { RequiresAuth };
