import React from "react";
import "react-tabs/style/react-tabs.css";
import right_Arrow from "../../../assests/image/chevron-right-square.svg";
import ArticlesBoard from "../ArticlesBoard/ArticlesBoard";

export default function Archive_Tab({ setArchiveTab, date }) {
  return (
    <div>
      <div className="content-body">
        <div className="content-left-sider">
          <div className="date_search  ">
            <h1 className="">
              <img
                onClick={() => {
                  setArchiveTab(false);
                }}
                style={{
                  cursor: "pointer",
                  width: "45px",
                }}
                src={right_Arrow}
                alt=""
              />{" "}
              { date.getFullYear() }
            </h1>
            <h3 className="">{`${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`}</h3>
            <div className="line_months"></div>
          </div>
        </div>
      </div>
      <ArticlesBoard moreCount={0} date={date.toISOString().slice(0, 10)} />
    </div>
  );
}
