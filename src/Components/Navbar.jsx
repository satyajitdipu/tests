import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import hamburger_logo from "../assets/hamburger.png";
import bell from "../assets/vtx_bell_icon.png";
import whitebell from "../assets/whitebell.png";
import logo_beta from "../assets/logowithoutborder.png";
import settings_img from "../assets/settings.png";

const Navbar = () => {
  const [userDatas, setUserDatas] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to fetch user data from the API
  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://virtualtxai.com/api/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setUserDatas(response.data);
      setIsAuthenticated(true); // Set authenticated state to true
    } catch (error) {
      console.error("Error fetching user data:", error.response?.data || error.message);
      setIsAuthenticated(false); // Set authenticated state to false if there's an error
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://virtualtxai.com/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response.data);

      // Clear the token from local storage after logout
      localStorage.removeItem("token");
      setIsAuthenticated(false); // Set authenticated state to false after logout
      navigate("/login"); // Optionally redirect to the login page
    } catch (error) {
      console.error("Error logging out:", error.response?.data || error.message);
    }
  };

  // Navigate to account page
  const handleClick = () => {
    navigate("/myaccount");
  };

  const handleNotificationpage = () => {
    navigate("/notification");
    setbellicon(false);
  };

  const handleAboutUsClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
  
    // Check if we are already on the home page
    if (window.location.pathname !== "/") {
      navigate("/"); // Navigate to home first
      setTimeout(() => {
        const aboutSection = document.getElementById("about-us");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Wait for navigation to complete
    } else {
      // Scroll directly if already on home page
      const aboutSection = document.getElementById("about-us");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  

  const [menuopen, Setmenuopen] = useState(false);
  const [bellicon, setbellicon] = useState(false);

  return (
    <div>
      <section className="nav_section">
        <div className="container">
          <nav className="d-flex justify-content-between align-items-center">
            <div className="logo_sec d-flex align-items-center">
              <img src={logo_beta} className="img-fluid" alt="VTXGames Logo" />
            </div>
            <ul className="d-flex justify-content-between align-items-center">
              <li className="nav_link">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
              <NavLink to={"/"} onClick={handleAboutUsClick}>About us</NavLink>
              </li>
              <li>
                <NavLink to={"contactus"}>Contact us</NavLink>
              </li>
              <li>
                <NavLink to={"pricing"}>Pricing</NavLink>
              </li>
              <li>
                <NavLink to={"exploregames"}>All games</NavLink>
              </li>
              <li>
                {isAuthenticated ? (
                  <NavLink to={"myprofile"}>My Profile</NavLink>
                ) : (
                  <NavLink to={"/login"}>Login</NavLink>
                )}
              </li>
              <li>
                <NavLink to={"therapycard"}>Therapy card</NavLink>
              </li>
            </ul>
            <div className="button_sec position-relative">
              <button className="button_class me-2 d-none">Free games</button>

              {isAuthenticated ? (
                <button onClick={handleLogout} className="button_class ms-2">
                  Logout
                </button>
              ) : (
                <button onClick={handleClick} className="button_class">
                  Account
                </button>
              )}
            </div>
          </nav>
        </div>
      </section>

      <section className="mobile_menu">
        <div className="container">
          <nav>
            <div className="logo_sec d-flex align-items-center justify-content-between">
              <h4 className="fw-bold">VTXGames</h4>
              <div
                onClick={() => Setmenuopen(!menuopen)}
                className={menuopen ? "" : "hamburger_icon"}
              >
                <img src={hamburger_logo} alt="Menu" />
              </div>
            </div>
            <ul className={menuopen ? "" : "d-none"}>
              <li onClick={() => Setmenuopen(!menuopen)}>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li onClick={() => Setmenuopen(!menuopen)}>
                <NavLink to={"about"}>About us</NavLink>
              </li>
              <li onClick={() => Setmenuopen(!menuopen)}>
                <NavLink to={"contactus"}>Contact us</NavLink>
              </li>
              <li onClick={() => Setmenuopen(!menuopen)}>
                <NavLink to={"pricing"}>Pricing</NavLink>
              </li>
              <li onClick={() => Setmenuopen(!menuopen)}>
                <NavLink to={"exploregames"}>All games</NavLink>
              </li>
              <li onClick={() => Setmenuopen(!menuopen)}>
                {isAuthenticated ? (
                  <NavLink to={"myprofile"}>My Profile</NavLink>
                ) : (
                  <NavLink to={"/login"}>Login</NavLink>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
