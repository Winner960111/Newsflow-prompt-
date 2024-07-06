import React, { useEffect, useState } from "react";
import "./User_DashBoard_Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assests/image/logo.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import Offcanvas_nav from "../Offcanvas/Offcanvas";
import { useDispatch } from "react-redux";
import { User_Data, updateAuth } from "../../../redux/Slices/UserAuth";

export default function User_DashBoard_Header() {
  const [open, setOpen] = useState(false);
  const [url, seturl] = useState(window.location.pathname);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [navbar, setNavbar] = useState(false);

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
            dispatch(User_Data({})),
            history("/")
          )}
        >
          <a
            className="Drop_down_menu_items"
            target="_blank"
            rel="noopener noreferrer"
          >
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
  useEffect(() => {
    let interval = setInterval(() => {
      seturl(window.location.pathname);
    }, 100);
    return () => clearInterval(interval);
  }, [100]);

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

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={
          navbar
            ? "navbar activenavbar User_Header_bg fixed-top"
            : "navbar User_Header_bg fixed-top"
        }
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" />{" "}
            <span className="logo_text">NewsFlow</span>
          </Navbar.Brand>
          <div className="responses" onClick={() => showDrawer()}>
            <div className="mean-bar me-2">
              <span
                className="sidebarBtn "
                aria-controls="menu-one-page-menu-1"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </span>
            </div>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" me-auto nav_collaps "></Nav>
            <Nav className="me-auto">
              <Nav.Link className="nav_link">
                <Link to="/User/DashBoard" className="nav_link">
                  User DashBoard{" "}
                  {url == "/User/DashBoard" ? (
                    <div className="main_div_icons">
                      <div className="icon_nav_bootom"></div>{" "}
                    </div>
                  ) : (
                    <></>
                  )}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav_link">
              </Nav.Link>
              <Nav.Link className="nav_link">
                <Link to="/Partners" className="nav_link">
                  Partners
                  {url == "/Partners" ? (
                    <div className="main_div_icons">
                      <div className="icon_nav_bootom"></div>{" "}
                    </div>
                  ) : (
                    <></>
                  )}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav_link">
                <Link to="/User/About_Us" className="nav_link">
                  About Us{" "}
                  {url == "/User/About_Us" ? (
                    <div className="main_div_icons">
                      <div className="icon_nav_bootom"></div>{" "}
                    </div>
                  ) : (
                    <></>
                  )}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav_link">
                <Link to="/User/Contact_Us" className="nav_link">
                  Contact{" "}
                  {url == "/User/Contact_Us" ? (
                    <div className="main_div_icons">
                      <div className="icon_nav_bootom"></div>{" "}
                    </div>
                  ) : (
                    <></>
                  )}{" "}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav_link">
                <Link to="/User/Archive" className="nav_link">
                  Archive
                  {url == "/Archive" ? (
                    <div className="main_div_icons">
                      <div className="icon_nav_bootom"></div>{" "}
                    </div>
                  ) : (
                    <></>
                  )}{" "}
                </Link>
              </Nav.Link>
              {/* <Nav.Link className="nav_link">Support Us </Nav.Link> */}
            </Nav>
            <Nav className="">
              <Dropdown
                menu={{ items }}
                placement="bottomRight"
                arrow
                overlayClassName="change_bg"
              >
                <Nav.Link className="nav_link nav_login">
                  <FaRegUserCircle className="User_login_icon" />
                </Nav.Link>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Offcanvas_nav
        onClose={onClose}
        showDrawer={showDrawer}
        open={open}
        Landing_page="Second_Page"
      />
    </div>
  );
}
