import axios, { HttpStatusCode } from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import right_Arrow from "../../../assests/image/chevron-right-square.svg";
import { apiUrl } from "../../../config";
import { Footer } from "../../layout";
import { stdCategories } from "../ArticlesBoard/ArticlesBoard";
import User_DashBoard_Header from "../User_DashBoard_Header/User_DashBoard_Header";
import "./Archive.css";
import Archive_Tab from "./Archive_Tab";

export default function AllDays() {
  const { yearmonth } = useParams();

  const [active, setActive] = useState(stdCategories[0]);
  const [ArchiveTab, setArchiveTab] = useState(false);
  const [dates, setDates] = useState([]);
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(1);
  const [date, setDate] = useState();
  const isuser = useSelector((state) => state.UserAuth.isAuth);

  useEffect(() => {
    const ym = yearmonth.split("-")
    if (ym.length < 2) {
      return
    }
    const year = Number(ym[0])
    const month = Number(ym[1])
    if (ym.length === 3) {
      setDate(new Date(year, month - 1, Number(ym[2])))
      setArchiveTab(true)
    }
    setYear(year)
    setMonth(month)
    axios.get(`${apiUrl}/api/v1/availableDates`).then((res) => {
      if (res.status === HttpStatusCode.Ok) {
        const tmpDates = res.data.dates.map((v) => {
          return new Date(v)
        })
        setDates(tmpDates.filter((v) => v.getFullYear() === year && v.getMonth() === month).sort((a, b) => a.valueOf() - b.valueOf()))
      }
    })
  }, [])

  return (
    <div>
      <User_DashBoard_Header />
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
              {ArchiveTab === true ? (
                <Archive_Tab setArchiveTab={setArchiveTab} date={date} />
              ) : (
                <>
                  <div
                    className="parentDiv"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "50px",
                    }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}>
                      <div>
                        <h1
                          style={{
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}>
                          <a
                            href={
                              isuser === true ? "/User/archive" : "/archive"
                            }>
                              <img src={right_Arrow} alt="" style={{ width: "30px" }} />
                          </a>
                          {year}
                        </h1>
                        <h4 className="month">{new Date(2000, month).toLocaleString('default', { month: 'long' })}</h4>
                      </div>
                      <div
                        style={{
                          textAlign: "left",
                          marginLeft: "115px",
                        }}>
                        {stdCategories.map((category) => {
                          return (
                            <div
                              style={{ display: "flex" }}
                              onClick={() => {
                                setActive(category);
                              }}>
                              <h6 className={active === category ? "dot" : ""}>
                                {" "}
                                {active === category ? "•" : ""}
                              </h6>
                              <h6
                                className={
                                  active === category
                                    ? "active_category"
                                    : "categories"
                                }>
                                {category}
                              </h6>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="number-list">
                      {dates.map((day, index) => {
                        return (
                          <div className="number">
                            <p
                              className="days"
                              onClick={() => {
                                setArchiveTab(true);
                                setDate(day)
                              }}>
                              {new Date(2000, month).toLocaleString('default', { month: 'long' })} {day.getDate()}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
