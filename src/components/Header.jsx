import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faGrip } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="header">
        <ul className="navbar">
          <li className="nav-item">
            <a href="#">Gmail</a>
          </li>
          <li className="nav-item">
            <a href="#"> Images</a>
          </li>
          <li className="nav-item">
            {" "}
            {/* <button> */}
              <FontAwesomeIcon
                icon={faFlask}
                size="2xl"
                style={{ color: "#d2d5db" }}
              />
            {/* </button> */}
          </li>
          <li className="nav-item">
            {" "}
            {/* <button> */}
              <FontAwesomeIcon
                icon={faGrip}
                size="2xl"
                style={{ color: "#e4e5e7" }}
              />
            {/* </button> */}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
