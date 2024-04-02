import React from 'react'
import piggyLogo from "../assets/logo.svg";
import "./index.css"

const Footernav = () => {
  return (
      <div id='footer'>

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
  )
}

export default Footernav