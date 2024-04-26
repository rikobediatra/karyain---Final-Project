import React from "react";
import axios from "axios";
import "./Navbar.css";
import Modal from "./Modal";

export default function Navbar() {
  const [user, setUser] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const checkUser = async () => {
    const response = await axios.get("/api/user");
    if (response.data.user) {
      setUser(response.data.user);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  React.useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm fixed-top poppins">
        <div className="container">
          <a
            className="navbar-brand fw-bold text-uppercase"
            style={{ color: "#8142D0" }}
            href="/"
          >
            Karyain
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category">
                  Category
                </a>
              </li>
              {isLoggedIn ? (
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="##"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Halo, {user}
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="/dashboard">
                        My Dashboard
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="##">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">Search</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
