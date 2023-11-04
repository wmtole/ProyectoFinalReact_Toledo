import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      aria-label="Ninth navbar example"
    >
      <div className="container-xl">
        <Link to="/">
          <img
            className="navbar-brand logo"
            
            src="../imgs/logo.png"
            alt="logo"
          ></img>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/category/Apple" className="nav-link">
                Apple
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Samsung" className="nav-link">
                Samsung
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Xiaomi" className="nav-link">
                Xiaomi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Motorola" className="nav-link">
                Motorola
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Accesorios" className="nav-link">
                Accesorios
              </Link>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
