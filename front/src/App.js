// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import { Forgotpwd, Login, Signup } from "./views/auth";
import Landing from "./views/landing";

import User_DashBoard from "./views/components/User_DashBoard/User_DashBoard";
import User_DashBoard_Header from "./views/components/User_DashBoard_Header/User_DashBoard_Header";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import LineChart from "./views/Admin_DashBoard/Line_Chart_data";
import MyAnalyticsPage from "./views/Admin_DashBoard/MyAnalyticsPage";
import SendEmail from "./views/Admin_DashBoard/SendEmail";
import OTP from "./views/auth/OTP";
import About_Us from "./views/components/About_Us/About_Us";
import Contact_Us from "./views/components/Contact_Us/Contact_Us";
import Deep_Dive from "./views/components/Deep_Dive/Deep_Dive";
import Legal_Docs from "./views/components/Legal_Doc/Legal_Docs";
import Settings from "./views/components/Settings/Settings";
import UserDashboard from "./views/userDashboard/userdashboard";
// import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import AllDays from "./views/components/Archive/AllDays";
import Archive from "./views/components/Archive/Archive";
import Share from "./views/components/Share/Share";
import { useLocation } from 'react-router-dom';
import { Suspense } from "react";
import { shallowEqual, useSelector,useDispatch } from 'react-redux';
import { setPreviousRoute } from "./redux/Slices/UserAuth";
import { useEffect } from "react";
const Partners = React.lazy(() => import('./views/components/partners/Partners'));

function App() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location = useLocation();
  const {isAuth}= useSelector((state)=>state?.UserAuth,shallowEqual)

  const currentPath = location.pathname;
  useEffect(()=>{if(!isAuth){
    dispatch(setPreviousRoute(currentPath  ))
   navigate("/")
   }},[])

 ReactGA.initialize("UA-286054427-1");
  
  return (
    <div className="App">
     
        <Toaster />
        <Suspense fallback={"Loading..."}>
        <Routes>
          <Route index element={<Landing />} />
       
          <Route path="/share/*" element={<Share />} />
                   
          <Route path="OTP" element={<OTP />} />

          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="resetpwd" element={<Forgotpwd />} />
          <Route path="LineChart" element={<LineChart />} />
          <Route path="About_Us" element={<About_Us />} />
          <Route path="Partners" element={<Partners />} />
          <Route path="Contact_Us" element={<Contact_Us />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Deep_Dive" element={<Deep_Dive />} />
          <Route path="Legal_Docs" element={<Legal_Docs />} />
          <Route path="MyAnalyticsPage" element={<MyAnalyticsPage />} />

          <Route path="User" element={<User_DashBoard_Header />}>
         
            <Route path="DashBoard" element={<User_DashBoard />} />
            <Route path="About_Us" element={<About_Us />} />
            <Route path="Archive" element={<Archive />} />
            <Route path="Contact_Us" element={<Contact_Us />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="sendEmail" element={<SendEmail />} />
          </Route>

          {/* <Route path="SignUp" element={<Sign_Up />} /> */}

          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="Archive" element={<Archive />} />
          <Route path="AllDays/:yearmonth" element={<AllDays />} />
        </Routes>
        </Suspense>
    </div>
  );
}

export default App;
