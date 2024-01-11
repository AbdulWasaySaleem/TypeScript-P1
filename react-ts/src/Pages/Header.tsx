import React from "react";
import { Link } from 'react-router-dom';

const Header:React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to={"/"}>
            Navbar
          </Link>

          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/helo"} className="nav-link active" aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/randomfact'} className="nav-link">
                randomfact
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/writefact"} className="nav-link active" aria-current="page" >
                  Write Fact
                </Link>
               
              </li>
              <li className="nav-item">
              <Link to={"/yourfact"} className="nav-link active" aria-current="page" >
                Details
              </Link>
              </li>
            </ul>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
