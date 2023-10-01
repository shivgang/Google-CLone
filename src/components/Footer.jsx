// Importing necessary dependencies and components
import React from "react";
import "./Footer.css"; // Importing styles for the Footer component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons"; // Importing a FontAwesome icon

// Defining the Footer component
function Footer() {
  return (
    <>
      {/* Creating a section with a CSS class "footer" */}
      <section className="footer">
        {/* Creating a button element */}
        <button>
          {/* Adding a FontAwesome icon (pencil) */}
          <FontAwesomeIcon
            className="pencil" // Applying a CSS class to the icon
            icon={faPencil} // Setting the FontAwesome icon (pencil)
            size="1x" // Setting the icon size
            style={{ color: "#a8aeb8" }} // Styling the icon with a specific color
          />
          Customize Chrome {/* Text displayed next to the icon */}
        </button>
      </section>
    </>
  );
}

// Exporting the Footer component as the default export
export default Footer;
