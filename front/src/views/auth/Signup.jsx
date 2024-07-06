import React, { useEffect, useState } from "react";
import Mark from "./Mark";
import "../../assests/styles/auth.scss";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../layout";
import { Checkbox, Form, Input } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";
import OtpForm from "react-otp-ui";
import { apiUrl } from "../../config";
import OTPInput from "react-otp-input";
import AdSense from "../../adsence/Asence";
import ReCAPTCHA from 'react-google-recaptcha';

function Signup(props) {
  const navigate = useNavigate();
  const [signupStep, setSignupStep] = useState(0);
  const [Email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [Spinner, setSpinner] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const handleOnChange = (data) => {

    setOtp(data.otpValue);
  };
  const onRecaptchaChange = (token) => {

    setRecaptchaToken(token);
  };
  useEffect (()=>{
    async function verifyRecaptcha (){
      
      let res = await axios.post(apiUrl + "/api/v1/verifyRecaptcha", {    
        recaptchaToken
      });   

   setRecaptchaToken(res?.data?.success)
    } 
    
    if(recaptchaToken?.length>0){
       verifyRecaptcha()
    }
   
  } ,[recaptchaToken])
  const onFinish = async (values) => {

    window.gtag('event', 'sign_up_form_submit', {
      event_category: 'Sign Up Form',
      event_label: 'Sign Up Form Submit Success',
    });

    setSpinner(true);
    let res = await axios.post(apiUrl + "/api/v1/sendOTP", {
      UserName: values.UserName,
      email: values.email,
      password: values.password,
   
    });

     if (res.data.success == true) {
      setEmail(values.email);
      toast.success(res.data.msg);
      setSignupStep(1);
      setSpinner(false);
    } else {
      toast.error(res.data.msg);
      setSpinner(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
   window.gtag('event', 'sign_up_form_submit_fail', {
      event_category: 'Sign Up Form',
      event_label: 'Sign Up Form Submit Failed',
    });
  };
  const validatePassword = (rule, value, callback) => {

    window.gtag('event', 'sign_up_form_pass_validate', {
      event_category: 'Sign Up Form',
      event_label: 'Sign Up Form Pass Validator Triggered',
    });
 
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!value || passwordRegex.test(value)) {
      callback();
    } else {
      callback("Password must be at least 8 characters & includes at least one letter, number & special character!");
    }
  };
  const Verify_OTP = async () => {
    try {
      setSpinner(true);

      let res = await axios.post(apiUrl + "/api/v1/VarifyOTP", {
        email: Email,
        code: otp,
      });
      if (res.data.success == true) {
        toast.success(res.data.msg);
        navigate("/login");
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
    <AdSense client={"ca-pub-5336140276709901"} slot={"1524901247"} format={"auto"} responsive={"true"}/>
      <div className="auth auth-signup">
        <div className="signup">
          <div className="signup-info-div">
            <div className="signup-info-div-x-space"></div>
            <div className="signup-info-main-div">
              <div className="signup-info-main-top-space"></div>
              <span className="signup-title auth-title">
                <strong>Sign up</strong>
              </span>
              {/* <div className="signup-item-space-half" /> */}
              {signupStep === 0 ? (
                <>
                  <span className="signup-text auth-text pb-5">
                    Access everything we have to offer!
                  </span>

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
                      name="UserName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Username"
                        className="auth-input signup-input "
                        onChange={(e)=>{
                          window.gtag('event', 'input_username', {
                            event_category: 'Sign Up Form',
                            event_label: `Username Entered: ${e.target.value}`,
                          });
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Email Address"
                        className="auth-input signup-input "
                        onChange={(e)=>{
                          window.gtag('event', 'input_email', {
                            event_category: 'Sign Up Form',
                            event_label: `Email Entered: ${e.target.value}`,
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
                        {
                          validator: validatePassword,
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="Password"
                        className="signup_password auth-input signup-input"
                        onChange={()=>{
                          window.gtag('event', 'input_password', {
                            event_category: 'Sign Up Form',
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
                          message: "Please input your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password
                        placeholder="Confirm Password"
                        className="signup_password auth-input signup-input"
                        type="password"
                        onChange={()=>{
                          window.gtag('event', 'input_confirm_password', {
                            event_category: 'Sign Up Form',
                            event_label: 'Confirm Password Entered',
                          });
                        }}
                      />
                    </Form.Item>
                    <Form.Item name="Subscribe" className="signup-agree mt-2">
                      <Checkbox
                       onChange={(e)=>{
                       
                        window.gtag('event', 'sub_to_newsletter_checkbox', {
                          event_category: 'Sign Up Form',
                          event_label: `Sub to Newsletter Checkbox: ${e.target.checked}`,
                        });
                      
                    }}
                       >
                        <span className="auth-text mt-1">
                          Subscribe to Newsletter
                        </span>
                      </Checkbox>
                    </Form.Item>
                    <Form.Item name="remember" className="signup-agree">
                      <Checkbox
                       onChange={(e)=>{
                       
                        window.gtag('event', 'i_agree_tc_checkbox', {
                          event_category: 'Sign Up Form',
                          event_label: `I Agree to TC Checkbox: ${e.target.checked}`,
                        });
                      
                    }}
                       >
                        <span className="auth-text  ">
                          I agree to the
                          <Link
                            to="/Legal_Docs"
                            style={{ textDecoration: "none" }}
                            onClick={()=>{
                              window.gtag('event', 'tc_btn_click_signup', {
                                event_category: 'Sign Up Form',
                                event_label: 'TC Button Clicked Signup Form',
                              });
                            }}
                          >
                            <span className="auth-text-black ms-2">
                              terms and conditions
                            </span>
                          </Link>
                        </span>
                      </Checkbox>
                    </Form.Item>
                    <ReCAPTCHA
                      sitekey="6LcAQXspAAAAAOcfNFy7QUxODsQQcskKio9m98rd" // Replace with your actual site key
                      onChange={onRecaptchaChange}
                    />
                   {recaptchaToken===true&&  <Form.Item>
                      <Button
                        className="auth-button signup-button"
                        // onClick={() => setSignupStep(1)}
                        onClick={()=>{
                          window.gtag('event', 'signup_btn_clicked_signup_form', {
                            event_category: 'Sign Up Form',
                            event_label: 'Signup Button Clicked Signup Form',
                          });
                        }}
                        htmlType="submit"
                      >
                        {Spinner == true ? (
                          <>
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </>
                        ) : (
                          "Sign Up"
                        )}
                      </Button>
                    </Form.Item>}
                  </Form>

                  <div className="signup-item-space-half" />

                  <div className="signup-item-space-half" />
                  {/* <div className="signup-agree">
                  
                    <Input type="checkbox" className="me-2"></Input>
                    <span className="auth-text mt-1">
                      I agree to the
                      <span className="auth-text-black">
                        terms and conditions
                      </span>
                    </span>
                  </div> */}
                  <div className="signup-item-space-half" />
                  <span className="signup-account-question auth-text">
                    Already have an account?
                    <Link
                      className="auth-text-black"
                      to="/login"
                      style={{ fontSize: "16px", textDecoration: "none" }}
                      onClick={()=>{
                        window.gtag('event', 'already_have_an_acc_signup_form', {
                          event_category: 'Sign Up Form',
                          event_label: 'Already Have an Account Button Clicked Signup Form',
                        });
                      }}
                    >
                      &nbsp; Log in{" "}
                    </Link>
                  </span>
                  <div className="signup-info-main-bottom-space"></div>
                </>
              ) : (
                <>
                  <span className="signup-text auth-text">
                    Verify your email
                  </span>
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    secureInput={false}
                    renderInput={(props) => <input {...props} />}
                    inputStyle="otp_class"
                  />
                  <Button
                    className="auth-button signup-button mt-5"
                    onClick={() => {
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
                      "Confirm"
                    )}
                  </Button>{" "}
                  {/* <Input
                    placeholder="Enter 6 digit Code:"
                    className="auth-input signup-input mt-4"
                    type="password"
                  />
                  <div className="signup-item-space-half" />
                  <Button
                    className="auth-button signup-button"
                    onClick={() => {
                      setSignupStep(0);
                      navigate("/login");
                     
                    }}
                  >
                    Confirm
                  </Button> */}
                </>
              )}
            </div>
            <div className="signup-info-div-x-space"></div>
          </div>
          <div className="signup-mark-div">
            <Mark />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;


