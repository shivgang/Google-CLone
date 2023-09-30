import React from "react";
import "./Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

function Body() {
  return (
    <>
      <section className="content">
        <div className="logo">Google</div>
        <div class="search-bar">
          <input type="text" placeholder="Search Google or type a URL"></input>
          <FontAwesomeIcon
            className="magnifying-glass"
            size="lg"
            icon={faMagnifyingGlass}
            style={{ color: "#bfc9d9" }}
          />
          <FontAwesomeIcon
            className="microphone"
            icon={faMicrophone}
            size="xl"
            style={{ color: "#dbdfe6" }}
          />
          <FontAwesomeIcon className="image"
          icon={faImage} size="xl" style={{color: "#dce1ea",}} />
        </div>
      </section>
    </>
  );
}

export default Body;
