import { useState } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [cookieState, setCookieState] = useState("");

  let Cooking_Accept=localStorage.getItem("Cookies_Accect")
  const Add_Cooking=(a)=>{

    localStorage.setItem("Cookies_Accect",1)
    setCookieState(Cooking_Accept)

  }

  return (
    <div className="Cookies_main_div">
      <div
        className="Banner row"
        style={{ display: (Cooking_Accept == 1 ? "none" : "" )}}
      >
        <div className="container">
          <div className="inner_div_cookies">
            <span className="classBannerText ">
              We use our own and third-party cookies to personalize content and
              to analyze web traffic.
              <Link style={{ color: "white" }} onClick={() => {
                    window.gtag('event', 'cookie_read_more_click', {
                      event_category: 'CookieBanner',
                      event_label: 'Cookie Read More Clicked',
                    });
                  }}>Read more about cookies</Link>
            </span>
            <div className="Cookie ">
              <button
                className="cookieAccept"
                onClick={() => {
                  window.gtag('event', 'cookie_accept_all_click', {
                    event_category: 'CookieBanner',
                    event_label: 'Cookie Accept All Clicked',
                  });
                  Add_Cooking();
                }}
              >
                Accept All
              </button>
              <button
                className="cookieReject mx-2"
                onClick={() => {
                  window.gtag('event', 'cookie_reject_click', {
                    event_category: 'CookieBanner',
                    event_label: 'Cookie Reject Clicked',
                  });
                  Add_Cooking();
                }}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
