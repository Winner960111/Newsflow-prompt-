import React from "react";
import "../../assests/styles/auth.scss";
import authMarkTopImg from "../../assests/image/Log_SingIn.png";
import { Link } from "react-router-dom";
// import authMarkDownImg from "../../assests/image/";

function Mark(props) {
  return (
    <div className="auth-mark">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img className="top" src={authMarkTopImg} />
      </Link>
      {/* <img className="down" src={authMarkDownImg} /> */}
      {/* <div className="auth-mark-title-div">
        <span className="auth-mark-title-start">Your News </span>
        <span className="auth-mark-title-end">- In a</span>
      </div> */}
    </div>
  );
}

export default Mark;
