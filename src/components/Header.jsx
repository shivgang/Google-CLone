import React from "react";
import "./Header.css"; // Import the stylesheet for this component
import AppsIcon from "@mui/icons-material/Apps"; // Import the AppsIcon component from Material-UI
import { Avatar } from "@mui/material"; // Import the Avatar component from Material-UI

function Header() {
  return (
    <header className="header"> {/* Header container */}
      <div className="navbar"> {/* Navbar container */}
        <div className="text"> {/* Text links container */}
          <a>
            <div className="links"> Gmail</div> {/* Gmail link */}
          </a>
          <a>
            <div className="links"> Images</div> {/* Images link */}
          </a>
        </div>
        <div className="icons"> {/* Icons container */}
          <div className="emoticons apps"> {/* AppsIcon container */}
            <AppsIcon style={{ borderRadius: '50%', width: '26', height: '26' }} /> {/* AppsIcon with custom styles */}
          </div>
          <div className="emoticons avatar"> {/* Avatar container */}
            <Avatar src="" sx={{ width: 34, height: 34, backgroundColor: '#333333', color: 'white' }} /> {/* Avatar with custom styles */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
