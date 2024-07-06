import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import "./Admin_DashBoard.css";
import box_img from "../../assests/image/Admin_dashboard_box.png";
import LineChart from "./Line_Chart_data";
import Retained from "./Retained";
import Table_User_Data from "./Table_User_Data";
import { Footer } from "../layout";
import warning_icon from '../../assests/image/warning_icon.png'
import Edit_icon from '../../assests/image/Edit_icon.png'
import Communication from '../../assests/image/Communication.png'
import Deleted from '../../assests/image/Deleted.png'
import Disable_icon from '../../assests/image/Disable_icon.png'

import amplitude from 'amplitude-js';


const getEventData = async (eventType) => {
  const response = await amplitude.getInstance().fetchEvents({
    event_type: eventType,
    start: '2023-01-01', // Replace with your desired start date
    end: '2023-12-31',   // Replace with your desired end date
  });

  return response;
};

export default function Admin_DashBoard() {
   const handleButtonClick = () => {
    // Track the button click event
    amplitude.getInstance().logEvent('Button Clicked');
  };
  return (
    <>
      <div className="Admin_Dashboaed_bg mt-5">
        <div className="container">
          <div className="Admin_dashbord_main_box ">
            <div className="Admin_Dashboard_box">
              <img src={box_img} alt="" />
              <h5>DAU</h5>
              <p>500</p>
            </div>
            <div className="Admin_Dashboard_box">
              <img src={box_img} alt="" />
              <h5>WAU</h5>
              <p>2000</p>
            </div>
            <div className="Admin_Dashboard_box">
              <img src={box_img} alt="" />
              <h5>MAU</h5>
              <p>5000</p>
            </div>
            <div className="Admin_Dashboard_box">
              <img src={box_img} alt="" />
              <h5>Subscribers</h5>
              <p>43 632</p>
            </div>
            <div className="Admin_Dashboard_box">
              <img src={box_img} alt="" />
              <h5>Inactive 1W</h5>
              <p>23</p>
            </div>
            <div className="Admin_Dashboard_box">
              <img src={box_img} alt="" />
              <h5>Inactive 1M</h5>
              <p>56</p>
            </div>
          </div>
          <div className="User_Growth mt-5">
            <div className="inner_user_growth">
              <select name="" id="" className="select_admin">
                <option value="">User Growth</option>
                <option value="">Category Usage</option>
                <option value="">User Growth</option>
              </select>

              <select name="" id="" className="select_admin">
                <option value="">All</option>
                <option value="">7 days</option>

                <option value="">15 days</option>
                <option value="">1 Month</option>
              </select>
            </div>

            <LineChart />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="User_Creation_Week table-responsive">
                <table class="table table-bordered  ">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">User Creation Week</th>
                      <th scope="col">0</th>
                      <th scope="col">1</th>
                      <th scope="col">2</th>
                      <th scope="col">3</th>
                      <th scope="col">4</th>
                      <th scope="col">5</th>
                      <th scope="col">6</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1/1/2020</td>
                      <td>100%</td>
                      <td>85%</td>
                      <td>69%</td>
                      <td>51%</td>
                      <td>46%</td>
                      <td>40%</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td scope="row">1/1/2020</td>
                      <td>100%</td>
                      <td>85%</td>
                      <td>69%</td>
                      <td>51%</td>
                      <td>46%</td>
                      <td>40%</td>
                      <td>40%</td>
                    </tr>{" "}
                    <tr>
                      <td scope="row">1/1/2020</td>
                      <td>100%</td>
                      <td>85%</td>
                      <td>69%</td>
                      <td>51%</td>
                      <td>46%</td>
                      <td>40%</td>
                      <td>40%</td>
                    </tr>{" "}
                    <tr>
                      <td scope="row">1/1/2020</td>
                      <td>100%</td>
                      <td>85%</td>
                      <td>69%</td>
                      <td>51%</td>
                      <td>46%</td>
                      <td>40%</td>
                      <td>40%</td>
                    </tr>{" "}
                    <tr>
                      <td scope="row">1/1/2020</td>
                      <td>100%</td>
                      <td>85%</td>
                      <td>69%</td>
                      <td>51%</td>
                      <td>46%</td>
                      <td>40%</td>
                      <td>40%</td>
                    </tr>{" "}
                    <tr>
                      <td scope="row">1/1/2020</td>
                      <td>100%</td>
                      <td>85%</td>
                      <td>69%</td>
                      <td>51%</td>
                      <td>46%</td>
                      <td>40%</td>
                      <td>40%</td>
                    </tr>{" "}
                    <tr>
                      <td scope="row">1/1/2020</td>
                      <td>100%</td>
                      <td>85%</td>
                      <td>69%</td>
                      <td>51%</td>
                      <td>46%</td>
                      <td>40%</td>
                      <td>40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="User_Creation_Week">
                <Retained />
              </div>
            </div>
          </div>
          <div>
            <div className="User_Database">
              <div className="inner_user_growth">
                <p>User Database</p>

                <select name="" id="" className="select_admin">
                  <option value="">Show 11 items</option>
                  <option value="">Show 21 items</option>

                  <option value="">Show 25 items</option>
                </select>
              </div>
              <div className="inner_user_growth">
                <p></p>
              <div className="inner_user_growth_icons">
                <img src={Deleted} alt="" />
                <img src={Edit_icon} alt="" />
                <img src={Communication} alt="" />
                <img src={warning_icon} alt="" />
                <img src={Disable_icon} alt="" />
                {/* <img src={Disable_icon} alt="" /> */}

              </div>

               
              </div>
        <button className="btn btn-secondary" onClick={handleButtonClick}>Click Me</button>


              <Table_User_Data/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
