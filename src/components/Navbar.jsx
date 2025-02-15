import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); //calling logout fun from Authcontext
  };
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/quiz" className="link">
        Quiz
      </Link>
      <Link to="/results" className="link">
        Results
      </Link>
      {/* <Link to="/login" className="link">
        Login
      </Link> */}
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
