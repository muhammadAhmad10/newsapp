import React from "react";
import "../styles/header.css";

const Header = ({ handleOptionChange }) => {
  const handleOptionClick = (option) => {
    handleOptionChange(option);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="home">
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
              <a
                className="nav-link active"
                aria-current="page"
                href="home"
                onClick={() => handleOptionClick("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleOptionClick("latest")}
              >
                Latest
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleOptionClick("tech")}
              >
                Tech
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleOptionClick("sports")}
              >
                Sports
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
