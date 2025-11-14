import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="p-4 bg-blue-950 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-white">PH Logic</h1>
      </div>
      <div>
        <ul className="flex items-center gap-4 text-xl font-semibold text-white">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-white">profile</h1>
      </div>
    </div>
  );
};

export default Navbar;
