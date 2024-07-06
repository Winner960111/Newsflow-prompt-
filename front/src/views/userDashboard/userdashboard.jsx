import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import "../../assests/styles/landing.scss";
import ImgCategoryLine from "../../assests/image/landing-category-line.png";
import ImgEllipse from "../../assests/image/ellipse.png";
import ImgContentBg from "../../assests/image/shapeBg.png";
import newsMarkBbc from "../../assests/image/news-mark-bbc.png";
import newsMarkTwsj from "../../assests/image/news-mark-twsj.png";
import newsMarkTc from "../../assests/image/news-mark-tc.png";
import newsMarkNewyork from "../../assests/image/news-mark-newyork.png";
import newsMarkForbes from "../../assests/image/news-mark-forbes.png";
import ImgInfoIcon from "../../assests/image/icon-info.png";
import { ReactComponent as Share } from "../../assests/image/share.svg";
import { ReactComponent as Icon } from "../../assests/image/Icon.svg";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useCollapse } from "react-collapsed";
import { useCollapse as expandReference } from "react-collapsed";
import { useCollapse as expand1 } from "react-collapsed";
import { useCollapse as expand2 } from "react-collapsed";
import { useCollapse as expand3 } from "react-collapsed";
import { useCollapse as leftSideBarOptions } from "react-collapsed";
const UserDashboard = () => {
  const [EnablePredictions, setEnablePredictions] = useState(true);
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
  } = expand2();

  const {
    getCollapseProps: getCollapseProps4,
    getToggleProps: getToggleProps4,
    isExpanded: isExpanded4,
  } = expand3();

  const {
    getCollapseProps: getCollapseProps5,
    getToggleProps: getToggleProps5,
    isExpanded: isExpanded5,
  } = leftSideBarOptions();

  return (
    <div className="landing">
     

      <div className="content">
       
        <div className="content-body">
          <div className="content-left-sider">
            <div className="select-date-type">
              <Tabs>
                <TabList>
                  <Tab>Today</Tab>
                  <Tab>Week</Tab>
                  <Tab>Month</Tab>
                </TabList>
               
              </Tabs>
              
            </div>
           

            <ul className="tabssidebar list-category">
              <li
                className={active === 1 ? "list-item active" : "list-item "}
                onClick={() => {setActive(1);
                  window.gtag('event', 'at_a_glance_click', {
                    event_category: 'User Dashboard',
                    event_label: 'At a Glance Clicked',
                  });
                }}>
                At a Glance
              </li>
              <li
                className={active === 2 ? "list-item active" : "list-item "}
                onClick={() => {setActive(2);
                  window.gtag('event', 'politics_click', {
                    event_category: 'User Dashboard',
                    event_label: 'Politics Clicked',
                  });}}>
                Politics
              </li>
              <li
                className={active === 3 ? "list-item active" : "list-item "}
                onClick={() => {setActive(3);
                  window.gtag('event', 'biz_finance_click', {
                    event_category: 'User Dashboard',
                    event_label: 'Biz and Finance Clicked',
                  });}}>
                Biz & Finance
              </li>
              <li
                className={active === 4 ? "list-item active" : "list-item "}
                onClick={() => {setActive(4);
                  window.gtag('event', 'entertainment_click', {
                    event_category: 'User Dashboard',
                    event_label: 'Entertainment Clicked',
                  });}}>
                Entertainment
              </li>
              <li
                className={active === 5 ? "list-item active" : "list-item "}
                onClick={() => {setActive(5);
                  window.gtag('event', 'science_tech_click', {
                    event_category: 'User Dashboard',
                    event_label: 'Science and Tech Clicked',
                  });}}>
                Science & Tech
              </li>
              <li
                className={active === 6 ? "list-item active" : "list-item "}
                onClick={() => {setActive(6);
                  window.gtag('event', 'sports_click', {
                    event_category: 'User Dashboard',
                    event_label: 'Sports Clicked',
                  });}}>
                Sports
              </li>
              <li
                className={active === 7 ? "list-item active" : "list-item "}
                onClick={() => {setActive(7);
                  window.gtag('event', 'web3_click', {
                    event_category: 'User Dashboard',
                    event_label: 'Web 3 Clicked',
                  });}}>
                Web3
              </li>
              <li
                className={active === 8 ? "list-item active" : "list-item "}
                onClick={() => {setActive(8);
                  window.gtag('event', 'biz_finance_click', {
                    event_category: 'User Dashboard',
                    event_label: 'Biz and Finance Clicked',
                  });}}>
                Biz & Finance
              </li>
              <li
                className={active === 9 ? "list-item active" : "list-item "}
                onClick={() => {setActive(9);
                  window.gtag('event', 'gaming_click', {
                    event_category: 'User Dashboard',
                    event_label: 'Gaming Clicked',
                  });}}>
                Gaming
              </li>
              <li
                className={active === 10 ? "list-item active" : "list-item "}
                onClick={() => {setActive(10);
                  window.gtag('event', 'law_crime_click', {
                    event_category: 'User Dashboard',
                    event_label: 'Law and Crime Clicked',
                  });}}>
                Law and Crime
              </li>
              <li
                className={active === 11 ? "list-item active" : "list-item "}
                onClick={() => {setActive(11);
                  window.gtag('event', 'lifestyle_health_click', {
                    event_category: 'User Dashboard',
                    event_label: 'Lifestyle and Health Clicked',
                  });}}>
                LifeStyle & Health
              </li>
            </ul>
          </div>
          <div className="content-right-sider">
            <div className="card card-content margin-b-13">
              <div className="spanhead">
                <span className="topheadcard">
                  Most relevant news of the Day:
                </span>
                <div style={{ paddingLeft: "59%" }}>
                  <Share />
                </div>
              </div>
              <div className="card-content-title">asdfasdadsadsfasd</div>
              <div className="card-content-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tinsectetuer adipiscing elit, sed
                Lorem ipsum dolor sit amet, consectncidunt ut laoreet dolore
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              </div>
              <div className="card-content-title">asdfasdadsadsfasd</div>
              <div className="card-content-body">
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat,Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis
              </div>
              <div className="card-content-title">asdfasdadsadsfasd</div>

              <div className="card-content-body">
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esa commodo consequat. Duis
                autem vel eum iriure dolor in hendrerit in vulputate velit esa
                commodo consequat. Duis autem vel eum iriure dolor in hendrerit
                in vulputate velit esseriure dolor in hendrerit in vulputate
                velit esa commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esseriure dolor in hendrerit in
                vulputate velit esa commodo consequat. Duis autem vel eum iriure
                dolor in hendrerit in vulputate velit esse molestie
                consequat,Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed
                <br />
                {/* <span className="expand" style={{ paddingLeft: "50%" }}>
                      Expand+
                    </span> */}
                <section {...getCollapseProps()}>
                  commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esseriure dolor in hendrerit in
                  vulputate velit esa commodo consequat. Duis autem vel eum
                  iriure dolor in hendrerit in vulputate velit esseriure dolor
                  in hendrerit in vulputate velit esa commodo consequat. Duis
                  autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat,Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed
                </section>
                <span
                  {...getToggleProps()}
                  className="expand"
                  style={{ paddingLeft: "50%" }}>
                  {isExpanded ? "Collapse-" : "Expand+"}
                </span>
              </div>
            </div>
            <div className="summaryRef">
              <div className="card card-setting-denisty margin-r-13">
                <div className="card-setting-title">
                  <div>Set Summary Density</div>
                  <Slider />
                </div>
                <div className="card-setting-body"></div>
              </div>
              <div className="card card-setting-references">
                <div className="card-setting-title">References</div>
                <div className="card-setting-body">
                  <div className="news-list">
                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>

                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>

                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>

                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>

                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>

                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>
                    <section {...getCollapseProps1()}>
                      <div className="news-list-item">
                        <div className="news-title">BBC</div>
                        <div className="news-link">
                          https://www.loremipsum.com
                        </div>

                        <img src={ImgInfoIcon} className="news-info-icon" />
                      </div>

                      <div className="news-list-item">
                        <div className="news-title">BBC</div>
                        <div className="news-link">
                          https://www.loremipsum.com
                        </div>

                        <img src={ImgInfoIcon} className="news-info-icon" />
                      </div>

                      <div className="news-list-item">
                        <div className="news-title">BBC</div>
                        <div className="news-link">
                          https://www.loremipsum.com
                        </div>

                        <img src={ImgInfoIcon} className="news-info-icon" />
                      </div>
                    </section>
                    <div
                      {...getToggleProps1()}
                      className=" reference-show-all"
                      style={{ paddingLeft: "50%" }}>
                      {isExpanded1 ? (
                        <>
                          <>
                            <Icon
                              className="upicon"
                              style={{ transform: "rotate(180deg)" }}
                            />
                            <Link className="link">Show less</Link>
                          </>
                        </>
                      ) : (
                        <>
                          <Icon className="downicon" />
                          <Link className="link">Show All</Link>
                        </>
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
  );
};

export default UserDashboard;
