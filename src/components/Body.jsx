import React from "react";
import "./Body.css"; // Import the stylesheet for this component
import SearchIcon from "@mui/icons-material/Search"; // Import the SearchIcon component from Material-UI
import MicIcon from "@mui/icons-material/Mic"; // Import the MicIcon component from Material-UI
import { Button } from "@mui/material"; // Import the Button component from Material-UI
import ClearIcon from "@mui/icons-material/Clear"; // Import the ClearIcon component from Material-UI

function Body() {
  return (
    <>
      <section className="content"> {/* Content section */}
        <div className="logo"> {/* Logo container */}
          <img
            src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
            alt="logo"
          />
        </div>
        <form class="rows search-bar"> {/* Form for search bar */}
          <div class="search-bar"> {/* Search bar container */}
            <SearchIcon className="icon search" /> {/* SearchIcon with custom styles */}
            <input
              type="text"
              placeholder="Search Google or type a URL"
            ></input> {/* Input field for search */}
            <MicIcon className="icon mic" /> {/* MicIcon with custom styles */}
          </div>
          <div className="buttons"> {/* Buttons container */}
              <button >Google Search</button> {/* Google Search button */}
              <button >I'm Feeling Lucky</button> {/* I'm Feeling Lucky button */}
          </div>
        </form>
      </section>
    </>
  );
}

export default Body;
