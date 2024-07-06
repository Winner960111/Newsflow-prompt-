import React from "react";
import { useSelector } from "react-redux";
import { Footer, Header } from "../../layout";
import User_DashBoard_Header from "../User_DashBoard_Header/User_DashBoard_Header";
import "./Archive.css";
import ArchiveMain from "./ArchiveMain";


export default function Archive() {
  let time = Math.floor(new Date().getTime() / 1000.0);
  var myDate = new Date(time * 1000);
  const isuser = useSelector((state) => state.UserAuth.isAuth);

  let date = myDate.toGMTString();

  return (
    <div>
      {isuser === true ? <User_DashBoard_Header /> : <Header />}

      <div className="User_DashBoard_bg pb-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12  User_Heading d-flex justify-content-center">
              <div>
                <div className="Text_Top_heading">{/* <h1>55</h1> */}</div>
                <h2>Headlines that shaped history </h2>
              </div>
            </div>
          </div>
          <div className="landing mt-5 p  b-5">
            <div className="content">
              {/* <Archive_Tab /> */}
              <ArchiveMain />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
