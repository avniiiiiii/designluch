import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navdiv">
          <div className="logo">
            <a href="#">Designluch</a>
          </div>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <button>Sign up</button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
