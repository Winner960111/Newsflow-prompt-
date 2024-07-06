import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "../../assests/styles/landing.scss";
import ImgContentBg from "../../assests/image/shapeBg.png";
import { Link, useNavigate } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { Footer, Header } from "../layout";
import "./Landing_style.css";
import Brand_Slider from "../components/Brand_Slider/Brand_Slider";
import Carousel_NewsFlash from "./Carousel_NewsFlash";
import Get_Contact_form from "./Get_Contact_form";
import Aos from "aos";
import ArticlesBoard from "../components/ArticlesBoard/ArticlesBoard";
import { useSelector } from "react-redux";

function Landing(props) {
  const isuser = useSelector((state) => state.UserAuth.isAuth);
  const history = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (isuser) {
      history("/user/dashboard");
    }
  }, [isuser]);

  return (
    <div className="landing">
      <div className="category">
        <Header />
        <div className="container ">
          <div className="row ">
            <div className="col-lg-7  ">
              <div className="title">
                <div className="brush">
                  <h4 className="main">
                    Today's Insights, Tomorrow's Trends
                    {/* Explore the news shaping the world around us */}
                  </h4>
                </div>
                <div className="guide">
                  <p className="landing_pag_pagr">
                    Leveraging the power of AI to pinpoint key news subjects and
                    synthesize research into comprehensive insights.
                  </p>
                  <div className="landing_pag_pag">
                    <p>P.S. (Contact us for custom data</p>
                    <p> points and our historical news </p>
                    database)
                  </div>
                  <Button
                    className="check-button"
                    onClick={() => {
                      window.gtag("event", "newsflow_lp_create_acc_click", {
                        event_category: "LandingPage",
                        event_label: "NewsFlow LP Create Acc Clicked",
                      });
                      history("/signup");
                    }}
                  >
                    Create an Account
                  </Button>

                  {/* <Button
                    className="check-button"
                    onClick={() => ReactGA.event({'category':"Test".category,'action':'submit','label':'label'})}
                  >
                    Testa
                  </Button> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 Enverment">
              <div className=" ">
                <div className="">
                  <div className="row  large_btn ">
                    <div className=" btn_news">
                      <button className="landing_page_btn">At a Glance</button>
                    </div>
                    <a href="#At_a_Glance" className="text-decoration-none">
                      <div className=" btn_news  ">
                        <button
                          className="landing_page_btn me-1"
                          // onClick={() => (
                          //   setPredicted_categories("Business and Finance"),
                          //   setActive(2),
                          //   setmore_option(true)
                          // )}
                        >
                          Business & Finance
                        </button>
                        <button
                          className="landing_page_btn"
                          // onClick={() => (
                          //   setPredicted_categories("Politics"),
                          //   setActive(1),
                          //   setmore_option(true)
                          // )}
                        >
                          Politics
                        </button>
                      </div>
                    </a>
                    <a href="#At_a_Glance" className="text-decoration-none">
                      <div className=" btn_news">
                        <button
                          className="landing_page_btn me-1"
                          // onClick={() => (
                          //   setPredicted_categories("Sports"),
                          //   setActive(5),
                          //   setmore_option(true)
                          // )}
                        >
                          Sports
                        </button>
                        <button
                          className="landing_page_btn"
                          // onClick={() => (
                          //   setPredicted_categories("Science and Technology"),
                          //   setActive(4),
                          //   setmore_option(true)
                          // )}
                        >
                          Science & Technology
                        </button>
                      </div>
                    </a>
                    <a href="#At_a_Glance" className="text-decoration-none">
                      <div className="btn_news">
                        <button
                          className="landing_page_btn me-1 "
                          // onClick={() => (
                          //   setPredicted_categories("Law and Crime"),
                          //   setActive(8),
                          //   setmore_option(true)
                          // )}
                        >
                          Law & Crime
                        </button>
                        <button
                          className="landing_page_btn me-1"
                          // onClick={() => (
                          //   setPredicted_categories("Gaming"),
                          //   setActive(7),
                          //   setmore_option(true)
                          // )}
                        >
                          Gaming
                        </button>

                        <button
                          className="landing_page_btn"
                          // onClick={() => (
                          //   setPredicted_categories("web3"),
                          //   setActive(6),
                          //   setmore_option(true)
                          // )}
                        >
                          Web3
                        </button>
                      </div>
                    </a>
                  </div>

                  <div className="row mt-5 responsive_btn  ">
                    <div className=" btn_news">
                      <button className="landing_page_btn me-1">
                        Business & Finance
                      </button>
                      <button className="landing_page_btn">Politics</button>
                      <button className="landing_page_btn me-1">Sports</button>
                      <button className="landing_page_btn me-1">Gaming</button>
                      <button
                        className="landing_page_btn "
                        // onClick={() => (
                        //   setPredicted_categories("web3"),
                        //   setActive(6),
                        //   setmore_option(true)
                        // )}
                      >
                        Web3
                      </button>
                      <button className="landing_page_btn">
                        Science & Technology
                      </button>
                      <button className="landing_page_btn">At a Glance</button>
                      <button className="landing_page_btn me-1 ">
                        Law & Crime
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="result " id="newsddd">
          <div className="circle account">
            <div className="result-text account-text">
              <span className="result-number account-number">1,200 </span>
              <span className="result-title account-title">
                Early Access Accounts{" "}
              </span>
            </div>
          </div>
          <div className="circle condense">
            <div className="result-text condense-text">
              <span className="result-number condense-number">10,000+</span>
              <span className="result-title condense-title">
                Articles Analyzed Daily
              </span>
            </div>
          </div>
          <div className="circle article">
            <div className="result-text article-text">
              <span className="result-number article-number">10+</span>
              <span className="result-title article-title">
                Article Categories
              </span>
            </div>
          </div>
        </div>
        <img className="shapeBg " src={ImgContentBg} alt="shapeBg" />
      </div>

      <div className="content " id="At_a_Glance">
        <div className="container">
          <p className="Article_data">Article data from:</p>
        </div>
        <Brand_Slider />
        <div className="news-mark"></div>

        <ArticlesBoard moreCount={6} />

        <div className="content-body">
          <div className="container">
            <div>
              <Carousel_NewsFlash />
            </div>
            <div className="mt-5">
              <Get_Contact_form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
