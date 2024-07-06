import React from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../../layout";
import { stdCategories } from "../ArticlesBoard/ArticlesBoard";
import User_DashBoard_Header from "../User_DashBoard_Header/User_DashBoard_Header";
import DeepDiveBoard from "./DeepDiveBoard";


const predCategories = [
  "Most likely",
  "Possible",
  "Unlikely",
]

export default function Deep_Dive(props) {
  let history = useLocation();

  return (
    <>
      <User_DashBoard_Header/>
      <DeepDiveBoard 
        back={history?.state?.back || "/"}
        date={history?.state?.datetime}
        timeframe={history?.state?.timeframe || "day"}
        category={history?.state?.category || stdCategories[0]}
        primary={history?.state?.artical?.primaryArtical?.title}
        defaultActive={history?.state?.defaultActive}
      />
      <Footer/>
    </>
  );
}
