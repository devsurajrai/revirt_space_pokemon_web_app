/* eslint-disable no-undef */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectAuth,
  selectUserInfo,
  setAuth,
  setUserInfo,
} from "../redux/slices/authSlice";
import jwt_decode from "jwt-decode";
const Login = () => {
  const isLoggedIn = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCallbackResponse = (response) => {
    if (response.credential) {
      dispatch(setAuth(!isLoggedIn));
      let userObject = response.credential && jwt_decode(response.credential);
      dispatch(setUserInfo(userObject));
      navigate("/");
    } else console.log("Something Went Wrong");
  };
  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id:
        "566839184448-7qjafofhapeirodo7ub7kp08t61pnu2b.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("login-button"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="flex  justify-center  min-h-[100vh] bg-slate-300">
      <button
        id="login-button"
        onClick={() => {
          dispatch(setAuth(!isLoggedIn));
          navigate("/");
        }}
      ></button>
    </div>
  );
};

export default Login;
