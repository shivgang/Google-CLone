// // header.jsx
// import React from "react";
// import "./Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFlask, faGrip } from "@fortawesome/free-solid-svg-icons";

// function Header() {
//   return (
//     <header className="header">
//       <ul className="navbar">
//         <li className="nav-item">
//           <a href="/mail">Gmail</a>
//         </li>
//         <li className="nav-item">
//           <a href="/images">Images</a>
//         </li>
//         <li className="nav-item">
//           <button>
//             <FontAwesomeIcon
//               className="icons"
//               icon={faFlask}
//               size="lg"
//               style={{ color: "white" }}
//             />
//           </button>
//         </li>
//         <li className="nav-item">
//           <button>
//             <FontAwesomeIcon
//               className="icons"
//               icon={faGrip}
//               size="lg"
//               style={{ color: "white" }}
//             />
//           </button>
//         </li>
//       </ul>
//     </header>
//   );
// }

// export default Header;


import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faGrip } from "@fortawesome/free-solid-svg-icons"; // Use faGripH for a horizontal grid icon

function Header() {
  return (
    <header className="header">
      <ul className="navbar">
        <li className="nav-item">
          <a href="#">Gmail</a>
        </li>
        <li className="nav-item">
          <a href="#">Images</a>
        </li>
        <li className="nav-item">
          <button>
            <FontAwesomeIcon
            className="icons"
              icon={faFlask}
              size="2xl"
              style={{ color: "white" }} // Google's blue color
            />
          </button>
        </li>
        <li className="nav-item">
          <button>
            <FontAwesomeIcon
            className="icons"
              icon={faGrip} // Use horizontal grid icon
              size="2xl"
              style={{ color: "white" }} // Google's blue color
            />
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
