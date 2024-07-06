import React from "react";
import { Button, Input } from "reactstrap";
import "../../assests/styles/layout.scss";
import logoMarkTopImg from "../../assests/image/footer-logo-mark-top.png";
import logoMarkDownImg from "../../assests/image/footer-logo-mark-down.png";
import { ReactComponent as Logo } from "../../assests/image/Group2.svg";
import ImgContentBg from "../../assests/image/footershapebg.png";
import CookieBanner from "../components/CookieBanner";
import {Link,  useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import FB_logo from "../../assests/image/FB_logo.png";
import cib_tiktok from "../../assests/image/cib_tiktok.png";
import twitter from "../../assests/image/akar-icons_twitter-fill.png";
import Instagram from "../../assests/image/icons8_Instagram 1.png";
import discord from "../../assests/image/icons8-discord-50.png";
import {
  FaTiktok,
  FaTwitter,
  FaFacebookF,
  FaInstagramSquare,
} from "react-icons/fa";
function Footer(props) {
  const navigate=useNavigate()
  let url = window.location.pathname;
  return (
    <div className="footer ">
      {url == "/signup" || url == "/login" || url == "/resetpwd" ? (
        <></>
      ) : (
        <>
          {" "}
          <img className="shapeBg" src={ImgContentBg} alt="shapeBg" />
        </>
      )}

      <div className="main">
        <div className="footer-link ">
          <span className="footer-link-title">Links</span>
          <div className="footer-link-body">
            <ul>
              <Link
                to="/signup"
                className="link_dec"
                onClick={() =>{ 
                   window.gtag('event', 'newsflow_footer_create_an_acc_click', {
                    event_category: 'Footer',
                    event_label: 'NewsFlow Footer Create an Acc Clicked',
                  });
                  window.scrollTo(0, 0)}}
              >
                <li className="footer-text-link ">Create An Account</li>
              </Link>
              <HashLink smooth to="/#At_a_Glance" className="link_dec" onClick={() =>{ 
                  window.gtag('event', 'newsflow_footer_glance_click', {
                    event_category: 'Footer',
                    event_label: 'NewsFlow Footer Glanced Clicked',
                  });
                  }}>
                <li className="footer-text-link ">At a Glance</li>
              </HashLink>
              <Link
                to="/About_Us"
                className="link_dec"
                onClick={() =>{ 
                  window.gtag('event', 'newsflow_footer_about_us_click', {
                    event_category: 'Footer',
                    event_label: 'NewsFlow Footer About Us Clicked',
                  });
                  window.scrollTo(0, 0)}}
              >
                <li className="footer-text-link ">About Us</li>
              </Link>
              <Link
                to="/Contact_Us"
                className="link_dec"
                onClick={() => {
                  window.gtag('event', 'newsflow_footer_contact_us_click', {
                    event_category: 'Footer',
                    event_label: 'NewsFlow Footer Contact Us Clicked',
                  });
                  window.scrollTo(0, 0)}}
              >
                <li className="footer-text-link ">Contact Us</li>
              </Link>
              {/* <li className="footer-text-link "> <FaTwitter /> Twitter</li>
              <li className="footer-text-link "> <FaFacebookF/>  FaceBook</li>
              <li className="footer-text-link "><FaInstagramSquare /> Instagram</li>
              <li className="footer-text-link "> <FaTiktok /> TikTok</li> */}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="footer-subs">
            <span className="footer-subs-title">
              Stay up to date with our Newsletter!
            </span>
            <div className="footer-subs-bar">
              <input className="subs-input" placeholder="Your email" />

              <Button className="subs-button" onClick={() => {
                window.gtag('event', 'newsflow_footer_IamIn_btn_click', {
                  event_category: 'Footer',
                  event_label: 'NewsFlow Footer I am in btn Clicked',
                });
              }}>I'm in</Button>
            </div>
          </div>
          <div className="footer-logo">
            <div className="logo-mark">
              <Logo />
              <p className="logo-content">NewsFlow</p>
            </div>
          </div>
        </div>
      </div>
      <div className="social_icons_Main_Box">
        <div className="Soical_Icons_Innerbox">
          {/* <div className="socila_icons_box me-4">
            <img src={FB_logo} alt="" />
          </div>
          <div className="socila_icons_box">
            <img src={cib_tiktok} alt="" />
          </div> */}
          <a href="https://twitter.com/NewsFlow_" target="_blank" 
          onClick={(event) => {
              event.preventDefault();
            
              window.gtag('event', 'newsflow_footer_twitter_click', {
                event_category: 'Footer',
                event_label: 'NewsFlow Footer Twitter Clicked',
              });
              window.open('https://twitter.com/NewsFlow_', '_blank');

            }}
          
          >

          <div className="socila_icons_box">
            <img src={twitter} alt="" />
          </div>
          </a>
          <a href="https://discord.gg/x8ruwU9CaG" target="_blank" 
          onClick={(event) => {
              event.preventDefault();
            
              window.gtag('event', 'newsflow_footer_discord_click', {
                event_category: 'Footer',
                event_label: 'NewsFlow Footer Discord Clicked',
              });
              window.open('https://discord.gg/x8ruwU9CaG', '_blank');

            }}
          
          >

          <div className="socila_icons_box">
            <img src={discord} alt="" style={{width:"50px", height:"50px"}}/>
          </div>
          </a>
          <a href="https://www.instagram.com/_newsflow_/" target="_blank"
           onClick={(event) => {
            event.preventDefault();
            window.gtag('event', 'newsflow_footer_Instagram_click', {
              event_category: 'Footer',
              event_label: 'NewsFlow Footer Instagram Clicked',
            });
            window.open('https://www.instagram.com/_newsflow_/', '_blank');

          }
      
      }
          >

          <div className="socila_icons_box">
            <img src={Instagram} alt="" />
          </div>
          </a>
        </div>
      </div>
      <div className="footer-text">
        <div className="footer-text-body">
          <Link style={{textDecoration:"none"}}
          onClick={() =>{ 
            window.gtag('event', 'newsflow_footer_all_rights_reserved_click', {
              event_category: 'Footer',
              event_label: 'NewsFlow Footer All rights reserved Clicked',
            });
          }}
          >
            <span className="text-footer">
              All rights reserved
            </span>
          </Link>
        </div>
        <div className="footer-text-body">
          <Link to="/Legal_Docs"style={{textDecoration:"none"}}   onClick={() => {
             window.gtag('event', 'newsflow_footer_doc_click', {
              event_category: 'Footer',
              event_label: 'NewsFlow Footer Doc Clicked',
            });
            window.scrollTo(0, 0)}} >
            <span className="text-footer">
              Legal Doc
            </span>
          </Link>
        </div>
        <div className="footer-text-body">
          <Link to="/Legal_Docs"style={{textDecoration:"none"}}  onClick={() => {
             window.gtag('event', 'newsflow_footer_terms_click', {
              event_category: 'Footer',
              event_label: 'NewsFlow Footer Terms Clicked',
            });
            window.scrollTo(0, 0)}}>
            <span className="text-footer">Terms</span>
          </Link>
        </div>
        <div className="footer-text-body">
          <Link to="/Legal_Docs" style={{textDecoration:"none"}}   onClick={() => {
             window.gtag('event', 'newsflow_footer_privacy_policy_click', {
              event_category: 'Footer',
              event_label: 'NewsFlow Footer Privacy Policy Clicked',
            });
            window.scrollTo(0, 0)}}>
            <span className="text-footer">
              Privacy policy
            </span>
          </Link>
        </div>
      </div>
      <CookieBanner />
    </div>
  );
}



export default Footer;
