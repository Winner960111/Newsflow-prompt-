import React from "react";
import { useParams } from "react-router-dom";
import "../../../assests/styles/landing.scss";
import { Footer, Header } from "../../layout";
import ArticlesBoard from "../ArticlesBoard/ArticlesBoard";
import DeepDiveBoard from "../Deep_Dive/DeepDiveBoard";
import "./Share.css";

export default function Share() {
  const { '*': childPath } = useParams();
  const shared = JSON.parse(atob(childPath));
 
  return (
    <>
      <Header/>
      {shared.type === "articlesboard"  && (
      <div className="User_DashBoard_bg pb-5">
        <div className="container">
          <div className="landing mt-5 p  b-5">
            <div className="content">
              <ArticlesBoard
                moreCount={0}
                timeframe={shared.timeframe}
                category={shared.category}
                date={shared.date}
                isShare={false}
              />
            </div>
          </div>
        </div>
      </div>
      )}
      {shared.type === "deepdive" && (
        <DeepDiveBoard 
          back={"/"}
          date={shared.datetime}
          timeframe={shared.timeframe}
          category={shared.category}
          primary={shared.primary}
        />      
      )}
      <Footer />
    </>
  );
}
