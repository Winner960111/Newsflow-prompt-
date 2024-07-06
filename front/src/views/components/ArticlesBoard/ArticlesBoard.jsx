import { Check } from "@mui/icons-material";
import { Select, Skeleton, notification } from "antd";
import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCollapse as expand1, useCollapse as expandReference, useCollapse } from "react-collapsed";
import { ImBlocked } from "react-icons/im";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tab, TabList, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ReactComponent as Icon } from "../../../assests/image/Icon.svg";
import chevron_right_square_blue from "../../../assests/image/chevron-right-square_blue.png";
import { ReactComponent as Share } from "../../../assests/image/share.svg";
import "../../../assests/styles/landing.scss";
import { apiUrl } from "../../../config";
import { copyToClipboard, currentDate } from "../../../helper";
import ShareModel from "../Share_model/Share_model";
import Slider from "../Slider";
import "./ArticlesBoard.css";
import Reference from "./Reference";
import QuestionMark from "../QuestionMark/QuestionMark";
import { Navigate } from "react-router-dom";
import { padding } from "@mui/system";
import backgroundImage from "./drawerBg.png"
import drawerBgRed from "./drawerBgRed.png"
export const stdCategories = [
  "At a Glance",
  "Politics",
  "Business and Finance",
  "Entertainment",
  "Science and Technology",
  "Sports",
  "Crypto/Web3",
  "Gaming",
  "Law and Crime",
  "Lifestyle and Health",
  "Art and Fashion",
];

function ArticlesBoard({
  moreCount = 5,
  timeframe = "day",
  category = stdCategories[0],
  date = currentDate(),
  isShare = false,
}) {
  const [EnablePredictions, setEnablePredictions] = useState(true);
  const [Importance_Reasoning, setImportance_Reasoning] = useState(true);
  const [articalTitle, setArticalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isuser = useSelector((state) => state.UserAuth.isAuth);
  const [Days_text, setDays_text] = useState("Day");
  const [relevant_news, setrelevant_news] = useState(false);
  const [more_option, setmore_option] = useState(false);
  const [Density_error, setDensity_error] = useState(false);
  const [Reasoning_error, setReasoning_error] = useState(false);
  const [Predicted_categories, setPredicted_categories] = useState(category);
  const [Deep_Dive, setDeep_Dive] = useState(false);
  const [showpolitics, setShowpolitics] = useState([]);
  const [spinner, setspinner] = useState(false);
  const [value, setValue] = useState(5);
  const [Predicted_check, setPredicted_check] = useState(false);
  const [Predicted_error, setPredicted_error] = useState(false);
  const [Predicted_text, setPredicted_text] = useState("Most Likely");
  const [Predicted_devs, setPredict_devs] = useState([]);
  const [pitimeframe, setPitimeframe] = useState(timeframe);
  const [importantReasons, setImportantReasons] = useState([]);
  const [categories, setCategories] = useState(stdCategories);

  const location = useLocation();
  const navigate =useNavigate()
  const currentRoute = location.pathname;

  const url = new URL(window.location.href);
  const origin = url.origin;

  const handleChange = (value) => {
    setPitimeframe(value);
  };

  const history = useNavigate();
  const [allArticals, setAllArticals] = useState([]);
  const [groupingArticle, setGroupingArticle] = useState(null);

  const copyToCliboard = () => {
    copyToClipboard(
      `${origin}/share/${btoa(
        JSON.stringify({
          type: "articlesboard",
          date,
          timeframe,
          category: Predicted_categories,
        })
      )}`
    );
    notification.open({
      message: "Link Copied",
      placement: "top",
      className: "notification",
      closeIcon: <Check />,
      style: {
        width: "200px",
      },
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [active, setActive] = useState(1);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const {
    getCollapseProps: getCollapseProps1,
    getToggleProps: getToggleProps1,
    isExpanded: isExpanded1,
  } = expandReference();

  const {
    getCollapseProps: getCollapseProps2,
    getToggleProps: getToggleProps2,
    isExpanded: isExpanded2,
  } = expand1();

  const {
    getCollapseProps: getCollapseProps3,
    getToggleProps: getToggleProps3,
    isExpanded: isExpanded3,
  } = expand1();
  const {
    getCollapseProps: getCollapseProps4,
    getToggleProps: getToggleProps4,
    isExpanded: isExpanded4,
  } = expand1();
  const {
    getCollapseProps: getCollapseProps5,
    getToggleProps: getToggleProps5,
    isExpanded: isExpanded5,
  } = expand1();

  useEffect(() => {
    Aos.init();
    const idx = stdCategories.indexOf(category)
    if (idx > -1) {
      setActive(idx + 1)
    }
  }, []);

  const select_categories = async (e) => {
    try {
   
      setActive(parseInt(e.target.value));
      setPredicted_categories(categories[parseInt(e.target.value)]);
      setmore_option(true);
    } catch (error) {

    }
  };

  const fetch_articalDetails = async (title, datetime) => {
    setspinner(true);

    const details_article = await axios.post(
      apiUrl + "/api/v1/articalDetails",
      {
        title: title,
        datetime: datetime,
      }
    );
    setspinner(false);
    return details_article.data.data[0];
  };
  const fetch_articalsCategory = async (category, timeframe, datetime) => {
    setspinner(true);
    const details_article = await axios.post(
      apiUrl + "/api/v1/articalCategories",
      {
        category: category,
        timeframe: timeframe,
        datetime: datetime,
      }
    );
    setspinner(false);
    return details_article.data.data[0].data;
  };
  const fetchingArticalsByCategory = async (category, timeframe, datetime) => {
    setspinner(true);
    const allArticalsData = await fetch_articalsCategory(
      category,
      timeframe,
      datetime
    );
    allArticalsData.map(async (articals) => {
      var primaryArtical = await fetch_articalDetails(articals.Primary, datetime);
      var secondaryArticals = [];
      // for (const secondaryArtical of articals.Secondary) {
      //   if (secondaryArtical !== articals.Primary) {
      //     var detail = await fetch_articalDetails(secondaryArtical, datetime);
      //     secondaryArticals.push(detail);
      //   }
      // }
      setAllArticals((allArticals) => [
        ...allArticals,
        {
          title: articals.Title,
          primaryArtical: primaryArtical,
          secondaryArticals: secondaryArticals,
        },
      ]);
    });
    setspinner(false);
  };
  const fetch_groupingArticle = async (
    category,
    primary,
    timeframe,
    datetime
  ) => {

    setspinner(true);
    const grouping_article = await axios.post(
      apiUrl + "/api/v1/groupingArticle",
      {
        category: category,
        primary: primary,
        timeframe: timeframe,
        datetime: datetime,
      }
    );

    setspinner(false);
    setGroupingArticle(grouping_article.data);
  };

  const fetch_predictions = async (category, timeframe, datetime) => {
    setspinner(true);
    const predicted = await axios.post(apiUrl + "/api/v1/predictDevs", {
      category: category,
      timeframe: timeframe,
      datetime: datetime,
    });

    setspinner(false);
    setPredict_devs(predicted.data.data[0]?.prediction);
  };

  useEffect(() => {

    setAllArticals([]);
    fetchingArticalsByCategory(
      Predicted_categories,
      Days_text.toLowerCase(),
      date
    );
  }, [Predicted_categories, Days_text]);

  useEffect(() => {

    setPredict_devs([]);
    fetch_predictions(Predicted_categories, pitimeframe, date);
  }, [Predicted_categories, pitimeframe]);
  return (
    <div className="content-body ">
      <ShareModel
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        shareLink={`${origin}/share/${btoa(
          JSON.stringify({ date, timeframe, category: Predicted_categories })
        )}`}
      />
      <div className="content-left-sider" style={{ marginRight: "50px" }}>
  
        {isuser === true || more_option === false ? (
          <></>
        ) : (
          <>
            <Link
              to="/signup"
              className="link_dec responsei_bar"
              onClick={() => window.scrollTo(0, 0)}>
              <div
                className="d-flex justify-content-center   align-items-center"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500">
                <ImBlocked className="Auth_icon" />
                <p className="Auth_p">
                  Create a FREE Account to access this feature!
                </p>
              </div>
            </Link>
          </>
        )}

        <select
          className="tabssidebar list-category responsei_bar  mb-3 "
          onChange={(e) => select_categories(e)}>
          {!isShare ? (
            categories.map((categ, index) => {
              if (index < categories.length - moreCount) {
                return (
                  <option
                    key={index}
                    className={
                      active === index ? "list-item active" : "list-item "
                    }
                    value={index}>
                 
                    {categ}
                  </option>
                );
              }
              return  <option
              key={index}
              className={
                active === index ? "list-item active" : "list-item "
              }
              style={{  background: `  url(${active===index+1?  drawerBgRed:backgroundImage}) no-repeat center center`}}
              value={index}>
           
              {categ}
            </option>
            })
          ) : (
            <option
              className={active === 1 ? "list-item active" : "list-item "}
              value="1">
              {category}
            </option>
          )}
        </select>

        {isuser === true || relevant_news === false ? (
          <></>
        ) : (
          <>
            <Link
              to="/signup"
              className="link_dec"
              onClick={() => window.scrollTo(0, 0)}>
              <div
                className="d-flex justify-content-center  align-items-center"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500">
                <ImBlocked className="Auth_icon" />
                <p className="Auth_p">
                  Create a FREE Account to access this feature!
                </p>
              </div>
            </Link>
          </>
        )}
        <div

          className={
            isuser === true || relevant_news === false
              ? "select-date-type"
              : "select-date-type1"
          }>
          {isShare ? (
            <Tabs>
              <TabList>
                <Tab>
               
                  {(() => {
                    switch (timeframe) {
                      case "day":
                        return "Today";
                      case "week":
                        return "Week";
                      case "month":
                        return "Month";
                      default:
                        return "Today";
                    }
                  })()}{" "}
                </Tab>
              </TabList>
            </Tabs>
          ) : (
            <Tabs>
              <TabList         style={{display:"flex", justifyContent:"start" , alignItems:"center"}}>
                <Tab
                  onClick={() =>
                    isuser === true
                      ? (setDays_text("Day"), setrelevant_news(true), 
                      window.gtag('event', 'today_tab_select', {
                        event_category: 'Articles Board',
                        event_label: 'Today Tab Selected',
                      }))
                      : (setrelevant_news(true), 
                      window.gtag('event', 'today_tab_select', {
                        event_category: 'Articles Board',
                        event_label: 'Today Tab Selected',
                      }))
                  }>
                  Today
                </Tab>
                <Tab
                  onClick={() =>
                    isuser === true
                      ? (setDays_text("Week"), setrelevant_news(true),  
                      window.gtag('event', 'week_tab_select', {
                        event_category: 'Articles Board',
                        event_label: 'Week Tab Selected',
                      }))
                      : (setrelevant_news(true),
                      window.gtag('event', 'week_tab_select', {
                        event_category: 'Articles Board',
                        event_label: 'Week Tab Selected',
                      })
                      )
                  }>
                  Week
                </Tab>
                <Tab
                  onClick={() =>
                    isuser === true
                      ? (setDays_text("Month"), setrelevant_news(true),
                      window.gtag('event', 'month_tab_select', {
                        event_category: 'Articles Board',
                        event_label: 'Month Tab Selected',
                      }))
                      : (setrelevant_news(true),
                      window.gtag('event', 'month_tab_select', {
                        event_category: 'Articles Board',
                        event_label: 'Month Tab Selected',
                      }))
                  }>
                  Month
                </Tab>
              <QuestionMark caption={"View the news from a different timeframe perspective"}/>
              </TabList>
            </Tabs>
          )}
        </div>

        <div className="predictioncheckboxdiv">
          <input
            type="checkbox"
            defaultChecked={EnablePredictions}
            className="checkBox_Enable"
            onChange={(e) => {
              window.gtag('event', 'enable_predictions_checkbox', {
                event_category: 'Articles Board',
                event_label: 'Enable Predictions Checked',
              });
              setEnablePredictions(e.target.checked)}}
          />
          <span className="predictioncheckbox mx-2">Enable Trends<QuestionMark caption={"Developing Trends in each category of news"}/> </span>
        </div>
        <div className="predictioncheckboxdiv">
          <input
            type="checkbox"
            defaultChecked={Importance_Reasoning}
            className="checkBox_Enable"
            onChange={(e) => {
              window.gtag('event', 'importance_reasoning_checkbox', {
                event_category: 'Articles Board',
                event_label: 'Importance Reasoning Checked',
              });
              setImportance_Reasoning(e.target.checked)}}
          />
          <span className="predictioncheckbox mx-2">Importance Reasoning <QuestionMark caption={"Justification of article Importance score (0 - 100)"}/></span>
        </div>

        <ul className="tabssidebar list-category desktop_lag">
          {isShare
            ? [category]
            : categories.map((category, index) => {
            return (
              <>
              {index<moreCount?<li
                  key={index}
                  className={
                    active === index + 1 ? "list-item active" : "list-item "
                  }
                  onClick={() => {
                    setActive(index + 1);
                    setmore_option(false);
                    setPredicted_categories(category);
                    // ReactGA.event({'category':items.category,'action':'submit','label':'label'})
                    window.gtag("event", "button_click", {
                      event_category: "news_button",
                      event_action: "Click",
                      event_label: category,
                    });
                  }}>
                  {category}
                </li>:
                <li
                key={index}
                className={active === index + 1 ? "list-item active" : "list-item"}
                onClick={() => {
                  // Check if the item is not active before running the click functionality
                  setActive(index + 1);
                    setmore_option(true);
                    // setPredicted_categories(category);
                    // Your tracking code
                    window.gtag("event", "button_click", {
                      event_category: "news_button",
                      event_action: "Click",
                      event_label: category,
                    });
                  
                }}
               >
                 {<p style={{
                  padding: "10px 0px 10px 10px",
                  background: `  url(${active===index+1?  drawerBgRed:backgroundImage}) no-repeat center center`, // Updated background properties
                  backgroundSize: 'cover',
                  borderRadius: "10px",
                  borderColor:"black",
                  borderRadius:"20px"
                 
                  // Remove pointerEvents here, it's now in the li style
                }}>{category}</p>}
              </li>
              
//                 <li
//   key={index}
//   className={active === index + 1 ? "list-item active" : "list-item"}
//   onClick={() => {
//     setActive(index + 1);
//     setmore_option(true);
//     setPredicted_categories(category);
//     // ReactGA.event({'category':items.category,'action':'submit','label':'label'})
//     window.gtag("event", "button_click", {
//       event_category: "news_button",
//       event_action: "Click",
//       event_label: category,
//     });
//   }}
// >
//   {<p style={{
//     padding: "20px 0px 20px 0px ",
//     background: `url(${backgroundImage}) no-repeat center center`, // Updated background properties
//     backgroundSize: 'cover',
//     borderRadius: "10px",
//     opacity: 0.5, // Reduced opacity for disabled look
//     pointerEvents: 'none', // Disable pointer events
//     textAlign:"center"
//   }}>{category}</p>}
// </li>

}
                
              </>
            );
          })}

          
        </ul>
        { more_option === true &&
          <>
            <Link
              to="/signup"
              className="link_dec"
              onClick={() => window.scrollTo(0, 0)}>
              <div className="me-4 desktop_lag">
                <div
                  className="d-flex justify-content-center  align-items-center "
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500">
                  {/* <ImBlocked className="Auth_icon fs-3"/> */}
                  <p className="Auth_p fs-6">
                    Create a FREE Account to access this feature!
                  </p>
                </div>
              </div>
            </Link>
          </>
        }
      </div>
      <div className="content-right-sider" style={{ textAlign: "left" }}>
        <div className="topheadcard impactfuleNews-head">
          Most impactful News of the {Days_text}:
        </div>
        <QuestionMark caption={'"Impactfulness" dependent on the criteria of: Political significance, Economic consequesnces, Social consequences, Public attention and interest'}/>
        <div className="card card-content margin-b-13">
          <div
            className="spanhead"
            style={{
              display: "block",
              textAlign: "right",
            }}>
            <div onClick={() => {
              window.gtag('event', 'share_click', {
                event_category: 'Articles Board',
                event_label: 'share_clicked'}
              )
              copyToCliboard()}} style={{ cursor: "pointer" }}>
              <Share />
            </div>
          </div>
          {spinner ? (
            <>
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            <div className="containerFLEX">
              {allArticals.length > 0 ? (
                <>
                  {allArticals?.slice(0, 3).map((artical, index) => {
                    return (
                      <TopicDetail
                        key={index}
                        artical={artical}
                        Days_text={Days_text}
                        Predicted_categories={Predicted_categories}
                        currentRoute={currentRoute}
                        isuser={isuser}
                        Deep_Dive={Deep_Dive}
                        setDeep_Dive={setDeep_Dive}
                        history={history}
                        fetch_groupingArticle={fetch_groupingArticle}
                        date={date}
                        allowed={true}
                      />
                    );
                  })}
                  <section
                    {...getCollapseProps4()}
                    style={{
                      width: "-webkit-fill-available"
                    }}
                  >
                    {allArticals?.slice(2, value).map((artical, index) => {
                      return (
                        <TopicDetail
                          key={index}
                          artical={artical}
                          Days_text={Days_text}
                          Predicted_categories={Predicted_categories}
                          currentRoute={currentRoute}
                          isuser={isuser}
                          Deep_Dive={Deep_Dive}
                          setDeep_Dive={setDeep_Dive}
                          history={history}
                          fetch_groupingArticle={fetch_groupingArticle}
                          date={date}
                        />
                      );
                    })}
                  </section>
                </>
              ) : (
                <>
                  <Skeleton />
                </>
              )}
            </div>
          )}
          <span
            {...getToggleProps4()}
            className="expand"
            style={{ textAlign: "center" }}
            onClick={()=>{
              window.gtag('event', 'expand_collapse_click', {
                event_category: 'Articles Board',
                event_label: `Expand Collapse Clicked: ${isExpanded4 ? 'Collapse' : 'Expand'}`,
              });
            }}
            >
            {isExpanded4 ? "Collapse-" : "Expand+"}
          </span>
        </div>
        <div className="summaryRef" onClick={() => setDensity_error(true)}>
          <div className="card_and_Auth">
            <div
              className="card card-setting-denisty margin-r-13"
              style={{
                backgroundColor:
                  isuser === true || Density_error === false ? "" : "#FFE6E6",
                border:
                  isuser === true || Density_error === false
                    ? ""
                    : "1px solid rgba(232, 3, 112, 0.8)",
              }}>
              <div className="card-setting-title">
                <div>Set Dashboard Density <QuestionMark caption={"view from 2 to 20 of the most impactful in the main user dashboard"}/></div>
                <Slider
                  setDensity_error={setDensity_error}
                  value={value}
                  setValue={setValue}
                />
              </div>
              <div className="card-setting-body"></div>
            </div>

            {isuser === true || Density_error === false ? (
              <></>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="link_dec"
                  onClick={() => window.scrollTo(0, 0)}>
                  <div
                    className="d-flex justify-content-center  align-items-center"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500">
                    <div className="d-flex justify-content-center  align-items-center w-75">
                      <ImBlocked className="Auth_icon" />
                      <p className="Auth_p">
                        Create a FREE Account to access this feature!
                      </p>
                    </div>
                  </div>
                </Link>
              </>
            )}
          </div>

          <div className="card card-setting-references">
            <div className="card-setting-title">References</div>
            <div className="card-setting-body">
              <div
                className="news-list"
                style={{
                  height: "auto",
                }}>
                {allArticals.map((artical, index) => {
         
                  if (index > 1) return <></>;
                  return (
                    <div
                      key={index}
                      className="news-list-item"
                      style={{
                        display: "block",
                        height: "auto",
                      }}>
                      <Reference
                        title={artical.title[0]}
                        links={[
                          artical.primaryArtical,
                          ...artical.secondaryArticals,
                        ].map((article) => article.link)}
                      />
                    </div>
                  );
                })}
                <section {...getCollapseProps1()}>
                  {allArticals.map((artical, index) => {
                    if (index <= 1) return <></>;
                    return (
                      <div
                        key={index}
                        className="news-list-item"
                        style={{
                          display: "block",
                          height: "auto",
                        }}>
                        <div
                          className="news-title"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            textAlign: "left",
                          }}>
                          {artical.title[0]}
                        </div>
                        {[
                          artical.primaryArtical,
                          ...artical.secondaryArticals,
                        ].map((article, index) => {
                          if (article === undefined) return <></>;
                          return (
                            <>
                              <div
                                key={index}
                                className="news-link"
                                style={{
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  textAlign: "left",
                                }}>
                                {article.link}
                              </div>
                            </>
                          );
                        })}
                      </div>
                    );
                  })}
                </section>
                <div
                  {...getToggleProps1()}
                  className=" reference-show-all"
                  style={{ paddingLeft: "50%" }}>
                  {isExpanded1 ? (
                    <>
                      <>
                      <div
                      onClick={()=>{
                        window.gtag('event', 'show_less_reference_select', {
                          event_category: 'Articles Board',
                          event_label: 'Slow Less Reference Selected',
                        });
                       }}
                      >

                        <Icon
                          className="upicon"
                          style={{ transform: "rotate(180deg)" }}
                        />
                        <Link className="link">Show less</Link>
                        </div>
                      </>
                    </>
                  ) : (
                    <>
                    <div onClick={()=>{
                      window.gtag('event', 'show_all_reference_select', {
                        event_category: 'Articles Board',
                        event_label: 'Slow All Reference Selected',
                      });
                    }}>
                      <Icon className="downicon" />
                      <Link className="link">Show All</Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {EnablePredictions === true ? (
          <>
            <div
              className="d-flex align-items-center"
              style={{
                textAlign: "center",
                flexDirection: "column-reverse",
              }}>
              <div className="mt-2">
                <Select
                  defaultValue={pitimeframe}
                  style={{
                    width: "10rem",
                    borderRadius: "5px",
                    background: "transparent",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "day",
                      label: "1 Day",
                    },
                    {
                      value: "week",
                      label: "1 Week",
                    },
                    {
                      value: "month",
                      label: "1 Month",
                    },
                  ]}
                />
              </div>
              <div className="Predictions mt-5">
                <span>
                  Predicted Developments and Trends:{" "}
                  <span style={{ color: "#878787" }}>
                    {isuser === true ? Predicted_categories : ""}
                  </span>
                  <QuestionMark caption={'Similarities and insights gathered from the articles we analyze. View a more specialized approach by choosing from of our many "profiles"'}/>
                </span>

                <br />
                <span className="disclaimer">
                  *
                  <span
                  onClick={()=>navigate("/Legal_Docs")}
                    style={{
                      color: "#00B2FF",
                      textDecoration: "underline",
                      cursor:"pointer"
                    }}>
                    Disclaimer
                  </span>
                  * &nbsp;For educational purpose only
                </span>
              </div>
            </div>

            {Predicted_check !== true && (
              <>
                <div className="Predictions">
                  <div className="boxes1">
                    <div
                      className="box1"
                      style={{
                        backgroundColor:
                          isuser === true || Reasoning_error === false
                            ? ""
                            : "#FFE6E6",
                        border:
                          isuser === true || Reasoning_error === false
                            ? ""
                            : "1px solid rgba(232, 3, 112, 0.8)",
                      }}>

                      {Predicted_devs && (
                        <>
                          <h3 className="headerbox text-left pb-3">
                            1 {pitimeframe} time frame
                          </h3>
                          <div className="pb-4">
                            <span className="headerbox_Second">
                              Development:
                            </span>
                            <span>{Predicted_devs["Developing Trend 1"]}</span>
                          </div>
                          <div className="pb-4">
                            <span className="headerbox_Second  ">
                              Explanation:
                            </span>
                            <span>{Predicted_devs["Explanation"]}</span>
                          </div>
                          <section {...getCollapseProps3()}>
                            <div className="pb-4">
                              <span className="headerbox_Second">
                                Opportunities that may arise:
                              </span>
                              <span>
                                {Predicted_devs["Opportunities that may arise"]}
                              </span>
                            </div>
                            <div className="pb-4">
                              <span className="headerbox_Second  ">
                                Potential Pitfalls:
                              </span>
                              <span>
                                {Predicted_devs["Potential Pitfalls"]}
                              </span>
                            </div>
                          </section>
                        </>
                      )}

                      <div
                        onClick={() => {
                          window.gtag('event', 'predicted_developments_trends_expand_collapse_click', {
                            event_category: 'Articles Board',
                            event_label: 'Predicted Development Trends Expand/Collapse Clicked',
                          });
                          setPredicted_error(true)}}
                        style={{ textAlign: "center" }}>
                        {isuser === true ? (
                          <>
                            {" "}
                            <span {...getToggleProps3()} className="expand">
                              {isExpanded2 ? "Collapse-" : "Expand+"}
                            </span>{" "}
                          </>
                        ) : (
                          <>
                            {" "}
                            <span
                              {...getToggleProps5()}
                              className="expand"
                              style={{ cursor: "pointer" }}>
                              {isExpanded1 ? "Collapse-" : "Expand+"}
                            </span>{" "}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isuser === true || Predicted_error === false ? (
              <></>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="link_dec"
                  onClick={() => window.scrollTo(0, 0)}>
                  <div
                    className="d-flex justify-content-center  align-items-center mt-3"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500">
                    <div className="d-flex justify-content-center  align-items-center Show_Err0r_ISAuth ">
                      <ImBlocked className="Auth_icon" />
                      <p className="Auth_p">
                        Create a FREE Account to access this feature!
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

        {Importance_Reasoning === true ? (
          <>
            <div className="Predictions mt-5" style={{ textAlign: "center" }}>
              <span>Importance Reasoning <QuestionMark caption={"Scores from 0 - 100. 0 being the least impactful and 100 being the most impactful respectively"}/></span>  
              <br />
              <span className="disclaimer">behind article arrangement:</span>
            </div>
            <div className="ImportantReason">
              <div className="boxes1">
                <div
                  className="box1"
                  style={{
                    backgroundColor:
                      isuser === true || Reasoning_error === false
                        ? ""
                        : "#FFE6E6",
                    border:
                      isuser === true || Reasoning_error === false
                        ? ""
                        : "1px solid rgba(232, 3, 112, 0.8)",
                  }}>
                  <h3 className="headerbox text-left pb-3">
                    1 {pitimeframe} time frame
                  </h3>
                  {allArticals.map((artical, index) => {
                    if (index > 1) return <></>;
                    return (
                      <ImportantReasonItem
                        key={index}
                        artical={artical}
                        pitimeframe={pitimeframe}
                      />
                    );
                  })}

                  <section {...getCollapseProps2()}>
                    {allArticals.map((artical, index) => {
                      if (index <= 1) return <></>;
                      return (
                        <ImportantReasonItem
                          key={index}
                          artical={artical}
                          pitimeframe={pitimeframe}
                        />
                      );
                    })}
                  </section>

                  <div
                    onClick={() => {
                      window.gtag('event', 'importance_reasoning__expand_collapse_click', {
                        event_category: 'Articles Board',
                        event_label: 'Importance Reasoning Expand/Collapse Clicked',
                      });
                      setReasoning_error(true)}}
                    style={{ textAlign: "center" }}>
                    {isuser === true ? (
                      <>
                        {" "}
                        <span {...getToggleProps2()} className="expand">
                          {isExpanded2 ? "Collapse-" : "Expand+"}
                        </span>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <span className="expand" style={{ cursor: "pointer" }}>
                          {isExpanded1 ? "Collapse-" : "Expand+"}
                        </span>{" "}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {isuser === true || Reasoning_error === false ? (
              <></>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="link_dec"
                  onClick={() => window.scrollTo(0, 0)}>
                  <div
                    className="d-flex justify-content-center  align-items-center mt-3"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500">
                    <div className="d-flex justify-content-center  align-items-center Show_Err0r_ISAuth ">
                      <ImBlocked className="Auth_icon" />
                      <p className="Auth_p">
                        Create a FREE Account to access this feature!
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
  );
}

const TopicDetail = ({
  artical,
  Days_text,
  Predicted_categories,
  currentRoute,
  isuser,
  Deep_Dive,
  setDeep_Dive,
  history,
  fetch_groupingArticle,
  date,
  allowed = false
}) => {
  const deep_dive = (defaultActive=-1) => () => {
    if (isuser === true || allowed === true) {
      history("/Deep_Dive", {
        state: {
          artical,
          timeframe: Days_text.toLowerCase(),
          category: Predicted_categories,
          datetime: date,
          back: currentRoute,
          defaultActive: defaultActive
        },
      });
      window.scrollTo(0, 0);
      window.gtag('event', 'dive_deeper_click', {
        event_category: 'Articles Board',
        event_label: 'dive_deeper_clicked'}
      )
    } else {
      setDeep_Dive(true)
      window.gtag('event', 'dive_deeper_click', {
        event_category: 'Articles Board',
        event_label: 'dive_deeper_clicked'}
      )
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <p className="titleArtical">{artical.title}</p>
        <div
          className="deep_text_langingg"
          style={{
            marginLeft: "2rem",
            marginTop: "0.2rem",
            width: "90px",
          }}
          onClick={deep_dive()}>
          Dive Deeper
          <img alt="" src={chevron_right_square_blue} />{" "}
        </div>
        {isuser === true || Deep_Dive === false || allowed === true ? (
          <></>
        ) : (
          <>
            <Link
              to="/signup"
              // className="link_dec"
              style={{
                textDecoration: "none",
                marginLeft: "2rem",
              }}
              onClick={() => window.scrollTo(0, 0)}>
              <div className="errorr d-flex justify-content-center  align-items-center ">
                <ImBlocked className="Auth_icon1" />
                <p className="Auth_p1 mt-2 ">
                  Create a FREE Account to <br /> access this feature!
                </p>
              </div>
            </Link>
          </>
        )}
      </div>
       <ul>
        {artical.primaryArtical === undefined ? (
          <></>
        ) : (
          <li>
            <p className="articalText">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="underLineA"
                onClick={()=>{
                  window.gtag('event', 'article_first_point_click', {
                    event_category: 'Article Board',
                    event_label: `Article First Point Clicked: ${artical.primaryArtical.title}`,
                  });
                  deep_dive(0)}}>
                {artical.primaryArtical.title}{" "}
              </a>
              {artical.primaryArtical.article}
            </p>
          </li>
        )}
        {artical.secondaryArticals.map((secondaryArtical, index) => {
          return (
            <>
              {secondaryArtical === undefined ? (
                <></>
              ) : (
                <li>
                  <p className="articalText">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}  
                    <a
                      className="underLineA"
                      onClick={()=>{
                        window.gtag('event', 'article_second_point_click', {
                          event_category: 'Article Board',
                          event_label: `Article Second Point Clicked: ${secondaryArtical.title}`,
                        });
                        deep_dive(index+1)}}
                    >
                      {secondaryArtical.title}
                    </a>
                    {secondaryArtical.article}
                  </p>
                </li>
              )}
            </>
          );
        })}
      </ul>
    </>
  );
};

const ImportantReasonItem = ({ artical, pitimeframe }) => {
  return (
    <>
      <h4 className="titleArtical">{artical.title}</h4>
      <ul>
        {[artical.primaryArtical, ...artical.secondaryArticals].map(
          (article) => {
            return (
              <li className="pb-4">
                <span className="headerbox_Second">
                  {article.title} ({article.score[pitimeframe].score}/100
                  relevance)
                </span>
                <span>{article.score[pitimeframe].reason}</span>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default ArticlesBoard;
