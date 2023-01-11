import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            NOTEsforall
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link mx-3" to="/CS-206">
                  CS-206
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/CS-207">
                  CS-207
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/CS-208">
                  CS-208
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/CS-209">
                  CS-209
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/MH-206 ">
                  MH-206
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
