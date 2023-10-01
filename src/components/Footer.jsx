// footer.jsx
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <section className="footer">
        <button>
          <FontAwesomeIcon
            className="pencil"
            icon={faPencil}
            size="1x" // Adjust the size to your preference
            style={{ color: "#a8aeb8" }}
          />
          Customize Chrome
        </button>
      </section>
    </>
  );
}

export default Footer;
