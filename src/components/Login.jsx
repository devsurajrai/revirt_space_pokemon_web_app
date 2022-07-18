import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuth, setAuth } from "../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuth);
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center min-h-[100vh] bg-slate-300">
      <button
        className="flex justify-center items-center bg-white p-2 w-[25vw] rounded-md mt-[12rem] cursor-pointer"
        onClick={() => {
          dispatch(setAuth(!isLoggedIn));
          navigate("/");
        }}
      >
        <img
          src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1"
          alt="google_img"
          className="w-10"
        />
        <span className="inline-block p-2 font-semibold hover:text-green-700 ">
          LOGIN WITH GOOGLE
        </span>
      </button>
    </div>
  );
};

export default Login;
