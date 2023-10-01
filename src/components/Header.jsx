import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faGrip } from "@fortawesome/free-solid-svg-icons"; // Use faGripH for a horizontal grid icon

// import { Apps } from "@mui/icons-material";

import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <div className="text">
          <a>
            <div className="links"> Gmail</div>
          </a>
          <a>
            <div className="links"> Images</div>
          </a>
        </div>
        <div className="icons">
          <div className="emoticons apps">
            <AppsIcon style={{borderRadius: '50%',width:'26',height:'26'}}/>
          </div>
          <div className="emoticons avatar">
            <Avatar src="" sx={{ width: 34, height: 34 ,backgroundColor: '#333333',color: 'white'}}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

// <ul className="navbar">

// <div className="nav text">
//   <li className="nav-item">
//     <a href="#">Gmail</a>
//   </li>
//   <li className="nav-item">
//     <a href="#">Images</a>
//   </li>
// </div>

// <div className="nav buttons">
//   <li className="nav-item">
//     <button>
//       <FontAwesomeIcon
//         className="icons"
//         icon={faFlask}
//         size="2xl"
//         style={{ color: "white" }} // Google's blue color
//       />
//     </button>
//   </li>
//   <li className="nav-item">
//     D
//     {/* <button> */}
//       {/* <FontAwesomeIcon
//         className="icons"
//         icon={faGrip} // Use horizontal grid icon
//         size="2xl"
//         style={{ color: "white" }} // Google's blue color
//       /> */}

//     {/* </button> */}
//   </li>
// </div>
// </ul>
