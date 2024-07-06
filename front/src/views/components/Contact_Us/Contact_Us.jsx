import React from "react";
// import "./Contact_Us.css";
import User_DashBoard_Header from "../User_DashBoard_Header/User_DashBoard_Header";
import { Input } from "reactstrap";
import { Footer, Header } from "../../layout";
import Get_Contact_form from "../../landing/Get_Contact_form";

export default function Contact_Us() {
  let url = window.location.pathname;
  return (
    <>
      {url == "/Contact_Us" ? <Header /> : <></>}
      <div className="About_bg">
        <Get_Contact_form/>
      </div>
      <Footer />
    </>
  );
}
