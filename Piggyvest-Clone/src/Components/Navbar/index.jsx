import piggyLogo from "../../assets/logo.svg";

import React, { useState, useEffect } from "react";
import "../../Components/index.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="navbar">
        <div className="sub_nav">
          <img src={piggyLogo} alt="" />
          <ul>
            <li>Save</li>
            <li>Invest</li>
            <li>Stories</li>
            <li>Resources</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="nav__buttons">
          <button className="btn1">Sign in</button>
          <button className="btn2">
            Create free account
          </button>
        </div>
      </div>
     </nav>
  );
};

export default Navbar;
