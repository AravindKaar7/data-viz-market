import React from "react";
import "./Nav.css";
import Digiverz from "../images/Digiverz_B.png";

function Nav({ children }) {
  return (
    //     <header>
    //     <div class="Navbar">
    //       <nav>
    //       {children}
    //       </nav>
    //     </div>
    //   </header>

    <nav>
      <img src={Digiverz} alt="show" width={150} height={50} />
      <div className="custom flex">{children}</div>
      <button className="rounded-[100px] text-zinc-900 border-zinc-900 border-2 w-[40px] h-[40px] text-1xl ">
        NA
      </button>
    </nav>
  );
}

export default Nav;
