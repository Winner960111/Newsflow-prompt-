import React, { useState } from "react";
import Mark from "./Mark";
import "../../assests/styles/auth.scss";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../layout";
import { Form, Input } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";
import { User_Data, setPreviousRoute, updateAuth } from "../../redux/Slices/UserAuth";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../../config";
function Login(props) {
 const {isAuth,previousRoute}= useSelector((state)=>state.UserAuth)
  
 const navigate = useNavigate();
  const [Spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    window.gtag('event', 'login_form_submit', {
      event_category: 'Login Form',
      event_label: 'Login Form Submit Success',
    });
    try {
      setSpinner(true);
      let res = await axios.post(apiUrl + "/api/v1/User_Sign_in", {
        email: values.UserName,
        password: values.password,
      });

      if (res.data.success == true) {
        dispatch(User_Data(res.data.data));
        toast.success(res.data.msg);
        dispatch(updateAuth({ isAuth: true }));
     
if(previousRoute!==null){
   setSpinner(false);
 
   navigate(`${previousRoute}`)
   dispatch(setPreviousRoute( null  ))

  }else{
  navigate("/User/DashBoard");
  setSpinner(false);
}
  
      } else {
        toast.error(res.data.msg);
        setSpinner(false);
      }
    } catch (error) {

      setSpinner(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    window.gtag('event', 'login_form_submit_fail', {
      event_category: 'Login Form',
      event_label: 'Login Form Submit Failed',
    });
  };
  return (
    <>
      <div className="auth">
        <div className="login">
          <div className="login-mark-div">
            <Mark />
          </div>
          <div className="login-info-div">
            <div className="login-info-div-x-space"></div>
            <div className="login-info-main-div">
              <div className="login-info-main-top-space"></div>
              <span className="login-title auth-title">
                {" "}
                <strong>Log In</strong>{" "}
              </span>
              <div className="login-item-space-half" />
              <span className="login-text auth-text">Welcome Back!</span>
              {/* <div className="login-item-space" /> */}
              <strong></strong>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Form.Item
                  name="UserName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}>
                  <Input
                    placeholder="UserName Or Email"
                    className="auth-input login-input"
                    onChange={(e)=>{
                      window.gtag('event', 'input_username_or_email_login', {
                        event_category: 'Login Form',
                        event_label: `Username/Email Entered: ${e.target.value}`,
                      });
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}>
                  <Input.Password
                    placeholder="Password"
                    className="signup_password auth-input login-input mt-1"
                    // className="signup_password auth-input signup-input"
                    type="password"
                    onChange={()=>{
                      window.gtag('event', 'input_password_login_form', {
                        event_category: 'Login Form',
                        event_label: 'Password Entered Login Form',
                      });
                    }}
                  />
                </Form.Item>
                <div className="login-item-space-half" />
                <div className="login-agree">
                  {" "}
                  <span className="auth-text" style={{ fontSize: "15px" }}>
                    *By Logging in you agree to the
                    <Link to="/Legal_Docs" style={{ textDecoration: "none" }}
                    onClick={()=>{
                      window.gtag('event', 'tc_btn_click_login', {
                        event_category: 'Login Form',
                        event_label: 'TC Button Clicked Login Form',
                      });
                    }}
                    >
                      <span
                        className="auth-text-black"
                        style={{ fontSize: "15px" }}>
                        &nbsp;Terms and Conditions
                      </span>
                    </Link>
                  </span>
                </div>
                <div className="login-item-space-half" />
                <Form.Item>
                  <Button
                    className="auth-button login-button"
                    htmlType="submit"
                    // onClick={() => navigate("/")}
                    onClick={()=>{
                      window.gtag('event', 'login_btn_clicked_login_form', {
                        event_category: 'Login Form',
                        event_label: 'Login Button Clicked Login Form',
                      });
                    }}
                  >
                    {Spinner == true ? (
                      <>
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </Form.Item>
              </Form>

              <div className="login-item-space-half" />
              <div className="login-account-question auth-text">
                Need an account?
                <Link
                  className="auth-text-black ms-2"
                  to="/signup"
                  style={{ fontSize: "16px", textDecoration: "none" }}
                  onClick={()=>{
                    window.gtag('event', 'need_an_acc_btn_login_form', {
                      event_category: 'Login Form',
                      event_label: 'Need an Account Button Clicked Login Form',
                    });
                  }}
                  >
                  Sign Up{" "}
                </Link>
              </div>
              <div className="login-item-space-half" />
              <Link
                className="login-account-question auth-text-black"
                to="/resetpwd"
                style={{ fontSize: "18px", textDecoration: "none" }}
                onClick={()=>{
                  window.gtag('event', 'forgot_pass_clicked_login_form', {
                    event_category: 'Login Form',
                    event_label: 'Forgot Pass Button Clicked Login Form',
                  });
                }}
                >
                Forgot Password?{" "}
              </Link>
              <div className="login-info-main-bottom-space"></div>
            </div>
            <div className="login-info-div-x-space"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
