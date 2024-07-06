import React, { useEffect, useState } from "react";
import "../../assests/styles/layout.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assests/image/logo.svg";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Offcanvas_nav from "../components/Offcanvas/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "antd";
import { FaRegUserCircle } from "react-icons/fa";
import { User_Data, updateAuth } from "../../redux/Slices/UserAuth";
import ReactGA from 'react-ga';

function Header(props) {
  const [open, setOpen] = useState(false);
  const [url, seturl] = useState(window.location.pathname);
  const isuser = useSelector((state) => state.UserAuth.isAuth);
  const [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();

  const history = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="link_drop_down">
          <Link to="/User/Settings" className="nav_link">
            <a className="Drop_down_menu_items" rel="noopener noreferrer">
              Settings
            </a>
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="link_drop_down"
          onClick={() => (
            dispatch(updateAuth({ isAuth: false })),
            dispatch(User_Data({}), history("/"))
          )}>
          <a
            className="Drop_down_menu_items"
            target="_blank"
            rel="noopener noreferrer">
            Sign Out
          </a>
        </div>
      ),
    },
  ];
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  useEffect(() => {
    let interval = setInterval(() => {
      seturl(window.location.pathname);
    }, 100);
    return () => clearInterval(interval);
  }, [100]);

  const handleNavLogoClick = () => {
    window.gtag('event', 'newsflow_nav_logo_click', {
      event_category: 'Navbar',
      event_label: 'NewsFlow Nav Logo Clicked',
    });

    window.location.href = '/';
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        // className={url == "/" ? "nav_bg fixed-top" : "nav_second_bg fixed-top" }
        className={
          navbar
            ? "navbar activenavbar fixed-top"
            : url == "/"
              ? "nav_bg "
              : "nav_second_bg "
        }>
        <Container>
          <Navbar.Brand style={{ cursor: "pointer" }} onClick={handleNavLogoClick}>
            <img src={logo} alt="" />{" "}
            <span className="logo_text">NewsFlow</span>
          </Navbar.Brand>
          <div className="responses" onClick={() => showDrawer()}>
            <div className="mean-bar">
              <span
                className="sidebarBtn me-2 "
                aria-controls="menu-one-page-menu-1">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </span>
            </div>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" me-auto nav_collaps "></Nav>
            <Nav className="me-auto">
            {!isuser&&<Nav.Link className="nav_link ">
                <Link to="/" className="nav_link">
                  Home
                  {url == "/" ? (
                    <div className="main_div_icons">
                      <div className="icon_nav_bootom"></div>
                    </div>
                  ) : (
                    <></>
                  )}{" "}
                </Link>
             
              </Nav.Link>}  
              {isuser && 
                
                <Nav.Link className="nav_link">
                  <Link to="/User/DashBoard" className="nav_link">
                    User DashBoard
                    {url == "/User/DashBoard" ? (
                      <div className="main_div_icons">
                        <div className="icon_nav_bootom"></div>
                      </div>
                    ) : (
                      <></>
                    )}{" "}
                  </Link>
                </Nav.Link>}
              <Nav.Link className="nav_link">
                <Link to="/Partners" className="nav_link">
                  Partners
                 
                  
                </Link>
              </Nav.Link>
              <Nav.Link className="nav_link">
                <Link
                  to="/About_Us"
                  onClick={() => {
                    window.gtag("event", "button_click", {
                      event_category: "navbar_button",
                      event_action: "Click",
                      event_label: "About Us",
                    });
                  }}
                  className="nav_link">
                  About Us
                  {url == "/About_Us" ? (
                    <div className="main_div_icons">
                      <div className="icon_nav_bootom"></div>
                    </div>
                  ) : (
                    <></>
                  )}{" "}
                </Link>
              </Nav.Link>

              <Nav.Link className="nav_link">
                <Link
                  to="/Contact_Us"
                  onClick={() => {
                    window.gtag("event", "button_click", {
                      event_category: "navbar_button",
                      event_action: "Click",
                      event_label: "Contact Us",
                    });
                  }}
                  className="nav_link">
                  Contact
                  {url == "/Contact_Us" ? (
                    <div className="main_div_icons">
                      <div className="icon_nav_bootom"></div>
                    </div>
                  ) : (
                    <></>
                  )}{" "}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav_link">
                <Link
                  to="/archive"
                  onClick={() => {
                    window.gtag("event", "button_click", {
                      event_category: "navbar_button",
                      event_action: "Click",
                      event_label: "Archive",
                    });
                  }}
                  className="nav_link">
                  Archive
                  {url == "/archive" ? (
                    <div className="main_div_icons">
                      <div className="icon_nav_bootom"></div>
                    </div>
                  ) : (
                    <></>
                  )}{" "}
                </Link>
              </Nav.Link>
              
            </Nav>
            {isuser === true ? (
              <>
                <Nav className="">
                  <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    arrow
                    overlayClassName="change_bg">
                    <Nav.Link className="nav_link nav_login">
                      <FaRegUserCircle className="User_login_icon text-white" />
                    </Nav.Link>
                  </Dropdown>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="">
                  <Nav.Link className="nav_link nav_login">
                    {" "}
                    <Link to="/login" className="nav_link" onClick={() => {
                      window.gtag('event', 'newsflow_nav_login_click', {
                        event_category: 'Navbar',
                        event_label: 'NewsFlow Nav Login Clicked',
                      });
                    }}>
                      Log In
                    </Link>{" "}
                  </Nav.Link>
                  <Link to="/signup" className="nav_link1" onClick={() => {
                    window.gtag('event', 'newsflow_nav_signup_click', {
                      event_category: 'Navbar',
                      event_label: 'NewsFlow Nav Signup Clicked',
                    });
                  }}>
                    <Nav.Link href="/signup" className=" nav_btn">
                      {" "}
                      Sign up
                    </Nav.Link>
                  </Link>{" "}
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas_nav
        onClose={onClose}
        showDrawer={showDrawer}
        open={open}
        Landing_page="First_Page"
      />
    </>
  );
}

export default Header;
