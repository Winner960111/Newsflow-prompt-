import React, { useState } from "react";
import { Button, Drawer, Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { Nav } from "reactstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { MenuProps } from "antd";
import { useSelector } from "react-redux";
import { User_Data, updateAuth } from "../../../redux/Slices/UserAuth";
import { useDispatch } from "react-redux";
import Partners from './../partners/Partners';

export default function Offcanvas_nav({ onClose, open, Landing_page }) {
  const isuser = useSelector((state) => state.UserAuth.isAuth);
  const history = useNavigate();
  const dispatch = useDispatch();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="link_drop_down">
          <Link
            to="/User/Settings"
            className="nav_link"
            onClick={() => onClose()}>
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
        <div className="link_drop_down">
          <a
            className="Drop_down_menu_items"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (
              dispatch(updateAuth({ isAuth: false })),
              dispatch(User_Data({}), history("/"))
            )}>
            Sign Out
          </a>
        </div>
      ),
    },
  ];
  let url = window.location.pathname;

  return (

    <div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        className="drawe_bg">
        <div
          // id="menu"

          aria-hidden="true">
          <div class="modal-dialog dialog-animated">
            <div class="modal-content h-100">
              <div class="menu modal-body">
                <div class="row w-100">
                  <div class="items p-0 col-12 text-center">

                    {Landing_page !== "First_Page" ? (
                      <>
                        <ul class="navbar-nav items mx-auto text-white">
                          {!isuser && (
                            <li class="nav-item">
                              <a class="nav-link">
                                <Link
                                  className="nav_link"
                                  to="/"
                                  onClick={() => onClose()}>
                                  Home
                                </Link>
                              </a>
                            </li>
                          )}
                          {isuser && (
                            <>
                              <li class="nav-item">
                                <a class="nav-link">
                                  <Link
                                    className="nav_link"
                                    to="/User/DashBoard"
                                    onClick={() => onClose()}>
                                    User DashBoard
                                  </Link>
                                </a>
                              </li>
                            </>
                          )}
                          <li class="nav-item">
                            <a class="nav-link">
                              <Link
                                className="nav_link"
                                to="/Partners"
                                onClick={() => onClose()}>
                               Partners
                              </Link>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link">
                              {" "}
                              <Link
                                className="nav_link"
                                to="/User/About_Us"
                                onClick={() => onClose()}>
                                About Us
                              </Link>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">
                              <Link
                                className="nav_link"
                                to="/User/Contact_Us"
                                onClick={() => onClose()}>
                                Contact Us
                              </Link>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">
                              <Link
                                className="nav_link"
                                to="/User/archive"
                                onClick={() => onClose()}>
                                Archive
                              </Link>
                            </a>
                          </li>

                          {/* <li class="nav-item">
                            <a class="nav-link">
                              <Link className="nav_link" to="/User/DashBoard">
                              Support Us
                              </Link>
                            </a>
                          </li> */}

                          <li class="nav-item">
                            <a class="nav-link">
                              <Dropdown
                                menu={{ items }}
                                placement="bottomRight"
                                arrow
                                overlayClassName="change_bg">
                                <div className="nav_link nav_login">
                                  <FaRegUserCircle className="User_login_icon" />
                                </div>
                              </Dropdown>
                            </a>
                          </li>
                        </ul>
                      </>
                    ) : (
                      <>
                        <ul class="navbar-nav items mx-auto text-white">
                          <li class="nav-item">
                            <a class="nav-link">
                              <Link
                                className="nav_link"
                                to="/"
                                onClick={() => onClose()}>
                                Home
                              </Link>{" "}
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link">
                              <Link
                                className="nav_link"
                                to="/partners"
                                onClick={() => onClose()}>
                              Partners
                              </Link>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link">
                              {" "}
                              <Link
                                className="nav_link"
                                to="/About_Us"
                                onClick={() => onClose()}>
                                About Us
                              </Link>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link">
                              <Link
                                className="nav_link"
                                to="/Contact_Us"
                                onClick={() => onClose()}>
                                Contact Us
                              </Link>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link">
                              <Link
                                className="nav_link"
                                to="/archive"
                                onClick={() => onClose()}>
                                Archive
                              </Link>
                            </a>
                          </li>
                          {isuser && (
                            <>
                              <li class="nav-item">
                                <a class="nav-link">
                                  <Link
                                    className="nav_link"
                                    to="/User/DashBoard"
                                    onClick={() => onClose()}>
                                    User DashBoard
                                  </Link>
                                </a>
                              </li>
                            </>
                          )}

                          {isuser == true ? (
                            <>
                              <li class="nav-item">
                                <a class="nav-link">
                                  <Dropdown
                                    menu={{ items }}
                                    placement="bottomRight"
                                    arrow
                                    overlayClassName="change_bg">
                                    <div className="nav_link nav_login">
                                      <FaRegUserCircle className="User_login_icon" />
                                    </div>
                                  </Dropdown>
                                </a>
                              </li>
                            </>
                          ) : (
                            <>
                              <li class="nav-item">
                                <Link
                                  to="/login"
                                  className="nav_link"
                                  onClick={() => onClose()}>
                                  <a class="nav-link">
                                    <div className="nav_link nav_login">
                                      Log In
                                    </div>
                                  </a>
                                </Link>
                              </li>
                              <li class="nav-item">
                                <Link
                                  to="/signup"
                                  className="nav_link"
                                  onClick={() => onClose()}>
                                  <a class="nav-link">
                                    <div className="nav_link nav_btn">
                                      Sign up{" "}
                                    </div>
                                  </a>
                                </Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
