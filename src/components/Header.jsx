import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Button.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, setAuth } from "../redux/slices/authSlice";
export const Header = () => {
  const isLoggedIn = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let activeStyle = {
    fontWeight: "bold",
  };
  return (
    <header className="bg-slate-300 p-4 flex justify-end">
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
            navigate("/login");
          }}
        />
      )}
    </header>
  );
};
