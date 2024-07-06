import { Check } from "@mui/icons-material";
import { Skeleton, notification } from "antd";
import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCollapse as expand1, useCollapse as expand2, useCollapse as expand3, useCollapse } from "react-collapsed";
import { ImBlocked } from "react-icons/im";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import chevronRight from "../../../assests/image/chevron-right-square.svg";
import shareIcon from "../../../assests/image/shareIcon.png";
import { apiUrl } from "../../../config";
import { copyToClipboard, currentDate } from "../../../helper";
import { stdCategories } from "../ArticlesBoard/ArticlesBoard";
import User_DashBoard_Header from "../User_DashBoard_Header/User_DashBoard_Header";
import "./Deep_Dive.css";


const predCategories = [
  "Most likely",
  "Possible",
  "Unlikely",
]

export default function DeepDiveBoard({ back = "/", date = currentDate(), timeframe = "day", category = stdCategories[0], primary = "", isShare = false, defaultActive=-1 }) {
  const [Predicted_error, setPredicted_error] = useState(false);
  const [Predicted_check, setPredicted_check] = useState(false);
  const [Predicted_text, setPredicted_text] = useState(predCategories[0]);
  const [EnablePredictions, setEnablePredictions] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState(defaultActive);
  const [groupingArticle, setGroupingArticle] = useState(null);

  const copyToCliboard = () => {
    copyToClipboard(`${origin}/share/${btoa(JSON.stringify({ type:"deepdive", date, timeframe, category: category, primary}))}`)
    notification.open({
      message: 'Link Copied',
      placement: 'top',
      className: 'notification',
      closeIcon: <Check/>,
      style: {
        width: "200px"
      }
    })
  }

  const fetch_groupingArticle = async () => {
    try {
      const grouping_article = await axios.post(
        apiUrl + "/api/v1/groupingArticle",
        {
          category: category,
          primary: primary,
          timeframe: timeframe,
          datetime: date,
        }
      );


      setGroupingArticle(grouping_article.data?.data);
    } catch (e) {

    }
  };

  useEffect(() => {
    // setGroupingArticle(groupingArticle)
    fetch_groupingArticle();
  }, []);
  // setInterval(() => {

  //   fetch_groupingArticle();
  // }, 2000);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const isuser = useSelector((state) => state.UserAuth.isAuth);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const {
    getCollapseProps: getCollapseProps5,
    getToggleProps: getToggleProps5,
    isExpanded: isExpanded5,
  } = expand3();
  const {
    getCollapseProps: getCollapseProps2,
    getToggleProps: getToggleProps2,
    isExpanded: isExpanded2,
  } = expand1();
  const {
    getCollapseProps: getCollapseProps4,
    getToggleProps: getToggleProps4,
    isExpanded: isExpanded4,
  } = expand3();
  const {
    getCollapseProps: getCollapseProps3,
    getToggleProps: getToggleProps3,
    isExpanded: isExpanded3,
  } = expand2();
  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <>
      <User_DashBoard_Header/>
      <div className="Deep_Dive" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center main_div_deep_dive_heading">
            <div className="first_heading_deep">
              <div className="Text_Top_Deep"></div>
              <div className="text_on_Deep_bg">
                <h6>
                  <Link
                    to={back || "/"}
                    onClick={() => {
                      setGroupingArticle(null);
                    }}
                  >
                    <img
                      src={chevronRight}
                      alt="chevronRight"
                      className="me-2 "
                    />
                  </Link>
                  {groupingArticle != null ? (
                    <>{groupingArticle?.topic} </>
                  ) : (
                    <>
                      <Skeleton.Input />
                    </>
                  )}

                  <p className="text_deep">Deep Dive</p>
                </h6>
              </div>
            </div>
            <img
              src={shareIcon}
              alt="shareIcon"
              width="2%"
              height="1%"
              className="mt-5 shareIcon"
              onClick={() => copyToCliboard()}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="main_Deep_dive">
            <div className="row">
              <div className="col-lg-3">
                <h1
                  className="lister_heading"
                  style={{
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    setActive(-1)
                  }}
                >
                  Overview
                </h1>
                <ul className="deep_dive_list">
 
                  {groupingArticle && groupingArticle.summaries ? (
                    <>
                      {groupingArticle.summaries && groupingArticle?.summaries.reduce((acc, curr) => acc.map(v => v.title).includes(curr.title) ? acc : [...acc, curr], []).map((summary, index) => {
                        return (
                          <li
                            className={active === index ? "Active_Item" : ""}
                            onClick={() => setActive(index)}
                          >
                            {summary.title}
                          </li>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <Skeleton paragraph={{ rows: 4 }} />
                    </>
                  )}
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="deep_dive_second_col ">
                  {active === -1 ? (
                    <>
                      <ul>
                        {groupingArticle?.research ? (
                          <>
                            {Object.keys(groupingArticle.research).map(
                              (heading, index) => {

                                return (
                                  <>
                                    <h6 className="fs-5 fw-bold" style={{ color: "#6b6b6b" }}>
                                      {heading}
                                    </h6>
                                    <p className="articalText">
                                      {groupingArticle?.research[heading]}
                                      {/* {heading} */}
                                    </p>
                                  </>
                                );
                              }
                            )}
                          </>
                        ) : (
                          <>
                            <Skeleton paragraph={{ rows: 8 }} />
                          </>
                        )}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h6 className="fs-5 fw-bold" style={{ color: "#6b6b6b" }}>
                        {groupingArticle?.summaries && groupingArticle?.summaries[active].title}
                      </h6>
                      <p className="articalText">
                        {groupingArticle?.summaries && groupingArticle?.summaries[active].summary}
                      </p>
                      <Link
                        to={groupingArticle?.summaries && groupingArticle?.summaries[active].link}
                        target="_blank"  
                      >
                        {groupingArticle?.summaries && groupingArticle?.summaries[active].link}
                      </Link>
                    </>
                  )}
                </div>
                <div className="landing">
                  <div className="content " id="At_a_Glance">
                    <div className="content-body" style={{ padding: "0px" }}>
                      <div className="content-right-sider">
                        {EnablePredictions === true ? (
                          <>
                            <div className="Predictions mt-5">
                              <span>Predicted Scenarios:</span>
                              <br />
                              <span className="disclaimer">
                                *<Link>Disclaimer</Link>* For educational purposes only
                              </span>
                            </div>
                              <div className="Predictions">
                                <div className="boxes1">
                                  <div
                                    className="box1"
                                    style={{
                                      backgroundColor:
                                        isuser == true ||
                                        Predicted_error == false
                                          ? ""
                                          : "#FFE6E6",
                                      border:
                                        isuser == true ||
                                        Predicted_error == false
                                          ? ""
                                          : "1px solid rgba(232, 3, 112, 0.8)",
                                    }}
                                  >
                                    <h3 className="headerbox text-center pb-3">
                                      {Predicted_text}
                                    </h3>
                                    <ul className="boxInner">
                                      <li className="pb-4">
                                        {groupingArticle && groupingArticle?.deep_research ? (
                                          <>
                                            {
                                              groupingArticle
                                                ?.deep_research[
                                                "1 day timeframe"
                                              ][Predicted_text].Description
                                            }
                                          </>
                                        ) : (
                                          <>
                                            <Skeleton
                                              paragraph={{ rows: 4 }}
                                            />
                                          </>
                                        )}
                                      </li>

                                      <section {...getCollapseProps5()}>
                                        <li className="pb-3">
                                          {groupingArticle && groupingArticle?.deep_research ? (
                                            <>
                                              {
                                                groupingArticle
                                                  ?.deep_research[
                                                  "1 day timeframe"
                                                ][Predicted_text].Explanation
                                              }
                                            </>
                                          ) : (
                                            <>
                                              <Skeleton
                                                paragraph={{ rows: 4 }}
                                              />
                                            </>
                                          )}
                                        </li>
                                      </section>

                                    </ul>
                                    <div style={{ textAlign: "center" }}>
                                      <span
                                        {...getToggleProps5()}
                                        className="expand"
                                      >
                                        {!isExpanded5
                                          ? "Expand+"
                                          : "Collapse-"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 d-flex justify-content-start">
                                  {predCategories.filter((pca) => pca !== Predicted_text).map((pca, index) => {
                                    let classNm = ""
                                    if (index == 0) {
                                      classNm = "me-2"
                                    }
                                    return (
                                      <button
                                        className={`Possible_btn ${classNm}`}
                                        onClick={() =>
                                          setPredicted_text(pca)
                                        }
                                      >
                                        {pca}
                                      </button>    
                                    )
                                  })}
                                </div>
                              </div>

                            {isuser == true || Predicted_error == false ? (
                              <></>
                            ) : (
                              <>
                                <Link
                                  to="/signup"
                                  className="link_dec"
                                  onClick={() => window.scrollTo(0, 0)}
                                >
                                  <div
                                    className="d-flex justify-content-center  align-items-center mt-3"
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="500"
                                  >
                                    <div className="d-flex justify-content-center  align-items-center Show_Err0r_ISAuth ">
                                      <ImBlocked className="Auth_icon" />
                                      <p className="Auth_p">
                                        Create a FREE Account to access this
                                        feature!
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </>
                            )}
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}