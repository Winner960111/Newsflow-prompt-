import React, { useState } from "react";
import Mark from "./Mark";
import "./Auth_style.css";
import "../../assests/styles/auth.scss";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../layout";
import axios from "axios";
import { Form, Input } from "antd";
import OtpForm from "react-otp-ui";
import OtpInput from "react-otp-input";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { apiUrl, loacalURL } from "../../config";

function Forgotpwd(props) {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [Spinner, setSpinner] = useState(false);
  const [otp, setOtp] = useState("");
  const isuser = useSelector((state) => state.UserAuth.UserInfo);
  const [Email, setEmail] = useState("");

  const onFinish = async (values) => {
    window.gtag('event', 'forgot_pass_form_submit', {
      event_category: 'Forgot Pass Form',
      event_label: 'Forgot Pass Form Submit Success',
    });
    try {
      setSpinner(true);

      if (page === 3) {
        let res = await axios.post(
          `${loacalURL}/api/v1/forgotPassword/${Email}`,
          {
            newPassword: values.password,
          }
        );
        if (res.data.success == true) {
          toast.success(res.data.msg);
          navigate("/login");

          setSpinner(false);
        } else {
          toast.error(res.data.msg);
          setSpinner(false);
        }
      } else {
        let res = await axios.post(`${apiUrl}/api/v1/sendOTPForgot`, {
          email: values.email,
        });
        if (res.data.success == true) {
          toast.success(res.data.msg);
          setPage(2);
          setEmail(values.email);
          setSpinner(false);
        } else {
          toast.error(res.data.msg);
          setSpinner(false);
        }
      }
    } catch (error) {
      setSpinner(false);
    }
  };
  const validatePassword = (rule, value, callback) => {

    window.gtag('event', 'forgot_pass_form_pass_validate', {
      event_category: 'Forgot Pass Form',
      event_label: 'Forgot Pass Form Pass Validator Triggered',
    });
 
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!value || passwordRegex.test(value)) {
      callback();
    } else {
      callback("Password must be at least 8 characters & includes at least one letter, number & special character!");
    }
  };
  const onFinishFailed = (errorInfo) => {
    window.gtag('event', 'forgot_pass_form_submit_fail', {
      event_category: 'Forgot Pass Form',
      event_label: 'Forgot Pass Form Submit Failed',
    });
  };
  const ForgotEmilSend = async () => {
    try {
    } catch (error) {}
  };

  const handleOnChange = (data) => {
    setOtp(data.otpValue);
  };

  const Verify_OTP = async () => {
    window.gtag('event', 'verify_otp_forgot_pass_form', {
      event_category: 'Forgot Pass Form',
      event_label: 'OTP Verify Forgot Pass Form',
    });
    try {
      setSpinner(true);

      let res = await axios.post(`${loacalURL}/api/v1/VarifyForgotOTP`, {
        email: Email,
        code: otp,
      });
      if (res.data.success == true) {
        toast.success(res.data.msg);
        setPage(3);

        setSpinner(false);
      } else {
        toast.error(res.data.msg);
        setSpinner(false);
      }
    } catch (error) {
      setSpinner(false);
    }
  };

  return (
    <>
      <div className="auth">
        <div className="forgotpwd">
          <div className="forgotpwd-mark-div">
            <Mark />
          </div>
          <div className="forgotpwd-info-div">
            <div className="forgotpwd-info-div-x-space"></div>
            <div className="forgotpwd-info-main-div">
              <div className="forgotpwd-info-main-top-space"></div>
              <span className="forgotpwd-title auth-title">
                Forgot Password ({page ? page : 3}/3)
              </span>
              <div className="forgotpwd-item-space-half" />
              <span className="forgotpwd-text auth-text">
                {page === 1
                  ? "Let’s see what we can do!"
                  : page === 2
                  ? "We have sent you a confirmation email"
                  : "New password"}
              </span>
              <div className="forgotpwd-item-space" />
              {page === 1 ? (
                <>
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Email"
                        className="auth-input login-input"
                        onChange={(e)=>{
                          window.gtag('event', 'input_username_or_email_forgot_pass', {
                            event_category: 'Forgot Pass Form',
                            event_label: `Username/Email Entered: ${e.target.value}`,
                          });
                        }}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        className="auth-button forgotpwd-button"
                        htmlType="submit"
                        // onClick={() => navigate("/")}
                        onClick={()=>{
                          window.gtag('event', 'next_1_btn_clicked_forgot_pass_form', {
                            event_category: 'Forgot Pass Form',
                            event_label: 'Next 1 Button Clicked Forgot Pass Form',
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
                          "Next"
                        )}
                      </Button>
                    </Form.Item>
                  </Form>
                </>
              ) : // <Input
              //   placeholder="Email or Username"
              //   className="auth-input forgotpwd-input "
              // />
              page === 2 ? (
                <>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    secureInput={false}
                    renderInput={(props) => <input {...props} />}
                    inputStyle="otp_class"
                  />

                  <Button
                    className="auth-button forgotpwd-button mt-5"
                    htmlType="submit"
                    onClick={() => {
                      window.gtag('event', 'next_2_btn_clicked_forgot_pass_form', {
                        event_category: 'Forgot Pass Form',
                        event_label: 'Next 2 Button Clicked Forgot Pass Form',
                      });
                      Verify_OTP();
                    }}
                  >
                    {Spinner == true ? (
                      <>
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </>
                    ) : (
                      "Next"
                    )}
                  </Button>
                </>
              ) : (
                <>
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                        {
                          validator: validatePassword,
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="Password"
                        className="signup_password auth-input signup-input p-2"
                        onChange={()=>{
                          window.gtag('event', 'input_password_forgot_pass', {
                            event_category: 'Forgot Pass Form',
                            event_label: 'Password Entered',
                          });
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="Cpassword"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Confirm Password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "Confirm Password that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password
                        placeholder="Confirm Password"
                        className="signup_password auth-input signup-input p-2"
                        type="password"
                        onChange={()=>{
                          window.gtag('event', 'input_confirm_password_forgot_pass', {
                            event_category: 'Forgot Pass Form',
                            event_label: 'Confirm Password Entered',
                          });
                        }}
                      />
                    </Form.Item>
                    <Form.Item className="d-flex justify-content-center">
                      <Button
                        className="auth-button p-4"
                        // onClick={() => setSignupStep(1)}
                        onClick={()=>{
                          window.gtag('event', 'reset_pass_btn_clicked_forgot_pass_form', {
                            event_category: 'Forgot Pass Form',
                            event_label: 'Reset Pass Button Clicked Forgot Pass Form',
                          });
                        }}
                        htmlType="submit"
                        style={{ width: "12rem", marginLeft: "-2rem" }}
                      >
                        {Spinner == true ? (
                          <>
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </>
                        ) : (
                          "Reset Password"
                        )}
                      </Button>
                    </Form.Item>
                  </Form>
                  {/* <Input
                    placeholder="Enter Password"
                    className="auth-input forgotpwd-input "
                    type="password"
                  />
                  <div className="forgotpwd-item-space" />
                  <Input
                    placeholder="Verify Password"
                    className="auth-input forgotpwd-input"
                    type="password"
                  /> */}
                </>
              )}
              <div className="forgotpwd-item-space-half" />
              {/* <Button
                className="auth-button forgotpwd-button"
                onClick={() => {
                  setPage(page + 1);

                }}
              >
                {page !== 3 ? "Next" : "Submit"}
              </Button> */}
              <div className="forgotpwd-item-space-half" />
              <span
                className="forgotpwd-account-question auth-text"
                style={{ fontSize: "16px" }}
              >
                Need an account?
                <Link
                  className="auth-text-black ms-2 text-bold"
                  to="/signup"
                  onClick={()=>{
                    window.gtag('event', 'need_an_acc_btn_clicked_forgot_pass_form', {
                      event_category: 'Forgot Pass Form',
                      event_label: 'Need an Account Button Clicked Forgot Pass Form',
                    });
                  }}
                  style={{ fontSize: "18px" }}
                >
                  Sign Up{" "}
                </Link>
              </span>
              <div className="forgotpwd-item-space-half" />
              <span
                className="forgotpwd-account-question auth-text"
                style={{ fontSize: "16px" }}
              >
                Already have an account?
                <Link
                  className="auth-text-black ms-2"
                  to="/login"
                  style={{ fontSize: "18px" }}
                  onClick={()=>{
                    window.gtag('event', 'already_have_an_acc_btn_clicked_forgot_pass_form', {
                      event_category: 'Forgot Pass Form',
                      event_label: 'Already Have an Account Button Clicked Forgot Pass Form',
                    });
                  }}
                >
                  Log In{" "}
                </Link>
              </span>
              <div className="forgotpwd-info-main-bottom-space"></div>
            </div>
            <div className="forgotpwd-info-div-x-space"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Forgotpwd;

// User Growth Line Charts in functional components react js
// Line Charts  with select  days and date options in functional components react js
