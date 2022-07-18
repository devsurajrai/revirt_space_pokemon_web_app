import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Button.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAuth,
  setAuth,
  setUserInfo,
  selectUserInfo,
} from "../redux/slices/authSlice";
export const Header = () => {
  const isLoggedIn = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, picture } = useSelector(selectUserInfo);
  let activeStyle = {
    fontWeight: "bold",
  };
  // console.log(userInfo);
  return (
    <header
      className={`p-4 flex ${isLoggedIn ? "justify-between" : "justify-end"}`}
    >
      {isLoggedIn && (
        <section className="flex justify-center items-center h-full">
          <img
            src={picture}
            className="rounded-full h-[3rem]"
            alt="user_picture"
          />
          <div className="flex flex-col p-2 font-semibold text-green-700">
            <span>{name}</span>
            <span>{email}</span>
          </div>
        </section>
      )}
      <section>
        <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyle : undefined;
          }}
          to="/"
        >
          <Button
            className={`p-2 m-2 border-none rounded-md hover:opacity-80 bg-white  w-[7rem] text-green-700`}
            buttonText="Explore"
          />
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyle : undefined;
          }}
          to="/favourites"
        >
          <Button
            className={`p-2 m-2 border-none rounded-md hover:opacity-80 bg-white  w-[7rem] text-green-700`}
            buttonText="Favourites"
          />
        </NavLink>
        {!isLoggedIn && (
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
            to="/login"
          >
            <Button
              className={`p-2 m-2 border-none rounded-md hover:opacity-80 bg-white  w-[7rem] text-green-700`}
              buttonText="Login"
            />
          </NavLink>
        )}
        {isLoggedIn && (
          <Button
            className={`p-2 m-2 border-none rounded-md hover:opacity-80 bg-white  w-[7rem] text-green-700`}
            buttonText="Logout"
            callback={() => {
              dispatch(setAuth(!isLoggedIn));
              dispatch(setUserInfo({}));
              navigate("/login");
            }}
          />
        )}
      </section>
    </header>
  );
};
