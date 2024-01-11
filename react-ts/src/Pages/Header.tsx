import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid ">
          <h1 className="navbar-brand disabled:" >
            Navbar
          </h1>

 
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
            <li className="nav-item">
              <Link to={"/randomfact"} className="nav-link">
                Randomfact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/writefact"}
                className="nav-link active"
                aria-current="page"
              >
                Write Fact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/yourfact"}
                className="nav-link active"
                aria-current="page"
              >
                Details
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Header;
