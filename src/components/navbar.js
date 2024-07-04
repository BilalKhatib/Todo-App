import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="col">
        <h1>Todo App</h1>
        <small>By Bilal Khatib</small>
      </div>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "navbarListItem active" : "navbarListItem"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/add-todo" 
            className={({ isActive }) => isActive ? "navbarListItem active" : "navbarListItem"}
          >
            Add Todo
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
