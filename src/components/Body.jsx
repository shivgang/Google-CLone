import React from "react";
import "./Body.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
// import { faImage } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function Body() {
  return (
    <>
      <section className="content">
      <div className='logo' >
          <img src='https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg' alt='logo'/>
      </div>
      <form class="search-bar">
        <div class="search-bar">
          <SearchIcon className='icon search'/>
            <input type="text" placeholder="Search Google or type a URL"></input>
            <MicIcon className='icon mic'/>
            {/* <FontAwesomeIcon
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
            icon={faImage} size="xl" style={{color: "#dce1ea",}} /> */}
            </div>
        </form>
      </section>
    </>
  );
}

export default Body;


// import React from "react";
// import "./Body.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
// import { faImage } from "@fortawesome/free-solid-svg-icons";

// function Body() {
//   return (
//     <>
//       <section className="content">
//         <div className="logo">
//           Google
//         </div>
//         <div class="search-bar">
//           <input type="text" placeholder="Search Google or type a URL"></input>
//           <FontAwesomeIcon
//             className="magnifying-glass"
//             size="lg"
//             icon={faMagnifyingGlass}
//             style={{ color: "#bfc9d9" }}
//           />
//           <FontAwesomeIcon
//             className="microphone"
//             icon={faMicrophone}
//             size="xl"
//             style={{ color: "#dbdfe6" }}
//           />
//           <FontAwesomeIcon className="image"
//           icon={faImage} size="xl" style={{color: "#dce1ea",}} />
//         </div>
//       </section>
//     </>
//   );
// }

// export default Body;
