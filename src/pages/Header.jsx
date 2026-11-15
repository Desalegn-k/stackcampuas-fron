import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../componenets/Header.css";
import { Appstate } from "../App";

export default function Header() {
  const { user, setUser } = useContext(Appstate);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser({});
      navigate("/login");
    }
  }

  function handleHome() {
    const token = localStorage.getItem("token");
    if (!token) {
       
      navigate("/login");
      return;
    }
    navigate("/");
  }
  function handlehow(){
    navigate('/HowItWorks')

  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="site-header-shell">
      <header className="app-header">
        <Link to="#">
          <img src="/stack.png" alt="StackCampus" className="logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <button className="home1" onClick={handleHome}>
            Home
          </button>

          <button className="how" onClick={handlehow}>
            How it Works
          </button>

          {user && user.firstname ? (
            <>
              <button
                type="button"
                onClick={handleLogout}
                className="logout"
              >
                Logout
              </button>
              <span className="welcome">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.firstname}`}
                  alt="Profile"
                  className="avatar-pro"
                />
                <span className="usernamepro">{user.firstname}</span>
              </span>
            </>
          ) : (
            <>
              <Link to="/register" className="signup">Sign Up</Link>
              <Link to="/login" className="login-btn1">Login</Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="menu-container">
          <button
            type="button"
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <img src="/menu.png" alt="" />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu" id="mobile-navigation">
          <button type="button" onClick={handleHome} className="home">
            Home
          </button>
          <Link to="/HowItWorks" className="haw-m">
            How it Works
          </Link>

          {user && user.firstname ? (
            <>
              <button type="button" onClick={handleLogout} className="logout">
                Logout
              </button>
              <div className="mobile-user">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.firstname}`}
                  alt="Profile"
                  className="avatar-pro"
                />
                <span className="pro-m">{user.firstname}</span>
              </div>
            </>
          ) : (
            <Link to="/login" className="login-m">
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
