import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = ({ handleOptionChange }) => {
  const handleOptionClick = (option) => {
    handleOptionChange(option);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/logo1.png"}
            alt="logo of news"
          />
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={"/"}
                onClick={() => handleOptionClick("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"/latest"}
                onClick={() => handleOptionClick("latest")}
              >
                Latest
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"/tech"}
                onClick={() => handleOptionClick("tech")}
              >
                Tech
              </Link>
            </li>

            <li>
              <Link
                className="nav-link"
                to={"/sports"}
                onClick={() => handleOptionClick("sports")}
              >
                Sports
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
