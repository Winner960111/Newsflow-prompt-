import React, { useEffect, useState } from "react";
import "./User_DashBoard.css";
import Star from "../../../assests/image/Star.png";
import User_Tab from "../User_Tab/User_Tab";
import "../../../assests/styles/landing.scss";
import { Footer } from "../../layout";
import Model_steps from "./Model_steps";
import { shallowEqual, useSelector } from "react-redux";
import AdSense from "../../../adsence/Asence";

export default function User_DashBoard() {
  const user = useSelector((state) => state.UserAuth.UserInfo,shallowEqual);

  const [isModalOpen, setIsModalOpen] = useState(false);
  let IsModal= sessionStorage.getItem("Ismodal")
  useEffect(() => {
    if(!IsModal){
      setIsModalOpen(true)
    }
  }, [])

  let time=	Math.floor(new Date().getTime()/1000.0)
  var myDate = new Date( time *1000)

  let date=myDate.toGMTString()
  
  return (
    <div>
      <div className="User_DashBoard_bg pb-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-6  User_Top">
              <div className="Text_Top">{/* <h1>55</h1> */}</div>

              <h1 >Welcome, {user?.UserName}</h1>
              <p>{date}</p>
            </div>
            <div className="col-lg-6 col-md-6">

               {user?.loginTime<=0&&<div className="Right_Side_Start">
                <img src={Star} alt="" />
                <h5>Success! Account Created</h5>
                <img src={Star} alt="" />
              </div>
               
               
               } 
              
            </div>
          </div>
          <Model_steps isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          <div className="landing mt-5 p  b-5">
            <div className="content">

            <User_Tab/>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}
